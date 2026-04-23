'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    company: "Aster Medcity Hospital",
    role: "Biomedical Engineering Trainee",
    date: "Feb 2025 – Jun 2025",
    desc: "Troubleshooting & maintenance of patient monitors, ventilators, defibrillators; calibration & preventive maintenance; service record documentation; ICU & emergency care exposure."
  },
  {
    company: "Cyrix Healthcare Pvt. Ltd.",
    role: "Procurement Assistant",
    date: "Apr 2024 – Sep 2024",
    desc: "SAP Purchasing Module; purchase records & inventory tracking; vendor coordination; structured data organization."
  },
  {
    company: "DR KM Cherian Institute of Medical Sciences",
    role: "Biomedical Engineer Intern",
    date: "Jun 2022 – Jul 2022",
    desc: "Medical equipment maintenance checks; emergency breakdown support for ventilators & defibrillators; equipment history records; preventive maintenance documentation."
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end end"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="section-wrapper bg-[var(--bg)]">
      <div className="w-full max-w-[1100px] relative flex flex-col gap-12 px-4">
        {/* Centered Timeline Line */}
        <motion.div style={{ scaleY, transformOrigin: "top" }} className="timeline-line" />

        <div className="flex flex-col gap-16 w-full">
          {experiences.map((exp, i) => (
            <div key={i} className={`flex w-full ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-[46%] z-10"
              >
                <div className={`card ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                  <h3 className="text-2xl font-display text-[var(--rose-light)] mb-1">{exp.company}</h3>
                  <p className="text-sm uppercase tracking-widest text-[var(--cream)] mb-2">{exp.role}</p>
                  <p className="text-xs text-[var(--cream-muted)] mb-4">{exp.date}</p>
                  <p className="text-sm leading-relaxed text-[var(--cream-muted)]">{exp.desc}</p>
                </div>
              </motion.div>
              
              {/* Center Space for Dot */}
              <div className="hidden md:flex w-[8%] justify-center relative">
                <div className="w-4 h-4 rounded-full bg-[var(--rose-light)] shadow-[0_0_15px_var(--rose-glow)] border-4 border-[var(--bg)]" />
              </div>

              {/* Spacer for alternating */}
              <div className="hidden md:block w-[46%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}