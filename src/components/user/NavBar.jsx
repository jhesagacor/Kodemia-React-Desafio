import clsx from "clsx";

export default function NavBar() {
  return (
    <header className=" bg-white fixed top-0 left-0 right-0 flex justify-center shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
      <nav
        className={clsx(
          "flex flex-row max-w-[1280px] w-full",
          "p-4 items-center relative h-[56px]"
        )}
      >
        <img
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          alt=""
          className="w-[50px] h-[40px]"
        />
        <div className="m-4 relative max-w-[420px] w-[420px]">
          <input
            type="text"
            placeholder="Search..."
            className={clsx(
              "text-[1rem] w-[100%] p-2",
              "bg-[rgb(255,255,255)]",
              "border-2 border-solid border-[rgb(212,212,212)] text-[rgb(23,23,23)] rounded-lg"
            )}
          />
          <button
            className={clsx(
              "w-[40px] absolute ps-0 pe-0 mt-0 left-auto p-2",
              "rounded-[0.375rem] cursor-pointer right-[1px] text-center",
              "hover:bg-[rgba(59,73,223,0.1)] hover:text-[rgb(47,58,178)]"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="crayons-icon c-btn__icon"
              focusable="false"
            >
              <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
            </svg>
          </button>
        </div>
        <div className="ml-auto items-center flex h-[100%]">
          <button
            className={clsx(
              "mr-2 ml-auto bg-transparent text-rgb( 64, 64, 64 )",
              "px-4 py-2 rounded-md cursor-pointer",
              "hover:bg-[rgba(59,73,223,0.1)] hover:text-[rgb(47,58,178)] hover:underline"
            )}
          >
            Log in
          </button>
          <button
            className={clsx(
              "mr-2 bg-transparent text-[rgb(59,73,223)]",
              "border-solid border-[rgb(59,73,223)] font-medium border-2",
              "text-center rounded-md px-4 py-2",
              "hover:text-white hover:underline hover:bg-[rgb(59,73,223)]"
            )}
          >
            Create account
          </button>
        </div>
      </nav>
    </header>
  );
}
