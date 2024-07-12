'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { custom } from 'zod';

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
  custom: number;
}> = ({ children, custom }) => {
  // -- Render
  return (
    <motion.section
      className="w-full lg:md:w-[35rem] border-l-2 border-gray-900 pl-2 flex flex-col gap-5 rounded-lg shadow-sm py-2"
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
  custom: number;
}> = ({ children, custom }) => {
  // -- Render
  return (
    <motion.div
      className="flex flex-col gap-3 items-center lg:items-start"
      initial="hidden"
      animate="visible"
      custom={custom}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export { AnimatedSection, AnimatedContainer };
