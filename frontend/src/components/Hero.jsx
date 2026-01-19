import { motion } from "framer-motion";

/* --- SHARED ANIMATIONS --- */
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

/* --- 1. MOBILE VERSION (Simplified Layout, Dark Text) --- */
const MobileHero = () => {
  return (
    <div className="relative z-10 flex flex-col justify-center h-full px-6 pt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Line Decoration */}
        <div className="w-10 h-[2px] bg-gray-600 mb-6" />

        {/* Text Stack - Dark Color Restored */}
        <div className="font-[Anton] text-6xl leading-tight text-[#231f20]">
          <motion.div variants={textReveal} className="overflow-hidden">
            <StaggerText>TRY IT</StaggerText>
          </motion.div>
          
          <motion.div 
            variants={textReveal} 
            className="w-fit bg-[#fbb040] text-white px-3 py-1 my-2"
          >
            <StaggerText>BEFORE</StaggerText>
          </motion.div>

          <motion.div variants={textReveal} className="overflow-hidden">
            <StaggerText>BUY IT</StaggerText>
          </motion.div>
        </div>

        {/* Description - Dark Color Restored */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-[#231f20] text-sm leading-relaxed font-medium"
        >
          <b>LUMEO</b> lets you preview furniture in your space in real time. 
          Experience AR scale and make confident decisions.
        </motion.p>

        {/* Button - Dark Border/Text Restored */}
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          href="#explore"
          className="
            inline-block mt-8 px-8 py-3
            border border-[#231f20]
            font-[Anton] text-xl uppercase tracking-wide
            text-[#231f20] relative overflow-hidden group
          "
        >
          <span className="absolute inset-0 bg-[#fbb040] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Explore Now
          </span>
        </motion.a>
      </motion.div>
    </div>
  );
};

/* --- 2. DESKTOP VERSION (Original Layout, Original Colors) --- */
const DesktopHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 },
    },
  };

  return (
    <motion.div className="absolute top-32 left-28 z-20 max-w-xl">
      <motion.h1
        className="relative font-[Anton] leading-none text-[#231f20]" // Original Dark Color
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="absolute -left-6 top-4 h-[30%] w-[2px] bg-gray-400" />

        {/* TRY IT */}
        <div className="overflow-hidden">
          <motion.span
            variants={textReveal}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="block text-[12.5rem] opacity-75 text-[#231f20]" // Original Dark Color
          >
            <div className="overflow-hidden py-0.75">
              <StaggerText>TRY IT</StaggerText>
            </div>
          </motion.span>
        </div>

        {/* BEFORE */}
        <motion.div
          className="absolute left-[5.4rem] top-[9.25rem] h-auto bg-[#fbb040] text-white z-10 overflow-hidden whitespace-nowrap origin-left"
          initial={{ width: 0 }}
          whileInView={{ width: "24rem" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="px-5 py-4 text-[7.9rem] leading-none">
            <StaggerText>BEFORE</StaggerText>
          </div>
        </motion.div>

        {/* BUY IT */}
        <div className="overflow-hidden mt-[5.7rem] ml-9.5">
          <motion.span
            variants={textReveal}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="block text-[5.7rem] opacity-80 text-[#231f20]" // Original Dark Color
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
        className="mt-0 text-gray-600 text-sm font-medium" // Darker gray for readability
      >
        <b>LUMEO</b> lets you preview furniture in your space
        <br /> in real time, explore multiple styles, colors, and layouts,
        <br /> experience how each piece fits in your room using real-scale <br />{" "}
        AR, and make confident decisions before you buy.
      </motion.p>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        href="#explore"
        className="
          inline-block mt-4 px-8 py-3
          border border-[#231f20]
          font-[Anton] text-2xl uppercase
          text-[#231f20]
          relative overflow-hidden group
          transition-[border-color,color] duration-300
          hover:border-[#fbb040]
        "
      >
        <span className="absolute inset-0 bg-[#fbb040] scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 z-0"/>
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          Explore Now
        </span>
      </motion.a>
    </motion.div>
  );
};

/* --- MAIN COMPONENT --- */
export default function Hero() {
  return (
    <section id="Hero" className="relative w-full h-screen overflow-hidden bg-white">
      {/* BACKGROUND VIDEO */}
      {/* Removed bg-black/40 overlay. Video is now raw brightness. */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* RENDER MOBILE VERSION (Hidden on md screens and up) */}
      <div className="block md:hidden h-full">
        <MobileHero />
      </div>

      {/* RENDER DESKTOP VERSION (Hidden on small screens) */}
      <div className="hidden md:block h-full">
        <DesktopHero />
      </div>
    </section>
  );
}