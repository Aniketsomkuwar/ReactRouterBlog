import Layout from "./layout/Layout";
// these 5 will change according to the need
import Home from "./other/Home";
import NewPost from "./postPages/PostFunc/NewPost";
import PostPage from "./postPages/PostFunc/PostPage";
import About from "./other/About";
import Missing from "./other/Missing";
import EditPost from './postPages/EditPostPages/EditPost'

// import router
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="edit/:id" element={<EditPost />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </DataProvider>

  )
}

export default App;