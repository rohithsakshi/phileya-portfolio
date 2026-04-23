'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree, RootState } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 5000;

function Particles({ scrollProgress }: { scrollProgress: number }) {
  const meshRef = useRef<THREE.Points>(null!);
  const { viewport } = useThree();

  // Create target positions from text using a hidden canvas
  const particles = useMemo(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    canvas.width = 1000;
    canvas.height = 200;
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 80px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('PHILEYA SUSAN KORUTH', 500, 100);
    
    const imageData = ctx.getImageData(0, 0, 1000, 200);
    const data = imageData.data;
    const positions: [number, number, number][] = [];
    
    for (let y = 0; y < 200; y += 2) {
      for (let x = 0; x < 1000; x += 2) {
        const index = (y * 1000 + x) * 4;
        if (data[index] > 128) {
          // Normalize to center
          positions.push([
            (x - 500) * 0.02,
            (100 - y) * 0.02,
            0
          ]);
        }
      }
    }
    
    // Pick random subset or pad
    const finalPositions = new Float32Array(PARTICLE_COUNT * 3);
    const randomPositions = new Float32Array(PARTICLE_COUNT * 3);
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const pos = positions[i % positions.length];
      finalPositions[i * 3] = pos[0];
      finalPositions[i * 3 + 1] = pos[1];
      finalPositions[i * 3 + 2] = pos[2];
      
      randomPositions[i * 3] = (Math.random() - 0.5) * 20;
      randomPositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      randomPositions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return { target: finalPositions, random: randomPositions };
  }, []);

  const currentPositions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);

  useFrame((state: RootState) => {
    const time = state.clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
    
    // Lerp based on scroll progress (0 at start, 1 when scrolled)
    // We want it to be "joined" at 0 scroll and "dispersed" at scroll
    // Actually user said "disperse and join when scrolled" 
    // Usually means at start it's the name, as you scroll it breaks.
    
    const factor = Math.min(Math.max(scrollProgress * 2, 0), 1); // Sensitivity

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      
      // Add a bit of noise/movement
      const noiseX = Math.sin(time + i) * 0.02;
      const noiseY = Math.cos(time + i) * 0.02;

      const targetX = particles.target[i3];
      const targetY = particles.target[i3 + 1];
      const targetZ = particles.target[i3 + 2];

      const randomX = particles.random[i3];
      const randomY = particles.random[i3 + 1];
      const randomZ = particles.random[i3 + 2];

      positions[i3] += (THREE.MathUtils.lerp(targetX, randomX, factor) + noiseX - positions[i3]) * 0.1;
      positions[i3 + 1] += (THREE.MathUtils.lerp(targetY, randomY, factor) + noiseY - positions[i3 + 1]) * 0.1;
      positions[i3 + 2] += (THREE.MathUtils.lerp(targetZ, randomZ, factor) - positions[i3 + 2]) * 0.1;
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Rotate slowly
    meshRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={currentPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#7B2FFF"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function ParticleText({ scrollProgress }: { scrollProgress: number }) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Particles scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
