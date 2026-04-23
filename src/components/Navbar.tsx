'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const links = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "project" },
    { name: "Experience", id: "experience" },
  ];

  const handleNav = (id: string) => {
    window.dispatchEvent(new CustomEvent('nav-to-section', { detail: id }));
  };

  return (
    <div className="navbar-wrapper">
      {/* Identity Left */}
      <div className="nav-identity" onClick={() => handleNav('hero')}>
        <div className="nav-avatar">
          <Image
            src="/phileya-profile.jpg"
            alt="PSK"
            fill
            className="object-cover"
          />
        </div>
        <span className="nav-name">Phileya</span>
      </div>

      {/* Nav Pill Center */}
      <motion.nav
        className="navbar-pill"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="nav-links-center">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNav(link.id)}
              className="nav-link"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="nav-divider" />

        <button
          className="nav-cta-link"
          onClick={() => handleNav('contact')}
        >
          RESUME
        </button>
      </motion.nav>

      {/* CTA Right */}
      <motion.button
        className="nav-pill-btn"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        onClick={() => handleNav('contact')}
      >
        LET&apos;S TALK
      </motion.button>
    </div>
  );
}