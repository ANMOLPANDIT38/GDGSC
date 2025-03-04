import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

Modal.setAppElement('#root');  // Modal ke liye accessibility fix

const Gallery = () => {
  const images = [
    'https://img.redbull.com/images/c_crop,x_502,y_0,h_1080,w_864/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2017/08/22/c54ac74a-74b5-43b5-9352-5041fdc50766/pubg-title.jpg.jpg',
    'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/pubg_new_state.jpg',
    'https://bsmedia.business-standard.com/_media/bs/img/article/2024-02/29/full/1709193013-943.jpg',
    'https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-1dade6e50659c8e05805cb150b349e56',
    'https://dl.dir.freefiremobile.com/common/web_event/hash/54f31449f5f91cf0cc223cc635cd5952jpg',
    'https://deadshot.io/promo/thumbnail.png',
    'https://hyperpc.ae/images/support/articles/pc-for-gta-5/article-gta-5-banner.jpg',
    'https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg',
    'https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-franchise-hub-keyart-01-en-21nov23?$facebook$',
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (img) => {
    setCurrentImage(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage('');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="bg-opacity-90 bg-cover bg-center text-white py-12"
      style={{ backgroundImage: 'url(/src/assets/your-background-image.jpg)' }}
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-pink-300">GALLERY</h2>
      <div className="container mx-auto">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openModal(img)}  // 👈 Click pe modal open
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal for Image Pop-up */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="flex items-center justify-center fixed inset-0 z-50 bg-black bg-opacity-70"
      >
        <div className="bg-gray-900 text-white rounded-lg shadow-lg p-4 relative max-w-xl mx-auto">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white hover:text-red-500 transition duration-300"
          >
            ❌
          </button>
          <img
            src={currentImage}
            alt="Enlarged"
            className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Modal>
    </section>
  );
};

export default Gallery;
