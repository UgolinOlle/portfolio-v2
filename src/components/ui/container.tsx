'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { cn } from '~/lib/utils';

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

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.main
      className="w-full flex justify-center items-center p-0 sm:p-5"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      {children}
    </motion.main>
  );
};

const SkillContainer = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export { MainContainer, SkillContainer };
