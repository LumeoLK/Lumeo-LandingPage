import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Scan Your Space", desc: "Use your phone to capture your room dimensions." },
  { step: "02", title: "Place & Compare", desc: "Drop furniture into your space and compare instantly." },
  { step: "03", title: "Buy with Confidence", desc: "What you see is exactly what you get." },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#dbdbdb] px-24 py-32">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-[Anton] text-[4rem] md:text-[5rem] text-[#231f20] mb-20"
      >
        How LUMEO Works
      </motion.h2>

      <div className="space-y-24">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            className="flex flex-col md:flex-row items-start md:items-center cursor-pointer group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.4, type: "spring", stiffness: 120 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="font-[Anton] text-[6rem] md:text-[7rem] text-[#fbb040] opacity-30 md:w-32 group-hover:text-[#ff9500] transition-colors duration-300"
            >
              {s.step}
            </motion.span>
            <motion.div
              className="mt-4 md:mt-0 md:ml-8 max-w-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <h3 className="font-[Anton] text-3xl md:text-4xl text-[#231f20] group-hover:text-[#fbb040] transition-colors duration-300">{s.title}</h3>
              <p className="mt-2 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{s.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
