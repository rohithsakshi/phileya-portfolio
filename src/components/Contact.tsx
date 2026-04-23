'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const languages = [
  "English — Professional", "German — A2", 
  "Hindi — Fluent", "Malayalam — Native"
];

export default function Contact({ isActive = true }: { isActive?: boolean }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="section-wrapper">
      <div className="content-max-width flex flex-col items-center">
        {/* Language Pills row centered */}
        <div className="flex flex-wrap justify-center gap-3 w-full mb-12">
          {languages.map((lang, i) => (
            <motion.div
              key={lang}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="pill border-[var(--rose-light)] text-[var(--rose-light)] py-2 px-4 text-xs"
            >
              {lang}
          </motion.div>
          ))}
        </div>

        {/* Form centered */}
        <div className="w-full max-w-[560px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="NAME" 
                className="form-field" 
                required 
                autoComplete="off"
              />
              <div className="field-underline group-focus-within:scale-x-100" />
            </div>
            
            <div className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="form-field" 
                required 
                autoComplete="off"
              />
              <div className="field-underline group-focus-within:scale-x-100" />
            </div>
            
            <div className="relative group">
              <textarea 
                placeholder="MESSAGE" 
                className="form-field h-32" 
                required 
              />
              <div className="field-underline group-focus-within:scale-x-100" />
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              className="submit-btn w-full mt-4"
              type="submit"
            >
              {isSubmitted ? "MESSAGE SENT" : "SEND MESSAGE"}
            </motion.button>
          </form>

          <div className="flex justify-center gap-12 mt-12 pb-16">
            <a href="https://www.linkedin.com/in/phileya-susan-koruth-551802263/" target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
            <a href="#" className="nav-link">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}