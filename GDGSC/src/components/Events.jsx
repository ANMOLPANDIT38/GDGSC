import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Events = () => {
  // State for modal
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Sample data for events
  const featuredEvent = {
    title: 'GameCon 2025',
    date: 'March 15, 2025',
    description: 'Join the ultimate gaming convention of the year!',
    image: 'https://i.imgur.com/UYiroysl.jpg',
  };

  const upcomingEvents = [
    {
      title: 'Valorant Championship',
      date: 'April 5, 2025',
      description: 'Compete in the Valorant Championship and win exciting prizes!',
      image: 'https://i.imgur.com/DvmN8Hx.jpg',
    },
    {
      title: 'PUBG Showdown',
      date: 'April 20, 2025',
      description: 'Battle it out in the PUBG Showdown!',
      image: 'https://i.imgur.com/rVuumdY.jpg',
    },
  ];

  const pastEvents = [
    {
      title: 'Fall Guyz Tournament',
      date: 'February 16, 2025',
      description: '⏳ REGISTRATIONS CLOSE TONIGHT! Don’t let FOMO hit—this is your shot at Fall Guys glory! 🏆🔥',
      image: 'src/assets/past_event_1.jpg',
    },
    {
      title: 'GDGSC Game-A-Thon',
      date: 'January 25, 2025',
      description: 'If you haven\'t filled out the form yet, hurry up! The deadline is today, 17th Nov 📢🗣',
      image: 'src/assets/past_event_2.jpg',
    },
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };

  // Open modal
  const openModal = (event) => {
    setSelectedEvent(event);
  };

  // Close modal
  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <section className="bg-opacity-90 bg-cover bg-center text-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl font-bold text-center mb-12 text-pink-300 drop-shadow-lg">EVENTS</h2>

        {/* Featured Event */}
        <div
          className="bg-white shadow-2xl p-6 mb-10 rounded-[50px] relative overflow-hidden cursor-pointer"
          onClick={() => openModal(featuredEvent)}
        >
          <h4 className="text-2xl font-semibold mb-2 text-gray-800">Cloud Event</h4>
          <p className="text-gray-600 mb-4">Date: April 5, 2025</p>
          <p className="text-gray-500 mb-6">Join the ultimate gaming battle!</p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-8 text-pink-200">🚀 Upcoming Events</h3>
          <Slider {...sliderSettings}>
            {upcomingEvents.map((event, index) => (
              <div key={index} className="px-4 cursor-pointer" onClick={() => openModal(event)}>
                <div className="bg-opacity-80 bg-black rounded-[50px] shadow-2xl p-6">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-t-[50px] mb-4"
                  />
                  <h4 className="text-2xl font-semibold mb-2">{event.title}</h4>
                  <p className="text-gray-300 mb-1">{event.date}</p>
                  <p className="text-gray-400 mb-4">{event.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-pink-200">📅 Past Events</h3>
          <Slider {...sliderSettings}>
            {pastEvents.map((event, index) => (
              <div key={index} className="px-4 cursor-pointer" onClick={() => openModal(event)}>
                <div className="bg-opacity-80 bg-black rounded-[50px] shadow-2xl p-6">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-72 object-cover rounded-t-[50px] mb-4"
                  />
                  <h4 className="text-2xl font-semibold mb-2">{event.title}</h4>
                  <p className="text-gray-300 mb-1">{event.date}</p>
                  <p className="text-gray-400 mb-4">{event.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Modal for Event Details */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={closeModal}
              >
                ✖
              </button>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{selectedEvent.title}</h2>
              <p className="text-gray-600 mb-2">{selectedEvent.date}</p>
              <p className="text-gray-500 mb-4">{selectedEvent.description}</p>
              <button
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded transition"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
