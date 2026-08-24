"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section based on scroll position
      const sections = ["hero", "about", "event-info", "coordinators"];
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
    { id: "event-info", label: "Event Details" },
    { id: "coordinators", label: "Coordinators" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-[#1b3d18] shadow-[0_2px_20px_rgba(57,255,20,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="font-bebas-neue text-xl tracking-[0.15em] uppercase cursor-pointer"
          style={{
            background: "linear-gradient(180deg, #E8FFEA 0%, #6FEF44 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Cyber<span className="text-[#6FEF44]">Quest</span>
        </button>

        {/* Nav Links */}
        <ul className="hidden sm:flex items-center gap-8">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer relative pb-1 ${
                  activeSection === id
                    ? "text-[#6FEF44]"
                    : "text-white/50 hover:text-white/90"
                }`}
              >
                {label}
                {/* Active underline */}
                {activeSection === id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#6FEF44] shadow-[0_0_6px_#6FEF44]" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile menu — dots indicator */}
        <div className="flex sm:hidden items-center gap-1.5">
          {navLinks.map(({ id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeSection === id
                  ? "bg-[#6FEF44] shadow-[0_0_6px_#6FEF44] scale-125"
                  : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
