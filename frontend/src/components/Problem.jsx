import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const comments = [
  "I bought a sofa and it didn’t fit my living room… 😩",
  "The color looked completely different online.",
  "Returns are such a hassle, wish I could see it first!",
  "Spent hours measuring and still got it wrong.",
  "Photos are deceiving, the scale is way off!",
  "Wish I could try AR before buying furniture…",
  "Every purchase feels like a gamble.",
];

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

export default function Problem() {
  const width = 1440;
  const height = 800;

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % comments.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const lines = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    baseY: 80 + i * 60 + Math.random() * 40,
    amplitude: 10 + Math.random() * 15,
    duration: 8 + Math.random() * 6,
    control1: 200 + Math.random() * 150,
    control2: 400 + Math.random() * 150,
    control3: 600 + Math.random() * 150,
  }));

  const knots = [
    { cx: 720, cy: 550, rx: 90, ry: 60, duration: 12 },
    { cx: 720, cy: 550, rx: 60, ry: 40, duration: 10 },
    { cx: 720, cy: 550, rx: 35, ry: 25, duration: 8 },
  ];

  return (
    <section
      // Kept the top padding adjustment to clear the navbar
      className="relative px-4 pt-32 pb-16 lg:px-16 lg:pt-40 lg:pb-28 overflow-hidden w-full min-h-screen flex flex-col justify-center"
      style={{ backgroundColor: "#231b16ff" }}
    >
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {lines.map((line) => {
          const { id, baseY, amplitude, duration, control1, control2, control3 } = line;
          const pathStart = `M0 ${baseY} C ${control1} ${baseY + amplitude}, ${control2} ${baseY - amplitude}, ${control3} ${baseY} S 1440 ${baseY + amplitude}, 1440 ${baseY}`;
          const pathWave = [
            pathStart,
            `M0 ${baseY + amplitude / 2} C ${control1} ${baseY + amplitude * 1.5}, ${control2} ${baseY - amplitude / 2}, ${control3} ${baseY + amplitude / 2} S 1440 ${baseY + amplitude * 1.2}, 1440 ${baseY + amplitude / 2}`,
            pathStart,
          ];
          return (
            <motion.path
              key={id}
              d={pathStart}
              stroke="#fbb040"
              strokeWidth="2"
              fill="transparent"
              strokeLinecap="round"
              opacity={0.15 + Math.random() * 0.05}
              animate={{ d: pathWave }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          );
        })}
        {knots.map((k, i) => (
          <motion.ellipse
            key={i}
            cx={k.cx}
            cy={k.cy}
            rx={k.rx}
            ry={k.ry}
            stroke="#fbb040"
            strokeWidth="2"
            fill="transparent"
            opacity="0.12"
            animate={{
              rx: [k.rx, k.rx + 5, k.rx],
              ry: [k.ry, k.ry + 5, k.ry],
            }}
            transition={{
              duration: k.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </svg>
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/pattern.svg')] bg-cover pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8 relative z-10 w-full max-w-7xl mx-auto">
        
        {/* LEFT: Headline */}
        <div className="flex-1 w-full text-center lg:text-left mt-[-50px]">
          <h2 className="font-[Anton] text-white leading-[1.05] relative w-full">
            <motion.span
              className="block tracking-tight relative overflow-hidden"
              style={{ fontSize: "clamp(3.5rem, 9vw, 5.5rem)" }} 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <span className="absolute inset-0 bg-[#fbb040] translate-x-[-100%] animate-slideRight rounded-full"></span>
              <span className="relative block " style={{ fontSize: "clamp(5rem, 14vw, 9rem)" }}>
                <div className="overflow-hidden py-0 w-full lg:w-100">
                  <StaggerText>BUYING</StaggerText>
                </div>
              </span>
            </motion.span>
            <motion.span
              className="block tracking-tight relative overflow-hidden"
              style={{ fontSize: "clamp(3.5rem, 9vw, 5.5rem)" }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <span className="absolute inset-0 bg-[#fbb040] translate-x-[-100%] animate-slideRight rounded-full"></span>
              <span className="relative block" style={{ fontSize: "clamp(4.5rem, 13vw, 8rem)" }}>
                <div className="overflow-hidden py-0 w-full lg:w-120">
                  <StaggerText>FURNITURE</StaggerText>
                </div>
              </span>
            </motion.span>
            <motion.span
              className="block tracking-wide relative overflow-hidden mt-[-10px]"
              style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <span className="absolute inset-0 bg-[#fbb040] translate-x-[-100%] animate-slideRight rounded-full"></span>
              <span className="relative block ">
                <span className="text-[#fbb040] mr-3"><StaggerText>ONLINE</StaggerText></span> 
                <StaggerText>SHOULDN'T</StaggerText>
              </span>
            </motion.span>
            <motion.span
              className="block tracking-tight relative overflow-hidden mt-2"
              style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            >
              <span className="absolute inset-0 bg-[#fbb040] translate-x-[-100%] animate-slideRight rounded-full"></span>
              <span className="relative block ">
                <span className="mr-3"><StaggerText>BE A</StaggerText></span> 
                <span className="text-[#fbb040]"><StaggerText>GAMBLE</StaggerText></span>
              </span>
            </motion.span>
          </h2>
          <p className="text-gray-300 text-md md:text-lg max-w-lg mt-4 mx-auto lg:mx-0">
            Dimensions lie. Photos deceive. Returns cost time and money. 
            These are real frustrations your customers face.
          </p>
        </div>

        {/* RIGHT: Comments Feed */}
        <div className="flex-1 relative w-full h-[150px] lg:h-[600px] mt-8 lg:mt-0 flex items-center justify-center lg:block">
          
          {/* MOBILE VIEW: Single Loop Slider */}
          {isMobile ? (
            <div className="relative w-full max-w-md h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index} 
                  initial={{ x: 100, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }}   
                  exit={{ x: -100, opacity: 0 }}   
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-[#43311d] p-6 rounded-xl shadow-md w-full border border-white/5 absolute top-0 left-0"
                >
                  <p className="text-gray-100 text-lg">{comments[index]}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            
            /* DESKTOP VIEW: Original Waterfall Stack */
            /* Removed 'w-full' so cards shrink-wrap text (not a blocky column) */
            comments.map((comment, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.4, type: "spring", stiffness: 120 }}
                viewport={{ once: true }}
                className="bg-[#43311d] p-4 rounded-xl shadow-md max-w-md absolute right-0 cursor-pointer hover:scale-105 transition-transform duration-300"
                style={{ 
                  top: i * 70, 
                  rotate: (Math.random() - 0.5) * 2 
                }}
              >
                <p className="text-gray-100 text-lg">{comment}</p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
