import React, { useState } from "react";

export default function Navbar({ handleScroll }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Problem", href: "Problem" },
    { name: "Features", href: "Features" },
    { name: "How It Works", href: "HowItWorks" },
    { name: "Team", href: "Team" },
    { name: "Get In Touch", href: "GetInTouch" },
  ];

  return (
    <nav className="
      fixed top-5 left-1/2 -translate-x-1/2
      w-[90%] max-w-[1440px]
      bg-white/70 backdrop-blur-xl
      rounded-2xl shadow-lg
      z-50
      transition-all duration-300
    ">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <img src="/Lumeo Wordmark Black.png" alt="Lumeo Logo" className="h-10" />

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {links.map((link, i) => (
            <button
              key={i}
              onClick={() => handleScroll(link.href)}
              className="px-4 py-2 rounded-xl transition-all duration-300 
                         text-gray-600
                         hover:text-black
                         hover:-translate-y-1 hover:shadow-lg
                         ring-1 ring-transparent hover:ring-black/50"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between w-6 h-6 focus:outline-none"
          >
            <span className={`block h-0.5 w-full bg-gray-700 transform transition duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 w-full bg-gray-700 transition duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-full bg-gray-700 transform transition duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
          {links.map((link, i) => (
            <button
              key={i}
              onClick={() => {
                handleScroll(link.href); // Scroll inside container
                setMenuOpen(false); // Close mobile menu
              }}
              className="px-4 py-2 rounded-xl transition-all duration-300 
                         text-gray-600
                         hover:text-black
                         hover:-translate-y-1 hover:shadow-lg
                         ring-1 ring-transparent hover:ring-black/50"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
