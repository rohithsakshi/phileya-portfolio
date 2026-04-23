'use client';

import { useCallback } from 'react';
import type { Engine } from '@tsparticles/engine';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

export default function Hero({ isActive = true }: { isActive?: boolean }) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const name = "Phileya Susan Koruth";
  const subtitle = "M.Sc. Biomedical Engineering · Heidelberg University";
  const tagline = "Clinical tech. Patient safety. Intelligent systems.";

  return (
    <section className="section-wrapper bg-[var(--bg)]">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="h-full w-full"
          options={{
            background: { color: "transparent" },
            fullScreen: { enable: false },
            particles: {
              color: { value: ["#7A4954", "#F5EFDA"] },
              links: { enable: true, opacity: 0.1, color: "#F5EFDA" },
              move: { enable: true, speed: 0.5 },
              number: { value: 50 },
            }
          }}
        />
      </div>

      {/* Hero Content - Centered */}
      <div className="z-20 flex flex-col items-center justify-center text-center w-full px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-[clamp(2rem,8vw,6rem)] font-display text-[var(--cream)] mb-6 whitespace-nowrap"
        >
          {name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xl md:text-2xl text-[var(--cream-muted)] mb-10 font-display"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="px-6 py-2 border-l border-r border-[var(--rosewood)]"
        >
          <p className="text-sm tracking-[0.5em] uppercase text-[var(--rose-light)] font-bold">
            {tagline}
          </p>
        </motion.div>
      </div>

      {/* 3D torus in background */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none">
        {isActive && <Scene3D type="torus" />}
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-0 w-full flex justify-center z-50">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-5xl text-[var(--cream)] opacity-60 font-light"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}