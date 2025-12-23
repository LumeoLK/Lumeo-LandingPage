import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Added 6 Members
const teamMembers = [
  {
    id: 1,
    name: "Vinuka Jayavihan",
    role: "FOUNDER",
    code: "AX-01",
    img: "https://www.lumeo.ltd/assets/vinuka.jpg",
  },
  {
    id: 2,
    name: "Samindi Liyanage",
    role: "PRODUCT",
    code: "SR-88",
    img: "https://www.lumeo.ltd/assets/umesha.jpg",
  },
  {
    id: 3,
    name: "Pulina Pasan",
    role: "ENGINEER",
    code: "DK-92",
    img: "https://www.lumeo.ltd/assets/pulina.jpg",
  },
  {
    id: 4,
    name: "Induwara Dilshan",
    role: "DESIGNER",
    code: "ER-04",
    img: "https://www.lumeo.ltd/assets/induwara.jpeg",
  },
  {
    id: 5,
    name: "Mayura Thayalan",
    role: "MARKETING",
    code: "MT-05",
    img: "https://www.lumeo.ltd/assets/mayura.jpeg",
  },
  {
    id: 6,
    name: "Maneth Kaveen",
    role: "OPS LEAD",
    code: "LW-06",
    img: "https://www.lumeo.ltd/assets/maneth.jpg",
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

  // LOGIC: Split the name into First and Last
  const nameParts = member.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" "); // Joins the rest if there are middle names

  return (
    <div
      className="relative w-[280px] md:w-[320px] h-[500px] bg-neutral-900 overflow-hidden cursor-crosshair border border-neutral-800 group flex-shrink-0 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ... [LAYER 1, 2, 3 remain exactly the same] ... */}

      {/* LAYER 1: BLUEPRINT (Included here just to confirm the gradient fix from previous step) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={member.img}
          alt="blueprint"
          className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105 pointer-events-none"
          style={{
            filter:
              "grayscale(100%) sepia(25%) hue-rotate(360deg) saturate(1) brightness(0.95) contrast(1.2)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,13,13,0)_1px,transparent_1px),linear-gradient(90deg,rgba(13,13,13,0)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        {/* The Gradient Overlay you asked for earlier */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div> */}
      </div>

      {/* LAYER 2 & 3 hidden for brevity, keep them as is */}
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

      {/* LAYER 4: HUD - UPDATED FOR NAME SPLIT */}
      <div className="absolute inset-0 z-30 p-5 flex flex-col justify-between pointer-events-none">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <div className="w-8 h-[2px] bg-[#fbb040]/50"></div>
            <div className="text-[#fbb040]/70 text-[10px] tracking-widest font-mono">
              ID: {member.code}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          <div
            className={`flex flex-col items-center transition-transform duration-500 ${
              isHovered ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {/* FIRST NAME: Bigger, Anton Font */}
            <h3 className="text-4xl md:text-5xl font-[Anton] text-white uppercase tracking-wider text-center leading-[0.9]">
              {firstName}
            </h3>

            {/* LAST NAME: Smaller, Calibri-like Font (sans-serif), below first name */}
            <p className="text-white/80 text-sm md:text-base font-sans font-light tracking-wide mt-1 uppercase">
              {lastName}
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-3">
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
  // We double the array to ensure smooth looping
  const infiniteMembers = [...teamMembers, ...teamMembers];

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

      <div className="w-full relative z-10 flex flex-col h-full justify-center">
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
              SYSTEM STATUS: ONLINE
            </p>
          </div>
        </div>

        {/* CSS KEYFRAMES FOR SCROLL 
            We inject this style locally to keep the component self-contained.
        */}
        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll-left 30s linear infinite; /* Adjust '30s' to change speed */
          }

          /* THE MAGIC LINE: Pauses animation on hover */
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* INFINITE SCROLL AREA */}
        <div className="w-full overflow-hidden flex relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-6 w-max animate-scroll">
            {infiniteMembers.map((member, index) => (
              <ScannerCard key={`${member.id}-${index}`} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamScanner;
