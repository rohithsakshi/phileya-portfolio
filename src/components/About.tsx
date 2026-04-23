'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

class Particle {
  x: number; y: number; vx: number; vy: number; rotation: number; offset: number; scale: number; type: number;
  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.rotation = Math.random() * Math.PI * 2;
    this.offset = Math.random() * 1000;
    this.scale = 0.5 + Math.random() * 1;
    this.type = Math.floor(Math.random() * 5); // 0: DNA, 1: ECG, 2: Cell, 3: Molecule, 4: Cross
  }

  draw(context: CanvasRenderingContext2D, rosewood: string) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.strokeStyle = rosewood;
    context.fillStyle = rosewood;
    context.lineWidth = 1.5;
    context.globalAlpha = 0.6;

    switch (this.type) {
      case 0: // DNA
        const h_dna = 120 * this.scale;
        const w_dna = 30;
        context.beginPath();
        for (let i = -h_dna / 2; i < h_dna / 2; i++) {
          const x1 = Math.sin(i * 0.05) * w_dna;
          const x2 = Math.sin(i * 0.05 + Math.PI) * w_dna;
          if (i === -h_dna / 2) context.moveTo(x1, i);
          else context.lineTo(x1, i);
          if (i % 20 === 0) {
            context.moveTo(x1, i);
            context.lineTo(x2, i);
          }
        }
        context.stroke();
        context.beginPath();
        for (let i = -h_dna / 2; i < h_dna / 2; i++) {
          const x2 = Math.sin(i * 0.05 + Math.PI) * w_dna;
          if (i === -h_dna / 2) context.moveTo(x2, i);
          else context.lineTo(x2, i);
        }
        context.stroke();
        break;

      case 1: // ECG
        const ecgWidth = 150 * this.scale;
        context.beginPath();
        context.moveTo(-ecgWidth / 2, 0);
        context.lineTo(-ecgWidth * 0.2, 0);
        context.lineTo(-ecgWidth * 0.15, -10);
        context.lineTo(-ecgWidth * 0.1, 0);
        context.lineTo(-ecgWidth * 0.05, 0);
        context.lineTo(0, -40);
        context.lineTo(ecgWidth * 0.05, 20);
        context.lineTo(ecgWidth * 0.1, 0);
        context.lineTo(ecgWidth * 0.2, 0);
        context.lineTo(ecgWidth * 0.25, -15);
        context.lineTo(ecgWidth * 0.35, 0);
        context.lineTo(ecgWidth / 2, 0);
        context.stroke();
        break;

      case 2: // Cell
        const r = 25 * this.scale;
        context.beginPath();
        context.ellipse(0, 0, r, r * 0.8, 0, 0, Math.PI * 2);
        context.stroke();
        context.beginPath();
        context.ellipse(0, 0, r * 0.6, r * 0.4, 0, 0, Math.PI * 2);
        context.stroke();
        break;

      case 3: // Molecule
        const size = 30 * this.scale;
        const nodes = [[0, 0], [size, -size], [-size, -size], [0, size]];
        nodes.forEach(([nx, ny]) => {
          context.beginPath();
          context.arc(nx, ny, 4, 0, Math.PI * 2);
          context.fill();
        });
        context.beginPath();
        context.moveTo(nodes[0][0], nodes[0][1]);
        context.lineTo(nodes[1][0], nodes[1][1]);
        context.moveTo(nodes[0][0], nodes[0][1]);
        context.lineTo(nodes[2][0], nodes[2][1]);
        context.moveTo(nodes[0][0], nodes[0][1]);
        context.lineTo(nodes[3][0], nodes[3][1]);
        context.stroke();
        break;

      case 4: // Cross
        const crossSize = 12 * this.scale;
        context.beginPath();
        context.moveTo(-crossSize, 0);
        context.lineTo(crossSize, 0);
        context.moveTo(0, -crossSize);
        context.lineTo(0, crossSize);
        context.stroke();
        break;
    }
    context.restore();
  }

  update(time: number, w: number, h: number) {
    this.x += this.vx;
    this.y += this.vy + Math.sin(time * 0.001 + this.offset) * 0.4;
    this.rotation += 0.002;

    if (this.x < -100) this.x = w + 100;
    if (this.x > w + 100) this.x = -100;
    if (this.y < -100) this.y = h + 100;
    if (this.y > h + 100) this.y = -100;
  }
}
const StatCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [current, setCurrent] = useState(0);
  const nodeRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = target;
          const duration = 2000;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCurrent(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={nodeRef}>{current}{suffix}</span>;
};


export default function About({ isActive = true }: { isActive?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  const paragraphs = [
    "I'm a Biomedical Engineering postgraduate at Heidelberg University, Germany, with a foundation built across clinical floors, procurement desks, and a 48-hour hackathon stage. My work sits at the intersection of medical technology and patient safety.",
    "I've handled ventilators mid-shift in an ICU, tracked procurement pipelines through SAP, and designed device concepts under pressure. I don't just understand biomedical systems academically — I've calibrated them, documented their failures, and helped restore them in real hospital environments.",
    "Currently deepening my expertise in intensive care technologies, healthcare data systems, and the engineering decisions that keep patients safe."
  ];

  const stats = [
    { value: 3, suffix: "+", text: "Years of hands-on clinical & engineering experience" },
    { value: 91, suffix: "%", text: "B.Tech graduation score, Lovely Professional University" },
    { value: 2, suffix: "", text: "Countries — India & Germany — clinical + academic exposure" }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const rosewood = '#7A4954';

    const initParticles = (w: number, h: number) => {
      particles = Array.from({ length: 30 }, () => new Particle(w, h));
    };

    const animate = (time: number) => {
      const c = canvasRef.current;
      if (!c || !ctx) return;
      ctx.clearRect(0, 0, c.width, c.height);
      particles.forEach(p => {
        p.update(time, c.width, c.height);
        p.draw(ctx, rosewood);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setOpacity(0.18);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    const resizeObserver = new ResizeObserver((entries) => {
      const c = canvasRef.current;
      if (!c) return;
      for (let entry of entries) {
        c.width = entry.contentRect.width;
        c.height = entry.contentRect.height;
        initParticles(c.width, c.height);
      }
    });
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    initParticles(canvas.width, canvas.height);
    animate(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="section-wrapper" ref={containerRef} style={{ position: 'relative' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          opacity: opacity,
          transition: 'opacity 1.2s ease-in-out'
        }}
      />

      <div className="about-container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* SECTION LABEL - Now positioned above content */}
        <div className="about-side-label">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            01 / ABOUT
          </motion.div>
        </div>

        <div className="about-content-grid">
          {/* LEFT STORY */}
          <div className="about-main-story">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-heading"
            >
              The engineer behind the work.
            </motion.h2>

            <div className="about-content">
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.8 }}
                  className="about-para"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>

          {/* RIGHT STATS & CONTACT */}
          <div className="about-side-stats">
            <div className="stat-card-stack">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * i, duration: 0.8 }}
                  className="stat-card"
                >
                  <div className="stat-card-num">
                    <StatCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="stat-card-text">{stat.text}</div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="about-contact-row"
            >
              <button className="contact-pill" onClick={() => window.location.href = 'mailto:phileyakoruth10@gmail.com'}>
                phileyakoruth10@gmail.com
              </button>
              <button className="contact-pill" onClick={() => window.location.href = 'tel:+4917625011657'}>
                +49 17625011657
              </button>
              <button className="contact-pill" onClick={() => window.open('https://www.linkedin.com/in/phileya-susan-koruth-551802263/', '_blank')}>
                LinkedIn ↗
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}