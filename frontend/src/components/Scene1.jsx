import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import Lights from "./Lights";
import { useMemo } from "react";
// Add useMemo to imports: import { useRef, useEffect, useMemo } from "react";

function GLBModel() {
  const ref = useRef();
  const { scene, animations } = useGLTF("/models/model2-transformed.glb");
  const mixer = useRef();
  const clock = new THREE.Clock();

  // 1. Create ONE shared material for the whole model (Much faster for GPU)
  const sharedMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: "#eeeeee",
      roughness: 0.25,
      metalness: 0.05,
      envMapIntensity: 1.5,
    });
  }, []);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // 2. Assign the shared material instead of cloning a new one
        // Inside your material setup
        child.material.envMapIntensity = 2; // Increase this (try 2 or 3).
        // This creates the "shiny/bright" look without needing a strong light source.

        // 3. Keep shadows if you really need them, but they are expensive
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => mixer.current.clipAction(clip).play());
    }
  }, [scene, animations, sharedMaterial]); // Add sharedMaterial to dependency

  // ... rest of your code

  useFrame(() => {
    mixer.current?.update(clock.getDelta());
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      position={[0.2, -0.32, -1.35]}
      rotation={[0, Math.PI / 6.3, 0]}
      scale={0.94}
    />
  );
}

import { Environment, ContactShadows } from "@react-three/drei";
// import Lights from "./Lights";  <-- DELETE or Comment this out

export default function Scene1({ onLoad }) {
  useEffect(() => {
    if (onLoad) onLoad();
  }, [onLoad]);

  return (
    <>
      {/* 1. THE REPLACEMENT LIGHTING */}
      {/* This simulates realistic studio lighting without heavy math. 
          Presets: "studio", "city", "sunset", "apartment", "dawn" */}
      <Environment preset="city" />

      {/* 2. OPTIONAL: One subtle directional light IF you need highlights */}
      {/* Turn OFF shadows on this light to save GPU. Let ContactShadows handle the floor. */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.5}
        castShadow={false}
      />

      {/* 3. YOUR MODEL */}
      <GLBModel />

      {/* 4. THE CHEAP SHADOW */}
      <ContactShadows
        position={[0, -0.33, 0]}
        opacity={0.4}
        scale={10}
        blur={2}
        far={1}
        resolution={256} // Lower resolution = faster
        color="#000000"
      />
    </>
  );
}
