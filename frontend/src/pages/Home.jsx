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
        {/* <section className="h-screen w-full snap-start snap-always relative">
          <Hero />
        </section> */}

        {/* PROBLEM - (This is the component we fixed earlier) */}
        <section className="h-screen w-full snap-start snap-always bg-[#f5f5f5]">
          <Problem />
        </section>

        {/* FEATURES */}
        <section className="h-screen w-full snap-start snap-always bg-white">
          <FeaturesScroll />
        </section>

        {/* HOW IT WORKS */}
        <section className="h-screen w-full snap-start snap-always bg-[#dbdbdb]">
          <HowItWorks />
        </section>

        {/* ABOUT */}
        <section className="h-screen w-full snap-start snap-always bg-white">
          <AboutScroll />
        </section>

        {/* GET IN TOUCH */}
        <section className="h-screen w-full snap-start snap-always bg-[#f5f5f5]">
          <GetInTouch />
        </section>

        {/* TEAM SECTION */}
<section className="h-screen w-full snap-start snap-always bg-neutral-950">
  <Team />
</section>

        <section className="w-full snap-start snap-always bg-[#dbdbdb] flex items-end">
          <div className="w-full">
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
