import { motion } from "framer-motion";

const features = [
  { number: "01", title: "Real-Scale AR Placement", desc: "Place furniture in your real space with millimeter-accurate scaling." },
  { number: "02", title: "Instant Style Comparison", desc: "Swap materials, colors, and designs in real time." },
  { number: "03", title: "True Lighting Simulation", desc: "Lighting adapts to your room’s environment automatically." },
  { number: "04", title: "Multi-Store Experience", desc: "Compare products from multiple brands in one space." },
  { number: "05", title: "Zero-Regret Decisions", desc: "Know exactly how it fits before you buy." },
];

export default function FeaturesScroll() {
  return (
    <section className="bg-white px-24 py-32 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-[Anton] text-[4rem] md:text-[5rem] text-[#231f20] mb-20"
      >
        Features
      </motion.h2>

      <div className="space-y-24">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: i * 0.3, type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <span className="font-[Anton] text-[5rem] md:text-[6rem] text-[#fbb040] opacity-30 group-hover:opacity-50 transition-opacity duration-300">
              {f.number}
            </span>
            <h3 className="font-[Anton] text-3xl md:text-4xl text-[#231f20] mt-2 group-hover:text-[#fbb040] transition-colors duration-300">
              {f.title}
            </h3>
            <p className="mt-4 text-gray-700 max-w-xl group-hover:text-gray-900 transition-colors duration-300">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
