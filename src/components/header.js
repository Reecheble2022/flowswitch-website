import React, { useState } from 'react';
import logo from "../images/flowswitch-logo.png";
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="sticky bg-gradient-to-r from-white to-lime-600 text-white p-4 px-[5%] relative border-b border-b-lime-600 z-10">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 mr-5" />
                </div>
                <nav className="hidden md:flex space-x-6">
                    <a href="#home" className="text-white hover:text-lime-200">Home</a>
                    <a href="#features" className="text-white hover:text-lime-200">Features</a>
                    <a href="#about" className="text-white hover:text-lime-200">About</a>
                    <a href="#contact" className="text-white hover:text-lime-200">Contact</a>
                </nav>
                <div className="flex items-center space-x-4 relative">
                    <button 
                        onClick={() => setDropdownOpen(!dropdownOpen)} 
                        className="text-white hover:text-lime-200 focus:outline-none"
                    >
                        <FaUserCircle size={30} />
                    </button>
                    {dropdownOpen && (
                        <div className="absolute top-full right-0 mt-2 bg-white text-gray-800 rounded-md shadow-lg py-2 w-48">
                            <a href="https://merchant.flowswitchapi.com" className="block px-4 py-2 hover:bg-gray-100">Login as Merchant Admin</a>
                            <a href="https://agents.flowswitchapi.com" className="block px-4 py-2 hover:bg-gray-100">Login as Agent</a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;