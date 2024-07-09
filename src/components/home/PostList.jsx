import clsx from "clsx";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

export default function PostList(_posts) {
  const posts = _posts.posts;
  console.log(posts);
  return (
    <main className="scroll-mt-14">
      <header className="mb-2 text-[1.125rem]">
        <nav className="flex justify-between items-center ml-0 mr-0">
          <ul className="py-1 flex">
            <li
              className={clsx(
                "text-[#090909] inline-flex px-3 py-2",
                "font-bold  rounded-md cursor-pointer",
                "hover:bg-white hover:text-[rgb(47,58,178)]"
              )}
            >
              Revelant
            </li>
            <li
              className={clsx(
                "text-[#090909] inline-flex px-3 py-2",
                " rounded-md cursor-pointer",
                "hover:bg-white hover:text-[rgb(47,58,178)]"
              )}
            >
              Latest
            </li>
            <li
              className={clsx(
                "text-[#090909] inline-flex px-3 py-2",
                " rounded-md cursor-pointer",
                "hover:bg-white hover:text-[rgb(47,58,178)]"
              )}
            >
              Top
            </li>
          </ul>
        </nav>
      </header>
      <div>
        {posts.map((post, index) => {
          return (
            <article className="bg-white rounded-md mb-3">
              {index === 0 && (
                <div className="h-full w-full pt-0 pb-0">
                  <a href="">
                    <img src={post?.Image} alt="" className="rounded-t-md" />
                  </a>
                </div>
              )}

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-[0.875rem]">
                    <div className="relative mr-2 flex">
                      <a
                        href=""
                        className="rounded-full w-[2rem] h-[2rem] bg-[rgb(82,82,82)] relative overflow-hidden inline-block"
                      >
                        <img
                          src={post?.User?.profile_image}
                          alt=""
                          className="rounded-full"
                        />
                      </a>
                      <div className="flex justify-start flex-col items-start">
                        <p className="font-medium relative ml-1">
                          {post?.User?.name}
                        </p>
                        <p className="text-xs ml-1">{post?.DatePost}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col items-start">
                  <h3 className="mb-1 text-[rgb(23,23,23)] text-[1.875rem] font-bold hover:text-[rgb(47,58,178)] cursor-pointer">
                    <Link to={`/post/${post?._id}`}>{post?.Title}</Link>
                  </h3>
                  <div className="flex flex-wrap mb-2 ml-1 text-sm gap-1 text-[rgb(64,64,64)]">
                    {post?.Tags.map((tag) => {
                      return (
                        <a
                          href=""
                          className={clsx(
                            "rounded-md items-center px-[7px] py-1",
                            "hover:border-gray-300 hover:border-solid hover:border-2 hover:bg-[rgba(23,23,23,0.05)]"
                          )}
                        >
                          <span className="text-[rgba(23,23,23,0.6)]">#</span>
                          {tag}
                        </a>
                      );
                    })}
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div></div>
                    <div className="flex ml-96">
                      <small className="text-right mr-2 text-[rgb(82,82,82)]">
                        6 min read
                      </small>
                      <button className="text-[rgb(38,38,38)] hover:bg-[rgba(59,73,223,0.1)] hover:text-[rgb(47,58,178)]">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          width="24"
                          height="24"
                          xmlns="http://www.w3.org/2000/svg"
                          class="crayons-icon c-btn__icon"
                        >
                          <path d="M6.75 4.5h10.5a.75.75 0 0 1 .75.75v14.357a.375.375 0 0 1-.575.318L12 16.523l-5.426 3.401A.375.375 0 0 1 6 19.607V5.25a.75.75 0 0 1 .75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
