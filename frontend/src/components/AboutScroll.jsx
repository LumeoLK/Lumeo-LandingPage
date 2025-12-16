import { motion } from "framer-motion";
import { useState } from "react";

const cards = [
  { title: "Vision", desc: "Reinvent furniture shopping using AR." },
  { title: "Technology", desc: "Cutting-edge WebXR & 3D pipelines." },
  { title: "Precision", desc: "True-scale, real-world accuracy." },
  { title: "Design", desc: "Minimal, bold, human-centered UI." },
  { title: "Trust", desc: "Buy with confidence, zero guesswork." },
  { title: "Future", desc: "The next generation of e-commerce." },
];

export default function AboutScroll() {
  const [active, setActive] = useState(null);

  return (
    <div
      id="aboutus"
      className={`h-screen flex items-center justify-center transition-colors duration-500 ${
        active !== null ? "bg-black" : "bg-[#dbdbdb]"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-20 max-w-6xl">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            onHoverStart={() => setActive(i)}
            onHoverEnd={() => setActive(null)}
            animate={{
              scale: active === i ? 1.1 : 0.95,
              opacity: active === null || active === i ? 1 : 0.3,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white p-8 rounded-3xl shadow-2xl cursor-pointer relative"
          >
            <h3 className="font-[Anton] text-3xl mb-3 text-[#231f20]">
              {c.title}
            </h3>
            <p className="text-gray-600">{c.desc}</p>

            {active === i && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 rounded-3xl ring-4 ring-[#fbb040]"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
