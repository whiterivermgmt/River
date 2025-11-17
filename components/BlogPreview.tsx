"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPreview() {
  const latestBlog = {
    title: "5 Ways to Boost Your Local Business Online",
    excerpt:
      "Discover actionable tips for Bedford businesses to improve their online presence and attract more customers.",
    img: "/blog/latest-blog.jpg",
    link: "/blog/5-ways-to-boost-your-local-business-online",
  };

  return (
    <section className="bg-white py-12">
      <Container>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Latest Blog
        </motion.h2>

        <Link href={latestBlog.link} className="block max-w-4xl mx-auto bg-gray-50 rounded-xl shadow hover:shadow-lg overflow-hidden transition">
          <div className="relative w-full h-64">
            <Image src={latestBlog.img} alt={latestBlog.title} fill className="object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{latestBlog.title}</h3>
            <p className="text-gray-700">{latestBlog.excerpt}</p>
          </div>
        </Link>
      </Container>
    </section>
  );
}
