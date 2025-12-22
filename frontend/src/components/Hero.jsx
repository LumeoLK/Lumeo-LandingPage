import { motion } from "framer-motion";
import { useState } from "react"; // Removed Suspense

/* Text reveal animation */
const textReveal = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// Parent variant to handle staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Delay between "TRY IT", "BEFORE", "BUY IT"
      delayChildren: 0.2,
    },
  },
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
            <span className="block">{char === " " ? "\u00A0" : char}</span>
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
  // Removed unused state (loaded) unless you plan to use it for the video loading logic

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] z-0" />

      <div className="relative w-full h-screen overflow-hidden">
        <video
          className=" top-0 left-0 w-full h-full object-cover -z-20"
          src="/background.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>

        <motion.div className="absolute top-32 left-28 z-20 max-w-xl">
          <motion.h1
            className="relative font-[Anton] leading-none text-[#231f20]"
            // FIX 1: Apply variants and initial/animate to Parent
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="absolute -left-6 top-4 h-[30%] w-[2px] bg-gray-400" />

            {/* BLOCK 1: TRY IT */}
            <div className="overflow-hidden">
              <motion.span
                variants={textReveal}
                transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                className="block text-[12.5rem] opacity-75"
              >
                <div className="overflow-hidden py-0.75">
                  <StaggerText>TRY IT</StaggerText>
                </div>
              </motion.span>
            </div>

            {/* BLOCK 2: BEFORE */}
            <motion.div
              // FIX 2: Fixed invalid 'left-20.5' to arbitrary value
              className="absolute left-[5.4rem] top-[9.25rem] h-auto bg-[#fbb040] text-white z-10 overflow-hidden whitespace-nowrap origin-left"
              initial={{ width: 0 }}
              variants={{
                // We define this as a variant so the parent can trigger it
                visible: {
                  width: "24rem",
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
                hidden: { width: 0 },
              }}
            >
              <div className="px-5 py-4 text-[7.9rem] leading-none">
                <StaggerText>BEFORE</StaggerText>
              </div>
            </motion.div>

            {/* BLOCK 3: BUY IT */}
            {/* FIX 2: Fixed invalid 'mt-22' to arbitrary value */}
            <div className="overflow-hidden mt-[5.7rem] ml-9.5">
              <motion.span
                variants={textReveal}
                transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
                className="block text-[5.7rem] opacity-80"
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
            className="mt-0 text-gray-500 text-sm"
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
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            href="#explore"
            className="
              inline-block mt-4 px-8 py-3
              border-1 border-[#231f20]
              font-[Anton] text-2xl uppercase
              text-[#231f20]
              relative overflow-hidden group
              transition-[border-color,color] duration-300
              hover:border-[#fbb040]
            "
          >
            {/* Fill layer */}
            <span
              className="
                absolute inset-0
                bg-[#fbb040]
                scale-y-0 origin-bottom
                transition-transform duration-500
                group-hover:scale-y-100
                z-0
              "
            />

            {/* Text */}
            <span
              className="
                relative z-10
                transition-colors duration-300
                group-hover:text-white
              "
            >
              Explore Now
            </span>
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
}
