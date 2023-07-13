import React, { useState } from "react";
import { Card, Button, Modal, Input } from "react-daisyui";

function Post({ data, getPosts }) {
    const [post, setPost] = useState(data);
    const [visible, setVisible] = useState(false);

    let onChangeHandler = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    let onSubmitHandler = async (e) => {
        e.preventDefault();
        let posts = await JSON.parse(localStorage.getItem("posts"));
        let edit = await posts.find((edit) => edit.id === post.id);
        edit.title = post.title;
        edit.body = post.body;
        posts = localStorage.setItem("posts", JSON.stringify(posts));
        setVisible(!visible);
        getPosts();
    };

    const deletePost = (id) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            let posts = JSON.parse(localStorage.getItem("posts"));
            posts = posts.filter((post) => post.id !== id);
            localStorage.setItem("posts", JSON.stringify(posts));
            getPosts();
        }
    };

    return (
        <li key={post.id} className="list-outside">
            <Card className="shadow-lg shadow-slate-400">
                <Card.Body>
                    <Card.Title tag="h2">{post.title}</Card.Title>
                    <p>{post.body}</p>
                    <Card.Actions className="justify-end">
                        <Button
                            className="bg-blue-500 border-0"
                            onClick={() => setVisible(!visible)}
                        >
                            Edit
                        </Button>
                        <Modal open={visible} className="bg-slate-100">
                            <Modal.Header className="font-bold flex justify-center items-center text-2xl mt-5">
                                Editing ...
                            </Modal.Header>
                            <Modal.Body>
                                <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
                                    <div className="form-control">
                                        <form onSubmit={onSubmitHandler}>
                                            <label className="label font-bold italic">
                                                Title
                                            </label>
                                            <Input
                                                type="text"
                                                name="title"
                                                onChange={onChangeHandler}
                                                value={post.title}
                                                className="w-72 mb-10"
                                                placeholder="Title"
                                            />

                                            <label className="label font-bold italic">
                                                Body
                                            </label>
                                            <Input
                                                type="text"
                                                name="body"
                                                onChange={onChangeHandler}
                                                value={post.body}
                                                className="w-72"
                                                placeholder="Body"
                                            />
                                            <div className="flex justify-center mt-14">
                                                <Button
                                                    className="w-36"
                                                    size="sm"
                                                >
                                                    Confirm Edit
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Actions>
                                <Button
                                    size="sm"
                                    shape="circle"
                                    className="absolute right-2 top-2"
                                    onClick={() => setVisible(!visible)}
                                >
                                    ✕
                                </Button>
                            </Modal.Actions>
                        </Modal>
                        <Button
                            className="bg-red-500 border-0"
                            onClick={() => deletePost(post.id)}
                        >
                            Delete
                        </Button>
                    </Card.Actions>
                </Card.Body>
            </Card>
        </li>
    );
}
export default Post;
