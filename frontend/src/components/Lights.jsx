import React from "react";
import { Environment, Lightformer } from "@react-three/drei";

export default function Lights() {
  return (
    <group name="lights">
      <ambientLight intensity={0.55} color="#ffffff" />
      <hemisphereLight intensity={0.35} skyColor="#ffffff" groundColor="#dcdcdc" />
      <directionalLight
        position={[25, 35, 15]}
        intensity={1.15}
        color="#fff8ee"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-radius={4}
      />
      <spotLight position={[-15, 20, -10]} angle={0.5} intensity={0.25} decay={2} color="#f4f6ff" />
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={0.8} position={[0, 30, 0]} scale={50} />
      </Environment>
    </group>
  );
}
