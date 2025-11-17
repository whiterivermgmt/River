"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Email Marketing",
    description:
      "Increase engagement, nurture leads, and drive sales with expertly crafted email campaigns.",
    img: "/services/6/target.png",
    link: "/emailmarketing",
  },
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
  {
    title: "Branding",
    description:
      "Craft a cohesive brand identity that stands out and resonates with your audience.",
    img: "/services/5/work.png",
    link: "/branding",
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

export default function ServicesOverview() {
  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Explore our range of digital marketing services designed to grow your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
                className="
                  bg-gray-50 rounded-xl shadow
                  hover:shadow-lg hover:-translate-y-1
                  transition-all duration-300 overflow-hidden
                  h-full flex flex-col
                "
              >
                {/* Image */}
                <div className="relative w-full h-60 md:h-64">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="p-6 flex flex-col flex-1 text-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-700 text-sm md:text-base mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Button */}
                  <div
                    className="
                      w-full py-2.5 rounded-lg text-white font-medium
                      bg-linear-to-r from-blue-900/95 to-blue-600/95
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
      </Container>
    </section>
  );
}
