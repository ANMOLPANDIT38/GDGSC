import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  // Animated Counter Logic
  const [teamMembers, setTeamMembers] = useState(0);
  const [years, setYears] = useState(0);
  const [communityMembers, setCommunityMembers] = useState(0);

  useEffect(() => {
    const animateCount = (setState, target, duration) => {
      let start = 0;
      const increment = target / (duration / 50);
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setState(Math.floor(start));
      }, 50);
    };

    animateCount(setTeamMembers, 20, 1500);
    animateCount(setYears, 1, 1200);
    animateCount(setCommunityMembers, 100, 1800);
  }, []);

  return (
    <section
      className="bg-cover bg-center text-white py-16 px-8"
      style={{ backgroundImage: 'url(/src/assets/your-purple-background.jpg)' }}
    >
      <div className="mt-12 mb-8 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left: About Content */}
        
        <div className="md:w-1/2 text-center md:text-left">
                  <h2 
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "2.25rem", /* text-4xl */
              fontWeight: 800, /* font-extrabold */
              color: "#H50016",
              marginBottom: "1rem", /* mb-6 */
            }}
          >
            ABOUT GDGSC
          </h2>
          <p style={{
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "1.125rem", /* text-lg */
  color: "#D1D5DB", /* text-gray-300 */
  lineHeight: "1.625", /* leading-relaxed */
}}>
  Welcome to <span style={{ color: "#F97316", fontWeight: "700" }}>GDGSC</span> (GameDev Guild Students Club)
             at University School Of Automation And Robotics, East Delhi Campus! We are a vibrant tech society designed for passionate students interested in game development, design, and interactive media. Our mission is to foster collaboration, innovation, and creativity by bringing together like-minded individuals to work on exciting game development projects and Game related Events.

          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src="src/assets/mainphoto.jpeg" 
            alt="GDGSC Team"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Stats Section with Animated Numbers */}
      <div className="mt-12 flex flex-col md:flex-row justify-center gap-12 text-center">
        <div>
          <motion.h3 
            className="text-4xl font-bold text-orange-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
          >
            {teamMembers}+
          </motion.h3>
          <p className="text-gray-300">TEAM MEMBERS</p>
        </div>
        <div>
          <motion.h3 
            className="text-4xl font-bold text-orange-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            {years}+
          </motion.h3>
          <p className="text-gray-300">YEARS OF EXISTENCE</p>
        </div>
        <div>
          <motion.h3 
            className="text-4xl font-bold text-orange-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
          >
            {communityMembers}+
          </motion.h3>
          <p className="text-gray-300">COMMUNITY MEMBERS</p>
        </div>
      </div>

      {/* New Activities Boxes Section */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
  {/* Contest Box with Diagonal Stripe Pattern */}
  <motion.div 
    className="relative rounded-xl p-6 text-center border border-purple-500/20 shadow-lg flex flex-col items-center overflow-hidden"
    whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -10px rgba(167, 139, 250, 0.3)" }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTY3LDEzOSwyNTAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDQwNDAiLz48L3N2Zz4=')] opacity-70"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-purple-800/50 to-purple-900/30 backdrop-blur-sm"></div>
    <img src="/src/assets/contest.png" alt="Contest" className="relative z-10 w-14 h-14 mb-4 object-contain" />
    <h3 className="relative z-10 text-xl font-bold text-orange-300 mb-2">CONTESTS</h3>
    <p className="relative z-10 text-gray-200/90 text-sm">Exciting game development competitions</p>
  </motion.div>

  {/* Hackathon Box with Dot Grid Pattern */}
  <motion.div 
    className="relative rounded-xl p-6 text-center border border-purple-500/20 shadow-lg flex flex-col items-center overflow-hidden"
    whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -10px rgba(167, 139, 250, 0.3)" }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iMSIgZmlsbD0icmdiYSgxNjcsMTM5LDI1MCwwLjEpIi8+PC9zdmc+')]"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-purple-800/50 to-purple-900/30 backdrop-blur-sm"></div>
    <img src="\src\assets\hackathon.png" alt="Hackathon" className="relative z-10 w-14 h-14 mb-4 object-contain" />
    <h3 className="relative z-10 text-xl font-bold text-orange-300 mb-2">GAMEATHONS</h3>
    <p className="relative z-10 text-gray-200/90 text-sm">Intensive game creation marathons</p>
  </motion.div>

  {/* Talks Box with Wave Pattern */}
  <motion.div 
    className="relative rounded-xl p-6 text-center border border-purple-500/20 shadow-lg flex flex-col items-center overflow-hidden"
    whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -10px rgba(167, 139, 250, 0.3)" }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTY3LDEzOSwyNTAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCwyMEMxMCwwLDMwLDQwLDQwLDIwIi8+PC9zdmc+')] opacity-50"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-purple-800/50 to-purple-900/30 backdrop-blur-sm"></div>
    <img src="/src/assets/talk.png" alt="Talks" className="relative z-10 w-14 h-14 mb-4 object-contain" />
    <h3 className="relative z-10 text-xl font-bold text-orange-300 mb-2">EVENTS</h3>
    <p className="relative z-10 text-gray-200/90 text-sm">Insightful sessions from experts</p>
  </motion.div>

  {/* Workshop Box with Crosshatch Pattern */}
  <motion.div 
    className="relative rounded-xl p-6 text-center border border-purple-500/20 shadow-lg flex flex-col items-center overflow-hidden"
    whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -10px rgba(167, 139, 250, 0.3)" }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTY3LDEzOSwyNTAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCwwTDQwLDQwTTQwLDBMMCw0MCIvPjwvc3ZnPg==')] opacity-30"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-purple-800/50 to-purple-900/30 backdrop-blur-sm"></div>
    <img src="/src/assets/workshop.png" alt="Workshop" className="relative z-10 w-14 h-14 mb-4 object-contain" />
    <h3 className="relative z-10 text-xl font-bold text-orange-300 mb-2">WORKSHOPS</h3>
    <p className="relative z-10 text-gray-200/90 text-sm">Hands-on learning experiences</p>
  </motion.div>
</div>
    </section>
  );
};

export default AboutSection;