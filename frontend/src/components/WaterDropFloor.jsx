import React, { useRef } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

// --- 1. THE SHADER ---
const WaterDropMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color("#1a1a1a"),
    uFadeDistance: 15.0,
    uHeight: 0.15,
    uFrequency: 2.0, // How many ripples
    uGridSize: 20.0,
  },
  // Vertex Shader (The Ripple Shape)
  `
    uniform float uTime;
    uniform float uHeight;
    uniform float uFrequency;
    varying vec2 vUv;
    varying float vDistance;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Calculate distance from center (0,0)
      float dist = distance(pos.xy, vec2(0.0));
      vDistance = dist;

      // WATER DROP FORMULA
      // We use 'dist' instead of 'x' to make it circular
      // " - uTime" makes the waves move OUTWARDS
      float ripple = sin(dist * uFrequency - uTime) * uHeight;
      
      // Optional: Make ripples smaller as they get further away (damping)
      // Remove specific line below if you want strong ripples everywhere
      ripple *= max(0.0, (1.0 - dist / 10.0)); 

      pos.z += ripple; 

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment Shader (The Grid Lines - Same as before)
  `
    uniform vec3 uColor;
    uniform float uFadeDistance;
    uniform float uGridSize;
    varying vec2 vUv;
    varying float vDistance;

    void main() {
      vec2 grid = abs(fract(vUv * uGridSize - 0.5) - 0.5) / fwidth(vUv * uGridSize);
      float line = min(grid.x, grid.y);
      
      float alpha = 1.0 - min(line, 1.0);
      float fade = 1.0 - smoothstep(0.0, uFadeDistance, vDistance);
      alpha *= fade;

      if (alpha < 0.01) discard;

      gl_FragColor = vec4(uColor, alpha);
    }
  `
);

extend({ WaterDropMaterial });

// --- 2. THE COMPONENT ---
export default function WaterDropFloor({
  speed = 1.5, // How fast ripples move outward
  height = 0.3, // Ripple height
  frequency = 2.0, // How tight the rings are (higher = more rings)
  gridSize = 20.0,
  color = "#1a1a1a",
}) {
  const materialRef = useRef();

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uTime += delta * speed;
    }
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, Math.PI / 4]} position={[6, -3, 0]}>
      <planeGeometry args={[30, 30, 128, 128]} />{" "}
      {/* Higher segments for smoother circles */}
      {/* @ts-ignore */}
      <waterDropMaterial
        ref={materialRef}
        transparent
        uColor={color}
        uHeight={height}
        uFrequency={frequency}
        uGridSize={gridSize}
      />
    </mesh>
  );
}
