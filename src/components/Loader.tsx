'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Dancing_Script } from 'next/font/google';
import styles from './Loader.module.css';

const dancingScript = Dancing_Script({ subsets: ['latin'] });

export default function Loader() {
  const name = "Phileya";
  const letters = name.split("");

  return (
    <motion.div
      className={styles.loaderContainer}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className={styles.profileImageWrapper}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/phileya-profile.jpg"
          alt="Phileya"
          fill
          className="object-cover"
        />
      </motion.div>

      <div className={styles.nameContainer}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className={`${styles.nameLetter} ${dancingScript.className}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.18, duration: 0.4 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <motion.div
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.38, duration: 0.5 }}
      >
        BIOMEDICAL ENGINEER
      </motion.div>
    </motion.div>
  );
}
