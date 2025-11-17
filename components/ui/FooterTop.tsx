"use client";

import React from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  href?: string;
}

const data: ContactItemData[] = [
  {
    title: "Local Office",
    subtitle: "Bedford, IN",
    icon: <MapPin className="h-6 w-6 text-blue-300 transition-colors group-hover:text-orange-400" />,
  },
  {
    title: "Call Us",
    subtitle: "812 - 278 - 7749",
    href: "tel:8122787749",
    icon: <Phone className="h-6 w-6 text-blue-300 transition-colors group-hover:text-orange-400" />,
  },
  {
    title: "Email Us",
    subtitle: "whiterivermgmt@gmail.com",
    href: "mailto:whiterivermgmt@gmail.com",
    icon: <Mail className="h-6 w-6 text-blue-300 transition-colors group-hover:text-orange-400" />,
  },
  {
    title: "Our Hours",
    subtitle: "Mon - Fri: 8am - 5pm",
    icon: <Clock className="h-6 w-6 text-blue-300 transition-colors group-hover:text-orange-400" />,
  },
];

const FooterTop = () => {
  return (
    <div className="relative py-12 ">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <ContactCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

interface ContactCardProps {
  item: ContactItemData;
}

const ContactCard = ({ item }: ContactCardProps) => {
  const Wrapper: React.ElementType = item.href ? "a" : "div";

  return (
    <Wrapper
      href={item.href}
      className="group block   rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 hover:to-orange-500"
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="bg-blue rounded-full p-3 transition-all group-hover:bg-white/20">
          {item.icon}
        </div>
        <h4 className="font-semibold text-white text-lg transition-colors">{item.title}</h4>
        <p className="text-blue-200 text-sm transition-colors">{item.subtitle}</p>
      </div>
    </Wrapper>
  );
};

export default FooterTop;
