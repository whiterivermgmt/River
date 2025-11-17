"use client";

import { SiFacebook, SiGoogle, SiInstagram, SiYelp } from "react-icons/si";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const socialLinks = [
  { href: "https://www.facebook.com/whiterivermedia/", icon: <SiFacebook />, name: "Facebook" },
  { href: "https://www.google.com", icon: <SiGoogle />, name: "Google Reviews" },
  { href: "https://www.instagram.com/whiteriver.media/", icon: <SiInstagram />, name: "Instagram" },
];

const Socialmedia = ({ className }: Props) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((item, idx) => (
        <div key={idx} className="relative group flex flex-col items-center">
          <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-md text-blue hover:text-orange-400 hover:scale-110 transition-all duration-300"
          >
            {React.cloneElement(item.icon, { className: "w-6 h-6" })}
          </Link>

          {/* Tooltip */}
          <span className="absolute -top-8 text-xs bg-white text-black px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Socialmedia;
