import React from "react";
import Background from "./Background"; // Import the Background component

const FacultyCouncil = () => {
  return (
    <div className="relative text-center text-white">
      <Background /> {/* Include the Background component */}
      <h2 className="fancy-heading text-3xl mb-10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-400 transition-all duration-500">
        OUR FACULTY COUNCIL
      </h2>
      <div className="flex justify-center space-x-20">
        {/* Faculty Member 1 */}
        <div className="rounded-lg border-2 border-white p-6 bg-opacity-30 bg-black-800 h-96 w-64 flex flex-col items-center 
                        hover:bg-opacity-50 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300">
          <img 
            src="\src\assets\jyoti_mam.png" 
            alt="Dr. T T Mirnalinee" 
            className="w-40 h-55 rounded-full mx-auto mb-6 hover:scale-105 transition-transform duration-300" 
          />
          <h3 className="text-xl font-bold mb-2 font-serif text-blue-100 tracking-wide hover:text-white">
            Dr. Jyoti
          </h3>
          <p className="text-lg font-bold hover:text-blue-200">Faculty Coordinator 1</p>
        </div>

        {/* Faculty Member 2 */}
        <div className="rounded-lg border-2 border-white p-6 bg-opacity-30 bg-black-800 h-96 w-64 flex flex-col items-center 
                        hover:bg-opacity-50 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300">
          <img 
            src="\src\assets\renu_mam.png" 
            alt="Dr. N Sujaudeen" 
            className="w-40 h-55 rounded-full mx-auto mb-6 hover:scale-105 transition-transform duration-300" 
          />
          <h3 className="text-xl font-bold mb-2 font-serif text-blue-100 tracking-wide hover:text-white">
            Dr. Renu Dalal
          </h3>
          <p className="text-lg font-bold hover:text-blue-200">Faculty Coordinator 2</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyCouncil;