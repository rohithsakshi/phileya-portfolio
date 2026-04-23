'use client';

import { motion } from 'framer-motion';

const skills = [
  "Clinical Biomedical Engineering", "Medical Equipment Handling", 
  "Equipment Calibration & Troubleshooting", "Clinical Support", 
  "Data Documentation & Analysis", "SAP Purchasing Module", 
  "MS Excel & Word", "Healthcare Systems", 
  "Team Collaboration", "Problem Solving"
];

export default function Skills() {
  return (
    <section className="section-wrapper bg-[var(--bg)]">
      <div className="flex flex-wrap justify-center gap-4 w-full max-w-[1100px] mt-8 px-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="card flex items-center justify-center text-center p-6 min-w-[180px] max-w-[240px] flex-1"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--cream)]">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}