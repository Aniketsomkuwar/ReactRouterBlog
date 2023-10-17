import React from 'react';
import Post from './Post';
const Feed = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {posts.map((item) => (
                <Post key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Feed;
