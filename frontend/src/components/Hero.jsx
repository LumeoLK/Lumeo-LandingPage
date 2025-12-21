import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Scene1 from "./Scene1";
import { Html } from "@react-three/drei";
/* Text reveal animation */
const textReveal = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const StaggerText = ({ children, className = "" }) => {
  const text = typeof children === "string" ? children : "";

  return (
    <span className={`group inline-block cursor-pointer ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="relative inline-block overflow-hidden align-top"
          style={{ lineHeight: "1em" }}
        >
          <span
            className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
            style={{ transitionDelay: `${i * 0.025}s` }}
          >
            {/* 1. Visible Letter */}
            <span className="block">{char === " " ? "\u00A0" : char}</span>

            {/* 2. Hidden Duplicate Letter (slides up from bottom) */}
            <span className="block absolute top-full left-0">
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        </span>
      ))}
    </span>
  );
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
        <Canvas
          camera={{ position: [1.5, 1.5, 2], fov: 35 }}
          // shadows
          dpr={[1, 1.5]} // <--- ADD THIS. Forces max 1.5x pixel density (visuals look 99% same, performance +50%)
        >
          <Suspense
            fallback={
              <Html center>
                <span className="text-white">Loading model...</span>
              </Html>
            }
          >
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
              initial="hidden" // <--- TELL IT WHERE TO START
              whileInView="visible" // <--- TELL IT WHEN TO ANIMATE (or use animate="visible")
              viewport={{ once: true }} // Optional: Ensures it doesn't reset when you scroll up
              transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
              className="block text-[12rem] opacity-80"
            >
              <div className="overflow-hidden py-2">
                <StaggerText>TRY IT</StaggerText>
              </div>
            </motion.span>
          </div>

          <motion.div
            // 1. We animate width instead of scale
            initial={{ width: 0 }}
            animate={{ width: "23rem" }} // "w-80" equivalent in rem (80 * 0.25)
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }} // Added a custom ease for a premium feel
            // 2. Crucial CSS classes:
            // - overflow-hidden: Hides text when width is small
            // - whitespace-nowrap: Prevents text from jumping to the next line as it grows
            className="absolute left-20.5 top-[9rem] h-auto bg-[#fbb040] text-white z-10 overflow-hidden whitespace-nowrap origin-left"
          >
            {/* Inner padding container */}
            <div className="px-6 py-4 text-[7.5rem] leading-none">
              <StaggerText>BEFORE</StaggerText>
            </div>
          </motion.div>

          <div className="overflow-hidden mt-22 ml-9">
            <motion.span
              variants={textReveal}
              initial="hidden" // <--- TELL IT WHERE TO START
              whileInView="visible" // <--- TELL IT WHEN TO ANIMATE (or use animate="visible")
              viewport={{ once: true }} // Optional: Ensures it doesn't reset when you scroll up
              transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
              className="block text-[5.5rem] opacity-80"
            >
              <div className="overflow-hidden py-2">
                <StaggerText>BUY IT</StaggerText>
              </div>
            </motion.span>
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35 }}
          className="mt-4 text-gray-500 text-sm"
        >
          <b>LUMEO</b> lets you preview furniture in your space
          <br />
          in real time, explore multiple styles, colors, and layouts,
          <br />
          experience how each piece fits in your room using real-scale <br />{" "}
          AR, and make confident decisions before you buy.
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
