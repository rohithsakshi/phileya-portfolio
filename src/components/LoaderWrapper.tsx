'use client';
import { useState, useEffect } from 'react';
import Loader from './Loader';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Removed sessionStorage check so the loader plays every time for testing
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3680);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    // Show a blank background matching the site background during hydration
    return <div style={{ backgroundColor: 'var(--bg, #1A0E10)', minHeight: '100vh', width: '100%' }} />;
  }

  return (
    <>
      <AnimatePresence>
        {showLoader && <Loader />}
      </AnimatePresence>
      <motion.div
        initial={showLoader ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        animate={{ opacity: showLoader ? 0 : 1, y: showLoader ? 20 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ width: '100%', height: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        {children}
      </motion.div>
    </>
  );
}
