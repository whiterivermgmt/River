"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Check, Star, Users, Cpu } from "lucide-react";

export default function Differentiators() {
  const differentiators = [
    { icon: <Check className="w-6 h-6 text-blue-600" />, text: "Local-first approach" },
    { icon: <Star className="w-6 h-6 text-yellow-400" />, text: "Proven results" },
    { icon: <Users className="w-6 h-6 text-green-500" />, text: "Client-focused service" },
    { icon: <Cpu className="w-6 h-6 text-purple-600" />, text: "Custom digital solutions" },
  ];

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
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {item.icon}
              <p className="mt-3 text-gray-700 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
