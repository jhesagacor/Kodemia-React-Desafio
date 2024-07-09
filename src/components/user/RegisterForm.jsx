import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();
  const [base64Image, setBase64Image] = useState(null);
  const navigate = useNavigate();
  const colorInput = "text-gray-900 font-medium";
  const styleSpan = "inline-block text-red-500 p-1";
  const styleFocusInput =
    "focus:outline-none focus:border-blue-500 focus:shadow-outline-blue bg-white border border-gray-300 px-4 py-2";
  const styleInput =
    "leading-6 p-[calc(0.5em-1.5px) 0.5em] font-inherit text-base w-full resize-y border-[1.5px] border-gray-300 bg-white text-gray-900 appearance-none border rounded-[0.375rem] transition-all duration-100";
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
  const onSubmit = async (data) => {
    const response = await fetch("http://localhost:3000/users/", {
      method: "POST",
      body: JSON.stringify({
        profile_image: base64Image,
        name: data.name,
        user_name: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    });
    if (response.status === 201) {
      navigate("/");
    } else {
      alert("Se presento un error");
    }
  };

  return (
    <form
      className={clsx(
        "border border-gray-100 w-full",
        "p-8 rounded",
        "flex flex-col"
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="font-bold pb-4 text-[18px]">Create your count</p>
      <p className={colorInput}>Profile image</p>
      <input
        type="file"
        accept="image/*"
        className={clsx(
          "rounded bg-white border-[rgb(64,64,64)] text-[rgb(64,64,64)] p-[0.75rem] flex items-center w-[100%]"
        )}
        {...register("profileImage")}
        onChange={handleImageChange}
      />
      <p className={colorInput}>
        Name <span className={styleSpan}>*</span>
      </p>
      <input
        type="text"
        className={styleInput + " " + styleFocusInput}
        required
        {...register("name")}
      />
      <p className={colorInput}>
        Username <span className={styleSpan}>*</span>
      </p>
      <input
        type="text"
        className={styleInput + " " + styleFocusInput}
        required
        {...register("username")}
      />
      <p className={colorInput}>
        Email <span className={styleSpan}>*</span>
      </p>
      <input
        type="email"
        className={styleInput + " " + styleFocusInput}
        required
        {...register("email")}
      />
      <p className={colorInput}>
        Password <span className={styleSpan}>*</span>
      </p>
      <input
        type="password"
        className={styleInput + " " + styleFocusInput}
        required
        {...register("password")}
      />
      <p className={colorInput}>
        Password Confirmation <span className={styleSpan}>*</span>
      </p>
      <input
        type="password"
        className={styleInput + " " + styleFocusInput}
        required
        {...register("passwordConfirm")}
      />
      <input
        type="submit"
        disabled={isSubmitting}
        className={clsx(
          "w-[87.25px] mt-3",
          "relative inline-block p-1",
          "rounded-[0.375rem] border-0 line-[1.5rem]",
          "font-medium text-center no-underline cursor-pointer",
          "bg-[rgb(59,73,223)] border-transparent shadow-sm text-white",
          "focus:bg-[rgb(47,58,178)] focus:shadow-md focus:z-10"
        )}
        value={isSubmitting ? "Saving..." : "Sign up"}
      />
    </form>
  );
}
