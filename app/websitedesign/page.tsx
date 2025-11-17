"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, X, Cpu, Settings, Zap } from "lucide-react";

const sections = [
  {
    title: "Custom Website Design",
    text: "Stand out online with **fully custom designs** tailored to your brand and audience.",
    details: [
      "Unique, responsive layouts for desktop, tablet, and mobile.",
      "Brand-consistent color schemes, typography, and imagery.",
      "User-friendly navigation and intuitive interface design.",
      "SEO-friendly structure to help your site rank higher.",
    ],
    img: "/services/1/custom.png",
  },
  {
    title: "Interactive & Engaging Features",
    text: "Boost user engagement with **interactive elements** that keep visitors on your site longer.",
    details: [
      "Animated buttons, hover effects, and scroll animations.",
      "Integrated forms, chatbots, and call-to-action sections.",
      "Dynamic galleries, sliders, and content blocks.",
      "Fast-loading elements optimized for performance.",
    ],
    img: "/services/1/inter.png",
  },
  {
    title: "Maintenance & Analytics",
    text: "Keep your website running smoothly and track performance with **ongoing maintenance and analytics**.",
    details: [
      "Regular updates, backups, and security monitoring.",
      "Performance optimization for speed and reliability.",
      "Traffic tracking, conversion monitoring, and reporting.",
      "Continuous improvements based on data insights.",
    ],
    img: "/services/1/support.png",
  },
];

const steps = [
  { icon: <Cpu className="w-8 h-8 text-blue-600" />, title: "Planning", text: "Define goals, audience, and website structure for maximum impact." },
  { icon: <Settings className="w-8 h-8 text-orange-500" />, title: "Design & Build", text: "Develop responsive, visually appealing, and functional web pages." },
  { icon: <Zap className="w-8 h-8 text-blue-600" />, title: "Launch & Optimize", text: "Deploy the website and continuously refine for performance and conversions." },
];

const comparison = [
  { feature: "Custom Designs", whiteRiver: true, competitor: false },
  { feature: "Responsive Layouts", whiteRiver: true, competitor: false },
  { feature: "Interactive Features", whiteRiver: true, competitor: false },
  { feature: "SEO Optimization", whiteRiver: true, competitor: false },
  { feature: "Maintenance & Support", whiteRiver: true, competitor: false },
  { feature: "Analytics & Reporting", whiteRiver: true, competitor: false },
  { feature: "Fast & Secure", whiteRiver: true, competitor: false },
  { feature: "Flexible Pricing", whiteRiver: true, competitor: false },
];

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function WebsiteDesignPage() {
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
            Website Design
          </motion.h1>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Build a visually stunning, highly functional website that converts visitors into customers.
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
              Compare our website design services to a typical competitor.
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
