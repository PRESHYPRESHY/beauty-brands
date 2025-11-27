import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState (false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-16 py-4">

      
        <div>
          <Link to="/" className="text-2xl font-bold tracking-wide">
            beauty<span className="text-red-600">brands</span>
          </Link>
        </div>

    
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-red-600 transition">Home</Link>
          <Link to="/shop" className="hover:text-red-600 transition">Shop</Link>
          <Link to="/about" className="hover:text-red-600 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-red-600 transition">
            Contact
          </Link>
        </div>

        
        <div
          className="md:hidden flex flex-col space-y-1 cursor-pointer"
          onClick={() => setIsOpen (!isOpen)}
        >
          <span className="block w-7 h-[3px] bg-black" />
          <span className="block w-7 h-[3px] bg-black" />
          <span className="block w-7 h-[3px] bg-black" />
        </div>
      </div>

  
      {isOpen &&
        <div className="md:hidden bg-white shadow-lg flex flex-col space-y-4 py-4 px-6 text-gray-700 font-medium">
          <Link
            to="/"
            onClick={() => setIsOpen (false)}
            className="hover:text-red-600"
          >
            Home
          </Link>
          <Link
            to="/shop"
            onClick={() => setIsOpen (false)}
            className="hover:text-red-600"
          >
            Shop
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen (false)}
            className="hover:text-red-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen (false)}
            className="hover:text-red-600"
          >
            Contact
          </Link>
        </div>}
    </nav>
  );
};

export default NavBar;
