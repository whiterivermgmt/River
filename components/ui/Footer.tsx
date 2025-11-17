"use client";

import React from "react";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import Socialmedia from "./SocialMedia";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();

  return (
    <footer className="relative bg-blue/90 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/footer1.png"
          alt="Footer Background"
          fill
          className="object-cover opacity-9"
          priority
        />
        <div className="absolute inset-0 bg-blue/90 mix-blend-overlay" />
      </div>

      {/* Wrapper */}
      <div className="relative z-10">

        {/* Top Contact Cards */}
        <FooterTop />

        {/* Main Footer Grid */}
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo + Description + Socials */}
          <div className="space-y-6">
            <Logo />
            <p className="text-white text-base sm:text-lg leading-relaxed">
              Empowering businesses with creative media solutions that drive results.
            </p>
            <Socialmedia className="gap-6" />
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg sm:text-xl uppercase tracking-wide border-b border-orange-400 inline-block pb-1">
              Quick Links
            </h3>
            <ul className="space-y-3 text-base sm:text-lg">
              {[
                { href: "/about", label: "About" },
                { href: "/faq", label: "FAQ" },
                { href: "/clients", label: "Clients" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`transition-all font-medium hover:text-orange-400 ${
                      pathName === href
                        ? "text-orange-400 font-semibold"
                        : "text-gray-200"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg sm:text-xl uppercase tracking-wide border-b border-orange-400 inline-block pb-1">
              Services
            </h3>
            <ul className="space-y-3 text-base sm:text-lg">
              {[
                { href: "/websitedesign", label: "Website Design" },
                { href: "/seo&content", label: "SEO & Content Marketing" },
                { href: "/ecommercesolutions", label: "Ecommerce Solutions" },
                { href: "/socialmediacreation", label: "Social Media Creation" },
                { href: "/branding", label: "Branding" },
                { href: "/emailmarketing", label: "Email Marketing" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`transition-all font-medium hover:text-orange-400 ${
                      pathName === href
                        ? "text-orange-400 font-semibold"
                        : "text-gray-200"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg sm:text-xl uppercase tracking-wide border-b border-orange-400 inline-block pb-1">
              Contact Us
            </h3>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-400 transition text-base sm:text-lg"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-400 transition text-base sm:text-lg"
              />

              <textarea
                placeholder="Message"
                rows={3}
                className="px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-400 transition text-base sm:text-lg"
              />

              <button
                type="submit"
                className="
                  px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-white text-base sm:text-lg
                  bg-[linear-gradient(to_right,#d8703c,#c55f2f,#b85127)]
                  hover:bg-[linear-gradient(to_right,#c96438,#b8562d,#a74925)]
                  transition-all duration-300 ease-in-out
                  shadow-lg hover:shadow-2xl
                  transform hover:scale-105
                  cursor-pointer
                "
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <section className="border-t border-white/30">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm sm:text-base text-gray-200">
            © {new Date().getFullYear()} White River Media. All rights reserved.
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
