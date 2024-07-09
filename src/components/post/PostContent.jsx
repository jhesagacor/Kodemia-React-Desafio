import clsx from "clsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

export default function PostContent(post_) {
  const post = post_.post;
  /* [post, setPost] = useState({});
  const [token, setToken] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
    if (token) {
      setisLoggedIn(true);
    }

    fetch("http://localhost:3000/posts/65a41d57cd2a63f82c180c49")
      .then((response) => response.json())
      .then((parsed) => {
        setPost(parsed.data);
        console.log(parsed.data);
      });
  }, []);*/
  console.log(post.post);
  return (
    <main className="grid grid-cols-[800px_auto] gap-4 min-h-0 bg-white mb-10 rounded-md">
      <div className="flex flex-col">
        <header>
          <img src={post.Image} className="w-[99%] rounded-t-md" />
          <div className="px-16 mt-8 w-[100%]">
            <div className="grid grid-cols-[40px_auto]">
              <a href="" className="text-[rgb(59,73,223)] flex items-center">
                <img
                  src={
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--7AFIiF_U--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/471780/3ec65aa0-80a6-4035-abc9-56344a5b15c5.png"
                  }
                  alt=""
                  width="40"
                  height="40"
                  className="rounded-[9999px]"
                />
              </a>
              <div className="pl-3 flex-1 flex flex-col items-start">
                <a href="AMatisse" className="font-bold text-[rgb(64,64,64)]">
                  {post.User?.name}
                </a>
                <p className="text-[0.75rem] text-[#717171]">
                  Posted on {post.DatePost}
                </p>
              </div>
            </div>
            <div>
              <span></span>
            </div>
            <h1 className="text-left mt-6 text-[3rem] font-extrabold">
              {post.Title}
            </h1>
            <div className="mt-6 text-left flex flex-wrap">
              {post.Tags?.map((tag) => {
                return (
                  <a
                    href=""
                    className={clsx(
                      "cursor-pointer rounded-md border-solid flex items-center",
                      "hover:bg-[rgba(60,165,234,0.10)] px-2 py-1",
                      "hover:border-[#3ca5ea] hover:border-2"
                    )}
                  >
                    <span className="text-[#3ca5ea]">#</span>
                    {tag}
                  </a>
                );
              })}
            </div>
          </div>
        </header>
        <div className="mt-6 px-16 text-[1.25rem]">
          <p className="text-left">{post.Contenido}</p>
        </div>
        <section></section>
      </div>
    </main>
  );
}
