"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, X, Cpu, Settings, Zap } from "lucide-react";

const sections = [
  {
    title: "Custom Ecommerce Development",
    text: "Build **tailored online stores** optimized for performance, usability, and conversions.",
    details: [
      "Design and develop user-friendly, responsive ecommerce platforms.",
      "Integration with payment gateways, inventory systems, and shipping solutions.",
      "Custom features to meet unique business needs and improve UX.",
      "Optimized for speed, SEO, and mobile devices.",
    ],
    img: "/services/3/cart.png",
  },
  {
    title: "Product & Catalog Management",
    text: "Easily manage products, categories, and inventory with **robust catalog systems**.",
    details: [
      "Bulk product upload and categorization for efficient management.",
      "Automated inventory tracking to prevent stockouts and overselling.",
      "Flexible pricing rules, discounts, and promotions.",
      "Search and filtering functionality for better customer experience.",
    ],
    img: "/services/3/store.png",
  },
  {
    title: "Analytics & Conversion Optimization",
    text: "Use **data-driven insights** to improve sales, reduce cart abandonment, and enhance customer retention.",
    details: [
      "Monitor sales, traffic, and customer behavior in real-time.",
      "A/B testing and CRO strategies to boost conversions.",
      "Integration with analytics tools for detailed reporting.",
      "Continuous improvement for higher ROI and user satisfaction.",
    ],
    img: "/services/3/bag.png",
  },
];

const steps = [
  { icon: <Cpu className="w-8 h-8 text-blue-600" />, title: "Planning", text: "Define business goals, target audience, and ecommerce requirements." },
  { icon: <Settings className="w-8 h-8 text-orange-500" />, title: "Development", text: "Build, customize, and integrate the online store with necessary systems." },
  { icon: <Zap className="w-8 h-8 text-blue-600" />, title: "Optimization", text: "Track performance, optimize user experience, and increase conversions." },
];

const comparison = [
  { feature: "Custom Store Design", whiteRiver: true, competitor: false },
  { feature: "Payment & Shipping Integration", whiteRiver: true, competitor: false },
  { feature: "Inventory Management", whiteRiver: true, competitor: false },
  { feature: "Product Catalog Flexibility", whiteRiver: true, competitor: false },
  { feature: "Conversion Optimization", whiteRiver: true, competitor: false },
  { feature: "Analytics & Reporting", whiteRiver: true, competitor: false },
  { feature: "Customer Support", whiteRiver: true, competitor: false },
  { feature: "Scalable Solutions", whiteRiver: true, competitor: false },
];

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function EcommerceSolutionsPage() {
  return (
    <div className="space-y-10 md:space-y-12">
      {/* Page Title */}
      <section className="bg-white py-6 text-center">
        <Container>
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-1 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ecommerce Solutions
          </motion.h1>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Create scalable, high-converting online stores with robust features and analytics-driven optimization.
          </motion.p>
        </Container>
      </section>

      {/* Feature + Process Combined */}
      <section className="bg-gray-50 py-6 md:py-10">
        <Container>
          <div className="space-y-10 md:space-y-12">
            {sections.map((section, index) => {
              const reverse = index % 2 === 1;
              return (
                <motion.div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-6 md:gap-8 ${reverse ? "lg:flex-row-reverse" : ""}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex-1 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="rounded-xl shadow hover:shadow-xl overflow-hidden transition"
                      style={{ width: 500, height: 300 }}
                    >
                      <Image
                        src={section.img}
                        alt={section.title}
                        width={500}
                        height={300}
                        className="rounded-xl object-cover w-full h-full"
                      />
                    </motion.div>
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900 text-center lg:text-left">{section.title}</h3>
                    <p className="text-gray-700 text-sm md:text-base mb-3 text-center lg:text-left">
                      {section.text}
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base mb-4 text-left">
                      {section.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          custom={idx}
                          initial="hidden"
                          whileInView="visible"
                          variants={listVariants}
                          className="mb-1"
                        >
                          {detail}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Process steps under last feature */}
                    {index === sections.length - 1 && (
                      <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                        {steps.map((step, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="bg-white p-3 md:p-4 rounded-xl shadow hover:shadow-lg flex flex-col items-center md:items-start gap-2 md:gap-3 transition"
                          >
                            <div>{step.icon}</div>
                            <div className="text-center md:text-left">
                              <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                              <p className="text-gray-700 text-sm">{step.text}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Choose White River */}
      <section className="bg-white py-6 md:py-10">
        <Container>
          <motion.div
            className="text-center mb-3 md:mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Why Choose White River</h2>
            <p className="text-gray-600 text-sm md:text-base mt-1 text-center">
              Compare our ecommerce solutions to a typical competitor.
            </p>
          </motion.div>

          <motion.div
            className="overflow-x-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <table className="w-full border-collapse text-sm md:text-base text-center md:text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-3 py-2 font-semibold text-gray-900">Feature</th>
                  <th className="px-3 py-2 font-semibold text-blue-600">White River</th>
                  <th className="px-3 py-2 font-semibold text-orange-500">Competitor</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-3 py-2 text-gray-900">{item.feature}</td>
                    <td className="px-3 py-2">{item.whiteRiver && <Check className="inline w-5 h-5 text-blue-600" />}</td>
                    <td className="px-3 py-2">{!item.competitor && <X className="inline w-5 h-5 text-orange-500" />}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
