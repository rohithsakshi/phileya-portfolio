'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const springConfig = { damping: 30, stiffness: 150 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
        zIndex: 10000,
      }}
      className="h-6 w-6 rounded-full border-2 border-[var(--rose-light)] shadow-[0_0_10px_var(--rose-glow)]"
    />
  );
}
