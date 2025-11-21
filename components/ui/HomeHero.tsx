"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const HomeHero = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement | null>(null);

  // Measure the header height dynamically
  useEffect(() => {
    const headerEl = document.getElementById("site-header");
    if (headerEl) setHeaderHeight(headerEl.offsetHeight);

    const handleResize = () => {
      if (headerEl) setHeaderHeight(headerEl.offsetHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative w-full h-[85vh] overflow-hidden"
      style={{ paddingTop: `${headerHeight}px` }} // offset so header doesn't overlap
    >
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero/hero1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-lg">
          Stand Out. Make Waves.
        </h1>
        <p className="text-2xl md:text-3xl text-white mb-12 max-w-2xl drop-shadow-md">
          Personalized Websites and Marketing that works with your brand and budget
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/contact"
            className="cursor-pointer px-24 py-3 bg-[#7c323e] text-white rounded-lg font-semibold hover:bg-[#67272d] transition inline-block text-center"
          >
            Get Started
          </Link>

          <Link
            href="/clients"
            className="cursor-pointer px-24 py-3 bg-[#547da4] text-white rounded-lg font-semibold hover:bg-[#41698b] transition inline-block text-center"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
