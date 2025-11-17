"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-12">
      <Container>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.h2>
        <p className="text-gray-600 text-center">Coming soon...</p>
      </Container>
    </section>
  );
}
