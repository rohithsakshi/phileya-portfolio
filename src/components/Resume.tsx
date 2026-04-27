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
          className="resume-hero-header"
        >
          <div className="resume-eyebrow tracking-[0.5em] text-xs mb-6 md:mb-8">Resume</div>
          
          <h2 className="resume-title mb-6 md:mb-8 leading-tight">
            Comprehensive <span>Timeline.</span>
          </h2>
          
          <p className="resume-subtitle text-base md:text-[1.15rem] max-w-[600px] leading-relaxed text-[#C8BFA8] mb-10 md:mb-14 px-4">
            Dive deeply into my professional track record, technical foundations, and project history.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <a
            href="/Phileya_Susan_Koruth_Resume.pdf"
            download="Phileya_Susan_Koruth_Resume.pdf"
            className="resume-btn"
          >
            <span className="tracking-[0.1em] md:tracking-[0.15em] text-xs md:text-sm">Download PDF</span>
            <div className="resume-btn-icon-wrapper ml-2">
              <Download size={18} strokeWidth={2.5} />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}