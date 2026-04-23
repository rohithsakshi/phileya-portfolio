'use client';

import React, { useEffect, useRef } from 'react';

interface ParticleNameProps {
  text: string;
  fontSize?: number;
  isActive?: boolean;
}

class Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  density: number;
  color: string;

  constructor(x: number, y: number, color: string) {
    this.baseX = x;
    this.baseY = y;
    this.x = x + (Math.random() - 0.5) * 200; // Start near target
    this.y = y + (Math.random() - 0.5) * 200;
    this.size = Math.random() * 1.2 + 0.8;
    this.density = (Math.random() * 30) + 10;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(mouseX: number, mouseY: number, scrollOffset: number) {
    let dx = mouseX - this.x;
    let dy = mouseY - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance === 0) distance = 0.1;
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = 120;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < maxDistance) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      // Return to base position with minimal wobble for clarity
      const scrollFreq = 0.002;
      const scrollAmp = 4; // Reduced from 15
      const scrollWobbleY = Math.sin(scrollOffset * scrollFreq + (this.baseX * 0.01)) * scrollAmp;
      const scrollWobbleX = Math.cos(scrollOffset * scrollFreq + (this.baseY * 0.01)) * (scrollAmp / 2);
      
      const targetX = this.baseX + scrollWobbleX;
      const targetY = this.baseY + scrollWobbleY;

      // Faster return speed (1/8 instead of 1/12)
      this.x += (targetX - this.x) * 0.12;
      this.y += (targetY - this.y) * 0.12;
    }
  }
}

export default function ParticleName({ text, fontSize = 80, isActive = true }: ParticleNameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -100, y: -100 });
  const scrollPos = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const init = () => {
      const isMobile = window.innerWidth < 768;
      const parentWidth = canvas.parentElement?.clientWidth || 1200;
      const dpr = window.devicePixelRatio || 1;
      
      const actualFontSize = isMobile ? fontSize * 0.7 : fontSize;
      const canvasH = actualFontSize * 1.15;
      canvas.width = parentWidth * dpr;
      canvas.height = canvasH * dpr;
      canvas.style.width = `${parentWidth}px`;
      canvas.style.height = `${canvasH}px`;
      
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, parentWidth, canvasH);
      ctx.fillStyle = 'white';
      
      ctx.font = `700 ${actualFontSize}px "Cormorant Garamond"`;
      ctx.textBaseline = 'middle';
      ctx.textAlign = isMobile ? 'center' : 'left';
      
      const startX = isMobile ? parentWidth / 2 : 0; 
      ctx.fillText(text, startX, canvasH / 2);

      const textData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      particles.current = [];

      const step = isMobile ? 4 : 3; 
      for (let y = 0; y < textData.height; y += step) {
        for (let x = 0; x < textData.width; x += step) {
          const alpha = textData.data[(y * 4 * textData.width) + (x * 4) + 3];
          if (alpha > 128) {
            const color = Math.random() > 0.3 ? '#F5EFDA' : '#B07080';
            // Scale internal coordinates back to CSS units for the Particle class
            particles.current.push(new Particle(x / dpr, y / dpr, color));
          }
        }
      }
    };

    init();

    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach(p => {
        p.update(mouse.current.x, mouse.current.y, scrollPos.current);
        p.draw(ctx);
      });
      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Account for scale if canvas is resized by CSS
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      mouse.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    };

    const handleScroll = () => {
      scrollPos.current = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [text, fontSize]);

  return (
    <div className="particle-text-wrapper overflow-visible">
      <canvas ref={canvasRef} className="w-full h-auto" style={{ filter: 'drop-shadow(0 0 10px rgba(122,73,84,0.15))' }} />
    </div>
  );
}
