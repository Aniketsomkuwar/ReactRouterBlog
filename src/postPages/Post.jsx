import React from 'react'
import { Link } from 'react-router-dom';

const Post = ({ item }) => {
    return (
        <div className="bg-white border rounded-lg shadow-md p-4">
            <Link to={`/post/${item.id}`}>
                <h2 className="text-xl font-semibold text-gray-800 my-2">{item.title}</h2>
                <p className="text-gray-400 text-sm">Date: {item.daytime}</p>
            </Link>


            <p className="text-gray-600 mb-2"> {(item.body.length) <= 25 ? item.body : `${(item.body).slice(0, 25)}...`}</p>


        </div>
    )
}

export default Post