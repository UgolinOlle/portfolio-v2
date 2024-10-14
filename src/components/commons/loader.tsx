/**
 * @file loader.tsx
 * @description Loader component
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

'use client';

// --- Imports
import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';

/**
 * @function lerp
 * @description Linear interpolation function
 * @param start {number} The start value
 * @param end {number} The end value
 * @param t {number} The interpolation factor
 * @returns {number} The interpolated value
 */
function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}

/**
 * @function AnimatedSphereWithOrbit
 * @description Animated sphere with orbit component
 * @param position {number[]} The position of the sphere
 * @param color {string} The color of the sphere
 * @param speed {number} The speed of the sphere
 * @param orbitRadius {number} The orbit radius of the sphere
 * @param cursorRotation {number[]} The cursor rotation of the sphere
 * @returns {React.JSX.Element} The animated sphere with orbit component
 */
function AnimatedSphereWithOrbit({
  position,
  color,
  speed,
  orbitRadius,
  cursorRotation,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  orbitRadius: number;
  cursorRotation: { x: number; y: number };
}) {
  // --- Variables
  const meshRef = useRef<THREE.Mesh>(null!);
  const orbitRef = useRef<THREE.Group>(null!);
  const trailRef = useRef<THREE.BufferGeometry>(null!);
  const trailPositions = useMemo(() => new Float32Array(300 * 3), []);
  const smoothRotation = useRef({ x: 0, y: 0 });

  // --- Functions
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    const newX = Math.cos(t) * orbitRadius;
    const newZ = Math.sin(t) * orbitRadius;
    const newY = Math.sin(t * 2) * (orbitRadius / 2);

    meshRef.current.position.set(newX, newY, newZ);

    smoothRotation.current.x = lerp(smoothRotation.current.x, cursorRotation.x * 0.001, 0.05);
    smoothRotation.current.y = lerp(smoothRotation.current.y, cursorRotation.y * 0.001, 0.05);

    orbitRef.current.rotation.y = smoothRotation.current.x;
    orbitRef.current.rotation.x = smoothRotation.current.y;

    trailPositions.copyWithin(3, 0);
    trailPositions[0] = newX;
    trailPositions[1] = newY;
    trailPositions[2] = newZ;
    trailRef.current.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
    trailRef.current.attributes.position.needsUpdate = true;
  });

  const orbitPoints = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle) * orbitRadius, 0, Math.sin(angle) * orbitRadius));
    }
    return points;
  }, [orbitRadius]);

  // --- Render
  return (
    <group ref={orbitRef} position={position}>
      <Sphere args={[0.2, 32, 32]}>
        <meshPhongMaterial color={color} />
      </Sphere>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
      <line>
        <bufferGeometry ref={trailRef}>
          <bufferAttribute
            attach="attributes-position"
            count={trailPositions.length / 3}
            array={trailPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={color} opacity={0.5} transparent={true} />
      </line>
      <Line points={orbitPoints} color={color} lineWidth={1} />
    </group>
  );
}

/**
 * @function Scene
 * @description Scene component
 * @returns {React.JSX.Element} The scene component
 */
function Scene() {
  // --- Variables
  const baseColor = new THREE.Color('hsl(262, 100%, 49%)');
  const lighterColor = new THREE.Color('hsl(262, 100%, 70%)');
  const darkerColor = new THREE.Color('hsl(262, 100%, 30%)');
  const [cursorRotation, setCursorRotation] = useState({ x: 0, y: 0 });

  // --- Functions
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorRotation({
        x: event.clientX - window.innerWidth / 2,
        y: event.clientY - window.innerHeight / 2,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // --- Render
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
        <meshPhongMaterial color={darkerColor} />
      </Sphere>
      <AnimatedSphereWithOrbit
        position={[0, 0, 0]}
        color={baseColor.getStyle()}
        speed={1}
        orbitRadius={2}
        cursorRotation={cursorRotation}
      />
      <AnimatedSphereWithOrbit
        position={[0, 0, 0]}
        color={lighterColor.getStyle()}
        speed={1.2}
        orbitRadius={2.5}
        cursorRotation={cursorRotation}
      />
      <AnimatedSphereWithOrbit
        position={[0, 0, 0]}
        color={baseColor.getStyle()}
        speed={0.8}
        orbitRadius={3}
        cursorRotation={cursorRotation}
      />
      <AnimatedSphereWithOrbit
        position={[0, 0, 0]}
        color={lighterColor.getStyle()}
        speed={1.5}
        orbitRadius={3.5}
        cursorRotation={cursorRotation}
      />
      <AnimatedSphereWithOrbit
        position={[0, 0, 0]}
        color={baseColor.getStyle()}
        speed={0.9}
        orbitRadius={4}
        cursorRotation={cursorRotation}
      />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

/**
 * @name SphereOrbitalTracerLoader
 * @description Sphere orbital tracer loader component
 * @returns {React.JSX.Element} The sphere orbital tracer loader component
 */
export const SphereOrbitalTracerLoader = () => {
  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [0, 0, 12] }}>
        <Scene />
      </Canvas>
    </div>
  );
};
