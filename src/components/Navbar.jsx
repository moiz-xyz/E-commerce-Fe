import React, { useState } from 'react';
import { FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import logo from "../assests/Icons/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-7 flex items-center justify-start ml-40  ">

        <div className="flex items-center space-x-30 ">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="h-7 w-auto"
          />

          <ul className="hidden md:flex space-x-6 text-gray-700 font-bold text-large">
            {['Home', 'Shop', 'About', 'Blog', 'Contact'].map((item) => (
              <li
                key={item}
                className="cursor-pointer relative group"
              >
                <span>{item}</span>
                <span className="absolute bottom-[-4px] left-0 w-0 group-hover:w-full h-[2px] bg-black transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-6 pr-2 md:pr-6  lg:ml-60">
          <FiUser className="text-2xl cursor-pointer hover:text-gray-800" />
          <FiShoppingCart className="text-2xl cursor-pointer hover:text-gray-800" />

          <div className="md:hidden">
            {menuOpen ? (
              <FiX className="text-3xl cursor-pointer" onClick={toggleMenu} />
            ) : (
              <FiMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 bg-white space-y-3 text-gray-700 font-medium">
          {['Home', 'Shop', 'About', 'Blog', 'Contact'].map((item) => (
            <li
              key={item}
              className="cursor-pointer relative group"
            >
              <span>{item}</span>
              {/* Hover underline */}
              <span className="block w-0 group-hover:w-full h-[2px] bg-blue-500 transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
