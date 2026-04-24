'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Users, Laptop, Puzzle, ShieldPlus, Calendar, Plus, X, Radio, Wifi, Target } from 'lucide-react';

const projectDetails = [
  {
    icon: <Users size={20} />,
    title: "Participated in a 48-hour hackathon organized by BETIC in collaboration with Lovely Professional University",
    description: "I had the opportunity to be part of a dynamic team of innovators and problem-solvers, working around the clock to conceptualize a solution for enhancing surgical safety.",
    image: "/projects/sponge_detail.png",
    outcome: "A functional concept demonstrating how real-time tracking can significantly reduce the risk of retained surgical items and improve patient safety."
  },
  {
    icon: <Laptop size={20} />,
    title: "Contributed to designing a concept for tracking surgical sponges to reduce retention risks during surgeries",
    description: "Our design focused on integrating low-cost RFID technology into standard surgical sponges, allowing for automated counting and location tracking throughout the surgical procedure.",
    image: "/projects/sponge_tracking.png",
    outcome: "Proposed a scalable system that eliminates manual counting errors, directly addressing a critical human-error factor in modern medicine."
  },
  {
    icon: <Puzzle size={20} />,
    title: "Demonstrated strong teamwork and problem-solving in a time-constrained environment",
    description: "Collaborated across disciplines, merging biomedical engineering principles with software design to create a cohesive user experience for surgical staff.",
    image: "/projects/sponge_detail.png",
    outcome: "Developed a rapid prototype that highlighted the feasibility of real-time detection in a simulated ICU environment."
  },
  {
    icon: <ShieldPlus size={20} />,
    title: "Focused on improving patient safety through innovative device concepts",
    description: "Prioritized the reduction of 'Never Events' in hospitals. Our system provides a safety net for surgeons, ensuring no foreign object is left behind.",
    image: "/projects/sponge_tracking.png",
    outcome: "Reinforced the importance of patient-centric design in the development of next-generation surgical instruments."
  }
];

export default function Project({ isActive = true }: { isActive?: boolean }) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="section-wrapper compact-section overflow-hidden">
      <div className="about-container !max-w-[1400px]">
        {/* Side Label */}
        <div className="about-side-label">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isActive ? { opacity: 0.6, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
          >
            04 / PROJECT
          </motion.div>
        </div>

        <div className="project-showcase-layout">
          {/* LEFT: Info & Selectors */}
          <div className="project-showcase-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="project-showcase-title">
                Surgical Sponge Tracking System — <br />
                <span className="text-cream-muted">Medical Device Hackathon (MEDHA)</span>
              </h2>
              
              <div className="project-date-pill">
                <Calendar size={14} />
                <span>May 2023</span>
              </div>

              <div className="project-cards-list">
                {projectDetails.map((item, i) => (
                  <motion.div
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className={`project-mini-card ${activeIdx === i ? 'active' : ''}`}
                  >
                    <div className="mini-card-icon">
                      {item.icon}
                    </div>
                    <p className="mini-card-text">{item.title}</p>
                    <div className="mini-card-plus">
                      <Plus size={16} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Detail View */}
          <div className="project-showcase-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="project-detail-main-card"
              >
                <div className="detail-card-header">
                  <div className="detail-header-icon">
                    {projectDetails[activeIdx].icon}
                  </div>
                  <p className="detail-header-title">
                    {projectDetails[activeIdx].title}
                  </p>
                  <button className="detail-close-btn">
                    <X size={18} />
                  </button>
                </div>

                <div className="detail-card-divider" />

                <div className="detail-card-body">
                  <p className="detail-description">
                    {projectDetails[activeIdx].description}
                  </p>

                  <div className="detail-image-container">
                    <Image 
                      src={projectDetails[activeIdx].image}
                      alt="Project Visualization"
                      fill
                      className="object-cover"
                    />
                    
                    {/* Floating Tech Badges on Image */}
                    <div className="tech-tag rfid">
                      <Radio size={12} className="mr-1" /> RFID Tag
                    </div>
                    <div className="tech-tag detection">
                      <Wifi size={12} className="mr-1" /> Real-time Detection
                    </div>
                  </div>

                  <div className="detail-outcome-box">
                    <div className="outcome-icon-bg">
                      <Target size={18} />
                    </div>
                    <div className="outcome-text-group">
                      <span className="outcome-label">Outcome</span>
                      <p className="outcome-desc">{projectDetails[activeIdx].outcome}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
