import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AsideAuthor(author) {
  console.log(author);
  const user = author.author;
  return (
    <aside>
      <section className="border-t-[2rem] border-solid border-[rgb(59,73,223)] rounded-md bg-white pb-3">
        <div className="mt-4 flex">
          <span className="relative bottom-8">
            <img
              src={user?.profile_image}
              alt=""
              height="48"
              width="48"
              className="rounded-full ml-5"
            />
          </span>
          <span className="relative bottom-4 text-left ml-1 text-[1.25rem] text-[rgb(64,64,64)] font-bold">
            {user?.name}
          </span>
        </div>
        <button className="p-3 font-medium bg-[rgb(59,73,223)] text-[#f9f9f9] w-[90%] rounded-md">
          Follow
        </button>
        <ul className="text-left ml-5 mt-3">
          <li className="uppercase font-bold text-[0.75rem] text-[rgb(82,82,82)]">
            Joined
          </li>
          <li>{user?.createdAt}</li>
        </ul>
      </section>
      <section className="rounded-md bg-white pb-3 mt-4 text-[rgb(64,64,64)">
        <header className="px-4 py-3 border-b border-solid border-[rgb(245,245,245)]">
          <h3 className="text-[1.25rem]  font-bold flex text-center">
            Trending on
            <a href="" className="text-[rgb(59,73,223)]">
              DEV Community
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              width="24"
              height="24"
              role="img"
              aria-labelledby="abgq0kwhyaj2v8egn3zhhjvqtxk8x7py"
              class="crayons-icon crayons-icon--default"
            >
              <title id="abgq0kwhyaj2v8egn3zhhjvqtxk8x7py">Hot</title>
              <g class="nc-icon-wrapper">
                <path
                  fill="#F4900C"
                  d="M39 23a16.96 16.96 0 00-1.04-5.868c-.46 5.389-3.333 8.157-6.335 6.868-2.812-1.208-.917-5.917-.777-8.164.236-3.809-.012-8.169-6.931-11.794 2.875 5.5.333 8.917-2.333 9.125-2.958.231-5.667-2.542-4.667-7.042-3.238 2.386-3.332 6.402-2.333 9 1.042 2.708-.042 4.958-2.583 5.208-2.84.28-4.418-3.041-2.963-8.333A16.936 16.936 0 005 23c0 9.389 7.611 17 17 17s17-7.611 17-17z"
                ></path>
                <path
                  fill="#FFCC4D"
                  d="M32.394 27.999c.148 3.084-2.561 4.293-4.019 3.709-2.106-.843-1.541-2.291-2.083-5.291s-2.625-5.083-5.708-6c2.25 6.333-1.247 8.667-3.08 9.084-1.872.426-3.753-.001-3.968-4.007A11.964 11.964 0 0010 34c0 .368.023.73.055 1.09C13.125 38.124 17.342 40 22 40s8.875-1.876 11.945-4.91c.032-.36.055-.722.055-1.09 0-2.187-.584-4.236-1.606-6.001z"
                ></path>
              </g>
            </svg>
          </h3>
        </header>
        <div>
          <a
            href=""
            className="flex p-4  border-b border-solid border-[rgb(245,245,245)]"
          >
            <span className="mr-2 rounded-full relative bg-[rgb(82,82,82)] w-[1.5rem] h-[1.5rem] overflow-hidden">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s---PjFGtdl--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/38578/05ce9c9d-43b7-4823-a423-f875a94edc27.jpg"
                alt=""
                className="rounded-full w-[100%]"
              />
            </span>
            <div className="text-left">
              Mentor Matching Monthly 🤝
              <div className="text-[#717171] text-[0.875rem] pt-1">
                <span className="mr-1">
                  <span className="opacity-50">#</span>mentorship
                </span>
                <span className="mr-1">
                  <span className="opacity-50">#</span>community
                </span>
                <span className="mr-1">
                  <span className="opacity-50">#</span>discuss
                </span>
                <span className="mr-1">
                  <span className="opacity-50">#</span>career
                </span>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a
            href=""
            className="flex p-4  border-b border-solid border-[rgb(245,245,245)]"
          >
            <span className="mr-2 rounded-full relative bg-[rgb(82,82,82)] w-[1.5rem] h-[1.5rem] overflow-hidden">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--7Ds1FVu_--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/345658/a72b6b8b-b954-47fb-8919-ab380905f26b.jpg"
                alt=""
                className="rounded-full w-[100%]"
              />
            </span>
            <div className="text-left">
              What is your favorite open source alternative to proprietary
              software?
              <div className="text-[#717171] text-[0.875rem] pt-1">
                <span className="mr-1">
                  <span className="opacity-50">#</span>opensource
                </span>
                <span className="mr-1">
                  <span className="opacity-50">#</span>discuss
                </span>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="" className="flex p-4">
            <span className="mr-2 rounded-full relative bg-[rgb(82,82,82)] w-[1.5rem] h-[1.5rem] overflow-hidden">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--5tnhxcYl--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/159290/489de690-bbb1-43a1-8174-6b193a32612b.jpeg"
                alt=""
                className="rounded-full w-[100%]"
              />
            </span>
            <div className="text-left">
              Why I Built a Vscode Extension
              <div className="text-[#717171] text-[0.875rem] pt-1">
                <span className="mr-1">
                  <span className="opacity-50">#</span>vscode
                </span>
                <span className="mr-1">
                  <span className="opacity-50">#</span>tools
                </span>
                <span className="mr-1">
                  <span className="opacity-50">#</span>ui
                </span>
                <span className="mr-1">
                  <span className="opacity-50">#</span>design
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>
    </aside>
  );
}
