import React from "react";
import Scene1 from "./Scene1.jsx";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <Scene1 />
      </div>

      {/* Side Accent Line */}
      <div className="absolute left-10 top-20 h-40 w-1 bg-[#717171] "></div>

      {/* Text Section */}
      <div className="absolute top-16 left-28 z-20 max-w-xl space-y-2 ">

        <h1 className="relative text-white font-[Anton] leading-none">

          <span className="block text-[12rem] tracking-tight relative z-20 text-[#231f20] opacity-80">
            TRY IT
          </span>

          <span className="absolute left-19.5 top-1/2 transform -translate-y-1/4 z-25 ">
            <span className="inline-block bg-[#fbb040] px-5 py-2.5 text-[7rem] font-[Anton] tracking-tight drop-shadow-lg">
              BEFORE
            </span>
          </span>

          <span className="block text-[5rem] tracking-tight mt-20 ml-10 relative z-30 text-[#231f20] opacity-80">
            BUY IT
          </span>
        </h1>

        <p className="text-gray-500 text-[1rem] leading-snug tracking-wide mt-5">
          <b>LUMEO</b> lets you preview furniture in your space <br />using real-scale AR,
          compare styles instantly, and <br />make confident interior decisions with
          futuristic precision.
        </p>

        <a
          href="#explore"
          className="
            group relative inline-flex items-center justify-center
            px-7 py-3 rounded-lg overflow-hidden
            font-[Anton] tracking-wider text-3xl uppercase 
            text-[#231f20] opacity-80 border border-[#fbb040]
          "
        >
          {/* Liquid layer */}
          <span
            className="
              absolute bottom-0 left-0 w-full h-0
              bg-[#fbb040]
              transition-all duration-500 ease-out
              group-hover:h-full
              z-0
            "
          ></span>

          {/* Text */}
          <span
            className="
              relative z-10
              transition-colors duration-300
              group-hover:text-white
              drop-shadow-lg
            "
          >
            Explore Now
          </span>
        </a>

      </div>
    </section>
  );
};

export default Hero;