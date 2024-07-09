import AsideActions from "../components/post/AsideActions";
import AsideAuthor from "../components/post/AsideAuthor";
import PostContent from "../components/post/PostContent";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailPost() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [token, setToken] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
    if (window.localStorage.getItem("token")) {
      setisLoggedIn(true);
    }

    fetch("http://localhost:3000/posts/" + id)
      .then((response) => response.json())
      .then((parsed) => {
        setPost(parsed.data);
        console.log(parsed.data);
      });
  }, []);
  return (
    <div className="flex flex-col">
      <NavBar isLoggedIn={isLoggedIn} author={post.User} />
      <section className="mt-[75px] gap-4 grid grid-cols-[64px_794px_360px] text-center px-36">
        <AsideActions />
        <PostContent post={post} />
        <AsideAuthor author={post.User} />
      </section>
      <Footer />
    </div>
  );
}
