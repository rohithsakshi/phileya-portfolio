'use client';

import { motion } from 'framer-motion';

export default function Project() {
  return (
    <section className="section-wrapper">
      <div className="content-max-width flex flex-col items-center">
        <div className="w-full max-w-[680px] perspective-1000">
          <motion.div
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
            viewport={{ once: true }}
            className="card flex flex-col items-center text-center cursor-pointer"
          >
            <div className="pill mb-6 bg-[var(--rosewood)]">Featured Project</div>
            <h3 className="text-4xl md:text-5xl font-display text-[var(--rose-light)] mb-4">
              Surgical Sponge Tracking System
            </h3>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--cream-muted)] mb-8">
              Medical Device Hackathon (MEDHA) · May 2023
            </p>
            <p className="text-lg text-[var(--cream)] leading-relaxed mb-10">
              48-hour hackathon by BETIC × Lovely Professional University. Designed a concept for tracking surgical sponges during surgery to reduce retention risks. Focused on patient safety innovation under time constraint.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="pill text-[10px] py-2 px-4 opacity-70">BETIC</span>
              <span className="pill text-[10px] py-2 px-4 opacity-70">Patient Safety</span>
              <span className="pill text-[10px] py-2 px-4 opacity-70">Innovation</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
