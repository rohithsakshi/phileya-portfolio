'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Project from '@/components/Project';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';

const SECTIONS = [
  { id: 'hero', component: Hero },
  { id: 'about', component: About, label: '01 / ABOUT' },
  { id: 'skills', component: Skills, label: '02 / SKILLS' },
  { id: 'experience', component: Experience, label: '03 / EXPERIENCE' },
  { id: 'project', component: Project, label: '04 / PROJECT' },
  { id: 'education', component: Education, label: '05 / EDUCATION' },
  { id: 'contact', component: Contact, label: '06 / CONTACT' },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const isScrolling = useRef(false);

  const goToSection = useCallback((targetIndex: number) => {
    if (targetIndex === index || isScrolling.current) return;
    setDirection(targetIndex > index ? 1 : -1);
    setIndex(targetIndex);
    isScrolling.current = true;
    setTimeout(() => isScrolling.current = false, 1200);
  }, [index]);

  const nextSection = useCallback(() => {
    if (index < SECTIONS.length - 1) goToSection(index + 1);
  }, [index, goToSection]);

  const prevSection = useCallback(() => {
    if (index > 0) goToSection(index - 1);
  }, [index, goToSection]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      if (Math.abs(e.deltaY) > 30) {
        if (e.deltaY > 0) nextSection();
        else prevSection();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;
      if (e.key === 'ArrowDown') nextSection();
      if (e.key === 'ArrowUp') prevSection();
    };

    const handleNavRequest = (e: any) => {
      const targetId = e.detail;
      const targetIdx = SECTIONS.findIndex(s => s.id === targetId);
      if (targetIdx !== -1) goToSection(targetIdx);
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('nav-to-section', handleNavRequest);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('nav-to-section', handleNavRequest);
    };
  }, [nextSection, prevSection, goToSection]);

  const variants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      rotateY: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.645, 0.045, 0.355, 1.000]
      }
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -90 : 90,
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        duration: 1.2,
        ease: [0.645, 0.045, 0.355, 1.000]
      }
    })
  };

  const CurrentComponent = SECTIONS[index].component;

  return (
    <main className="main-container overflow-hidden bg-[var(--bg)]">
      <CustomCursor />
      <Navbar />

      {/* Centered Section Label below Navbar */}
      <div className="section-label-centered">
        <AnimatePresence mode="wait">
          <motion.div
            key={SECTIONS[index].label}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {SECTIONS[index].label}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '2000px',
            transformOrigin: direction > 0 ? 'left center' : 'right center',
            zIndex: 10 // Ensure it's below the label and navbar
          }}
        >
          <CurrentComponent isActive={true} />
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[1000] flex gap-4">
        {SECTIONS.map((_, i) => (
          <div
            key={i}
            onClick={() => goToSection(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-500 ${i === index ? 'bg-[var(--rose-light)] scale-150 shadow-[0_0_10px_var(--rose-glow)]' : 'bg-[var(--rosewood)] opacity-30'
              }`}
          />
        ))}
      </div>
    </main>
  );
}