import React from 'react';

const AboutSection = () => {
  return (
    <section
      className="bg-cover bg-center text-white py-16 px-8"
      style={{ backgroundImage: 'url(/src/assets/your-purple-background.jpg)' }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left: About Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-montserrat">
            ABOUT GDGSC
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-montserrat">
            Welcome to <span className="text-orange-500 font-bold">GDGSC</span> (GameDev Guild Students Club)!
            Welcome to the Game Dev Guild Students Club (GDGSC) at Guru Gobind Singh Indraprastha University, East Delhi Campus! We are a vibrant tech society designed for passionate students interested in game development, design, and interactive media. Our mission is to foster collaboration, innovation, and creativity by bringing together like-minded individuals to work on exciting game development projects and Game related Events.

At GDGSC, we offer a platform where students from various backgrounds can collaborate on real-world projects, enhance their skills, and build an impressive portfolio. Whether you're a programmer, designer, or artist, this is the perfect space to grow and explore your potential.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src="src\assets\mainphoto.jpeg" 
            alt="GDGSC Team"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-12 flex flex-col md:flex-row justify-center gap-12 text-center">
      <div>
          <h3 className="text-4xl font-bold text-orange-500">20+</h3>
          <p className="text-gray-300">TEAM MEMBERS</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-orange-500">1+</h3>
          <p className="text-gray-300">YEARS OF EXISTENCE</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-orange-500">100+</h3>
          <p className="text-gray-300">COMMUNITY MEMBERS</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
