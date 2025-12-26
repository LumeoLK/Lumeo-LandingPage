import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================= TEAM DATA ================= */
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

/* ================= FLOATING BACKGROUND TEXT ================= */
const FloatingLumeoText = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="animate-scroll-left whitespace-nowrap text-[20vw] font-bold text-white/10 leading-none py-8">
        LUMEO LUMEO LUMEO LUMEO LUMEO LUMEO LUMEO LUMEO
      </div>
      <div className="animate-scroll-left-delayed whitespace-nowrap text-[20vw] font-bold text-white/10 leading-none py-8 -mt-4">
        LUMEO LUMEO LUMEO LUMEO LUMEO LUMEO LUMEO LUMEO
      </div>
      <div className="animate-scroll-left whitespace-nowrap text-[20vw] font-bold text-white/10 leading-none py-8 -mt-4">
        LUMEO LUMEO LUMEO LUMEO LUMEO LUMEO LUMEO LUMEO
      </div>
    </div>
  );
};

/* ================= CARD ================= */
const ScannerCard = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const nameParts = member.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
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
          <h3 className="text-4xl md:text-5xl font-bold text-white uppercase leading-[0.9]">
            {firstName}
          </h3>
          <p className="text-white/80 text-sm uppercase tracking-wide mt-1">
            {lastName}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ================= MAIN COMPONENT ================= */
const Team = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation on scroll
      gsap.to(titleRef.current, {
        scale: 0.4,
        y: -300,
        opacity: 0.7,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "50% top",
          scrub: 1.5,
        },
      });

      // Background blur on scroll
      gsap.to(bgRef.current, {
        filter: "blur(8px)",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "50% top",
          scrub: 1.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const infiniteMembers = [...teamMembers, ...teamMembers];

  return (
    <div ref={containerRef} className="relative bg-black overflow-hidden">
      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-left-delayed {
          from {
            transform: translateX(-25%);
          }
          to {
            transform: translateX(-75%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-left-delayed {
          animation: scroll-left-delayed 40s linear infinite;
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

      {/* Background LUMEO Text - Only for this section */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <FloatingLumeoText />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-[1] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Title - Transforms on Scroll */}
        <div className="h-screen flex items-center justify-center">
          <div ref={titleRef} className="text-center px-6">
            <h1 className="text-8xl md:text-[12rem] lg:text-[14rem] font-bold text-white uppercase tracking-tight leading-none">
              Meet the <span className="text-[#fbb040]">Team</span>
            </h1>
            <p className="text-white/60 text-xl md:text-2xl mt-8 font-light tracking-wide">
              The minds behind the innovation
            </p>
          </div>
        </div>

        {/* Team Cards Section */}
        <div className="relative bg-black pb-20 pt-10">
          {/* Grid Background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative z-10 w-full">
            {/* Scrolling Cards */}
            <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex gap-6 w-max scroll px-6">
                {infiniteMembers.map((m, i) => (
                  <ScannerCard key={`${m.id}-${i}`} member={m} index={i % teamMembers.length} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;