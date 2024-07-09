import Menu from "../components/home/Menu";
import PostList from "../components/home/PostList";
import AsideDiscussions from "../components/home/AsideDiscussions";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";

export default function Home() {
  const [token, setToken] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
    if (window.localStorage.getItem("token")) {
      setisLoggedIn(true);
    }
    fetch("http://localhost:3000/posts/")
      .then((response) => response.json())
      .then((parsed) => {
        setPosts(parsed.data);
      });
  }, []);
  return (
    <div className="flex flex-col">
      <NavBar isLoggedIn={isLoggedIn} />
      <section className="mt-[75px] gap-4 grid grid-cols-[240px_651px_325px] text-center px-36">
        <Menu />
        <PostList posts={posts} />
        <AsideDiscussions />
      </section>
    </div>
  );
}
