import React from "react";

function Navbar() {
    return (
        <div className="navbar bg-slate-200">
            <div className="flex-1">
                <a
                    className="btn btn-ghost normal-case text-sm italic"
                    href="#0"
                >
                    Powered by daisyUI
                </a>
            </div>
            <div className="flex-1">
                <a
                    className="btn btn-ghost normal-case text-4xl italic ml-16"
                    href="#0"
                >
                    BLOG
                </a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex="0"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                src="https://placeimg.com/80/80/people"
                                alt=""
                            />
                        </div>
                    </label>
                    <ul
                        tabIndex="0"
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a className="justify-between" href="#0">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">Settings</a>
                        </li>
                        <li>
                            <a href="#0">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
