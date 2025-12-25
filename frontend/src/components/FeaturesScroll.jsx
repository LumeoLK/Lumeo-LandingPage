import React, { useRef, Suspense, use } from "react";
import { Canvas, useFrame } from "@react-three/fiber"; // Import useFrame
import { Environment, ScrollControls, useScroll, useTexture } from "@react-three/drei"; // Import ScrollControls & useScroll
import { Model } from "./Iphone.jsx";
import * as THREE from 'three'

function Experience() {
  const leftImgRef = useRef();
  const rightImgRef = useRef();
  
  // This hook gives us data about the scroll (0 = top, 1 = bottom)
  const scroll = useScroll();
const texture = useTexture('/public/ai-chip-artificial-intelligence-future-technology-innovation.jpg')
const text2=useTexture('public/Augmented-REality-adalah-1.jpg')
  // useFrame runs 60 times per second (like a game loop)
  useFrame(() => {
    // scroll.offset is a number between 0 and 1
    // We want the images to start at 0 (center) and move to 12 (sides)
    
    // Left Image: Moves from 0 to -12
    if (leftImgRef.current) {
        leftImgRef.current.position.x = -THREE.MathUtils.lerp(0, 12, scroll.offset);
    }

    // Right Image: Moves from 0 to 12
    if (rightImgRef.current) {
        rightImgRef.current.position.x = THREE.MathUtils.lerp(0, 12, scroll.offset);
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* The iPhone */}
      <Suspense fallback={null}>
        <Model
          position={[0, -1, 0]}
          scale={80}
          rotation={[0, Math.PI / 0.5, 0]}
        />
      </Suspense>

      {/* Left Image (Blue) */}
      <mesh ref={leftImgRef} position={[0, 0, -5]} scale={[8, 14, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={texture} />
      </mesh>

      {/* Right Image (Pink) */}
      <mesh ref={rightImgRef} position={[0, 0, -5]} scale={[8, 14, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={text2} />
      </mesh>
    </>
  );
}

export default function App() {
  return (
    // Clean Container - No "fixed" hacks needed
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 35], fov: 50 }}>
        
        {/* ScrollControls handles the scrolling logic for us. 
            pages={3} means the scroll height is 300vh.
            damping={0.2} adds the smooth "weight" to the scroll. 
        */}
        <ScrollControls pages={3} damping={0.2}>
          <Experience />
        </ScrollControls>
        
      </Canvas>
    </div>
  );
}