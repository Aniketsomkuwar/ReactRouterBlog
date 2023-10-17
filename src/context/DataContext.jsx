import { createContext, useState, useEffect } from "react";
// import router
import { useNavigate } from 'react-router-dom';

// import daytime functions
import { format } from 'date-fns';

// import api
import api from '../api/posts';

// custom hooks
import useAxiosFetch from "../hooks/useAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const Title = 'The React JS Blog - Aniket Somkuwar';
    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');


    useEffect(() => {
        setPosts(data);
    }, [data]);


    useEffect(() => {
        try {
            const filterResults = posts.filter(post =>
                ((post.body).toLowerCase().includes(search.toLowerCase()) || (post.title).toLowerCase().includes(search.toLowerCase())));
            if (!filterResults) throw Error();
            setSearchResults(filterResults.reverse());
        } catch (error) {
            navigate('/');
        }


    }, [posts, search])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const daytime = format(new Date(), 'MMMM dd ,yyyy pp');
        const newPost = { id, title: postTitle, daytime, body: postBody };
        try {
            const response = await api.post('/posts', newPost);
            const allPosts = [...posts, response.data];
            setPosts(allPosts);
            setPostTitle('');
            setPostBody('');
            navigate(`/post/${id}`);
        } catch (err) {

            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`Error: ${err.message}`);
            }
        }
    }

    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`);
            const postsList = posts.filter((post) => post.id !== id);
            setPosts(postsList);
            navigate("/");
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`Error: ${err.message}`);
            }
        }

    }

    const handleEdit = async (id) => {

        const daytime = format(new Date(), 'MMMM dd ,yyyy pp');
        const updatedPost = { id, title: editTitle, daytime, body: editBody };
        try {
            const response = await api.put(`/posts/${id}`, updatedPost);
            setPosts(posts.map(post => post.id === id ? { ...response } : post));
            setEditTitle('');
            setEditBody('');
            navigate(`/`);
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`Error: ${err.message}`);
            }
        }

    }
    return (
        <DataContext.Provider value={{
            search, setSearch, searchResults, Title,
            fetchError,
            isLoading, handleSubmit,
            postTitle,
            setPostTitle,
            postBody,
            setPostBody,
            posts,
            handleDelete,
            handleEdit,
            editTitle,
            setEditTitle,
            editBody,
            setEditBody

        }} >
            {children}
        </DataContext.Provider>
    )


}

export default DataContext;