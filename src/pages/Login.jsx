import LoginForm from "../components/user/LoginForm";
import clsx from "clsx";

export default function Login() {
  return (
    <>
      <main
        className={clsx(
          "flex flex-col  items-center",
          "mt-12 max-w-[580px] ml-auto mr-auto",
          "bg-[rgb(245, 245, 245)] rounded"
        )}
      >
        <LoginForm />
      </main>
    </>
  );
}
