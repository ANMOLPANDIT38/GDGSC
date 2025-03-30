import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-white py-1 px-8 md:px-16"
      style={{ backgroundImage: 'url(/src/assets/your-purple-background.jpg)' }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section - Logo and College Info (stacked vertically) */}
        <div className="flex flex-col items-center md:items-start">
          <img src="src/assets/logo1.jpg" alt="GDGSC Logo" className="w-16 h-16 mb-4" />
          <div className="text-center md:text-left">
          <h3 className="text-3xl font-mono font-bold text-purple-400 hover:text-pink-400 transition-colors duration-300">
  <span className="text-pink-400">{"<"}</span>
  GDGSC
  <span className="text-pink-400">{"/>"}</span>
</h3>
<p className="text-gray-300 text-sm mt-2 relative pl-4 before:absolute before:left-0 before:top-1 before:h-3 before:w-1 before:bg-pink-400">
  University School Of Automation And Robotics.<br />
  GGSIPU EAST DELHI CAMPUS, Surajmal Vihar, Delhi-110032
</p>
          </div>
        </div>

        {/* Center Section - Social Links */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <div className="text-center md:text-left mb-6">
          <h3 className="text-xl font-normal text-white border-l-4 border-pink-500 pl-3  my-4">
  Follow Us
</h3>
            <div className="flex justify-center space-x-5">
              <a href="https://instagram.com/" className="text-white hover:text-pink-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com/" className="text-white hover:text-blue-400">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/" className="text-white hover:text-gray-400">
                <FaGithub size={24} />
              </a>
              <a href="mailto:developersgdgsc@gmail.com" className="text-white hover:text-red-400 transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </a>
              
            </div>
          </div>
          
          <div className="text-center md:text-left">
          <div className="flex items-center">
  <span className="w-3 h-3 rounded-full bg-pink-500 mr-2"></span>
  <h3 className="text-xl font-bold text-purple-300">Email</h3>
  <span className="w-3 h-3 rounded-full bg-pink-500 ml-2"></span>
</div>
<a 
  href="mailto:developersgdgsc@gmail.com" 
  className="font-mono text-gray-300 hover:text-purple-300 transition-colors"
>
  &lt;developersgdgsc@gmail.com&gt;
</a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-1/3">
        <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-white font-['Poppins'] tracking-tight">
  Get In Touch
</h3>
<form className="space-y-5">
  <input 
    type="text"
    placeholder="Type your full name"
    className="w-full p-4 bg-black text-purple-300 placeholder-purple-500/70 border-2 border-purple-900/50 focus:border-purple-500 focus:text-white outline-none transition-all font-mono tracking-wide"
  />
  <input 
    type="email" 
    placeholder="Email Address"
    className="w-full p-4 bg-black text-purple-300 placeholder-purple-500/70 border-2 border-purple-900/50 focus:border-purple-500 focus:text-white outline-none transition-all font-mono tracking-wide"
  />
  <textarea
    placeholder="Type your message here"
    className="w-full p-4 bg-black text-purple-300 placeholder-purple-500/70 border-2 border-purple-900/50 focus:border-purple-500 focus:text-white outline-none min-h-[80px] transition-all font-mono tracking-wide"
  ></textarea>
  <button
  type="submit"
  className="w-full py-2 px-4 bg-purple-900/70 text-purple-300 border-2 border-purple-800 hover:bg-purple-800/80 hover:text-white hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all text-sm"
>
  [ Send Message ]
</button>
</form>
        </div>
      </div>
      <div className="mt-12 mb-8 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>

      {/* Contributors Section */}
      <div className="flex justify-start items-center mt-6">
        <h4 className="text-lg font-bold mr-1">Contributors:</h4>
        <div className="flex space-x-2">
          <img src="src/assets/user1.png" alt="Contributor 1" className="w-10 h-10 rounded-full" />
          <img src="src/assets/user2.png" alt="Contributor 2" className="w-10 h-10 rounded-full" />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-400 text-xs mt-1 font-mono">
  Developed by GDGSC USAR Web Team <br />
  © GDGSC USAR 2025 | All rights reserved.
</div>
    </footer>
  );
};

export default Footer;