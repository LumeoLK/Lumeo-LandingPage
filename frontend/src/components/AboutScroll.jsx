import { motion } from "framer-motion";
import { useState } from "react";

const team = [
  { name: "John Perera", role: "Founder & CEO", desc: "Vision-driven leader shaping the future of AR commerce.", img: "/team/john.jpg" },
  { name: "Amaya Silva", role: "3D Engineer", desc: "Builds real-scale, immersive AR product experiences.", img: "/team/amaya.jpg" },
  { name: "Nimal Fernando", role: "UI/UX Designer", desc: "Designs minimal, human-centered interfaces.", img: "/team/nimal.jpg" },
  { name: "Sara Perera", role: "Marketing Lead", desc: "Connects people with immersive AR experiences.", img: "/team/sara.jpg" },
  { name: "Rohan Silva", role: "Product Manager", desc: "Coordinates innovation and design execution.", img: "/team/rohan.jpg" },
];

export default function AboutScroll() {
  const [active, setActive] = useState(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const positions = [
    { rotate: -25, x: -180, scale: 0.8 },
    { rotate: -12, x: -90, scale: 0.9 },
    { rotate: 0, x: 0, scale: 1 },
    { rotate: 12, x: 90, scale: 0.9 },
    { rotate: 25, x: 180, scale: 0.8 }
  ];

  // Mouse movement for tilt effect
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20; // rotateY max ±10deg
    const y = -((e.clientY - top) / height - 0.5) * 20; // rotateX max ±10deg
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center bg-[#f8f7f0]">
      {/* Intro Text */}
      <div className="px-24 mb-20">
        <h2 className="font-[Anton] text-[5rem] tracking-tight text-[#231f20]">
          Meet Our Team
        </h2>
        <p className="text-xl text-gray-600 max-w-xl">
          The people building the future of immersive furniture shopping.
        </p>
      </div>

      {/* Fan Cards */}
      <div
        className="relative flex justify-center items-center"
        style={{ perspective: "1600px", height: "500px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {team.map((member, i) => {
          const pos = positions[i];
          return (
            <motion.div
              key={i}
              onHoverStart={() => setActive(i)}
              onHoverEnd={() => setActive(null)}
              initial={{
                rotate: pos.rotate,
                x: pos.x,
                scale: pos.scale,
                zIndex: i === 2 ? 10 : 5,
              }}
              animate={{
                rotate: active === i ? 0 : pos.rotate + tilt.y / 2,
                x: active === i ? 0 : pos.x + tilt.x * 4,
                scale: active === i ? 1.05 : pos.scale,
                zIndex: active === i ? 20 : i === 2 ? 10 : 5,
              }}
              transition={{ type: "spring", stiffness: 60, damping: 20, mass: 0.8 }}
              className="absolute w-[320px] h-[440px] rounded-[2.8rem] overflow-hidden shadow-2xl cursor-pointer"
            >
              <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover" />

              {/* Overlay info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.5 }} // smoother fade
                className="absolute inset-0 bg-black/70 p-6 flex flex-col justify-end"
              >
                <h3 className="text-3xl font-[Anton] text-white">{member.name}</h3>
                <span className="text-[#fbb040] uppercase tracking-widest text-sm">{member.role}</span>
                <p className="text-gray-300 mt-2 text-sm">{member.desc}</p>
              </motion.div>

              {/* Light reflection */}
              <div
                className="absolute inset-0 rounded-[2.8rem] pointer-events-none"
                style={{ background: "linear-gradient(120deg, rgba(255,255,255,0.25), transparent)" }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
