import React from "react";
import { motion } from "framer-motion";

import Navbar from "../components/NavBar.jsx";
import AutoHideNavbar from "../components/AutoHideNavbar.jsx"; // Assuming you use this or Navbar
import Hero from "../components/Hero.jsx";
import Problem from "../components/Problem.jsx";
import FeaturesScroll from "../components/FeaturesScroll.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import AboutScroll from "../components/AboutScroll.jsx";
import GetInTouch from "../components/GetInTouch.jsx";
import Footer from "../components/Footer.jsx";
import Team from "../components/Team.jsx";

const Home = () => {
  return (
    <>
      {/* Navbar must be Fixed or Absolute so it stays on top 
         while the container behind it scrolls 
      */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* MAIN SCROLL CONTAINER 
        - h-screen: The window through which we see content
        - overflow-y-scroll: Enables scrolling within this div
        - snap-y snap-mandatory: Enables the locking physics
        - scroll-smooth: smooths out anchor links
      */}

      <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {/* HERO */}
          <Hero />

        {/* PROBLEM - (This is the component we fixed earlier) */}
          <Problem />

        {/* FEATURE SECTION - Note: No 'h-screen' here. We let the child define the height. */}
          <FeaturesScroll />

        {/* HOW IT WORKS - Keep this as h-screen if it's a static slide */}
          <HowItWorks />

        {/* TEAM SECTION */}
          <Team />
        {/* GET IN TOUCH */}

          <GetInTouch />

          <div className="w-full">
            <Footer />
          </div>
          
      </div>
    </>
  );
};

export default Home;
