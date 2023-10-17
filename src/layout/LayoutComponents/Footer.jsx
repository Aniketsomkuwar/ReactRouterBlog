import React from 'react';

const Footer = () => {
    const today = new Date();
    return (
        <footer className="bg-gray-900 text-white p-4 text-center sticky bottom-0">
            <div className="container mx-auto">
                <div className="py-2">
                    {/* Your footer content goes here */}
                    Copyright &copy; {today.getFullYear()}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
