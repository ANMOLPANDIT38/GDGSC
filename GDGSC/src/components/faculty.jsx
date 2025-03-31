import React from "react";
import Background from "./Background"; 

const FacultyCouncil = () => {
  return (
    <div className="relative text-center text-white">
      <Background /> {/* Include the Background component */}
      <div className="relative mb-10">
  <h2 className="fancy-heading text-2xl text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-400 transition-all duration-500">
    OUR FACULTY COUNCIL
  </h2>
  

  <button 
  className="absolute right-14 top-1/2 -translate-y-1/2 px-6 py-3 rounded-lg font-bold text-white
            bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
            hover:bg-white/20 hover:shadow-purple-500/30 hover:scale-[1.02]
            transition-all duration-300 font-sans"
>
  View All Teams
</button>
</div>
      <div className="flex justify-center space-x-20">
        {/* Faculty Member 1 */}
        <div className="rounded-lg border-2 border-white p-6 bg-opacity-30 bg-black-800 h-96 w-64 flex flex-col items-center 
                        hover:bg-opacity-50 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300">
          <img 
            src="\src\assets\jyoti_mam.png" 
            alt="jytoi mam" 
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
            alt="renu mam" 
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