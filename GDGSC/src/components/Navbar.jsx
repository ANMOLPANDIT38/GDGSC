import React from 'react';
import { FaSearch, FaSignInAlt, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-opacity-90 bg-cover bg-center text-white py-4 px-8 shadow-lg" style={{ backgroundImage: 'url(/src/assets/your-background-image.jpg)' }}>
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="relative flex items-center">
          <img 
            src="src\assets\logo1.jpg" 
            alt="Logo" 
            className="h-12 mr-3 animate-pulse drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]"
          /> 
          <h1 className="text-4xl font-extrabold text-gray-100 tracking-tight relative
               bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-1 rounded-lg
               before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
               before:border before:border-gray-600 before:rounded-lg before:opacity-50
               after:content-[''] after:absolute after:inset-0 after:rounded-lg 
               after:shadow-[inset_0_0_15px_rgba(255,255,255,0.1)]
               hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
               transition-all duration-300 group">
  
  {/* Decorative elements */}
  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 
                   text-xl group-hover:text-blue-300 transition-colors">◆</span>
  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 
                   text-xl group-hover:text-blue-300 transition-colors">◆</span>
  
  {/* Main text with gradient */}
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
    GDGSC
  </span>
  
  {/* Animated underline */}
  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                   bg-blue-400 group-hover:w-3/4 transition-all duration-500"></span>
</h1>
        </div>

        <ul className="flex space-x-10">
          {[ 'ABOUT', 'EVENTS', 'GAMES', 'TEAM', 'GALLERY','CONTACT'].map((item, index) => (
            <li
              key={index}
              className="relative text-lg font-bold text-pink-300 hover:text-cyan-400 transition duration-300 cursor-pointer group 
                         font-mono tracking-widest uppercase drop-shadow-[0_0_5px_rgba(0,255,255,0.7)]"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-6">
          <FaSearch className="text-2xl cursor-pointer hover:text-purple-800 transition duration-300" />

          <div className="flex items-center space-x-4">
            <button className="flex items-center relative border-b-2 border-transparent text-lg font-semibold text-gray-300 hover:text-orange-500 transition duration-300 cursor-pointer group overflow-hidden">
              <FaSignInAlt className="mr-2 group-hover:text-orange-500 transition duration-300" />
              LOG-IN
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition duration-700 animate-pulse"></span>
            </button>

            {/* Profile Icon */}
            <div className="relative group">
              <FaUserCircle className="text-3xl text-gray-300 hover:text-cyan-400 cursor-pointer transition duration-300" />
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;