'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleNavState = (e: any) => {
      setIsScrolled(e.detail !== 'hero');
    };
    window.addEventListener('nav-to-section', handleNavState);
    return () => window.removeEventListener('nav-to-section', handleNavState);
  }, []);

  const links = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Project", id: "project" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" }
  ];

  const handleNav = (id: string) => {
    window.dispatchEvent(new CustomEvent('nav-to-section', { detail: id }));
  };

  return (
    <div className="navbar-wrapper">
      <motion.nav 
        className="navbar-pill flex items-center justify-between"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ width: 'max-content', maxWidth: '90vw' }}
      >
        {/* Logo on far left */}
        <div 
          className="nav-logo cursor-pointer mr-8"
          onClick={() => handleNav('hero')}
        >
          PSK
        </div>
        
        {/* Nav Links centered */}
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="nav-link"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CTA on far right */}
        <button 
          className="ml-8 bg-[var(--rosewood)] text-[var(--cream)] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[var(--rose-light)] transition-colors"
          onClick={() => handleNav('contact')}
        >
          LET&apos;S TALK
        </button>
      </motion.nav>
    </div>
  );
}