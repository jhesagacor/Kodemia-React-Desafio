import RegisterForm from "../components/user/RegisterForm";
import NavBar from "../components/NavBar";
import clsx from "clsx";

export default function RegisterUser() {
  return (
    <>
      <main
        className={clsx(
          "flex flex-col  items-center",
          "mt-12 max-w-[580px] ml-auto mr-auto",
          "bg-white rounded"
        )}
      >
        <RegisterForm />
      </main>
    </>
  );
}

