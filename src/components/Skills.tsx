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
    <section className="skills-section-final" style={{ 
      background: '#1A0E10', 
      minHeight: '100vh', 
      width: '100%',
      padding: '100px 0 80px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto', width: '100%', padding: '0 7vw', marginBottom: '50px' }}>
        <header style={{ textAlign: 'left' }}>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            style={{ 
              color: '#F5EFDA', 
              fontSize: '11px', 
              fontWeight: 700, 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '8px',
              opacity: 0.8
            }}
          >
            02 / SKILLS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
              color: '#F5EFDA', 
              lineHeight: 1.1 
            }}
          >
            Core competencies & clinical expertise.
          </motion.h2>
        </header>
      </div>

      <div className="carousel-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
        {/* TOP ROW: LEFT TO RIGHT */}
        <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
          <motion.div 
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ display: 'flex', gap: '20px', width: 'fit-content' }}
          >
            {topRow.map((skill, i) => (
              <SkillCard key={`top-${i}`} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* BOTTOM ROW: RIGHT TO LEFT */}
        <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
          <motion.div 
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ display: 'flex', gap: '20px', width: 'fit-content' }}
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
      style={{
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '12px',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        width: '320px',
        flexShrink: 0,
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}
      className="skill-card-final"
    >
      <motion.div 
        variants={iconBoxVariants}
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          marginBottom: '20px',
          borderWidth: '1px',
          borderStyle: 'solid',
          transition: 'all 0.3s ease'
        }}
      >
        {skill.icon}
      </motion.div>
      
      <motion.h3 
        variants={titleVariants}
        style={{
          fontSize: '16px',
          fontWeight: 700,
          marginBottom: '12px',
          letterSpacing: '0.01em',
          transition: 'color 0.3s ease'
        }}
      >
        {skill.name}
      </motion.h3>
      
      <motion.p 
        className="skill-desc-final"
        variants={descVariants}
        style={{
          fontSize: '12.5px',
          lineHeight: 1.6,
          marginBottom: '24px',
          flexGrow: 1,
          transition: 'color 0.3s ease'
        }}
      >
        {skill.desc}
      </motion.p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {skill.tags.map((tag: string, j: number) => (
          <motion.span 
            key={j} 
            variants={tagVariants}
            style={{
              fontSize: '10px',
              fontWeight: 700,
              borderWidth: '1px',
              borderStyle: 'solid',
              padding: '4px 10px',
              borderRadius: '4px',
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease'
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}