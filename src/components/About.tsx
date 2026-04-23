'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

export default function About({ isActive = true }: { isActive?: boolean }) {
  const paragraphs = [
    "I'm a Biomedical Engineering postgraduate at Heidelberg University, Germany, with a foundation built across clinical floors, procurement desks, and a 48-hour hackathon stage. My work sits at the intersection of medical technology and patient safety.",
    "I've handled ventilators mid-shift in an ICU, tracked procurement pipelines through SAP, and designed device concepts under pressure. I don't just understand biomedical systems academically — I've calibrated them, documented their failures, and helped restore them in real hospital environments.",
    "Currently deepening my expertise in intensive care technologies, healthcare data systems, and the engineering decisions that keep patients safe."
  ];

  const stats = [
    { num: "3+", text: "Years of hands-on clinical & engineering experience" },
    { num: "91%", text: "B.Tech graduation score, Lovely Professional University" },
    { num: "2", text: "Countries — India & Germany — clinical + academic exposure" }
  ];

  return (
    <section className="section-wrapper">
      <div className="about-container">

        {/* LEFT COLUMN */}
        <div className="about-left">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            style={{ transformOrigin: "left" }}
            className="about-label"
          >
            01 / ABOUT
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-heading"
          >
            The engineer behind the work.
          </motion.h2>

          <div className="about-content">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.8 }}
                className="about-para"
              >
                {text}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ transformOrigin: "left" }}
            className="about-divider"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="about-contact-row"
          >
            <button className="contact-pill" onClick={() => window.location.href = 'mailto:phileyakoruth10@gmail.com'}>
              phileyakoruth10@gmail.com
            </button>
            <button className="contact-pill" onClick={() => window.location.href = 'tel:+4917625011657'}>
              +49 17625011657
            </button>
            <button className="contact-pill" onClick={() => window.open('https://www.linkedin.com/in/phileya-susan-koruth-551802263/', '_blank')}>
              LinkedIn ↗
            </button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="about-right">
          <div className="stat-card-stack">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * i, duration: 0.8 }}
                className="stat-card"
              >
                <div className="stat-card-num">{stat.num}</div>
                <div className="stat-card-text">{stat.text}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-6 w-full h-[160px]"
            style={{ marginTop: '24px' }}
          >
            {isActive && <Scene3D type="icosahedron" />}
          </motion.div>
        </div>

      </div>
    </section>
  );
}