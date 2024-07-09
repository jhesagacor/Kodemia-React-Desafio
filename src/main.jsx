import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RegisterUser from "./pages/RegisterUser";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import DetailPost from "./pages/DetailPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register-user",
    element: <RegisterUser />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/new",
    element: <CreatePost />,
  },
  {
    path: "/post/:id",
    element: <DetailPost />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
