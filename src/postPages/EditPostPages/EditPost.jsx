import { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import DataContext from '../../context/DataContext';
const EditPost = () => {
    const { posts, handleEdit, setEditBody, setEditTitle, editTitle, editBody } = useContext(DataContext);
    const { id } = useParams();
    const post = posts.find((post) => post.id.toString() === id);
    useEffect(() => {

        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body)
        }

    }, [posts, setEditTitle, setEditBody])

    if (!post) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-semibold mb-4">Post Not Found - 404</h1>
                <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            {editTitle && <div className="bg-white border rounded-lg shadow-md p-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Update Post</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-4">
                        <label htmlFor="editTitle" className="text-gray-600">Title:</label>
                        <input
                            type="text"
                            name="editTitle"
                            id="editTitle"
                            required
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="editBody" className="text-gray-600">Post:</label>
                        <textarea
                            name="editBody"
                            id="editBody"
                            required
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            rows="5"
                        />
                    </div>
                    <button
                        type="submit" onClick={(e) => handleEdit(post.id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Submit
                    </button>
                </form>
            </div>}

        </div>
    );

}

export default EditPost