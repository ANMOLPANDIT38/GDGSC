import React, { useState } from "react";
import Modal from "react-modal";
import Background from "./Background";

Modal.setAppElement("#root");

const images = [
  "src/assets/g_photos/photo5.jpeg",
  "src/assets/g_photos/photo3.jpeg",
  "https://bsmedia.business-standard.com/_media/bs/img/article/2024-02/29/full/1709193013-943.jpg",
  "src/assets/g_photos/photo7.jpeg",
  "src/assets/g_photos/photo1.jpeg",
  "src/assets/g_photos/photo4.jpeg",
  "src/assets/g_photos/photo6.jpeg",
  "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg",
  "src/assets/g_photos/photo2.jpeg",
];

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (img) => {
    setCurrentImage(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage("");
  };

  return (
    <section className="relative text-white py-12 min-h-screen flex flex-col items-center">
      <Background /> {/* ✅ Tumhara purple blur effect background */}

      <h2 className="text-4xl font-bold text-center mb-8 text-white-300">
        PHOTOS GALLERY
      </h2>

      {/* ✅ Masonry Grid (Just like the image) */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 px-4 w-full max-w-6xl space-y-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openModal(img)}
          />
        ))}
      </div>

      {/* ✅ Modal for Enlarged Image */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="flex items-center justify-center fixed inset-0 z-50 bg-black bg-opacity-70"
      >
        <div className="bg-purple-900 text-white rounded-lg shadow-lg p-4 relative max-w-xl mx-auto">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white hover:text-red-500 transition duration-300 text-2xl"
          >
            &times;
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
