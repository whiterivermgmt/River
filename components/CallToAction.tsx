"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section
      className="relative py-16 bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/footer.png')" }}
    >
      <div className="absolute inset-0 bg-blue-900/70"></div> {/* overlay for contrast */}
      <Container>
        <motion.div
          className="relative text-center text-white z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <Link
            href="/contact"
            className="
              px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold
              text-white text-base sm:text-lg
              bg-[linear-gradient(to_right,#d8703c,#c55f2f,#b85127)]
              hover:bg-[linear-gradient(to_right,#c96438,#b8562d,#a74925)]
              transition-all duration-300 ease-in-out
              shadow-lg hover:shadow-2xl
              transform hover:scale-105
              cursor-pointer
            "
          >
            Get Started
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
