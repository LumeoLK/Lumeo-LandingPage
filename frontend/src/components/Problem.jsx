import { motion } from "framer-motion";

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

export default function Problem() {
  const width = 1440;
  const height = 800;

  // Flowing lines
  const lines = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    baseY: 80 + i * 60 + Math.random() * 40,
    amplitude: 10 + Math.random() * 15,
    duration: 8 + Math.random() * 6,
    control1: 200 + Math.random() * 150,
    control2: 400 + Math.random() * 150,
    control3: 600 + Math.random() * 150,
  }));

  // Circular knot rings in lower-center
  const knots = [
    { cx: 720, cy: 550, rx: 90, ry: 60, duration: 12 }, // Large
    { cx: 720, cy: 550, rx: 60, ry: 40, duration: 10 }, // Medium
    { cx: 720, cy: 550, rx: 35, ry: 25, duration: 8 },  // Small
  ];

  return (
    <section className="relative px-16 py-28 overflow-hidden" style={{ backgroundColor: "#231b16ff" }}>
      {/* Wavy lines SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
      >
        {/* Flowing Wavy Lines */}
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

        {/* Circular Wood Knots */}
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

      {/* Optional subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/pattern.svg')] bg-cover pointer-events-none"></div>

      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 relative z-10">
        {/* LEFT: Headline */}
        <div className="flex-1">
          <h2 className="font-[Anton] text-white leading-[1.05] max-w-lg overflow-hidden relative">
            <motion.span
              className="block text-[4.5rem] md:text-[5.5rem] tracking-tight relative overflow-hidden mt-10p"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <span className="absolute inset-0 bg-[#fbb040] translate-x-[-100%] animate-slideRight rounded-full"></span>
              <span className="relative text-[8rem]"><div className="overflow-hidden py-2 w-90">
              <StaggerText>BUYING</StaggerText>
            </div></span>
            </motion.span>
            <motion.span
              className="block text-[4.5rem] md:text-[5.5rem] tracking-tight relative overflow-hidden mt-10p"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <span className="absolute inset-0 bg-[#fbb040] translate-x-[-100%] animate-slideRight rounded-full"></span>
              <span className="relative text-[8rem]"><div className="overflow-hidden py-2 w-120">
              <StaggerText>FURNITURE</StaggerText>
            </div></span>
            </motion.span>
            
            <motion.span
              className="block text-[3.5rem] md:text-[4.5rem] tracking-wide relative overflow-hidden mt-[-10px]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <span className="absolute inset-0 bg-[#fbb040] translate-x-[-100%] animate-slideRight rounded-full"></span>
              <span className="relative">
                <span className="text-[#fbb040]"><StaggerText>ONLINE</StaggerText></span> <StaggerText>SHOULDN'T</StaggerText>
              </span>
            </motion.span>
            <motion.span
              className="block text-[4rem] md:text-[5rem] tracking-tight relative overflow-hidden mt-[-10px]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            >
              <span className="absolute inset-0 bg-[#fbb040] translate-x-[-100%] animate-slideRight rounded-full"></span>
              <span className="relative"><StaggerText>BE A</StaggerText> <span className="text-[#fbb040]"><StaggerText>GAMBLE</StaggerText></span></span>
            </motion.span>
          </h2>
          <p className="text-gray-300 text-md max-w-md mt-6">
            Dimensions lie. Photos deceive. Returns cost time and money. 
            These are real frustrations your customers face — and they deserve certainty before they commit.
          </p>
        </div>

        {/* RIGHT: Comments Feed */}
        <div className="flex-1 relative mr-0 md:mr-0">
          {comments.map((comment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.4, type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
              className="bg-[#43311d] p-4 rounded-xl shadow-md max-w-md absolute right-0 cursor-pointer hover:scale-105 transition-transform duration-300"
              style={{ top: i * 70, rotate: (Math.random() - 0.5) * 2 }}
            >
              <p className="text-gray-100 text-lg">{comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
