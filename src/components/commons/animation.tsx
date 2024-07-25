'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

// -- Global variants animation
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
    },
  }),
};

const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  custom: number;
}> = ({ children, className, custom }) => {
  // -- Render
  return (
    <motion.section
      className={cn(
        'w-full h-full flex flex-col gap-5 rounded-lg py-2',
        className
      )}
      initial="hidden"
      animate="visible"
      custom={custom}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

const AnimatedContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  custom: number;
}> = ({ children, className, custom }) => {
  // -- Render
  return (
    <motion.div
      className={cn(
        'flex flex-col gap-3 items-center lg:items-start',
        className
      )}
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
  // -- Render
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

export { AnimatedSection, AnimatedContainer, AnimatedGrid };
