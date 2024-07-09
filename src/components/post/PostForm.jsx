import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();
  const [token, setToken] = useState("");
  const [base64Image, setBase64Image] = useState(null);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setBase64Image(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
    if (token) {
      setisLoggedIn(true);
    }
  }, []);
  const onSubmit = async (data) => {
    const response = await fetch("http://localhost:3000/posts/", {
      method: "POST",
      headers: {
        authToken: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Title: data.title,
        TeamName: "Prueba",
        Contenido: data.contenido,
        Image: base64Image,
        Tags: data.tags.split(","),
        DatePost: Date.now(),
        TimeRead: 3,
      }),
    });

    if (response.status === 201) {
      navigate("/");
    }
  };

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className={clsx(
          "flex flex-row max-w-[1280px] w-full",
          "p-4 items-center relative h-[56px]"
        )}
      >
        <img
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          alt=""
          className="w-[50px] h-[40px] mr-4"
        />
        <span className="mr-2 font-medium text-[rgb(23,23,23)]">
          Create Post
        </span>
        <div className="absolute right-2 top-2 ml-0">
          <button
            className={clsx(
              "p-2 bg-transparent color-[rgb(38,38,38)]",
              "relative inline-block rounded-md cursor-pointer",
              "hover:bg-[rgba(59,73,223,0.1)] hover:text-[rgb(47,58,178)]"
            )}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="crayons-icon c-btn__icon"
            >
              <path d="m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-row">
          <div className="rounded-md bg-white text-[rgb(23,23,23)] shadow-[0_0_0_1px_rgba(23,23,23,0.05)] h-[500px] grid grid-cols-[800px_auto]">
            <div className="flex flex-col px-16 py-8">
              <div>
                <label
                  className={clsx(
                    "cursor-pointer bg-transparent border-[#d6d6d7] text-[#3d3d3d] border-2",
                    "px-3 py-1 rounded-md font-semibold"
                  )}
                >
                  Add a cover image
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    {...register("image")}
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              <div className="mb-2 relative mt-3">
                <textarea
                  placeholder="New post title here..."
                  className={clsx(
                    "min-h-[62px] max-h-[62px] text-[3rem] w-[100%] h-[100%]",
                    "font-bold text-[rgb(23,23,23)] overflow-y-hidden resize-none placeholder:text-[rgba(82,82,82,1)]",
                    "placeholder:font-bold",
                    "focus:border-none focus:border-0 focus:border-transparent focus:outline-none"
                  )}
                  {...register("title")}
                ></textarea>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Add up to 4 tags..."
                  className="focus:border-none focus:border-0 focus:border-transparent focus:outline-none"
                  {...register("tags")}
                />
              </div>
              <div className="mt-4">
                <textarea
                  placeholder="Write your post content here..."
                  className={clsx(
                    "min-h-[27px] text-[1.125rem] w-[100%] h-[300px]",
                    "font-bold text-[rgb(23,23,23)] overflow-y-hidden resize-none placeholder:text-[rgba(82,82,82,1)]",
                    "placeholder:font-semibold font-mono",
                    "focus:border-none focus:border-0 focus:border-transparent focus:outline-none"
                  )}
                  {...register("contenido")}
                ></textarea>
              </div>
            </div>
            <div></div>
            <button></button>
          </div>
          <div className="grid grid-cols-[300px_auto]"></div>
        </div>
        <div className="mt-7">
          <input
            type="submit"
            disabled={isSubmitting}
            value={isSubmitting ? "Publishing..." : "Publish"}
            className={clsx(
              "bg-[rgb(59,73,223)] text-white font-medium",
              "mr-2 cursor-pointer px-4 py-2",
              "relative rounded-md",
              "hover:bg-[rgb(47,58,178)]"
            )}
          />
        </div>
      </div>
    </form>
  );
}
