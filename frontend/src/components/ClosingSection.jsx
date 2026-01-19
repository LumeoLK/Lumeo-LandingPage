import React from "react";
import { motion } from "framer-motion";

const ClosingSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
      
      {/* FULL-SCREEN GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#e5e5e5] to-[#b9b9b9]" />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 text-center max-w-7xl"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
      >
        {/* MAIN HEADING */}
        <motion.h2
          className="font-[Anton] text-6xl sm:text-7xl md:text-8xl leading-[0.95] text-[#636363]"
          initial={{ letterSpacing: "0.35em", opacity: 0 }}
          whileInView={{ letterSpacing: "0em", opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          BUILT FOR REAL SPACES
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          className="mt-6 font-[Outfit] font-light text-xl sm:text-2xl md:text-3xl text-[#636363] max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          See scale. Feel proportion. Make decisions with clarity.
        </motion.p>

        {/* DIVIDER */}
        <motion.div
          className="mt-10 mx-auto h-[3px] w-48 bg-[#636363]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "center" }}
        />
      </motion.div>
    </section>
  );
};

export default ClosingSection;
