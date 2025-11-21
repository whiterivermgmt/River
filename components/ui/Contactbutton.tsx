"use client";

import React from "react";
import Link from "next/link";

const Contactbutton = ({ small = false }) => {
  return (
    <Link href="/contact">
      <button
        className={`
          rounded-xl font-bold text-white cursor-pointer
          bg-[linear-gradient(to_right,#d8703c,#c55f2f,#b85127)]
          hover:bg-[linear-gradient(to_right,#c96438,#b8562d,#a74925)]
          transition-all duration-300 ease-in-out
          shadow-lg hover:shadow-2xl transform hover:scale-105
          whitespace-nowrap

          ${small 
            ? "px-3 py-2 text-xs"   // Mobile small version
            : "px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg" // Regular button
          }
        `}
      >
        Contact Us
      </button>
    </Link>
  );
};

export default Contactbutton;
