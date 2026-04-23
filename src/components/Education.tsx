'use client';

import { motion } from 'framer-motion';

const education = [
  {
    degree: "M.Sc. Biomedical Engineering",
    school: "Heidelberg University, Germany",
    date: "Oct 2025 – Present"
  },
  {
    degree: "B.Tech Biomedical Engineering",
    school: "Lovely Professional University, India",
    date: "Jun 2020 – Jun 2024",
    detail: "Graduated with 91%"
  }
];

export default function Education() {
  return (
    <section className="section-wrapper bg-[var(--bg)]">
      <div className="w-full max-w-[1100px] flex flex-col items-center gap-16 px-4">
        {/* Row on Desktop */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-12 w-full">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="card flex-1 flex flex-col items-center justify-center text-center p-12 min-w-[300px]"
            >
              <h3 className="text-2xl md:text-3xl font-display text-[var(--rose-light)] mb-2">{edu.degree}</h3>
              <p className="text-lg text-[var(--cream)] mb-2">{edu.school}</p>
              <p className="text-sm tracking-widest text-[var(--cream-muted)] mb-4">{edu.date}</p>
              {edu.detail && <p className="text-[var(--rosewood)] font-bold text-sm">{edu.detail}</p>}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-4 bg-[var(--surface)] border border-[var(--rosewood)] px-8 py-3 rounded-full"
        >
          <span className="text-[var(--rose-light)]">✦</span>
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--cream)]">
            Biomedical Visualization — Coursera
          </span>
        </motion.div>
      </div>
    </section>
  );
}