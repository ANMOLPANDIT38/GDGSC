import React from "react";

const Background = () => {
    return (
      <div className="fixed inset-0 bg-black -z-1">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 blur-[160px] opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-700 blur-[180px] opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-400 blur-[140px] opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/5 w-48 h-48 bg-purple-600 blur-[120px] opacity-35"></div>
      </div>
    );
  };
  
export default Background;
  