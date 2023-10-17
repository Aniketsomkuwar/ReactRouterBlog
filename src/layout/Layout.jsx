// these 3 will be always there in a page
import React from 'react'
import Header from "./LayoutComponents/Header";
import Nav from "./LayoutComponents/Nav";
import Footer from "./LayoutComponents/Footer";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (


        <div className="App">
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout