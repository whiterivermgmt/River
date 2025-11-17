"use client";

import React, { useState, useEffect } from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import Contactbutton from "./Contactbutton";
import SideMenu from "./SideMenu";
import { AlignLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  // Auto-close side menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detect scroll for blur background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
     <header
  className={`
    w-full z-40 transition-all duration-300
    ${isHome ? "fixed top-0" : "relative"}
    ${isHome
      ? scrolled
        ? "backdrop-blur-md bg-blue/40 shadow-md"
        : "bg-transparent"
      : "shadow-md"
    }
  `}
>
  {/* Background Image + Overlay for non-home pages */}
  {!isHome && (
    <div className="absolute inset-0 z-0">
      <Image
        src="/footer1.png"
        alt="Header Background"
        fill
        className="object-cover object-[20%_12%] opacity-25"
        priority
      />
      <div className="absolute inset-0 bg-blue/90 mix-blend-overlay" />
    </div>
  )}

  {/* White Divider Line */}
  <div className="w-full h-px bg-white/40 absolute bottom-0 z-50"></div>

  <Container
    fullWidth
    className="flex items-center justify-between py-4 md:py-6 lg:px-16 relative z-10"
  >
    {/* Left: Logo */}
    <div className="flex items-center justify-center w-1/3 shrink-0">
      <div className="md:scale-130 scale-145  items-center" >
        <Logo />
      </div>
    </div>

    {/* Center: Hamburger + Desktop Menu */}
    <div className="flex justify-center w-1/3 relative">
      {/* Mobile Hamburger */}
      <div
        className="md:hidden cursor-pointer text-white hover:text-shop-orange transition-colors"
        onClick={openSidebar}
      >
        <AlignLeft className="w-6 h-6" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center w-full max-w-[500px]">
        <HeaderMenu />
      </div>
    </div>

    {/* Right: Contact Button */}
    <div className="flex items-center justify-end w-1/3 shrink-0">
      <div className="md:hidden scale-[1] ml-4">
        <Contactbutton />
      </div>
      <div className="hidden md:block">
        <Contactbutton />
      </div>
    </div>
  </Container>
</header>


      {/* Side Menu */}
      <SideMenu isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;
