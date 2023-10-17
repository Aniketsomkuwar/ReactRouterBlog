// Home.jsx
import React from 'react';
import Feed from '../postPages/PostFunc/Feed';

const Home = ({ posts, fetchError, isLoading }) => {
    return (
        <div className="container mx-auto my-5">
            {isLoading && <p className='status animate-pulse  text-center text-2xl font-bold text-blue-500'>Loading Post...</p>}
            {!isLoading && fetchError && <p className='status text-red-500'>{fetchError}</p>}
            {!isLoading && !fetchError && (posts.length ? <Feed posts={posts} /> : <p className='status'>No Post To Show</p>)}

        </div>
    );
};

export default Home;
