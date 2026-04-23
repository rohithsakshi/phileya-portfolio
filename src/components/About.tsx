'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

export default function About({ isActive = true }: { isActive?: boolean }) {
  const bio = "Biomedical Engineering postgraduate at Heidelberg University with hands-on experience in clinical environments — troubleshooting and maintaining critical care devices including ventilators, patient monitors, and defibrillators. Driven by a passion for intensive care technologies, patient safety systems, and healthcare data management.";
  const sentences = bio.split(/(?<=[.!?])\s+/);

  return (
    <section className="section-wrapper">
      <div className="content-max-width flex flex-col md:flex-row items-center justify-center gap-12 px-8">
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <div className="flex flex-col gap-4">
            {sentences.map((sentence, i) => (
              <motion.p 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
                className="text-lg md:text-xl leading-relaxed text-[var(--cream)]"
              >
                {sentence}
              </motion.p>
            ))}
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <div className="pill">phileyakoruth10@gmail.com</div>
            <div className="pill">+49 17625011657</div>
            <div className="pill">LinkedIn</div>
          </div>
        </div>

        <div className="w-full md:w-2/5 h-[300px] md:h-[400px] flex justify-center items-center">
          {isActive && <Scene3D type="icosahedron" />}
        </div>
      </div>
    </section>
  );
}