import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Scene1 from "./Scene1";

/* Text reveal animation */
const textReveal = {
  hidden: { y: "120%" },
  show: { y: "0%" },
};

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] z-0" />

      {/* ===== 3D Canvas with fade-in after model load ===== */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Canvas camera={{ position: [1.5, 1.5, 2], fov: 35 }} shadows>
          <Suspense fallback={<span className="text-white">Loading model...</span>}>
            <Scene1 onLoad={() => setLoaded(true)} />
          </Suspense>
        </Canvas>
      </motion.div>

      {/* Hero content */}
      <motion.div className="absolute top-32 left-28 z-20 max-w-xl">
        <motion.h1
          className="relative font-[Anton] leading-none text-[#231f20]"
          variants={{ show: { transition: { staggerChildren: 0.16 } } }}
        >
          <span className="absolute -left-6 top-4 h-[30%] w-[2px] bg-gray-400" />

          <div className="overflow-hidden">
            <motion.span
              variants={textReveal}
              transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
              className="block text-[12rem] opacity-80"
            >
              TRY IT
            </motion.span>
          </div>

          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="absolute left-20.5 top-[9rem] bg-[#fbb040] px-6 py-2 text-[7.5rem] text-white origin-left z-10"
          >
            BEFORE
          </motion.span>

          <div className="overflow-hidden mt-22 ml-9">
            <motion.span
              variants={textReveal}
              transition={{ duration: 0.9, delay: 0.75 }}
              className="block text-[5.5rem] opacity-80"
            >
              BUY IT
            </motion.span>
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35 }}
          className="mt-4 text-gray-500 text-sm"
        >
          <b>LUMEO</b> lets you preview furniture in your space<br />
          in real time, explore multiple styles, colors, and layouts,<br />
          experience how each piece fits in your room using real-scale <br /> AR,
          and make confident decisions before you buy.
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          href="#explore"
          className="inline-block mt-6 px-8 py-3 border border-[#fbb040] font-[Anton] text-2xl uppercase text-[#231f20] relative overflow-hidden group"
        >
          <span className="absolute inset-0 bg-[#fbb040] scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100" />
          <span className="relative group-hover:text-white">Explore Now</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
