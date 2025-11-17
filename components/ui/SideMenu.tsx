"use client";

import React, { FC, useState, useEffect } from "react";
import { headerData } from "@/constants/data";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown } from "lucide-react";
import { SiFacebook, SiGoogle, SiInstagram, SiYelp } from "react-icons/si";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathName = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ Auto-close on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        onClose();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, onClose]);

  const socialLinks = [
    { href: "https://www.facebook.com/whiterivermedia/", icon: <SiFacebook />, name: "Facebook" },
    { href: "https://www.google.com", icon: <SiGoogle />, name: "Google Reviews" },
    { href: "https://www.yelp.com/biz/white-river-media-bedford", icon: <SiYelp />, name: "Yelp" },
    { href: "https://www.instagram.com/whiteriver.media/", icon: <SiInstagram />, name: "Instagram" },
  ];

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className="
          fixed top-0 left-0 h-full w-72 
          bg-blue/75 backdrop-blur-xl 
          z-50 shadow-2xl rounded-r-3xl 
          flex flex-col justify-between 
          text-white
        "
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" onClick={onClose}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={160}
              height={100}
              className="object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Smaller Close Button */}
          <motion.button
            onClick={onClose}
            whileHover={{ rotate: 90, scale: 1.1 }}
            className="text-blue hover:text-orange-400 p-2 cursor-pointer rounded-full transition-all duration-300 bg-white shadow-md"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-4 px-6 mt-10 overflow-y-auto">
          {headerData.map((item, idx) => {
            const isActive = pathName === item.href;
            const hasSubmenu = Array.isArray(item.submenu) && item.submenu.length > 0;

            return (
              <div key={item.title} className="w-full">
                {/* Parent Menu */}
                {hasSubmenu ? (
                  <div
                    onClick={() => toggleSubmenu(idx)}
                    className={`
                      flex justify-between items-center w-full 
                      px-4 py-4 text-xl font-semibold rounded-lg cursor-pointer 
                      transition-colors duration-300
                      ${isActive
                        ? "bg-orange-500/25 text-orange-300"
                        : "hover:bg-orange-500/20 hover:text-orange-400 text-white"
                      }
                    `}
                  >
                    {item.title}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : "rotate-0"}`}
                    />
                  </div>
                ) : (
                  <Link href={item.href} onClick={onClose}>
                    <div
                      className={`
                        flex items-center w-full px-4 py-4 
                        text-xl font-semibold rounded-lg cursor-pointer 
                        transition-colors duration-300
                        ${isActive
                          ? "bg-orange-500/25 text-orange-300"
                          : "hover:bg-orange-500/20 hover:text-orange-400 text-white"
                        }
                      `}
                    >
                      {item.title}
                    </div>
                  </Link>
                )}

                {/* Submenu */}
                <AnimatePresence>
                  {hasSubmenu && openIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="flex flex-col ml-4 mt-2 gap-2"
                    >
                      {item.submenu?.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={onClose}
                          className="
                            px-4 py-3 rounded-lg 
                            text-lg text-white 
                            hover:text-orange-400 hover:bg-orange-500/10 
                            transition-all duration-300
                          "
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Footer Social Icons */}
        <div className="flex flex-col items-center gap-6 mt-auto mb-6 px-6">
          <div className="flex gap-4">
            {socialLinks.map((item, idx) => (
              <div key={idx} className="relative group flex flex-col items-center">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-blue/90 hover:text-orange-400 
                    p-3 rounded-full 
                    bg-white shadow-md
                    transition-all duration-300
                  "
                >
                  {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                </a>

                <span
                  className="
                    absolute -top-8 text-xs bg-white text-black 
                    px-2 py-1 rounded shadow 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 whitespace-nowrap
                  "
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SideMenu;
