import React from "react";

export default function Navbar() {
  return (
    <nav
      className="p-4 top-5 z-50 font-robotoCond"
      style={{ backgroundColor: "#dbdbdb" }}
    >
      <div className="container mx-auto flex justify-between items-center mt-4">
        {/* Logo */}
        <img src="/Lumeo Wordmark Black.png" alt="Lumeo Logo" className="h-10 ml-20" />

        <div className="flex gap-6 mr-30">
          <a
            href="#aboutus"
            className="px-4 py-2 rounded-xl transition-all duration-300 
                       text-gray-600
                       hover:text-black
                       hover:-translate-y-1 hover:shadow-lg
                       ring-1 ring-transparent hover:ring-black/50"
          >
            About Us
          </a>

          <a
            href="#Features"
            className="px-4 py-2 rounded-xl transition-all duration-300
                       text-gray-600
                       hover:text-black
                       hover:-translate-y-1 hover:shadow-lg
                       ring-1 ring-transparent hover:ring-black/50"
          >
            Features
          </a>

          <a
            href="#Reachus"
            className="px-4 py-2 rounded-xl transition-all duration-300
                       text-gray-600
                       hover:text-black
                       hover:-translate-y-1 hover:shadow-lg
                       ring-1 ring-transparent hover:ring-black/50"
          >
            Reach Us
          </a>

          <a
            href="#privacypolicy"
            className="px-4 py-2 rounded-xl transition-all duration-300
                       text-gray-600
                       hover:text-black
                       hover:-translate-y-1 hover:shadow-lg
                       ring-1 ring-transparent hover:ring-black/50"
          >
            Privacy & Policy
          </a>
        </div>
      </div>
    </nav>
  );
}
