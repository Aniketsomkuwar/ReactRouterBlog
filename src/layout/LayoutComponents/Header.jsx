// Header.jsx
import React from 'react';

const Header = ({ title }) => {
    return (
        <header className="bg-blue-500 p-4 text-center">
            {/* Your header content goes here */}
            {title}
        </header>
    );
};

export default Header;
