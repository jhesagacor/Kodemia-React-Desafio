import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();
  const navigate = useNavigate();
  const styleFocusInput =
    "focus:outline-none focus:border-blue-500 focus:shadow-outline-blue bg-white border border-gray-300 px-4 py-2";
  const styleInput =
    "mt-2 leading-6 p-[calc(0.5em-1.5px) 0.5em] font-inherit text-base w-full resize-y border-[1.5px] border-gray-300 bg-white text-gray-900 appearance-none border rounded-[0.375rem] transition-all duration-100";

  const onSubmit = async (data) => {
    const response = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const parsed = await response.json();
    console.log(parsed.data);
    if (response.status === 200) {
      window.localStorage.setItem("token", parsed.data);
      navigate("/");
    } else if (response.status === 401) {
      alert("Email y/o Password incorrectos");
    } else {
      alert("Se presento un error");
    }
  };

  return (
    <>
      <img
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
        alt=""
        className="max-w-[60px] h-[48px] leading-5"
      />
      <h1 className={clsx("text-[1.875rem] font-bold", "mt-4 text-gray-900")}>
        Join the DEV Community
      </h1>
      <p className="mt-1 text-[rgb(64,64,64)] text-[1rem]">
        DEV Community is a community of 1,236,828 amazing developers
      </p>
      <form
        className={clsx("mt-4 w-full flex flex-col")}
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-[rgb(23,23,23)] font-medium text-[16px] me-[0.75rem] mt-4">
          Email
        </p>
        <input
          type="email"
          className={styleInput + " " + styleFocusInput}
          required
          {...register("email")}
        />
        <p className="text-[rgb(23,23,23)] font-medium text-[16px] me-[0.75rem] mt-4">
          Password
        </p>
        <input
          type="password"
          className={styleInput + " " + styleFocusInput}
          required
          {...register("password")}
        />
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Validating..." : "Log in"}
          className={clsx(
            "mt-6",
            "relative inline-block p-3",
            "rounded-[0.375rem] border-0 line-[1.5rem]",
            "font-medium text-center no-underline cursor-pointer",
            "bg-[rgb(59,73,223)] border-transparent shadow-sm text-white",
            "focus:bg-[rgb(47,58,178)] focus:shadow-md focus:z-10"
          )}
        />
      </form>
      <div
        className={clsx(
          "italic font-normal text-[1.0rem] text-[rgb(115,115,115)] mt-4 text-center p-2"
        )}
      >
        By signing in, you are agreeing to our{" "}
        <a className="text-[rgb(59,73,223)] cursor-pointer">privacy policy</a>,
        <a className="text-[rgb(59,73,223)] cursor-pointer">terms of use</a> and
        <a className="text-[rgb(59,73,223)] cursor-pointer"> code of conduct</a>
        .
      </div>
      <hr className="w-[100%] h-1/30 mt-4 bg-gray-300" />
      <div className="mt-4 text-[1.2rem]">
        New to DEV Community?{" "}
        <a className="text-[rgb(59,73,223)] cursor-pointer">Create account</a>.
      </div>
    </>
  );
}
