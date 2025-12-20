import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import Lights from "./Lights";

function GLBModel() {
  const ref = useRef();
  const { scene, animations } = useGLTF("/models/model2-transformed.glb");
  const mixer = useRef();
  const clock = new THREE.Clock();

  useEffect(() => {
    // Brighten and style all meshes
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone();
        child.material.color.set("#eeeeee"); // light gray
        child.material.roughness = 0.25;     // smooth
        child.material.metalness = 0.05;     // subtle reflection
        child.material.envMapIntensity = 1.5;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    // Play GLB animations
    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => mixer.current.clipAction(clip).play());
    }
  }, [scene, animations]);

  useFrame(() => {
    mixer.current?.update(clock.getDelta());
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      position={[0.27, -0.32, -1.35]}
      rotation={[0, Math.PI / 6.3, 0]}
      scale={0.94}
    />
  );
}

export default function Scene1({ onLoad }) {
  useEffect(() => {
    if (onLoad) onLoad();
  }, [onLoad]);

  return (
    <>
      <Lights />
      <GLBModel />
    </>
  );
}
