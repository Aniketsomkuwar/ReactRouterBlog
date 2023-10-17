import Layout from "./layout/Layout";
// these 5 will change according to the need
import Home from "./other/Home";
import NewPost from "./postPages/PostFunc/NewPost";
import PostPage from "./postPages/PostFunc/PostPage";
import About from "./other/About";
import Missing from "./other/Missing";

// import router
import { Routes, Route, useNavigate } from 'react-router-dom';

// import hooks
import { useState, useEffect } from "react";

// import daytime functions
import { format } from 'date-fns';

// import api
import api from './api/posts';

import EditPost from "./postPages/EditPostPages/EditPost";
import useAxiosFetch from "./hooks/useAxiosFetch";

function App() {

  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');

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
    <Routes>
      <Route path="/" element={<Layout
        search={search}
        setSearch={setSearch}

      />}>
        <Route index element={<Home
          posts={searchResults}
          fetchError={fetchError}
          isLoading={isLoading}
        />} />
        <Route path="post">
          <Route index element={<NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />} />
          <Route path=":id" element={<PostPage
            posts={posts}
            handleDelete={handleDelete}
          />} />
        </Route>
        <Route path="edit">
          <Route path=":id" element={<EditPost
            posts={posts}
            handleEdit={handleEdit}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editBody={editBody}
            setEditBody={setEditBody}
          />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>

  )
}

export default App