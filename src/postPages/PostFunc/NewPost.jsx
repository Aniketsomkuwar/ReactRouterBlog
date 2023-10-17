import React from 'react';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';
const NewPost = () => {
    const { handleSubmit, postTitle, setPostTitle, postBody, setPostBody } = useContext(DataContext);
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white border rounded-lg shadow-md p-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="postTitle" className="text-gray-600">Title:</label>
                        <input
                            type="text"
                            name="postTitle"
                            id="postTitle"
                            required
                            value={postTitle}
                            onChange={(e) => setPostTitle(e.target.value)}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="postBody" className="text-gray-600">Post:</label>
                        <textarea
                            name="postBody"
                            id="postBody"
                            required
                            value={postBody}
                            onChange={(e) => setPostBody(e.target.value)}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            rows="5"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewPost;
