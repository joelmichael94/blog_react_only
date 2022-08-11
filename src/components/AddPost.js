import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Button, Input } from "react-daisyui";

function AddPost({ getPosts }) {
    const [post, setPost] = useState({
        id: uuid(),
        title: "",
        body: "",
        userId: 1,
    });

    let onChangeHandler = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    let onSubmitHandler = (e) => {
        e.preventDefault();
        let posts = JSON.parse(localStorage.getItem("posts"));
        setPost({ ...post, id: uuid() });
        posts.push(post);
        localStorage.setItem("posts", JSON.stringify(posts));
        getPosts();
        setPost({ ...post, id: uuid(), title: "", body: "" });
    };

    return (
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <div className="form-control">
                <form
                    onSubmit={onSubmitHandler}
                    className="flex mt-4 gap-2 items-center"
                >
                    <Input
                        type="text"
                        name="title"
                        onChange={onChangeHandler}
                        value={post.title}
                        className="w-72"
                        placeholder="Title"
                    />
                    <Input
                        type="text"
                        name="body"
                        onChange={onChangeHandler}
                        value={post.body}
                        className="w-72"
                        placeholder="Body"
                    />
                    <Button className="bg-blue-500 border-0">Add Post</Button>
                </form>
            </div>
        </div>
    );
}
export default AddPost;
