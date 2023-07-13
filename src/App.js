import React, { useEffect, useState } from "react";
import Post from "./components/Post";
import Nav from "./components/partials/Nav";
import AddPost from "./components/AddPost";

function App() {
    const [posts, setPosts] = useState(
        JSON.parse(localStorage.getItem("posts")) || []
    );
    const [post, setPost] = useState();

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

    let showPosts = !localStorage.getItem("posts") ? (
        <h2>No Posts to Show</h2>
    ) : (
        JSON.parse(localStorage.getItem("posts"))
            .map((post) => (
                <Post key={post.id} data={post} getPosts={getPosts} />
            ))
            .reverse()
    );

    let addPosts = <AddPost getPosts={getPosts} />;

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <div>
                <Nav />
                <div>{addPosts}</div>
                <ol className="grid grid-cols-1 sm:grid-cols-2 m-4 gap-4 list-decimal">
                    {showPosts}
                </ol>
            </div>
        </>
    );
}

export default App;
