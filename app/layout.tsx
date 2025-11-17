import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import HomeHero from "@/components/ui/HomeHero";

export const metadata: Metadata = {
  title: {
    template: "%s - White River Media",
    default: "White River Media",
  },
  description: "Web design and digital marketing built for modern businesses—fast, clean, and conversion-focused.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-poppins antialiased min-h-screen flex flex-col`}>
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
