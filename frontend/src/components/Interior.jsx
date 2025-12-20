// src/components/Interior.jsx
import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model } from "./Mesh";

// --- NEW HELPER COMPONENT: The Stagger Effect ---
const StaggerText = ({ children, className = "" }) => {
  // If text is passed as a string, split it. Otherwise, handle gracefully.
  const text = typeof children === "string" ? children : "";

  return (
    <span className={`group inline-block cursor-pointer ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="relative inline-block overflow-hidden align-top"
          style={{ lineHeight: "1em" }} // Ensures height matches text exactly
        >
          {/* The Container that moves up */}
          <span
            className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
            style={{ transitionDelay: `${i * 0.025}s` }} // The "Wave" delay
          >
            {/* 1. Visible Letter */}
            <span className="block">{char === " " ? "\u00A0" : char}</span>

            {/* 2. Hidden Duplicate Letter (comes from bottom) */}
            <span className="block absolute top-full left-0">
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        </span>
      ))}
    </span>
  );
};

export default function Interior() {
  const [currentSelection, setCurrentSelection] = useState(null);

  const handleObjectClick = (e, name) => {
    e.stopPropagation();
    setCurrentSelection(name);
    console.log("Selected:", name);
  };

  return (
    <div className="relative w-screen h-screen bg-[#E5D3B3]">
      {/* 1. THE 3D SCENE */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [30, 5, 0], fov: 20 }}>
          <directionalLight position={[5, 10, 5]} intensity={0.5} />
          <Environment preset="city" />
          {/* <OrbitControls makeDefault /> */}

          <Suspense fallback={null}>
            <Model
              selectedName={currentSelection}
              onObjectClick={handleObjectClick}
              position={[1, -4, 0]}
              scale={2}
              rotation={[0, Math.PI / 155, 0]}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* 2. THE UI OVERLAY */}
      <div className="absolute inset-0 z-10 flex items-center justify-end px-20 pointer-events-none">
        <div className="max-w-3xl text-right">
          {/* 3. HEADLINE WITH STAGGER EFFECT */}
          {/* Added pointer-events-auto so we can hover it */}
          <h1 className="text-8xl font-black text-[#1a1a1a] uppercase leading-[0.85] tracking-tighter pointer-events-auto">
            <div className="overflow-hidden py-2">
              {" "}
              {/* Wrapper for safety */}
              <StaggerText>See it</StaggerText>
            </div>
            <div className="overflow-hidden py-2">
              <StaggerText>Before</StaggerText>
            </div>
            <div className="overflow-hidden py-2">
              <StaggerText>You Buy It</StaggerText>
            </div>
          </h1>

          <p className="mt-6 text-xl font-medium text-neutral-700 max-w-lg ml-auto pointer-events-auto">
            Experience furniture in your space before you spend a dime. Scan,
            visualize, and decide with confidence.
          </p>

          <button className="mt-8 px-8 py-4 bg-[#1a1a1a] text-white text-lg font-bold rounded-full pointer-events-auto hover:bg-neutral-800 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
