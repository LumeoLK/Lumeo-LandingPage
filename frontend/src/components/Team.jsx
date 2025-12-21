import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Added 6 Members
const teamMembers = [
  {
    id: 1,
    name: "ALEX VANCE",
    role: "FOUNDER",
    code: "AX-01",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
  },
  {
    id: 2,
    name: "SARAH JENKINS",
    role: "PRODUCT",
    code: "SR-88",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop",
  },
  {
    id: 3,
    name: "DAVID KANG",
    role: "ENGINEER",
    code: "DK-92",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop",
  },
  {
    id: 4,
    name: "EMILY ROSS",
    role: "DESIGNER",
    code: "ER-04",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",
  },
  {
    id: 5,
    name: "MICHAEL T.",
    role: "MARKETING",
    code: "MT-05",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop",
  },
  {
    id: 6,
    name: "LINDA WU",
    role: "OPS LEAD",
    code: "LW-06",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop",
  },
];

const RandomData = () => {
  const [num, setNum] = useState("00.00");
  useEffect(() => {
    const interval = setInterval(
      () => setNum((Math.random() * 100).toFixed(2)),
      150
    );
    return () => clearInterval(interval);
  }, []);
  return <span className="font-mono text-xs text-[#fbb040]">{num}</span>;
};

const ScannerCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[280px] md:w-[320px] h-[500px] bg-neutral-900 overflow-hidden cursor-crosshair border border-neutral-800 group flex-shrink-0 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* LAYER 1: BLUEPRINT */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={member.img}
          alt="blueprint"
          className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 pointer-events-none"
          style={{
            filter:
              "grayscale(100%) sepia(100%) hue-rotate(170deg) saturate(4) brightness(0.6) contrast(1.2)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,13,13,0)_1px,transparent_1px),linear-gradient(90deg,rgba(13,13,13,0)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      {/* LAYER 2: REALITY */}
      <motion.div
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{
          clipPath: isHovered ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      </motion.div>

      {/* LAYER 3: SCANNER */}
      <motion.div
        initial={{ top: "100%" }}
        animate={{ top: isHovered ? "0%" : "100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute left-0 right-0 h-[2px] z-20 bg-[#fbb040] shadow-[0_0_20px_#fbb040] pointer-events-none"
      />

      {/* LAYER 4: HUD */}
      <div className="absolute inset-0 z-30 p-5 flex flex-col justify-between pointer-events-none">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <div className="w-8 h-[2px] bg-[#fbb040]/50"></div>
            <div className="text-[#fbb040]/70 text-[10px] tracking-widest font-mono">
              ID: {member.code}
            </div>
          </div>
        </div>

        <div>
          <h3
            className={`text-3xl font-[Anton] text-white uppercase tracking-wider transition-transform duration-500 ${
              isHovered ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {member.name}
          </h3>
          <div className="flex items-center gap-4 mt-2">
            <p
              className={`text-[#fbb040] font-mono text-xs tracking-widest transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              // {member.role}
            </p>
            {isHovered && <RandomData />}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamScanner = () => {
  const carouselRef = useRef(null);

  return (
    <div className="w-full h-full bg-black flex flex-col justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="w-full px-8 relative z-10 flex flex-col h-full justify-center">
        {/* Header */}
        <div className="flex items-end justify-between border-b border-white/10 pb-4 mb-8 mx-auto w-full max-w-[90%]">
          <div>
            <h2 className="text-white text-[3rem] md:text-[4rem] font-[Anton] leading-none">
              THE{" "}
              <span className="text-transparent stroke-text">OPERATORS</span>
            </h2>
            <style jsx>{`
              .stroke-text {
                -webkit-text-stroke: 1px white;
              }
            `}</style>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[#fbb040] font-mono text-xs">
              DRAG TO NAVIGATE &lt; &gt;
            </p>
          </div>
        </div>

        {/* DRAGGABLE CAROUSEL AREA */}
        <div
          ref={carouselRef}
          className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
        >
          <motion.div
            className="flex gap-6 px-[5%] w-max"
            drag="x"
            dragConstraints={carouselRef}
            // dragElastic={0.1} adds a nice rubber band effect at the edges
            dragElastic={0.1}
          >
            {teamMembers.map((member) => (
              <ScannerCard key={member.id} member={member} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeamScanner;
