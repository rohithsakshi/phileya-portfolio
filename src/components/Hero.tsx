'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Hero({ isActive = true }: { isActive?: boolean }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const handleNav = (id: string) => {
    window.dispatchEvent(new CustomEvent('nav-to-section', { detail: id }));
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Particles */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0 pointer-events-none"
          options={{
            background: { color: "transparent" },
            fpsLimit: 120,
            particles: {
              color: { value: "#7A4954" },
              links: {
                color: "#7A4954",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.6,
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "out" },
              },
              number: {
                density: { enable: true, width: 800 },
                value: 40,
              },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}
      
      <div className="hero-container relative z-10">
        {/* LEFT COLUMN */}
        <div className="hero-left-pane">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="hero-eyebrow"
          >
            BIOMEDICAL PORTFOLIO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="hero-name-text"
          >
            Phileya Susan Koruth.
          </motion.h1>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hero-role-line"
          >
            Biomedical Engineer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hero-bio"
          >
            M.Sc. Biomedical Engineering postgraduate at Heidelberg University with hands-on experience in clinical environments and critical care technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hero-btns"
          >
            <button onClick={() => handleNav('project')} className="btn-work">
              VIEW WORK →
            </button>
            <button className="btn-opps">
              <span className="dot-pulse-rose" />
              OPEN TO OPPORTUNITIES
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="hero-stats-bar"
          >
            <span>M.Sc. STUDENT</span>
            <div className="stat-dot" />
            <span>HEIDELBERG</span>
            <div className="stat-dot" />
            <span>CLINICAL TECH</span>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={isActive ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.95, x: 20 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="hero-right-pane"
        >
          <div className="profile-frame">
            <Image
              src="/phileya-profile.jpg"
              alt="Phileya Susan Koruth"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}