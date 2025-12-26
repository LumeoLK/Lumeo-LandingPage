import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, useScroll, useTexture } from "@react-three/drei"; // Removed OrbitControls
import { Model } from "./Iphone.jsx";
import * as THREE from "three";

function Experience() {
  const leftImgRef = useRef();
  const rightImgRef = useRef();
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();

  const scroll = useScroll();

  // Note: In most React frameworks (Vite/Next), you don't need '/public' in the path.
  // just '/filename.jpg' usually works if they are in the public folder.
  const texture = useTexture(
    "https://www.lumeo.ltd/ai-chip-artificial-intelligence-future-technology-innovation.jpg"
  );
  const text2 = useTexture(
    "https://www.lumeo.ltd/Augmented-REality-adalah-1.jpg"
  );
  const text3 = useTexture(
    "https://www.lumeo.ltd/2303_i402_002_s_m004_c13_shortage_of_goods_flat_composition.jpg"
  );
  const text4 = useTexture(
    "https://www.lumeo.ltd/mockup-poster-frame-modern-interior-background-with-armchair-accessories-room.jpg"
  );
  const text5 = useTexture("https://www.lumeo.ltd/2799912.jpg");

  useFrame((state, delta) => {
    // --- 1. SCROLL LOGIC (Existing) ---
    // Left Image: Moves from 0 to -12
    if (leftImgRef.current) {
      leftImgRef.current.position.x = -THREE.MathUtils.lerp(
        0,
        12,
        scroll.offset
      );
    }
    // Right Image: Moves from 0 to 12
    if (rightImgRef.current) {
      rightImgRef.current.position.x = THREE.MathUtils.lerp(
        0,
        12,
        scroll.offset
      );
    }
    if (img1.current) {
      img1.current.position.x = THREE.MathUtils.lerp(0, 0, scroll.offset);
      img1.current.position.y = THREE.MathUtils.lerp(0, 12, scroll.offset);
    }
    if (img2.current) {
      img2.current.position.x = THREE.MathUtils.lerp(0, 0, scroll.offset);
      img2.current.position.y = THREE.MathUtils.lerp(0, -12, scroll.offset);
    }
    if (img3.current) {
      img3.current.position.x = THREE.MathUtils.lerp(0, 10, scroll.offset);
      img3.current.position.y = THREE.MathUtils.lerp(0, -12, scroll.offset);
    }

    // --- 2. MOUSE PARALLAX LOGIC (New) ---
    // state.mouse.x is value from -1 (left) to 1 (right)
    // state.mouse.y is value from -1 (bottom) to 1 (top)

    // We want to move the camera slightly based on mouse position.
    // If mouse goes right (+), Camera goes right (+), so object looks like it goes left.

    const parallaxSpeed = 6; // How much the camera moves
    const smoothing = 4 * delta; // Make the movement smooth

    // Calculate target position based on mouse
    // We keep Z at 35 (your initial camera pos), change X and Y
    const targetX = state.mouse.x * parallaxSpeed;
    const targetY = state.mouse.y * parallaxSpeed;

    // Smoothly interpolate current camera position to the target
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      targetX,
      smoothing
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      targetY,
      smoothing
    );

    // Force camera to always look at the center of the scene
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {/* OrbitControls REMOVED to allow manual camera movement */}

      <Suspense fallback={null}>
        <Model
          position={[0, -1, 0]}
          scale={80}
          rotation={[0, Math.PI / 0.5, 0]}
        />
      </Suspense>

      <mesh ref={leftImgRef} position={[0, 0, -5]} scale={[8, 11, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh ref={img3} position={[0, 0, -5]} scale={[8, 11, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={text5} />
      </mesh>
      <mesh ref={img2} position={[0, 0, -5]} scale={[8, 11, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={text4} />
      </mesh>

      <mesh ref={rightImgRef} position={[0, 0, -5]} scale={[8, 8, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={text2} />
      </mesh>
      <mesh ref={img1} position={[0, 0, -5]} scale={[8, 8, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={text3} />
      </mesh>
    </>
  );
}

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 35], fov: 50 }}>
        <ScrollControls pages={0.7} damping={0.2}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
