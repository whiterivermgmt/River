"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Clients() {
  const clients = [
    {
      name: "Gerkin",
      logo: "/clients/gerkin/gerkin.png",
      url: "https://gerkinconstruction.com", // replace with real URL
    },
    {
      name: "Adventure Guitar",
      logo: "/clients/adventure/adven.png",
      url: "https://jarrettowensshop.myshopify.com/", // replace with real URL
    },
    {
      name: "Escos",
      logo: "/clients/escos/catlogo.png",
      url: "https://escos.vercel.app/", // replace with real URL
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <Container>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Clients
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.07,
                y: -6,
                boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.97 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="w-32 h-20 relative rounded-lg bg-white"
            >
              <Link
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain rounded-lg p-2"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
