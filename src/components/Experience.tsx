'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const experiences = [
  {
    initials: "AMH",
    image: "/experience/aster.png",
    company: "Aster Medcity Hospital",
    role: "Biomedical Engineering Trainee",
    duration: "Feb 2025 – Jun 2025",
    points: [
      "troubleshooting/repair/maintenance of critical medical equipment",
      "patient monitors/ventilators/defibrillators in real-time settings",
      "calibration and preventive maintenance",
      "assisted senior engineers in fault diagnosis",
      "service records and hospital safety compliance",
      "ICU and emergency care exposure"
    ]
  },
  {
    initials: "CH",
    image: "/experience/cyrix.png",
    company: "Cyrix Healthcare Pvt. Ltd.",
    role: "Procurement Assistant",
    duration: "Apr 2024 – Sep 2024",
    points: [
      "procurement using SAP Purchasing Module",
      "purchase records and inventory tracking",
      "vendor communication and order processing",
      "administrative workflows and data organization"
    ]
  },
  {
    initials: "DRKM",
    image: "/experience/drkm.png",
    company: "DR KM Cherian Institute of Medical Sciences",
    role: "Biomedical Engineer Intern",
    duration: "Jun 2022 – Jul 2022",
    points: [
      "basic maintenance and operational checks",
      "emergency breakdown response for ventilators and defibrillators under supervision",
      "equipment history records and preventive maintenance documentation",
      "foundational hospital biomedical engineering exposure"
    ]
  }
];

export default function Experience({ isActive = true }: { isActive?: boolean }) {
  return (
    <section className="section-wrapper">
      <div className="about-container">
        <div className="about-side-label">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isActive ? { opacity: 0.6, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
          >
            03 / EXPERIENCE
          </motion.div>
        </div>

        <div className="experience-grid">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }: { exp: any, index: number }) {
  // index 0: below, index 1: above, index 2: below
  const isAbove = index === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`exp-card-container ${isAbove ? 'layout-above' : 'layout-below'}`}
    >
      <div className="exp-card-top">
        <Image 
          src={exp.image} 
          alt={exp.company}
          fill
          className="object-cover opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        />
        
        <div className="exp-expand-icon">
          <ChevronDown size={18} />
        </div>

        <div className="exp-card-overlay">
          <h3 className="exp-card-company">{exp.company}</h3>
          <p className="exp-card-role">{exp.role}</p>
          <span className="exp-card-date">{exp.duration}</span>
        </div>
      </div>

      <div className="exp-details-panel">
        <div className="exp-details-content">
          <ul className="exp-points-list">
            {exp.points && exp.points.map((point: string, j: number) => (
              <li key={j} className="exp-point-item">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}