'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

// -- Global variants animation
const variants = {
  hidden: { opacity: 0, y: 5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const AnimatedContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  custom: number;
}> = ({ children, className, custom }) => {
  // --- Render
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      animate="visible"
      custom={custom}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const AnimatedGrid: React.FC<{
  children: React.ReactNode;
  className?: string;
  custom: number;
}> = ({ children, className, custom }) => {
  // --- Render
  return (
    <motion.div
      className={cn('grid grid-cols-1 md:grid-cols-2 gap-5', className)}
      initial="hidden"
      animate="visible"
      custom={custom}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const AnimatedText: React.FC<{
  children: React.ReactNode;
  custom: number;
  className?: string;
}> = ({ children, custom, className }) => {
  // --- Render
  return (
    <motion.p
      className={cn('text-lg font-light', className)}
      initial="hidden"
      animate="visible"
      custom={custom}
      variants={variants}
    >
      {children}
    </motion.p>
  );
};

export { AnimatedContainer, AnimatedGrid, AnimatedText };
