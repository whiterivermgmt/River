"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FounderSection() {
  const founder = {
    name: "Jarrett Owens",
    title: "Founder & Digital Strategist",
    img: "/about/me.jpg",
    bio: `I founded White River Media to help Bedford businesses grow online. Living right by the river,
          I saw firsthand how many local businesses lacked modern websites and social media presence.
          Every project is built with care, creativity, and a focus on community impact.`,
  };

  return (
    <section className="bg-white py-12">
      <Container>
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image src={founder.img} alt={founder.name} fill className="object-cover object-top" />
          </div>
          <div className="md:w-1/2 text-center md:text-left flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{founder.name}</h3>
            <p className="text-gray-700 text-base md:text-lg mb-6">{founder.bio}</p>

            <Link
              href="/about"
              className="
                px-6 py-3 rounded-lg font-bold text-white text-base
                bg-[linear-gradient(to_right,#d8703c,#c55f2f,#b85127)]
                hover:bg-[linear-gradient(to_right,#c96438,#b8562d,#a74925)]
                transition-all duration-300 ease-in-out
                shadow-lg hover:shadow-2xl
                transform hover:scale-105
                inline-block
              "
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
