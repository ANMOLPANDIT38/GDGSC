import React from 'react';
import { FaSearch, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-opacity-90 bg-cover bg-center text-white py-4 px-8 shadow-lg" style={{ backgroundImage: 'url(/src/assets/your-background-image.jpg)' }}>
      <div className="container mx-auto flex justify-between items-center">
        
        
      <div className="relative flex items-center">
  <img 
    src="src\assets\logo.jpg" 
    alt="Logo" 
    className="h-12 mr-3 animate-pulse drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]"
  /> <>br</>
  <h1 
    className="text-3xl font-extrabold text-white tracking-wider relative
               before:content-['★'] before:absolute before:text-pink-500 before:animate-spin-slow before:left-[-20px] 
               after:content-['✦'] after:absolute after:text-yellow-500 after:animate-bounce after:right-[-20px]
               hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
  >
    GDGSC
  </h1>
</div>


        
        <ul className="flex space-x-10">
          {['HOME', 'ABOUT', 'EVENTS', 'GAMES', 'TEAM', 'GALLERY','CONTACT'].map((item, index) => (
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

          <button className="flex items-center relative border-b-2 border-transparent text-lg font-semibold text-gray-300 hover:text-orange-500 transition duration-300 cursor-pointer group overflow-hidden">
  <FaSignInAlt className="mr-2 group-hover:text-orange-500 transition duration-300" />
  LOG-IN
  <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

  {/* Sprinkle Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition duration-700 animate-pulse"></span>
</button>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
