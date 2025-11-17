"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Clients() {
  const clients = [
    "/clients/gerkin/gerkin.png",
  ];

  return (
    <section className="bg-gray-50 py-12">
      <Container>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Clients
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((src, idx) => (
            <motion.div
              key={idx}
              className="w-32 h-20 relative cursor-pointer"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Image
                src={src}
                alt={`Client ${idx + 1}`}
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
