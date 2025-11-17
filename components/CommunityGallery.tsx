"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

export default function CommunityGallery() {
  const galleryImages = ["/about/1.jpg", "/about/2.jpg", "/about/3.jpg", "/about/4.jpg"];
  
  // Duplicate images for seamless loop
  const imagesLoop = [...galleryImages, ...galleryImages];

  return (
    <section className="bg-gray-50 py-12 overflow-hidden">
      <Container>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Community
        </motion.h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {imagesLoop.map((src, idx) => (
              <div
                key={idx}
                className="relative w-64 h-40 shrink-0 rounded-xl overflow-hidden cursor-pointer"
              >
                <Image src={src} alt={`Gallery ${idx + 1}`} fill className="object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
