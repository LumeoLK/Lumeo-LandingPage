// src/components/Interior.jsx
import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model } from "./Mesh";

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
          {/* <directionalLight position={[5, 10, 5]} intensity={0.5} /> */}
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

      {/* 2. THE UI OVERLAY (Text) */}
      <div className="absolute inset-0 z-10 flex items-center justify-end px-20 pointer-events-none">
        <div className="max-w-3xl text-right">
          <h1 className="text-8xl font-black text-[#1a1a1a] uppercase leading-[0.85] tracking-tighter">
            See it <br /> Before <br />
            You Buy It
          </h1>
          <p className="mt-6 text-xl font-medium text-neutral-700 max-w-lg ml-auto">
            Experience furniture in your space before you spend a dime. Scan,
            visualize, and decide with confidence.
          </p>

          {/* Optional CTA Button (Enable pointer events for buttons) */}
          <button className="mt-8 px-8 py-4 bg-[#1a1a1a] text-white text-lg font-bold rounded-full pointer-events-auto hover:bg-neutral-800 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
