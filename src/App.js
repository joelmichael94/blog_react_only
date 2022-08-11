import React, { useEffect, useState } from "react";
import Post from "./components/Post";
import Navbar from "./components/partials/Navbar";
import AddPost from "./components/AddPost";

function App() {
    const [posts, setPosts] = useState(
        JSON.parse(localStorage.getItem("posts")) || []
    );

    const getPosts = async () => {
        let url = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await url.json();
        if (localStorage.getItem("posts")) {
            setPosts(JSON.parse(localStorage.getItem("posts")));
        } else {
            setPosts(data);
            localStorage.setItem("posts", JSON.stringify(data));
        }
        return data;
    };

    let showPosts = JSON.parse(localStorage.getItem("posts"))
        .map((post) => <Post key={post.id} data={post} getPosts={getPosts} />)
        .reverse();

    let addPosts = <AddPost getPosts={getPosts} />;

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <div>
                <Navbar />
                <div>{addPosts}</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 m-4 gap-4">
                    {showPosts}
                </div>
            </div>
        </>
    );
}

export default App;
