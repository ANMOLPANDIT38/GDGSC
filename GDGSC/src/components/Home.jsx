import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <DotLottieReact
        src="https://lottie.host/4b22eb05-bfde-4770-896d-fadfd64b5fc0/f9ISaOQ2Pz.lottie"
        loop
        autoplay
        className="w-60 h-60"
      />
    </div>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000); // 3 sec ka loading time
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-cover bg-center bg-[url('/src/assets/')] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
        <span className="text-white">
            WELCOME TO GDGSC
          </span>
          <br />
          <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
            (GAMEDEV GUILD STUDENTS CLUB)
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-8">
          Where Gamers and Creators come together to Build, Play, and Grow!
        </p>
        <button style={{ marginRight: "25px" }} className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300">
          Join The Community!
        </button>
        <button className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300">
          Become a Partner!
        </button>
      </div>
    </div>
  );
};

export default Home;
