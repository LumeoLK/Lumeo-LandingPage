import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

// --- Shaders ---
const vertexShader = `
  uniform float uTime;
  uniform vec2 uHover;
  uniform float uHoverStrength;

  void main() {
    vec3 pos = position;

    float wave = sin(pos.x * 0.3 + uTime) * 0.15;
    wave += cos(pos.z * 0.3 + uTime) * 0.15;

    float dist = distance(vec2(pos.x, pos.z), uHover);
    float bulge = smoothstep(4.5, 0.0, dist) * 0.35 * uHoverStrength;

    pos.y += wave + bulge;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  void main() {
    gl_FragColor = vec4(uColor, 0.35);
  }
`;

// --- Components ---

const NeonGrid = () => {
  const materialRef = useRef();

  // Memoize uniforms so they aren't recreated on every render
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uHover: { value: new THREE.Vector2(0.2, 0.1) },
      uHoverStrength: { value: 4 },
      uColor: { value: new THREE.Color(0x00ccff) },
    }),
    []
  );

  useFrame((state) => {
    if (!materialRef.current) return;

    // Logic from your vanilla animate() loop
    // Lerp speed based on hover strength
    const currentStrength = materialRef.current.uniforms.uHoverStrength.value;
    const speed = THREE.MathUtils.lerp(0.02, 0.05, currentStrength);

    materialRef.current.uniforms.uTime.value += speed;
  });

  const handlePointerMove = (e) => {
    // R3F gives us the intersection point automatically
    materialRef.current.uniforms.uHover.value.set(e.point.x, e.point.z);
    materialRef.current.uniforms.uHoverStrength.value = 1;
  };

  const handlePointerOut = () => {
    materialRef.current.uniforms.uHoverStrength.value = 0;
  };

  return (
    <mesh
      rotation-x={-Math.PI / 2}
      position-y={0.02}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
    >
      <planeGeometry args={[20, 20, 160, 160]} />
      <shaderMaterial
        ref={materialRef}
        wireframe
        transparent
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const ChairModel = () => {
  // Handles loading the GLTF.
  // Note: Ensure chair.glb is in your 'public' folder.
  // Use a fallback or try/catch logic if the file might be missing.
  const { scene } = useGLTF("/models/chair.glb");

  // Clone scene to avoid mutation issues if reused,
  // though not strictly necessary for a single instance.
  const primitive = useMemo(() => {
    const clone = scene.clone();
    clone.scale.set(1.5, 1.5, 1.5);
    clone.traverse((obj) => {
      if (obj.isMesh) obj.castShadow = true;
    });
    return clone;
  }, [scene]);

  return <primitive object={primitive} />;
};

// --- Main Scene ---

export default function NeonGridScene() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#000" }}>
      <Canvas shadows>
        {/* Camera */}
        <PerspectiveCamera makeDefault position={[0, 3, 7]} fov={50} />

        {/* Background Color */}
        <color attach="background" args={["#d38b3f"]} />

        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={0.7} castShadow />

        {/* Environment */}
        <mesh position={[0, 5, -10]} rotation-y={Math.PI} receiveShadow>
          <planeGeometry args={[20, 10]} />
          <meshStandardMaterial color={0xd38b3f} roughness={0.9} />
        </mesh>

        <mesh rotation-x={-Math.PI / 2} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color={0x3a2a1a} roughness={0.85} />
        </mesh>

        {/* Interactive Grid */}
        <NeonGrid />

        {/* Model (Wrapped in Suspense for async loading) */}
        <React.Suspense fallback={null}><ChairModel /></React.Suspense>
      </Canvas>
    </div>
  );
}
