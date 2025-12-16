import { motion } from "framer-motion";

const features = [
  {
    title: "Real-Scale AR Preview",
    desc: "Place furniture in your real space with perfect scale accuracy.",
  },
  {
    title: "Instant Style Compare",
    desc: "Switch designs live and compare instantly.",
  },
  {
    title: "True Lighting Match",
    desc: "Realistic lighting based on your room.",
  },
];

export default function FeaturesScroll() {
  return (
    <div
      id="Features"
      className="h-screen bg-[#dbdbdb] flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 px-20">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, rotateX: -25 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              z: 50,
            }}
            className="bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-2xl cursor-pointer"
          >
            <h3 className="font-[Anton] text-3xl mb-4 text-[#231f20]">
              {f.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
