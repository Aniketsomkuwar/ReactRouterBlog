// Home.jsx
import React from 'react';
import Feed from '../postPages/PostFunc/Feed';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Home = () => {
    const { searchResults, fetchError, isLoading } = useContext(DataContext);
    return (
        <div className="container mx-auto my-5">
            {isLoading && <p className='status animate-pulse  text-center text-2xl font-bold text-blue-500'>Loading Post...</p>}
            {!isLoading && fetchError && <p className='status text-red-500'>{fetchError}</p>}
            {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults} /> : <p className='status'>No Post To Show</p>)}

        </div>
    );
};

export default Home;
