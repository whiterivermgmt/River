"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { FaEnvelope, FaLaptopCode, FaChartLine } from "react-icons/fa";

const packages = [
  {
    title: "Streamline Starter Package",
    icon: <FaLaptopCode className="w-16 h-16 mx-auto text-orange-500" />,
    items: [
      "Up to 5 Custom Pages",
      "Responsive Mobile Design",
      "Basic SEO Setup",
      "Google Analytics Setup",
      "Simple Blog or News Section",
      "Contact Form Integration",
      "1 Round of Revisions",
    ],
    popular: false,
    color: "bg-white text-gray-900",
  },
  {
    title: "Rapid Services Package",
    icon: <FaChartLine className="w-16 h-16 mx-auto text-white" />,
    items: [
      "Unlimited Custom Pages",
      "Advanced Ecommerce Capabilities",
      "Conversion-Focused Landing Pages",
      "CRM & Email Marketing Integration",
      "Custom Animation or Video Embeds",
      "Multi-Language Support",
      "Ongoing SEO Optimization (6 months)",
      "Analytics & Performance Dashboard",
      "Priority Support & Maintenance",
      "Custom Content Creation Bundle",
      "Blog/Knowledge Hub Setup",
      "Social Media Feeds Integration",
      "Fast Turnaround & Priority Workflow",
      "3 Rounds of Revisions",
    ],
    popular: true,
    color: "bg-[url('/footer.png')] bg-cover bg-center text-white",
  },
  {
    title: "Riverbend Growth Package",
    icon: <FaEnvelope className="w-16 h-16 mx-auto text-orange-500" />,
    items: [
      "Up to 12 Custom Pages",
      "Blog / Resource Center",
      "Ecommerce or Booking System",
      "Advanced SEO Setup",
      "Custom Graphic Elements",
      "Training on Site Updates",
      "Performance Optimization",
      "Social Media Integration",
      "2 Rounds of Revisions",
    ],
    popular: false,
    color: "bg-white text-gray-900",
  },
];

export default function PackagesSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <Container>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Packages
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-xl shadow-lg border-2 flex flex-col overflow-hidden group ${pkg.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              

              {/* Background overlay for popular package */}
              {pkg.popular && (
  <div className="absolute inset-0 overflow-hidden rounded-xl z-0">
    {/* Background image */}
    <div
      className="absolute inset-0 bg-[url('/footer.png')] bg-cover bg-center scale-105 transition-transform duration-500 ease-in-out transform group-hover:scale-110"
    />
    {/* Dark overlay for text */}
    <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
  </div>
)}


              {/* Icon */}
              <div className="py-6 z-10">{pkg.icon}</div>

              {/* Content */}
              <div className="px-6 pb-6 flex flex-col flex-1 z-10">
                <h3 className="font-bold text-xl mb-4 text-center">{pkg.title}</h3>
                <ul className="flex-1 mb-6 text-sm space-y-2">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span
                        className={`mr-2 ${pkg.popular ? "text-white" : "text-orange-500"}`}
                      >
                        ✔
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/services"
                  className="
                    w-full py-3 rounded-xl font-bold text-white text-base sm:text-lg
                    bg-[linear-gradient(to_right,#d8703c,#c55f2f,#b85127)]
                    hover:bg-[linear-gradient(to_right,#c96438,#b8562d,#a74925)]
                    transition-all duration-300 ease-in-out
                    shadow-lg hover:shadow-2xl
                    transform hover:scale-105
                    text-center
                  "
                >
                  Choose Package
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-700 text-sm mt-8 max-w-3xl mx-auto">
          Every package can be tailored to match your unique marketing objectives. Package pricing does not include additional advertising spend or third-party engagement fees. Additional services are available upon request, including media planning, geofencing, social ads, event marketing, and professional design support.
        </p>
      </Container>
    </section>
  );
}
