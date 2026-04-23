'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    icon: "🩺",
    name: "Clinical Biomedical Engineering",
    desc: "Hands-on troubleshooting and maintenance of critical care devices.",
    tags: ["ICU", "Critical care"]
  },
  {
    icon: "🖥️",
    name: "Medical Equipment Handling",
    desc: "Operated patient monitors and ventilators in clinical settings.",
    tags: ["Ventilators", "Monitors"]
  },
  {
    icon: "🔧",
    name: "Equipment Calibration",
    desc: "Calibration and PM cycles to keep devices certified and safe.",
    tags: ["PM cycles", "Safety"]
  },
  {
    icon: "🏥",
    name: "Clinical Support",
    desc: "Emergency breakdown response in high-pressure ICU environments.",
    tags: ["ICU", "Fault diagnosis"]
  },
  {
    icon: "📋",
    name: "Data Documentation",
    desc: "Maintained detailed service records and compliance history.",
    tags: ["Compliance", "Reporting"]
  },
  {
    icon: "🗂️",
    name: "SAP — Purchasing",
    desc: "Managed procurement pipelines and vendor coordination at Cyrix.",
    tags: ["SAP", "Supply chain"]
  },
  {
    icon: "💊",
    name: "Healthcare Systems",
    desc: "Exposure to hospital safety protocols and biomedical workflows.",
    tags: ["Safety", "Workflows"]
  },
  {
    icon: "📊",
    name: "MS Excel & Word",
    desc: "Structured data organization and professional documentation.",
    tags: ["Excel", "Data org"]
  },
  {
    icon: "🤝",
    name: "Team Collaboration",
    desc: "Worked with cross-functional teams in ICU and hackathons.",
    tags: ["Teams", "Hackathon"]
  },
  {
    icon: "💡",
    name: "Problem Solving",
    desc: "Equipment fault resolution and rapid device prototyping.",
    tags: ["Innovation", "Pressure"]
  }
];

const topRow = [...skills.slice(0, 5), ...skills.slice(0, 5)];
const bottomRow = [...skills.slice(5, 10), ...skills.slice(5, 10)];

export default function Skills({ isActive = true }: { isActive?: boolean }) {
  return (
    <section className="skills-section-final">
      <div className="skills-header-container">
        <header style={{ textAlign: 'left' }}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            className="skills-label"
          >
            02 / SKILLS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="skills-heading"
          >
            Core competencies & clinical expertise.
          </motion.h2>
        </header>
      </div>

      <div className="carousel-wrapper">
        {/* TOP ROW: LEFT TO RIGHT */}
        <div className="carousel-track-container">
          <motion.div 
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="carousel-track"
          >
            {topRow.map((skill, i) => (
              <SkillCard key={`top-${i}`} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* BOTTOM ROW: RIGHT TO LEFT */}
        <div className="carousel-track-container">
          <motion.div 
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="carousel-track"
          >
            {bottomRow.map((skill, i) => (
              <SkillCard key={`bottom-${i}`} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: any }) {
  const cardVariants = {
    initial: { backgroundColor: '#2C1A1E', borderColor: 'rgba(122, 73, 84, 0.25)', y: 0 },
    hover: { backgroundColor: '#F5EFDA', borderColor: '#F5EFDA', y: -8 }
  };

  const titleVariants = {
    initial: { color: '#F5EFDA' },
    hover: { color: '#1A0E10' }
  };

  const descVariants = {
    initial: { color: '#C8BFA8' },
    hover: { color: '#2C1A1E' }
  };

  const tagVariants = {
    initial: { backgroundColor: 'rgba(122, 73, 84, 0.1)', color: '#B07080', borderColor: 'rgba(122, 73, 84, 0.2)' },
    hover: { backgroundColor: '#1A0E10', color: '#F5EFDA', borderColor: '#1A0E10' }
  };

  const iconBoxVariants = {
    initial: { backgroundColor: '#1A0E10', borderColor: 'rgba(245, 239, 218, 0.05)' },
    hover: { backgroundColor: '#F5EFDA', borderColor: '#1A0E10' }
  };

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={cardVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="skill-card-final"
    >
      <motion.div 
        variants={iconBoxVariants}
        className="skill-icon-box"
      >
        {skill.icon}
      </motion.div>
      
      <motion.h3 
        variants={titleVariants}
        className="skill-title"
      >
        {skill.name}
      </motion.h3>
      
      <motion.p 
        variants={descVariants}
        className="skill-desc"
      >
        {skill.desc}
      </motion.p>
      
      <div className="skill-tags-container">
        {skill.tags.map((tag: string, j: number) => (
          <motion.span 
            key={j} 
            variants={tagVariants}
            className="skill-tag"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}