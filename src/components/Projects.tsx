'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: "Cosmic Odyssey",
    description: "A 3D exploration game built with Three.js and React Fiber.",
    tags: ["React", "Three.js", "Web Audio"],
  },
  {
    title: "Neon Pulse",
    description: "Cyberpunk-inspired e-commerce dashboard with real-time data.",
    tags: ["Next.js", "Framer Motion", "D3.js"],
  },
  {
    title: "Aether Flow",
    description: "Generative art platform showcasing procedural animations.",
    tags: ["GLSL", "React", "Canvas"],
  }
];

export default function Projects() {
  return (
    <section className="section-container flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="text-5xl font-black mb-16 text-[var(--highlight)]"
      >
        Selected Works
      </motion.h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="project-card-inner">
              <div className="project-front">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 border border-white/20 rounded-full text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-back">
                <p className="text-center mb-6 px-4">{project.description}</p>
                <button className="submit-btn text-xs px-8 py-3">
                  View Project
                  <div className="liquid-fill"></div>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}