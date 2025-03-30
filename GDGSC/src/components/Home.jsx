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
  const announcements = [
    "🚀 Join our Game Jam competition this weekend!",
    "🎮 New Unity workshop next Wednesday - Register now!",
    "💡 Meet our industry guest speaker this Friday at 5 PM",
    "🏆 Winners of last month's hackathon announced! Check our Discord"
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 sec ka loading time
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-cover bg-center bg-[url('/src/assets/')] text-white">
      {/* Announcement Ticker */}
      <div className="bg-gray-800 text-yellow-400 py-2 px-4 overflow-hidden
               border-y-2 border-yellow-400 font-mono">
        <div className="flex items-center">
        <span className="font-black mr-4 whitespace-nowrap text-black bg-yellow-100 px-2 py-1 border-b-4 border-black italic tracking-tight">
  IMPORTANT ANNOUNCEMENT:
</span>
          <div className="overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              {announcements.join(" ••• ")} •••
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-6">
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
          <button style={{ marginRight: "25px" }} className="relative bg-blue-600 text-white py-3 px-8 rounded-full font-bold shadow-lg hover:bg-blue-700 transition duration-200 hover:scale-105 border-2 border-white/50 hover:border-blue-400 transform hover:-translate-y-1 active:translate-y-0 active:scale-100 group overflow-hidden">
  <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full"></span>
  <span className="relative flex items-center justify-center">
    <span className="mr-2">🎮</span> 
    Join The Community!
    <span className="ml-2 text-yellow-300 group-hover:text-yellow-200 transition">FREE</span>
  </span>
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-blue-400 group-hover:bg-blue-300 transition duration-300 rounded-b-full"></span>
</button>

<button className="relative bg-purple-600 text-white py-3 px-8 rounded-full font-bold shadow-lg hover:bg-purple-700 transition duration-200 hover:scale-105 border-2 border-white/50 hover:border-purple-400 transform hover:-translate-y-1 active:translate-y-0 active:scale-100 group overflow-hidden">
  <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full"></span>
  <span className="relative flex items-center justify-center">
    <span className="mr-2">⚔️</span> 
    Become a Partner with us!
    <span className="ml-2 text-yellow-300 group-hover:text-yellow-200 transition">NEW</span>
  </span>
  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-purple-400 group-hover:bg-purple-300 transition duration-300 rounded-b-full"></span>
</button>
        </div>
      </div>
    </div>
    
  );
};

export default Home;