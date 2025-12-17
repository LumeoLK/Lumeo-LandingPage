import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faSquareInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#dbdbdb] font-robotoCond relative z-10 ">
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between gap-12">
        {/* Logo & Brand */}
        <div className="flex flex-col items-center lg:items-start gap-4">
          <img
            src="/Lumeo Wordmark Black.png"
            alt="Lumeo Logo"
            className="h-10 w-auto"
          />
          <p className="text-gray-600 max-w-xs text-center lg:text-left">
            Building smart solutions and innovative experiences for the modern world.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3 text-center lg:text-left">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <a href="#home" className="hover:text-gray-900 transition-all duration-300">
            Home
          </a>
          <a href="#aboutus" className="hover:text-gray-900 transition-all duration-300">
            About Us
          </a>
          <a href="#Features" className="hover:text-gray-900 transition-all duration-300">
            Features
          </a>
          <a href="#Reachus" className="hover:text-gray-900 transition-all duration-300">
            Reach Us
          </a>
          <a href="#privacypolicy" className="hover:text-gray-900 transition-all duration-300">
            Privacy & Policy
          </a>
        </div>

        {/* Social & Contact */}
        <div className="flex flex-col items-center lg:items-end gap-4">
          <h2 className="text-xl font-semibold mb-2">Connect with Us</h2>
          <div className="flex gap-4 text-2xl text-gray-700">
            <a
              href="https://www.linkedin.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transform hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a
              href="mailto:6iatlascs14@gmail.com"
              className="hover:text-red-500 transform hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transform hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
          </div>
          <div className="mt-2 text-gray-600 text-center lg:text-right">
            <p>© 2025 Lumeo. All rights reserved.</p>
            <p className="flex items-center justify-center lg:justify-end gap-2 mt-1">
              <FontAwesomeIcon icon={faPhone} /> +1 (234) 567-890
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          fixed bottom-6 right-6
          bg-[#fbb040]
          text-white
          p-3 rounded-full
          shadow-lg
          hover:scale-110
          transition
        "
      >
        ↑
      </button>


      {/* Bottom decorative shadow / 3D effect */}
      {/* <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-gray-300 to-transparent pointer-events-none"></div> */}
    </footer>
  );
};

export default Footer;
