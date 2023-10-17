// these 3 will be always there in a page
import React from 'react'
import Header from "./LayoutComponents/Header";
import Nav from "./LayoutComponents/Nav";
import Footer from "./LayoutComponents/Footer";
import { Outlet } from 'react-router-dom';

const Layout = ({ search, setSearch }) => {
    return (


        <div className="App">
            <Header title={"React Js Blog".toUpperCase()} />
            <Nav search={search} setSearch={setSearch} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout