import React from 'react';

const AboutSection = () => {
  return (
    <section
      className="bg-opacity-90 bg-cover bg-center text-white py-16 px-8"
      style={{ backgroundImage: 'url(/src/assets/your-background-image.jpg)' }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-300 mb-6 font-montserrat">
          ABOUT US
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-montserrat leading-relaxed">
          Welcome to <span className="text-orange-500 font-bold">GDGSC</span> (GameDev Guild Students Club)!
          We are a community of passionate gamers and developers who live and breathe games.
          Our mission is to create, compete, and connect through epic tournaments and amazing projects.
          Whether you are a pro player, a beginner, or a game developer, we have something for you.
          Join us in our quest for the ultimate gaming experience!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
