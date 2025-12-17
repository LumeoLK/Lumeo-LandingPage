import React from "react";

const StatementSection = () => {
  return (
    <div className="relative w-full h-full bg-[#1f241a] overflow-hidden flex items-center">
      
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#3a422f_0%,transparent_40%),radial-gradient(circle_at_80%_70%,#3a422f_0%,transparent_45%)]" />

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-12">
        <h2 className="font-[Anton] uppercase leading-[0.95] tracking-tight text-[#e5e5dc]">
          <span className="block text-[clamp(3rem,8vw,7.5rem)] text-[#b9cf3a]">
            Redefining
          </span>
          <span className="block text-[clamp(3rem,8vw,7.5rem)]">Limits,</span>
          <span className="block text-[clamp(3rem,8vw,7.5rem)]">
            Fighting for <span className="text-[#b9cf3a]">Wins</span>
          </span>
          <span className="block text-[clamp(3rem,8vw,7.5rem)]">
            Defining a <span className="text-[#b9cf3a]">Legacy</span>
          </span>
        </h2>
      </div>

    </div>
  );
};

export default StatementSection;
