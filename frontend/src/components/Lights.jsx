import React from "react";
import { Environment, Lightformer } from "@react-three/drei";

export default function Lights() {
  return (
    <group name="lights">
      <ambientLight intensity={0.6} color={"#ffffff"} />

      <directionalLight
        position={[-30, 40, 20]}
        intensity={1.2}
        color={"#ffffff"}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-radius={5}
      />

      <spotLight
        position={[20, 15, -20]}
        angle={0.4}
        decay={2}
        intensity={0.3}
        color={"#f0f0f0"}
      />

      <Environment resolution={256}>
        <Lightformer
          form="rect"
          intensity={1.2}
          position={[0, 20, 0]}
          scale={40}
        />
      </Environment>
    </group>
  );
}