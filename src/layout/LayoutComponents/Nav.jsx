import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between ">
            <form onSubmit={(e) => e.preventDefault()} className="searchForm ">
                <label htmlFor="search" className="text-gray-300 sr-only">Search Posts</label>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search Posts"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-gray-700 text-white border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
            </form>
            <ul className="flex items-center gap-6 ">
                <li className="">
                    <Link to="/" className="text-white hover:text-blue-300">Home</Link>
                </li>
                <li className="">
                    <Link to="post" className="text-white hover:text-blue-300">Post</Link>
                </li>
                <li className="">
                    <Link to="about" className="text-white hover:text-blue-300">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
