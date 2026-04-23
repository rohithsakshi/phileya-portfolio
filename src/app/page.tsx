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
  { id: 'about', component: About },
  { id: 'skills', component: Skills },
  { id: 'experience', component: Experience },
  { id: 'project', component: Project },
  { id: 'education', component: Education },
  { id: 'contact', component: Contact },
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

  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      if (Math.abs(e.deltaY) > 30) {
        if (e.deltaY > 0) nextSection();
        else prevSection();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStart.current === null || isScrolling.current) return;
      const touchEnd = e.changedTouches[0].clientY;
      const delta = touchStart.current - touchEnd;

      if (Math.abs(delta) > 50) { // Swipe threshold
        if (delta > 0) nextSection();
        else prevSection();
      }
      touchStart.current = null;
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
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('nav-to-section', handleNavRequest);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
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


      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '2000px',
            transformOrigin: direction > 0 ? 'left center' : 'right center',
            zIndex: 10,
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {(() => {
            const CurrentComponent = SECTIONS[index].component as React.FC<{ isActive?: boolean }>;
            return <CurrentComponent isActive={true} />;
          })()}
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