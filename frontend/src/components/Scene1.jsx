import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function GLBModel() {
  const ref = useRef();
  const { scene, animations } = useGLTF("/models/model2-transformed.glb");
  const mixer = useRef();
  const clock = new THREE.Clock();

  useEffect(() => {
    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) =>
        mixer.current.clipAction(clip).play()
      );
    }
  }, [animations, scene]);

  useFrame(() => {
    mixer.current?.update(clock.getDelta());
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      position={[1.2, -0.2, -1]}
      rotation={[0, Math.PI / 5, 0]}
      scale={0.85}
    />
  );
}

export default function Scene1() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 20, 10]} intensity={1} />
      <GLBModel />
    </>
  );
}
