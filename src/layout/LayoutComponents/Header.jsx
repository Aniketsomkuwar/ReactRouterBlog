// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
const Header = ({ title }) => {
    const { width } = useWindowSize();
    console.log(width);
    return (
        <Link to={'/'}>   <header width={width} className="flex justify-between bg-blue-500 text-2xl p-4 text-center">
            {/* Your header content goes here */}
            {title}
            {width < 768 ? <FaMobileAlt /> : width < 992 ? <FaTabletAlt /> : <FaLaptop />}
        </header>  </Link>

    );
};

export default Header;
