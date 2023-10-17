import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import DataContext from '../../context/DataContext';

const PostPage = () => {
    const { posts, handleDelete } = useContext(DataContext);
    const { id } = useParams();
    const post = posts.find((post) => post.id.toString() === id);

    if (!post) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-semibold mb-4">Post Not Found</h1>
                <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 postPage">
            <div className="bg-white border rounded-lg shadow-md p-4">
                {post &&
                    <>
                        <h1 className="text-5xl font-semibold text-gray-800 pb-5">{post.title}</h1>
                        <p className="text-gray-600 text-sm py-5">Posted on: {post.daytime}</p>
                        <p className="text-gray-600 mb-2">{post.body}</p>
                        <Link to={`/edit/${post.id}`} >
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mt-4"
                            >
                                Update Post
                            </button>
                        </Link>
                        <button
                            onClick={() => handleDelete(post.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300 mt-4"
                        >
                            Delete Post
                        </button>
                    </>
                }


            </div>
        </div>
    );
};

export default PostPage;
