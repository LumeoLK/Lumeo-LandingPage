import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ================= TEAM DATA ================= */
const teamMembers = [
  {
    id: 1,
    name: "Vinuka Jayavihan",
    role: "FOUNDER",
    code: "AX-01",
    img: "public/assets/vinuka.jpg",
  },
  {
    id: 2,
    name: "Samindi Liyanage",
    role: "PRODUCT",
    code: "SR-88",
    img: "public/assets/umesha.jpg",
  },
  {
    id: 3,
    name: "Pulina Pasan",
    role: "ENGINEER",
    code: "DK-92",
    img: "public/assets/pulina.jpg",
  },
  {
    id: 4,
    name: "Induwara Dilshan",
    role: "DESIGNER",
    code: "ER-04",
    img: "public/assets/induwara.jpeg",
  },
  {
    id: 5,
    name: "Mayura Thayalan",
    role: "MARKETING",
    code: "MT-05",
    img: "public/assets/mayura.jpeg",
  },
  {
    id: 6,
    name: "Maneth Kaveen",
    role: "OPS LEAD",
    code: "LW-06",
    img: "public/assets/maneth.jpg",
  },
];

/* ================= RANDOM HUD DATA ================= */
const RandomData = () => {
  const [num, setNum] = useState("00.00");

  useEffect(() => {
    const i = setInterval(
      () => setNum((Math.random() * 100).toFixed(2)),
      150
    );
    return () => clearInterval(i);
  }, []);

  return <span className="font-mono text-xs text-[#fbb040]">{num}</span>;
};

/* ================= CARD ================= */
const ScannerCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  const nameParts = member.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <div
      className="relative w-[280px] md:w-[320px] h-[500px] bg-neutral-900 overflow-hidden border border-neutral-800 cursor-crosshair flex-shrink-0 group select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ---------- LAYER 1 : BLUEPRINT ---------- */}
      <div className="absolute inset-0 z-0">
        <img
          src={member.img}
          alt="blueprint"
          className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
          style={{
            filter:
              "grayscale(100%) sepia(25%) hue-rotate(360deg) brightness(0.9) contrast(1.2)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,13,13,0)_1px,transparent_1px),linear-gradient(90deg,rgba(13,13,13,0)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      {/* ---------- LAYER 2 : REAL IMAGE REVEAL ---------- */}
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{
          clipPath: isHovered ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
        }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        className="absolute inset-0 z-10"
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </motion.div>

      {/* ---------- LAYER 3 : SCANNER LINE ---------- */}
      <motion.div
        initial={{ top: "100%" }}
        animate={{ top: isHovered ? "0%" : "100%" }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        className="absolute left-0 right-0 h-[2px] z-20 bg-[#fbb040] shadow-[0_0_20px_#fbb040]"
      />

      {/* ---------- LAYER 4 : FULL CARD BOTTOM GRADIENT ---------- */}
      <div
        className="absolute inset-x-0 bottom-0 h-[45%] z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.45), rgba(0,0,0,0))",
        }}
      />

      {/* ---------- LAYER 5 : NAME ONLY ---------- */}
      <div className="absolute inset-0 z-30 p-5 flex flex-col justify-end items-center pointer-events-none">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{
            y: isHovered ? 0 : 40,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h3 className="text-4xl md:text-5xl font-[Anton] text-white uppercase leading-[0.9]">
            {firstName}
          </h3>
          <p className="text-white/80 text-sm uppercase tracking-wide mt-1">
            {lastName}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

/* ================= MAIN SECTION ================= */
const TeamScanner = () => {
  const infiniteMembers = [...teamMembers, ...teamMembers];

  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* BACKGROUND GRID */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 w-full">
        {/* HEADER */}
        <div className="flex justify-between items-end max-w-[90%] mx-auto mb-8 border-b border-white/10 pb-4">
          <h2 className="text-white text-[3rem] md:text-[4rem] font-[Anton] leading-none">
            THE <span className="stroke-text">OPERATORS</span>
          </h2>
          <p className="hidden md:block text-[#fbb040] font-mono text-xs">
            SYSTEM STATUS: ONLINE
          </p>
        </div>

        <style jsx>{`
          .stroke-text {
            -webkit-text-stroke: 1px white;
            color: transparent;
          }
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .scroll {
            animation: scroll 30s linear infinite;
          }
          .scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* SCROLL */}
        <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-6 w-max scroll px-6">
            {infiniteMembers.map((m, i) => (
              <ScannerCard key={`${m.id}-${i}`} member={m} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamScanner;
