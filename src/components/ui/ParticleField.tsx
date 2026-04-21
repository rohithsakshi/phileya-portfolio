"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseOpacity: number;
  color: string;
}

interface ParticleFieldProps {
  className?: string;
}

const COLORS = [
  "rgba(15, 164, 175,",   // Aqua
  "rgba(175, 221, 229,",  // Ice Blue
  "rgba(15, 74, 79,",     // Deep Teal
];

export default function ParticleField({
  className,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  const mouseRef = useRef({
    x: -9999,
    y: -9999,
  });

  const scrollRef = useRef(0);

  const createParticles = useCallback(
    (width: number, height: number) => {
      const count = Math.floor((width * height) / 16000);

      return Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,

        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.18 - 0.03,

        size: Math.random() * 1.6 + 0.5,

        baseOpacity: Math.random() * 0.45 + 0.08,

        color:
          COLORS[
            Math.floor(Math.random() * COLORS.length)
          ],
      }));
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      particlesRef.current = createParticles(
        canvas.width,
        canvas.height
      );
    };

    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = {
        x: -9999,
        y: -9999,
      };
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    canvas.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      /*
      Scroll fade:
      particles softly disappear while scrolling
      */

      const scrollFade = Math.max(
        0,
        1 - scrollRef.current / 700
      );

      particlesRef.current.forEach((p) => {
        /*
        Mouse interaction
        Elegant soft repulsion
        */

        const dx = p.x - mouseX;
        const dy = p.y - mouseY;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        if (
          distance < 140 &&
          distance > 0
        ) {
          const force =
            (140 - distance) / 140;

          p.vx +=
            (dx / distance) *
            force *
            0.28;

          p.vy +=
            (dy / distance) *
            force *
            0.28;
        }

        /*
        Damping
        */

        p.vx *= 0.975;
        p.vy *= 0.975;

        /*
        Floating movement
        */

        p.x += p.vx;
        p.y += p.vy;

        /*
        Wrap edges
        */

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        /*
        Draw particle
        */

        const alpha =
          p.baseOpacity * scrollFade;

        ctx.beginPath();
        ctx.arc(
          p.x,
          p.y,
          p.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `${p.color}${alpha})`;
        ctx.fill();
      });

      /*
      Connection lines
      */

      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const dx =
            particles[i].x - particles[j].x;

          const dy =
            particles[i].y - particles[j].y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < 85) {
            const alpha =
              (1 - distance / 85) *
              0.05 *
              scrollFade;

            ctx.beginPath();

            ctx.moveTo(
              particles[i].x,
              particles[i].y
            );

            ctx.lineTo(
              particles[j].x,
              particles[j].y
            );

            ctx.strokeStyle = `rgba(15, 164, 175, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current =
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(
        animationRef.current
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      canvas.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );
    };
  }, [createParticles]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}