import { motion, useMotionValue, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene1 from "./Scene1";

/* TEXT-ONLY reveal (SAFE for Framer Motion) */
const textReveal = {
  hidden: { y: "120%" },
  show: { y: "0%" },
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useTransform(mouseX, [-400, 400], [-12, 12]);
  const y = useTransform(mouseY, [-400, 400], [-12, 12]);

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-[#f5f5f5]"
      onMouseMove={(e) => {
        mouseX.set(e.clientX - window.innerWidth / 2);
        mouseY.set(e.clientY - window.innerHeight / 2);
      }}
    >
      {/* ===== 3D HERO BACKGROUND ===== */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [7, 4, 3], fov: 20 }}>
          <Suspense fallback={null}>
            <Scene1 />
          </Suspense>
        </Canvas>
      </div>

      {/* ===== HERO CONTENT ===== */}
      <motion.div
        style={{ x, y }}
        initial="hidden"
        animate="show"
        className="absolute top-32 left-28 z-20 max-w-xl"
      >
        <motion.h1
          className="relative font-[Anton] leading-none text-[#231f20]"
          variants={{ show: { transition: { staggerChildren: 0.16 } } }}
        >
          {/* Accent Line */}
          <span className="absolute -left-6 top-4 h-[30%] w-[2px] bg-gray-400" />

          {/* TRY IT */}
          <div className="overflow-hidden">
            <motion.span
              variants={textReveal}
              transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
              className="block text-[12rem] opacity-80"
            >
              TRY IT
            </motion.span>
          </div>

          {/* BEFORE */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="absolute left-20.5 top-[9rem]
                       bg-[#fbb040] px-6 py-2
                       text-[7.5rem] text-white
                       origin-left z-10"
          >
            BEFORE
          </motion.span>

          {/* BUY IT */}
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

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35 }}
          className="mt-4 text-gray-500 text-sm"
        >
          <b>LUMEO</b> lets you preview furniture in your space <br />
          using real-scale AR and make confident decisions.
        </motion.p>

        {/* CTA */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          href="#explore"
          className="inline-block mt-6 px-8 py-3
                     border border-[#fbb040]
                     font-[Anton] text-2xl uppercase
                     text-[#231f20] relative overflow-hidden group"
        >
          <span className="absolute inset-0 bg-[#fbb040]
                           scale-y-0 origin-bottom
                           transition-transform duration-500
                           group-hover:scale-y-100" />
          <span className="relative group-hover:text-white">
            Explore Now
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}
