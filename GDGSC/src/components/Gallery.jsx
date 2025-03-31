import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "./Background";

// Timeline event data with dates and images
const timelineEvents = [
  {
    id: 1,
    title: "GDGSC Orientation",
    date: "March 15, 2024",
    description: "The opening event where we introduced our gallery space and concept to the public.",
    images: [
      "/src/assets/g_photos/one.jpg",
      "/src/assets/g_photos/two.jpg",
      "/src/assets/g_photos/three.jpg",
      "/src/assets/g_photos/four.jpg",
      "/src/assets/g_photos/five.jpg",
      "/src/assets/g_photos/six.jpg"
    ]
  },
  {
    id: 2,
    title: "Gamethon 2024 GDGSC",
    date: "April 22, 2024",
    description: "24-hour gaming marathon featuring competitive and casual gaming sessions.",
    images: [
      "/src/assets/g_photos/one_g.jpg",
      "/src/assets/g_photos/two_g.jpg",
      "/src/assets/g_photos/three_g.jpg"
      
    ]
  },
  {
    id: 3,
    title: "Fall Guyz Tournament GDGSC",
    date: "May 30, 2024",
    description: "Our annual obstacle course competition with teams battling for the championship.",
    images: [
      "/images/tournament1.jpg",
      "/images/tournament2.jpg",
      "/images/tournament3.jpg"
      
    ]
  }
];

const Gallery = () => {
  const [activeEvent, setActiveEvent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredDot, setHoveredDot] = useState(null);
  const hoverTimeoutRef = useRef(null);
  const timelineRef = useRef(null);

  // Auto-advance timeline every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating && hoveredDot === null) { // Only auto-advance if not hovering over a dot
        setDirection(1);
        setActiveEvent((prev) => (prev + 1) % timelineEvents.length);
        setIsAnimating(true);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating, hoveredDot]);

  const handleEventChange = (index) => {
    if (index === activeEvent || isAnimating) return;
    
    setDirection(index > activeEvent ? 1 : -1);
    setActiveEvent(index);
    setIsAnimating(true);
  };

  const handleDotHover = (index) => {
    setHoveredDot(index);
    
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    // Set a timeout to automatically move to the hovered dot after a delay
    hoverTimeoutRef.current = setTimeout(() => {
      if (index !== activeEvent && !isAnimating) {
        setDirection(index > activeEvent ? 1 : -1);
        setActiveEvent(index);
        setIsAnimating(true);
      }
    }, 600); // 800ms delay before auto-advancing
  };

  const handleDotLeave = () => {
    setHoveredDot(null);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  // Calculate the position of the timeline indicator
  const indicatorPosition = `${(activeEvent / (timelineEvents.length - 1)) * 100}%`;

  return (
    <section className="relative text-white py-16 min-h-screen flex flex-col items-center overflow-hidden">
      <Background />
      <div className="mt-12 mb-8 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
      
      <div className="relative z-10 w-full max-w-7xl px-4">
        <div className="text-center mb-12">
        <motion.h2 
  initial={{ opacity: 0, x: -20 }}  // Adjust y to x for horizontal movement
  animate={{ opacity: 1, x: 0 }}     // Similarly, adjust for horizontal
  transition={{ duration: 0.8 }}
  className="text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-transparent font-['Poppins'] tracking-widest leading-none uppercase drop-shadow-lg"
>
  Timeline
</motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-purple-200/90 max-w-2xl mx-auto font-light tracking-wider"
          >
            Relive our journey through these memorable events
          </motion.p>
        </div>

        {/* Timeline Navigation */}
        <div className="relative mb-16">
          <div className="relative h-1 bg-purple-900/50 rounded-full mx-8">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-purple-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: indicatorPosition }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            
            <div className="absolute inset-0 flex justify-between">
              {timelineEvents.map((event, index) => (
                <button
                  key={event.id}
                  onClick={() => handleEventChange(index)}
                  onMouseEnter={() => handleDotHover(index)}
                  onMouseLeave={handleDotLeave}
                  className={`relative -top-3 w-6 h-6 rounded-full transition-all duration-300 ${index === activeEvent ? 'bg-purple-400 scale-125 shadow-lg shadow-purple-500/50' : 'bg-purple-700 hover:bg-purple-600'}`}
                  aria-label={`Go to ${event.title}`}
                >
                  <span className="sr-only">{event.title}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between mt-4 px-2">
            {timelineEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`text-center transition-opacity duration-300 ${index === activeEvent ? 'opacity-100' : 'opacity-50'}`}
              >
                <h3 className="text-sm font-medium text-purple-300">{event.title}</h3>
                <p className="text-xs text-purple-400">{event.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Event Content */}
        <div className="relative h-[70vh] w-full overflow-hidden rounded-2xl">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={timelineEvents[activeEvent].id}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onAnimationComplete={handleAnimationComplete}
              className="absolute inset-0 flex flex-col"
            >
              {/* Event Header */}
              <div className="mb-6 ">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl  font-bold text-white mb-2"
                >
                  {timelineEvents[activeEvent].title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-purple-300 mb-1"
                >
                  {timelineEvents[activeEvent].date}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-purple-200 max-w-2xl"
                >
                  {timelineEvents[activeEvent].description}
                </motion.p>
              </div>

              {/* Photo Grid */}
              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {timelineEvents[activeEvent].images.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.6,
                        delay: 0.5 + (index * 0.1),
                        ease: "backOut"
                      }}
                      className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300"
                    >
                      <img
                        src={img}
                        alt={`${timelineEvents[activeEvent].title} ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white text-sm font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          {timelineEvents[activeEvent].title} - Photo {index + 1}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between mt-8 gap-4">
          <button
            onClick={() => {
              if (!isAnimating) {
                setDirection(-1);
                setActiveEvent((prev) => (prev - 1 + timelineEvents.length) % timelineEvents.length);
                setIsAnimating(true);
              }
            }}
            disabled={isAnimating}
            className="flex items-center gap-2 px-6 py-3 bg-[#0d0a1a] border-2 border-[#4d3fb8] 
                      text-[#e2dcff] font-bold tracking-wider uppercase text-sm
                      hover:bg-[#1a1652] hover:border-[#6a5acd] hover:text-white
                      active:translate-y-0.5 active:shadow-none
                      shadow-[4px_4px_0_0_#4d3fb8] hover:shadow-[6px_6px_0_0_#6a5acd]
                      transition-all duration-150 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                      disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-[4px_4px_0_0_#4d3fb8]
                      relative overflow-hidden group pixel-corners"
          >
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6a5acd_0%,transparent_70%)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="bevel" className="text-[#9d8eff]">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
            <span className="relative text-shadow-pixel">PREV</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#6a5acd] opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>
          </button>
          
          <button
            onClick={() => {
              if (!isAnimating) {
                setDirection(1);
                setActiveEvent((prev) => (prev + 1) % timelineEvents.length);
                setIsAnimating(true);
              }
            }}
            disabled={isAnimating}
            className="flex items-center gap-2 px-6 py-3 bg-[#0d0a1a] border-2 border-[#4d3fb8] 
                      text-[#e2dcff] font-bold tracking-wider uppercase text-sm
                      hover:bg-[#1a1652] hover:border-[#6a5acd] hover:text-white
                      active:translate-y-0.5 active:shadow-none
                      shadow-[4px_4px_0_0_#4d3fb8] hover:shadow-[6px_6px_0_0_#6a5acd]
                      transition-all duration-150 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                      disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-[4px_4px_0_0_#4d3fb8]
                      relative overflow-hidden group pixel-corners"
          >
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6a5acd_0%,transparent_70%)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative text-shadow-pixel">NEXT</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="bevel" className="text-[#9d8eff]">
              <path d="M9 18l6-6-6-6"/>
            </svg>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#6a5acd] opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full bg-purple-500/10"
            initial={{
              opacity: 0,
              scale: 0
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              x: [`${Math.random() * 100 - 50}px`, `${Math.random() * 100 - 50}px`],
              y: [`${Math.random() * 100 - 50}px`, `${Math.random() * 100 - 50}px`]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(40px)'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;