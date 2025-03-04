import React from "react";

const Home = () => {
  return (
    <div className="bg-cover bg-center bg-[url('/src/assets/')] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome To GDGSC<br />
        (GAMEDEV GUILD STUDENTS CLUB)
        </h1>

        <p className="text-lg md:text-xl mb-8">
            Where Gamers and Creators come Togther to Build, Play, and Grow !
        </p>
        <button className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300">
          JOIN US
        </button>
      </div>
    </div>
  );
};

export default Home;
