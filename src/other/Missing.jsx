// Missing.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Missing = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Page Not Found</h1>
            <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>
    );
};

export default Missing;
