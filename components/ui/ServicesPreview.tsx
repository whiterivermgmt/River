"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Website Design",
    description:
      "Create modern, responsive websites that captivate visitors and convert them into customers.",
    img: "/services/1/custom.png",
    link: "/websitedesign",
  },
  {
    title: "SEO & Content Marketing",
    description:
      "Boost your search rankings and attract the right audience with targeted content strategies.",
    img: "/services/2/search.png",
    link: "/seo&content",
  },
  {
    title: "Ecommerce Solutions",
    description:
      "Build powerful online stores that deliver seamless shopping experiences and higher conversions.",
    img: "/services/3/cart.png",
    link: "/ecommercesolutions",
  },
  {
    title: "Social Media Creation",
    description:
      "Develop engaging social content to grow your audience and strengthen your brand online.",
    img: "/services/4/mark.png",
    link: "/socialmediacreation",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55 },
  }),
};

export default function ServicesPreview() {
  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Explore our top services designed to grow your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="h-full"
            >
              <Link
                href={service.link}
                className="bg-gray-50 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col"
              >
                <div className="relative w-full h-60 md:h-64">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1 text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base mb-6 flex-1">
                    {service.description}
                  </p>
                  <div
                    className="
                      w-full py-2.5 rounded-lg text-white font-medium
                      bg-gradient-to-r from-blue-900/95 to-blue-600/95
                      shadow-sm hover:shadow-md transition
                    "
                  >
                    Learn More
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="
              inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-white text-base sm:text-lg
              bg-[linear-gradient(to_right,#d8703c,#c55f2f,#b85127)]
              hover:bg-[linear-gradient(to_right,#c96438,#b8562d,#a74925)]
              transition-all duration-300 ease-in-out
              shadow-lg hover:shadow-2xl
              transform hover:scale-105
              cursor-pointer
            "
          >
            View All Services
          </Link>
        </div>
      </Container>
    </section>
  );
}
