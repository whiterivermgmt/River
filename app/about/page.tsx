"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Users, Globe, Shield } from "lucide-react";

const missionValues = [
  {
    title: "Our Mission",
    text: "To empower Bedford businesses with websites, social media, and digital marketing solutions that help them grow and succeed.",
    icon: <Globe className="w-6 h-6 mx-auto mb-2 text-blue-600" />,
  },
  {
    title: "Our Values",
    text: "Local-first, transparent, creative, and results-driven. Every decision is guided by what’s best for our clients.",
    icon: <Shield className="w-6 h-6 mx-auto mb-2 text-blue-600" />,
  },
];

const highlights = [
  { text: "Local business-focused", icon: <Users className="w-5 h-5 mr-2" /> },
  { text: "Same-day response & support", icon: <CheckCircle className="w-5 h-5 mr-2" /> },
  { text: "Custom digital solutions", icon: <Globe className="w-5 h-5 mr-2" /> },
  { text: "Proactive recommendations", icon: <Shield className="w-5 h-5 mr-2" /> },
];

const extraInfo = [
  {
    title: "Community Focused",
    text: "We care about Bedford businesses and work to help them thrive online with tailored strategies.",
    icon: <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />,
  },
  {
    title: "Experience & Expertise",
    text: "Years of digital marketing and web development experience applied to local needs.",
    icon: <Globe className="w-6 h-6 mx-auto mb-2 text-blue-600" />,
  },
  {
    title: "Transparent & Reliable",
    text: "Clear communication, measurable results, and consistent support for every client.",
    icon: <Shield className="w-6 h-6 mx-auto mb-2 text-blue-600" />,
  },
];

const galleryImages = [1, 2, 3, 4].map(i => `/about/${i}.jpg`);

export default function AboutPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  };
  const prevImage = () => {
    if (lightboxIndex !== null)
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="bg-white">
      <Container className="py-12 md:py-16">
        {/* Hero / Intro */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            About White River Media
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Living next to the White River, I noticed many Bedford businesses lacked modern websites and social media support. I founded White River Media to fill this gap and help our community thrive online.
          </p>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/about/me.jpg"
              alt="Founder Jarrett Owens"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Jarrett Owens
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Founder and digital strategist. I created White River Media to provide Bedford businesses with high-quality digital solutions — websites, social media, and marketing strategies that actually get results. Every project is built with care, creativity, and a focus on community impact.
            </p>
          </div>
        </motion.div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12">
          {missionValues.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl shadow text-center"
            >
              {item.icon}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="bg-blue-50 text-blue-900 font-medium p-4 rounded-xl text-center shadow flex items-center justify-center"
            >
              {highlight.icon}
              {highlight.text}
            </div>
          ))}
        </motion.div>

        {/* Extra Info */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {extraInfo.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow text-center"
            >
              {item.icon}
              <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 text-sm md:text-base">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </Container>

      {/* Bottom Gallery Strip */}
      <div className="relative w-full overflow-hidden py-6 bg-gray-50">
        <div className="flex gap-4 w-max animate-scroll">
          {/* Duplicate gallery to create seamless loop */}
          {[...galleryImages, ...galleryImages].map((src, idx) => (
            <div
              key={idx}
              className="relative w-64 h-40 shrink-0 cursor-pointer rounded-lg overflow-hidden shadow-lg"
              onClick={() => openLightbox(idx % galleryImages.length)}
            >
              <Image src={src} alt={`Gallery ${idx}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex]}
              alt="Gallery"
              width={1200}
              height={800}
              className="rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <button
              className="absolute top-1/2 left-2 text-white text-3xl font-bold"
              onClick={prevImage}
            >
              &#8249;
            </button>
            <button
              className="absolute top-1/2 right-2 text-white text-3xl font-bold"
              onClick={nextImage}
            >
              &#8250;
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
