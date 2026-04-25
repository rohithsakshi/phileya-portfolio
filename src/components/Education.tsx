'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, GraduationCap, BookOpen } from 'lucide-react';

export default function Education({ isActive = true }: { isActive?: boolean }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="section-wrapper bg-[#1A0E10] h-screen overflow-hidden relative flex flex-col justify-center py-0">

      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7A4954]/5 blur-[180px]" />
      </div>

      <div className="about-container relative z-10 flex flex-col items-center">

        {/* Section Label - Compacted margin */}
        <div className="w-full text-left mb-6 lg:mb-8">
          <div className="about-side-label !mb-0">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={isActive ? { opacity: 0.6, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.8 }}
              className="tracking-[0.4em]"
            >
              05 / EDUCATION / COURSE
            </motion.div>
          </div>
        </div>

        {/* COMPACT LUXURY 2x2 GRID */}
        <div className="education-layout">

          {/* [BOX 1] Education Content */}
          <motion.div
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={itemVariants}
            className="education-card"
          >
            <div className="space-y-3">
              <div>
                <div className="education-tag">
                  <GraduationCap size={12} /> Masters Degree
                </div>
                <h3 className="education-main-title !text-lg lg:!text-xl !mb-0.5">M.Sc. Biomedical Engineering</h3>
                <p className="education-sub !text-[0.75rem]">Heidelberg University, Germany • 2025 – Present</p>
              </div>

              <div className="w-8 h-[1px] bg-[#7A4954]/20" />

              <div>
                <div className="education-tag">
                  <BookOpen size={12} /> Undergraduate
                </div>
                <h3 className="education-main-title !text-lg lg:!text-xl !mb-0.5">B.Tech Biomedical Engineering</h3>
                <p className="education-sub !text-[0.75rem]">Lovely Professional University • 2020 – 2024</p>
                <div className="mt-1 text-[7px] font-black uppercase text-[#B07080] tracking-[0.2em] opacity-70">91% Graduation Score</div>
              </div>
            </div>
          </motion.div>

          {/* [BOX 2] Education Image */}
          <motion.div
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ delay: 0.1 }}
            className="education-image-box"
          >
            <Image
              src="/education.png"
              alt="Education Journey"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* [BOX 3] Course Image */}
          <motion.div
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ delay: 0.2 }}
            className="education-image-box"
          >
            <Image
              src="/course.png"
              alt="Course Visualization"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* [BOX 4] Course Content */}
          <motion.div
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ delay: 0.3 }}
            className="education-card !bg-gradient-to-br from-[#2C1A1E]/60 to-transparent"
          >
            <div className="space-y-3">
              <div className="education-tag">
                <Award size={12} /> Professional Certification
              </div>
              <h3 className="education-main-title !text-2xl lg:!text-3xl !mb-2">Biomedical Visualization</h3>
              <div className="flex items-center justify-between pt-4 border-t border-[#7A4954]/20 mt-2">
                <p className="text-[#C8BFA8] text-xs italic font-serif">Coursera Professional Academy</p>
                <Award size={16} className="text-[#B07080] opacity-40" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}