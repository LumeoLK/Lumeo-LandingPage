import React, { useEffect, useRef, useState } from "react";

// Components
import Navbar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import Problem from "../components/Problem.jsx";
import FeaturesScroll from "../components/FeaturesScroll.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import ClosingSection from "../components/ClosingSection.jsx";
import Team from "../components/Team.jsx";
import GetInTouch from "../components/GetInTouch.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const footerRef = useRef(null);
  const [footerProgress, setFooterProgress] = useState(0); // 0 → 1

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Observe footer visibility progress
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterProgress(entry.intersectionRatio);
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  // Map progress → blur + opacity
  const blurPx = footerProgress * 20;       // max blur: 20px
  const overlayOpacity = footerProgress * 0.35; // max darkening

  return (
    <div className="relative w-full bg-black">
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-[100]">
        <Navbar handleScroll={handleScroll} />
      </div>

      <main className="relative w-full">
        {/* HERO */}
        <div id="Hero" className="sticky top-0 h-screen w-full bg-black z-10">
          <Hero />
        </div>

        {/* PROBLEM */}
        <div id="Problem" className="sticky top-0 h-screen w-full bg-black z-20">
          <Problem />
        </div>

        {/* FEATURES */}
        <div id="Features" className="sticky top-0 h-screen w-full bg-black z-30">
          <FeaturesScroll />
        </div>

        {/* HOW IT WORKS */}
        <div id="HowItWorks" className="relative min-h-screen w-full bg-black z-40">
          <HowItWorks />
        </div>

        {/* CLOSING */}
        <div
          id="ClosingSection"
          className="sticky top-0 h-screen w-full bg-black z-50"
        >
          <ClosingSection />
        </div>

        {/* TEAM */}
        <div id="Team" className="relative min-h-screen w-full bg-black z-60">
          <Team />
        </div>

        {/* GET IN TOUCH */}
        <div
          id="GetInTouch"
          className="sticky top-10 h-screen w-full bg-black z-70"
        >
          <GetInTouch />
        </div>

        {/* GRADUAL BLUR OVERLAY */}
        {footerProgress > 0 && (
          <div
            className="fixed inset-0 z-[75] pointer-events-none"
            style={{
              backdropFilter: `blur(${blurPx}px)`,
              backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
              transition: "backdrop-filter 0.1s linear, background-color 0.1s linear",
            }}
          />
        )}

        {/* FOOTER */}
        <div
          ref={footerRef}
          className="relative w-full z-[80] bg-gray-200"
        >
          <Footer handleScroll={handleScroll} />
        </div>
      </main>
    </div>
  );
};

export default Home;
