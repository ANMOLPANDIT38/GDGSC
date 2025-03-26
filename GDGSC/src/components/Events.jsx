import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Background from './Background'; // Import Background Component

const Events = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Sample data for events
    const events = [
        {
            title: 'MIST',
            date: '14 October 2024',
            description: 'The Cryptic Hunt',
            image: 'src/assets/past_event_1.jpg'
        },
        {
            title: 'IEEE DAY 2024',
            date: 'TBA',
            description: 'Celebrating the Newest Student Society of USAR GGSIPU EDC!',
            image: 'src/assets/past_event_2.jpg'
        },
        {
            title: 'IEEExtreme',
            date: 'TBA',
            description: '24-hour global competition',
            image: 'src/assets/past_event_1.jpg'
        },
        
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center py-10 px-5">
            {/* Background Component */}
            <Background />

            <h2 className="text-center text-4xl font-bold mb-5 text-white relative z-10">OUR EVENTS</h2>
            <p className="text-center text-gray-300 mb-8 relative z-10">
                Some of the events conducted by GDGSC USAR throughout the year
            </p>

            <div className="w-full max-w-5xl relative z-10">
                <Slider {...settings}>
                    {events.map((event, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-gray-900 bg-opacity-60 shadow-lg rounded-lg overflow-hidden">
                                <img src={event.image} alt={event.title} className="w-full h-60 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                                    <p className="text-gray-400 text-sm">{event.date}</p>
                                    <p className="text-gray-300 mt-2">{event.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Events;
