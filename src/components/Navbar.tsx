"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section based on scroll position
      const sections = ["hero", "about", "event-info"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "event-info", label: "Event Info & Coordinators" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-[#1b3d18] shadow-[0_2px_20px_rgba(57,255,20,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Logo Image (Left side) */}
        <button
          onClick={() => scrollTo("hero")}
          className="relative cursor-pointer w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center transition-transform hover:scale-105"
        >
          <Image 
            src="/logo.png" 
            alt="Logo" 
            fill
            className="object-contain"
            unoptimized
          />
        </button>

        {/* Navigation dots (Right side) */}
        <div className="flex items-center gap-3">
          {navLinks.map(({ id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeSection === id
                  ? "bg-[#6FEF44] shadow-[0_0_8px_#6FEF44] scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </nav>
  );
}
