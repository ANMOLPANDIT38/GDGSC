import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-white py-12 px-8"
      style={{ backgroundImage: 'url(/src/assets/your-purple-background.jpg)' }} // Update with your background
    >
      <div className="container mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img 
            src="src\assets\logo1.jpg" // Replace with your logo
            alt="GDGSC Logo" 
            className="w-20 h-20"
          />
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-montserrat leading-relaxed">
          GDGSC is a student-driven society for game developers and enthusiasts, organizing 
          exciting events, competitions, and learning opportunities every semester.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-6 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
            <FaFacebookF />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-white">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-white">
            <FaInstagram />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-400 mt-8">
          Designed & Developed By GDGSC @2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
