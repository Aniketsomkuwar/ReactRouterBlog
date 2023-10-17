import Layout from "./layout/Layout";
// these 5 will change according to the need
import Home from "./other/Home";
import NewPost from "./postPages/NewPost";
import PostPage from "./postPages/PostPage";
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


function App() {

  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');


  useEffect(() => {
    const fetchPosts = async () => {
      try {


      } catch (error) {

      }
    }

    fetchPosts();
  }, [])



  useEffect(() => {
    const filterResults = posts.filter(post =>
      ((post.body).toLowerCase().includes(search.toLowerCase()) || (post.title).toLowerCase().includes(search.toLowerCase())));

    setSearchResults(filterResults.reverse());

  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const daytime = format(new Date(), 'MMMM dd ,yyyy pp');
    const newPost = { id, title: postTitle, daytime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate(`/post/${id}`);


  }


  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    navigate("/");
  }
  return (
    <Routes>
      <Route path="/" element={<Layout
        search={search}
        setSearch={setSearch}
      />}>
        <Route index element={<Home
          posts={searchResults}
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
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>

  )
}

export default App
