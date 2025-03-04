// import React from 'react';

// const Member = ({ imageUrl, size = 100 }) => {
//   return (
//     <div
//       className="rounded-full bg-cover bg-center border-1 border-gray-600 m-2 hover:border-2 hover:border-gray-300 hover:scale-115 ease-in-out duration-100 "
//       style={{
//         width: `${size}px`,
//         height: `${size}px`,
//         backgroundImage: `url(${member.image})`,
//       }}
//     ></div>
//   );
// };

// export default Member;

import { useState } from "react";
import { motion } from "framer-motion";

const TeamCard = ({ member, size = 100 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* profile image */}
      <div 
        className="rounded-full bg-cover bg-center border-1 border-gray-600 m-2 hover:border-2 hover:border-gray-300 hover:scale-120 ease-in-out duration-100 "
        style={{
           width: `${size}px`,
           height: `${size}px`,
           backgroundImage: `url(${member.image})`,
        }}
        onClick={() => setIsOpen(true)}
      />

      {/* on click */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-2xl z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.8 }} 
            className="relative border-white border-1 bg-gray-900/50 text-white p-6 rounded-lg shadow-lg shadow-white max-w-lg w-full"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ✕
            </button>

            {/* info */}
            <div className="w-32 h-32 rounded-full bg-cover bg-center border-1 border-white mx-auto mb-4" style ={{backgroundImage: `url(${member.image})`}}/>
            <h2 className="text-xl text-white font-bold text-center">{member.name}</h2>
            <p className="text-gray-300 text-center">{member.role}</p>
            <p className="text-gray-200 mt-2 text-center">{member.bio}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default TeamCard;
