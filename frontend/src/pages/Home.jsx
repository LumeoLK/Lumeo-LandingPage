import React from "react";
import { motion } from "framer-motion";

import Navbar from "../components/NavBar.jsx";
import AutoHideNavbar from "../components/AutoHideNavbar.jsx";
import Hero from "../components/Hero.jsx";
import Problem from "../components/Problem.jsx";
import FeaturesScroll from "../components/FeaturesScroll.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import AboutScroll from "../components/AboutScroll.jsx";
import GetInTouch from "../components/GetInTouch.jsx";
import Footer from "../components/Footer.jsx";
import Interior from "../components/Interior.jsx";
import Wave from "../components/WaterDropFloor.jsx";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="snap-container">
        {/* <section className="snap-section bg-[#f5f5f5]">
          <Wave />
        </section> */}
        {/* <section className="snap-section bg-[#f5f5f5]">
          <Interior />
        </section> */}

        <section className="snap-section relative">
          <Hero />
        </section>

        {/* PROBLEM */}
        <section className="snap-section bg-[#f5f5f5]">
          <Problem />
        </section>

        {/* FEATURES */}
        <section className="snap-section bg-white">
          <FeaturesScroll />
        </section>

        {/* HOW IT WORKS */}
        <section className="snap-section bg-[#dbdbdb]">
          <HowItWorks />
        </section>

        {/* ABOUT */}
        <section className="snap-section bg-white">
          <AboutScroll />
        </section>

        {/* GET IN TOUCH */}
        <section className="snap-section bg-[#f5f5f5]">
          <GetInTouch />
        </section>

        <section className="bg-[#dbdbdb]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Footer />
          </motion.div>
        </section>

      </div>
    </>
  );
};

export default Home;
