"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const clientData = [
  {
    name: "Gerkin Construction",
    url: "https://gerkinconstruction.com",
    logo: "/clients/gerkin/gerkin.png",
    screenshot: "/clients/gerkin/gerkinpage.gif",
    description:
      "We designed a full 12-page responsive website for Gerkin Construction, integrating a working Visualizer API, Quick Estimate form, and contact forms that send requests directly to their team. Gerkin is a fantastic client — clear with their vision, very responsive, and a pleasure to collaborate with.",
  },
  {
    name: "Escos Green",
    url: "https://escos.vercel.app",
    logo: "/clients/escos/catlogo.png",
    screenshot: "/clients/escos/escoshomepage.png",
    description:
       "We built a modern, responsive website for Escos with a strong focus on clarity, speed, and conversion. The site highlights their services clearly, improves lead flow through streamlined contact forms, and presents a professional, trustworthy brand presence across all devices.",
  },
  {
  name: "Jarrett Owens Shop",
  url: "https://jarrettowensshop.shopify.com",
  logo: "/clients/adventure/adven.png",
  screenshot: "/clients/adventure/website.png",
  description:
    "We built a high-converting Shopify storefront for Jarrett Owens Shop designed to turn visitors into buyers. The site is optimized for speed, mobile usability, and clear product positioning, with a strong emphasis on persuasive layouts, simplified navigation, and frictionless checkout. Every element is structured to highlight product value, reduce drop-off, and drive consistent digital sales for a creator-led brand."
}

];

const Clients = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const openLightbox = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextClient = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % clientData.length);
  };

  const prevClient = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + clientData.length) % clientData.length);
  };

  const selectedClient = clientData[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="px-8 py-16 max-w-7xl mx-auto">
      {/* Title slides in */}
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Clients
      </motion.h1>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {clientData.map((client, index) => (
          <motion.div
            key={index}
            className="cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => openLightbox(index)}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="w-full h-24 object-contain mx-auto"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence initial={false} custom={direction}>
        {lightboxOpen && selectedClient && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-md"
            onClick={closeLightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-xl max-w-5xl w-full md:flex overflow-hidden p-6 h-[70vh]"
              onClick={(e) => e.stopPropagation()}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Left Arrow */}
              {clientData.length > 1 && (
                <button
                  onClick={prevClient}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-gray-200 rounded-full hover:bg-gray-300 z-10"
                >
                  <FaArrowLeft size={20} />
                </button>
              )}

              {/* Right Arrow */}
              {clientData.length > 1 && (
                <button
                  onClick={nextClient}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-gray-200 rounded-full hover:bg-gray-300 z-10"
                >
                  <FaArrowRight size={20} />
                </button>
              )}

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="cursor-pointer absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl font-bold z-10"
              >
                ×
              </button>

              {/* Left: Screenshot */}
              <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-50">
                <a
                  href={selectedClient.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full h-full  items-center justify-center"
                >
                  <img
                    src={selectedClient.screenshot}
                    alt={selectedClient.name}
                    className="rounded-xl shadow-lg object-contain max-h-[65vh] w-full"
                  />
                </a>
              </div>

              {/* Right: Info */}
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {selectedClient.name}
                </h2>
                <p className="text-blue-600 mb-4">
                  <a
                    href={selectedClient.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {selectedClient.url}
                  </a>
                </p>
                <p className="text-gray-700 text-lg">{selectedClient.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Clients;
