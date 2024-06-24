'use client';

import React from 'react';
import { motion } from 'framer-motion';

// -- Variables
const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  out: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.main
      className="w-full p-0 sm:p-5"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      {children}
    </motion.main>
  );
};
