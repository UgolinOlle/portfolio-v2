'use client';

import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'sonner';
import { motion } from 'framer-motion';

import { ThemeProvider } from '@/lib/providers/theme';
import { AnimatedCursor } from '@/components/commons/cursor';

export const Providers = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  // --- Variables
  const variants = {
    desktop: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    mobile: {
      opacity: 1,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // --- Render
  return (
    <motion.div
      initial={isDesktop ? 'desktop' : 'mobile'}
      animate={isDesktop ? 'desktop' : 'mobile'}
      variants={variants}
    >
      <Analytics />
      <SpeedInsights />
      <Toaster richColors />
      <AnimatedCursor />
      <ThemeProvider>{children}</ThemeProvider>
    </motion.div>
  );
};
