'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Resume({ isActive = true }: { isActive?: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="resume" className="resume-section-wrapper" style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
      <div className="resume-ambient-glow" style={{ width: '900px', height: '900px', opacity: 0.8 }} />

      <motion.div
        initial="hidden"
        animate={isActive ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="resume-content-container"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <motion.div 
          variants={itemVariants} 
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '800px' }}
        >
          <div className="resume-eyebrow" style={{ letterSpacing: '0.5em', fontSize: '12px', marginBottom: '32px' }}>Resume</div>
          
          <h2 className="resume-title" style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)', marginBottom: '36px', lineHeight: '1' }}>
            Comprehensive <span>Timeline.</span>
          </h2>
          
          <p className="resume-subtitle" style={{ fontSize: '1.15rem', maxWidth: '600px', lineHeight: '1.9', color: '#C8BFA8', marginBottom: '60px' }}>
            Dive deeply into my professional track record, technical foundations, and project history.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <a
            href="/Phileya_Susan_Koruth_Resume.pdf"
            download="Phileya_Susan_Koruth_Resume.pdf"
            className="resume-btn"
            style={{ padding: '22px 54px', fontSize: '14px', letterSpacing: '0.15em' }}
          >
            <span>Download PDF</span>
            <div className="resume-btn-icon-wrapper" style={{ marginLeft: '8px' }}>
              <Download size={18} strokeWidth={2.5} />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}