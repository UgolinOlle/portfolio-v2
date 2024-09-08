'use client';

import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'sonner';

import { ThemeProvider } from '@/lib/providers/theme';
import { AnimatedCursor } from '@/components/commons/cursor';

export const Providers = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  // --- Variables
  const [isDesktop, setIsDesktop] = useState(false);

  // --- Functions
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  // --- Render
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Toaster richColors />
      <AnimatedCursor />
      <ThemeProvider>
        <div className={`${isDesktop ? 'cursor-none' : 'cursor-auto'}`}>
          {children}
        </div>
      </ThemeProvider>
    </>
  );
};
