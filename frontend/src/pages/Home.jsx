import React from "react";
import { motion } from "framer-motion";

import Navbar from "../components/NavBar.jsx";
import AutoHideNavbar from "../components/AutoHideNavbar.jsx";
import Hero from "../components/Hero.jsx";
import FeaturesScroll from "../components/FeaturesScroll.jsx";
import AboutScroll from "../components/AboutScroll.jsx";
import GetInTouch from "../components/GetInTouch.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
        <Navbar />

      <div className="snap-container">
        <section className="snap-section">
          <Hero />
        </section>

        <section className="snap-section">
          <FeaturesScroll />
        </section>

        <section className="snap-section">
          <AboutScroll />
        </section>

        <section className="snap-section">
          <GetInTouch />
        </section>

        <section className="footer-section">
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
