'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, Linkedin, FileText, Github, ArrowUpRight } from 'lucide-react';

const languages = [
  { name: "English", level: "Professional" },
  { name: "German", level: "A2" },
  { name: "Hindi", level: "Fluent" },
  { name: "Malayalam", level: "Native" }
];

const connectLinks = [
  { name: "LinkedIn", icon: <Linkedin size={14} />, url: "https://www.linkedin.com/in/phileya-susan-koruth-551802263/" },
  { name: "Email", icon: <Mail size={14} />, url: "mailto:phileyakoruth10@gmail.com" }
  // { name: "Resume", icon: <FileText size={14} />, url: "#" },
  // { name: "GitHub", icon: <Github size={14} />, url: "#" }
];

const accentColor = "#B07080"; // var(--rose-light)

export default function Contact({ isActive = true }: { isActive?: boolean }) {

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.18 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
    }
  };
  return (
    <section className="contact-section-wrapper" style={{ backgroundColor: 'var(--bg)', height: '100vh', overflow: 'hidden' }}>

      {/* ── INLINE BIOMEDICAL ACCENTS ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        {/* ECG heartbeat */}
        <div style={{ position: 'absolute', top: '8%', right: '8%', width: '220px', opacity: 0.12 }}>
          <svg viewBox="0 0 400 80" fill="none" style={{ width: '100%' }}>
            <motion.path
              d="M0 40 L60 40 L70 20 L82 60 L92 40 L120 40 L132 8 L144 72 L156 40 L190 40 L202 32 L214 48 L226 40 L260 40 L275 40 L287 16 L299 64 L311 40 L400 40"
              stroke={accentColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="600"
              initial={{ strokeDashoffset: 600 }}
              animate={isActive ? { strokeDashoffset: [600, 0, -600] } : { strokeDashoffset: 600 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>

        {/* DNA double helix */}
        <div style={{ position: 'absolute', top: '20%', left: '2%', height: '280px', width: '40px', opacity: 0.10 }}>
          <svg viewBox="0 0 60 400" fill="none" style={{ height: '100%', width: '100%' }}>
            <motion.path
              d="M30 0 C60 50, 0 100, 30 150 C60 200, 0 250, 30 300 C60 350, 0 380, 30 400"
              stroke={accentColor} strokeWidth="1" strokeLinecap="round"
              animate={isActive ? { y: [0, -8, 0] } : {}}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M30 0 C0 50, 60 100, 30 150 C0 200, 60 250, 30 300 C0 350, 60 380, 30 400"
              stroke={accentColor} strokeWidth="1" strokeLinecap="round"
              animate={isActive ? { y: [0, 8, 0] } : {}}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <motion.line
                key={i} x1="15" y1={50 * i + 25} x2="45" y2={50 * i + 25}
                stroke={accentColor} strokeWidth="0.6"
                animate={isActive ? { opacity: [0.1, 0.5, 0.1] } : { opacity: 0.1 }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.35, ease: "easeInOut" }}
              />
            ))}
          </svg>
        </div>

        {/* Benzene ring */}
        <div style={{ position: 'absolute', bottom: '20%', left: '8%', width: '64px', height: '64px', opacity: 0.09 }}>
          <svg viewBox="0 0 100 100" fill="none" style={{ width: '100%', height: '100%' }}>
            <motion.polygon
              points="50,8 88,29 88,71 50,92 12,71 12,29"
              stroke={accentColor} strokeWidth="1"
              animate={isActive ? { rotate: 360 } : {}}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "50px 50px" }}
            />
            {[[50, 8], [88, 29], [88, 71], [50, 92], [12, 71], [12, 29]].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="2" fill={accentColor} />
            ))}
            <motion.circle
              cx="50" cy="50" r="18"
              stroke={accentColor} strokeWidth="0.5" strokeDasharray="3 5"
              animate={isActive ? { rotate: -360 } : {}}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "50px 50px" }}
            />
          </svg>
        </div>

        {/* Cell cross-section */}
        <div style={{ position: 'absolute', top: '45%', right: '10%', width: '112px', height: '112px', opacity: 0.07 }}>
          <svg viewBox="0 0 100 100" fill="none" style={{ width: '100%', height: '100%' }}>
            <motion.circle
              cx="50" cy="50" r="46"
              stroke={accentColor} strokeWidth="0.6" strokeDasharray="3 7"
              animate={isActive ? { rotate: 360 } : {}}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "50px 50px" }}
            />
            <motion.circle
              cx="50" cy="50" r="22"
              stroke={accentColor} strokeWidth="0.8"
              animate={isActive ? { r: [22, 24, 22] } : {}}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="50" cy="50" r="8"
              stroke={accentColor} strokeWidth="1"
              animate={isActive ? { scale: [1, 1.12, 1] } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "50px 50px" }}
            />
            {[[34, 38], [66, 42], [38, 62], [65, 65]].map(([cx, cy], i) => (
              <motion.circle
                key={i} cx={cx} cy={cy} r="2.5"
                stroke={accentColor} strokeWidth="0.6"
                animate={isActive ? { opacity: [0.1, 0.6, 0.1] } : { opacity: 0.1 }}
                transition={{ duration: 5, repeat: Infinity, delay: i * 0.6 }}
              />
            ))}
          </svg>
        </div>
      </div>
      {/* ── END BIOMEDICAL ACCENTS ── */}

      {/* Row 1: Language Section */}
      <div className="contact-row-1">
        <motion.div {...fadeUp(0)} className="contact-eyebrow">
          06 / LINGUISTIC PROFICIENCY
        </motion.div>
        
        <motion.h2 {...fadeUp(0.1)} className="contact-heading">
          Languages &amp; <span className="contact-heading-italic">Communication</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="contact-divider"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          className="contact-grid"
        >
          {languages.map((lang, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`contact-lang-card ${idx < 2 ? 'has-border' : ''}`}
            >
              <div className="contact-lang-header">
                <h3 className="contact-lang-name">
                  {lang.name}
                </h3>
                <span className="contact-lang-level">
                  — {lang.level}
                </span>
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.1, delay: 0.4 + idx * 0.1, ease: "circOut" }}
                className="contact-lang-line"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Thin Animated Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="contact-main-divider"
      />

      {/* Row 2: Footer Section */}
      <div className="contact-footer-grid">
        
        {/* Col 1 — Contact Form */}
        <motion.div {...fadeUp(0.7)} className="contact-col">
          <div className="contact-col-header">GET IN TOUCH</div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact-input-row">
              <input type="text" placeholder="NAME" className="contact-input" required />
              <input type="email" placeholder="EMAIL" className="contact-input" required />
            </div>
            <textarea placeholder="MESSAGE" rows={2} className="contact-textarea" required />
            <button type="submit" className="contact-btn">
              Send Message &rarr;
            </button>
          </form>
        </motion.div>

        {/* Col 2 — Connect Links */}
        <motion.div {...fadeUp(0.8)} className="contact-col">
          <div className="contact-col-header">CONNECT</div>
          <div className="contact-links-grid">
            {connectLinks.map((link, idx) => (
              <a key={idx} href={link.url} className="contact-link-item group">
                <span className="contact-link-icon">{link.icon}</span>
                {link.name}
                <ArrowUpRight size={10} className="contact-link-arrow" />
                <span className="contact-link-underline" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Col 3 — Brand Mark */}
        <motion.div 
          initial={{ opacity: 0, x: 14 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 14 }}
          transition={{ duration: 0.85, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="contact-brand-col"
        >
          <div className="contact-brand-row">
            <Image src="/phileya-profile.jpg" alt="Phileya" width={48} height={48} className="contact-brand-logo" />
            <h2 className="contact-brand-name">Phileya</h2>
          </div>
          <div className="contact-brand-sub">Portfolio &middot; 2025</div>
          <div className="contact-brand-copy">© 2025 All rights reserved</div>
        </motion.div>

      </div>

    </section>
  );
}