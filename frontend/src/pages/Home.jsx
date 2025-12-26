import React, { useRef } from "react";
import Navbar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import Problem from "../components/Problem.jsx";
import FeaturesScroll from "../components/FeaturesScroll.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Team from "../components/Team.jsx";
import GetInTouch from "../components/GetInTouch.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const scrollContainerRef = useRef(null);

  // Scroll to a section inside the scrollable container
  const handleScroll = (id) => {
    const container = scrollContainerRef.current;
    const section = document.getElementById(id);
    if (container && section) {
      container.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar handleScroll={handleScroll} />
      </div>

      {/* Scrollable Main Container */}
      <div
        ref={scrollContainerRef}
        className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        {/* Hero Section */}
        <div id="Hero" className="snap-start">
          <Hero />
        </div>

        {/* Problem Section */}
        <div id="Problem" className="snap-start">
          <Problem />
        </div>

        {/* Features Section */}
        <div id="Features" className="snap-start">
          <FeaturesScroll />
        </div>

        {/* How It Works Section */}
        <div id="HowItWorks" className="snap-start">
          <HowItWorks />
        </div>

        {/* Team Section */}
        <div id="Team" className="snap-start">
          <Team />
        </div>

        {/* Get In Touch Section */}
        <div id="GetInTouch" className="snap-start">
          <GetInTouch />
        </div>

        {/* Footer */}
        <Footer handleScroll={handleScroll} />
      </div>
    </>
  );
};

export default Home;
