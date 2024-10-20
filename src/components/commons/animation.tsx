/**
 * @file animation.tsx
 * @description Animation component
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

'use client';

// --- Imports
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '~/lib/utils';

// --- Global variants animation
const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 1.5,
      ease: 'easeOut',
    },
  }),
};

/**
 * @type ContainerProps
 * @description The props of the container component
 * @property {React.ReactNode} children - The children of the container
 * @property {string} className - The class name of the container
 */
type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * @type BoxProps
 * @description The props of the box component
 * @property {React.ReactNode} children - The children of the box
 * @property {string} className - The class name of the box
 */
type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * @name Container
 * @description Container component
 * @param children {React.ReactNode} The children of the container component
 * @param className {string} The class name of the container component
 * @returns {React.JSX.Element} The container component
 */
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  // --- Variables
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // --- Functions
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // --- Render
  return (
    <motion.section
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

/**
 * @name Box
 * @description Box component
 * @param children {React.ReactNode} The children of the box component
 * @param className {string} The class name of the box component
 * @returns {React.JSX.Element} The box component
 */
const Box: React.FC<BoxProps> = ({ children, className }) => {
  // --- Variables
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // --- Functions
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // --- Render
  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export { Container, Box };
