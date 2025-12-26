import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const steps = [
  {
    step: "01",
    title: "YOUR SPACE, CAPTURED ACCURATELY",
    subtitle: "True-Scale Environment Scanning",
    desc: "Lumeo scans your room exactly as it is walls, floors, corners, and depth — without shrinking or approximating dimensions. What you see in AR matches your real space, down to the last measurement.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    color: "from-[#fbb040] to-[#f7931e]",
  },
  {
    step: "02",
    title: "DISCOVER FURNITURE THAT FITS",
    subtitle: "An AR-Ready Marketplace",
    desc: "Scroll through a curated furniture marketplace where every product is AR enabled. Instantly preview items inside your home before making any decision.",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
    color: "from-[#f7931e] to-[#fbb040]",
  },
  {
    step: "03",
    title: "PLACE IT. MOVE IT. TRUST IT.",
    subtitle: "Accurate AR Placement",
    desc: "Place furniture in your space and walk around it freely. Lumeo preserves correct proportions, spacing, and perspective. So what fits in AR will fit in real life.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    color: "from-[#fbb040] to-[#f7931e]",
  },
  {
    step: "04",
    title: "SMART RECOMMENDATIONS",
    subtitle: "AI That Understands Your Space",
    desc: "Lumeo analyzes your environment and suggests furniture that matches your room. Once an item is placed, complementary pieces are recommended automatically.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    color: "from-[#f7931e] to-[#fbb040]",
  },
  {
    step: "05",
    title: "BUILT FOR SELLERS",
    subtitle: "From Blueprint to Buyer",
    desc: "Sellers can convert blueprints into 3D models, accept custom orders, and manage everything from a single dashboard including performance and sales insights.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    color: "from-[#fbb040] to-[#f7931e]",
  },
];


export default function HowItWorks() {
  return (
    <div className="bg-[#0a0a0a]">
      <HeroSection />
      {steps.map((step, i) => (
        <StoryStep key={i} step={step} index={i} total={steps.length} />
      ))}
      <ClosingSection />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 }); // initial off-screen

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = ref.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const node = ref.current;
    node.addEventListener("mousemove", handleMouseMove);
    return () => node.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[50vh] min-h-[420px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#231b16] to-[#0a0a0a]"

    >
    {/* Award-style organic gradient drift */}
<div className="absolute inset-0 overflow-hidden">
  <motion.div
    className="absolute inset-[-20%] opacity-30"
    style={{
      background: `
        radial-gradient(circle at 30% 30%, rgba(251,176,64,0.25), transparent 45%),
        radial-gradient(circle at 70% 25%, rgba(247,147,30,0.18), transparent 45%),
        radial-gradient(circle at 50% 75%, rgba(251,176,64,0.2), transparent 45%)
      `,
      filter: "blur(40px)",
    }}
    animate={{
      x: ["-4%", "4%", "-4%"],
      y: ["-3%", "3%", "-3%"],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 40,        // very slow = premium
      ease: "easeInOut",
      repeat: Infinity,
    }}
  />
</div>


      {/* Grid overlay with mouse highlight */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(251, 176, 64, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 176, 64, 0.1) 1px, transparent 1px),
            radial-gradient(circle 60px at ${mousePos.x}px ${mousePos.y}px, rgba(251, 176, 64, 0.25), transparent 70%)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-none"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#fbb040] via-[#f7931e] to-[#fbb040]">
              HOW
            </span>
            <span className="block text-white">IT WORKS</span>
          </motion.h1>

          <motion.div
            className="mt-12 h-px w-64 mx-auto bg-gradient-to-r from-transparent via-[#fbb040] to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />

          <motion.p
            className="mt-12 text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Experience the future of spatial visualization
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}



function StoryStep({ step, index, total }) {
  const ref = useRef(null);
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center py-32 px-6 bg-gradient-to-r from-[#231b16] to-[#0a0a0a]"
    >
      <div className="relative z-10 max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* IMAGE SIDE */}
        <motion.div
          className={`order-1 ${isEven ? 'md:order-1' : 'md:order-2'}`}
          initial={{ opacity: 0, x: isEven ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <motion.img
                src={step.image}
                alt={step.title}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-30 mix-blend-overlay`} />
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: '0 0 60px rgba(251, 176, 64, 0.7)' }}
              />
              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-[#fbb040]"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${isEven ? -5 : 105}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          className={`order-2 ${isEven ? 'md:order-2' : 'md:order-1'}`}
          initial={{ opacity: 0, x: isEven ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Step number */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className={`text-8xl md:text-9xl font-[Anton] leading-none text-transparent bg-clip-text bg-gradient-to-br ${step.color} `}>
              {step.step}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-[Anton] text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {step.title}
          </motion.h2>

          {/* Subtitle button */}
          <motion.div
            className={`inline-block px-6 py-3 bg-gradient-to-r ${step.color} mb-6`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-sm font-outfit text-black">
              {step.subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-outfit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {step.desc}
          </motion.p>

          {/* Animated line */}
          <motion.div
            className="relative h-1 w-full bg-white/10 rounded-full overflow-hidden"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ transformOrigin: "left" }}
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${step.color}`}
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1.5, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Step progress dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {[...Array(total)].map((_, i) => (
          <motion.div
            key={i}
            className={`rounded-sm transition-all duration-500 ${i === index ? `w-12 h-2 bg-gradient-to-r ${step.color}` : 'w-2 h-2 bg-white/20'}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center px-6 overflow-visible">
      
      {/* LEFT → RIGHT GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#e5e5e5] to-[#b9b9b9]" />

      <motion.div
        className="relative z-10 text-center max-w-7xl"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.45 }}
      >
        {/* MAIN HEADING — ANTON (ALL CAPS) */}
        <motion.h2
          className="font-[Anton] text-6xl sm:text-7xl md:text-8xl leading-[0.95] text-[#636363]"
          initial={{ letterSpacing: "0.35em", opacity: 0 }}
          whileInView={{ letterSpacing: "0em", opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          BUILT FOR REAL SPACES
        </motion.h2>

        {/* SUPPORT TEXT — OUTFIT (paragraph style, light font) */}
        <motion.p
          className="mt-6 font-[Outfit] font-light text-xl sm:text-2xl md:text-3xl text-[#636363] max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          See scale. Feel proportion. Make decisions with clarity.
        </motion.p>

        {/* STRONG DIVIDER */}
        <motion.div
          className="mt-10 mx-auto h-[3px] w-48 bg-gradient-to-r from-[#636363] via-[#636363] to-[#636363]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "center" }}
        />
      </motion.div>
    </section>
  );
}
