'use client';

import { Canvas, useFrame, RootState } from '@react-three/fiber';
import { Float, Torus, Icosahedron } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AmbientTorus() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state: RootState) => {
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Torus ref={meshRef} args={[2.5, 0.4, 16, 100]}>
        <meshStandardMaterial
          color="#7A4954"
          transparent
          opacity={0.15}
          wireframe
        />
      </Torus>
    </Float>
  );
}

function WireframeIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state: RootState) => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1}>
      <Icosahedron ref={meshRef} args={[1.2, 0]}>
        <meshStandardMaterial color="#7A4954" wireframe />
      </Icosahedron>
    </Float>
  );
}

export default function Scene3D({ type }: { type: 'torus' | 'icosahedron' }) {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#F5EFDA" />
        {type === 'torus' ? <AmbientTorus /> : <WireframeIcosahedron />}
      </Canvas>
    </div>
  );
}
