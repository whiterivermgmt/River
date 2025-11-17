"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, X, Cpu, Settings, Zap } from "lucide-react";

const sections = [
  {
    title: "Targeted Campaigns",
    text: "Reach the right people at the right time with **personalized campaigns** that improve engagement and ROI.",
    details: [
      "Segment your audience based on behavior and interests.",
      "Create personalized subject lines to increase open rates.",
      "A/B testing to continually refine messaging.",
      "Data-driven optimization for maximum impact.",
    ],
    img: "/services/6/target.png",
  },
  {
    title: "Creative Design & Copy",
    text: "Drive conversions with **stunning visuals** and persuasive copy that reinforce your brand identity.",
    details: [
      "Custom-designed templates for consistent brand identity.",
      "Copywriting that speaks directly to your target audience.",
      "Clear calls-to-action to drive measurable results.",
      "Responsive designs for desktop and mobile users.",
    ],
    img: "/services/6/design.png",
  },
  {
    title: "Automation & Analytics",
    text: "Save time and scale with **automated campaigns** while analyzing performance to improve results.",
    details: [
      "Set up automated sequences for onboarding, nurturing, and recovery.",
      "Track open rates, CTRs, and conversions in real-time.",
      "Generate actionable insights with advanced analytics.",
      "Continuously refine campaigns for higher ROI.",
    ],
    img: "/services/6/auto.png",
  },
];

const steps = [
  { icon: <Cpu className="w-8 h-8 text-blue-600" />, title: "Strategy", text: "Analyze business goals and craft a precise email marketing plan." },
  { icon: <Settings className="w-8 h-8 text-orange-500" />, title: "Execution", text: "Design, write, and schedule campaigns aligned with your objectives." },
  { icon: <Zap className="w-8 h-8 text-blue-600" />, title: "Optimization", text: "Monitor performance and refine strategies continuously." },
];

const comparison = [
  { feature: "Local Service", whiteRiver: true, competitor: false },
  { feature: "Same Day Response", whiteRiver: true, competitor: false },
  { feature: "Custom Solutions", whiteRiver: true, competitor: false },
  { feature: "Continuous Support", whiteRiver: true, competitor: false },
  { feature: "Flexible Pricing", whiteRiver: true, competitor: false },
  { feature: "Proactive Recommendations", whiteRiver: true, competitor: false },
  { feature: "Free Consultation", whiteRiver: true, competitor: false },
  { feature: "Reliable Technology", whiteRiver: true, competitor: false },
];

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function EmailMarketingPage() {
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
            Email Marketing
          </motion.h1>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Increase engagement, nurture leads, and drive sales with expertly crafted email campaigns.
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
              Compare our services to a typical competitor.
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
