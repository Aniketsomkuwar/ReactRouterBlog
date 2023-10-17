// Home.jsx
import React from 'react';
import Feed from '../postPages/Feed';

const Home = ({ posts }) => {
    return (
        <div className="container mx-auto my-5">
            {posts.length ? <Feed posts={posts} /> : <p>No posts to display</p>}
        </div>
    );
};

export default Home;
