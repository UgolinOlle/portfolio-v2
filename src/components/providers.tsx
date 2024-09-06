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
  const [isCursorActive, setIsCursorActive] = useState<boolean>(true);

  // --- Functions
  useEffect(() => {
    const savedCursorState = localStorage.getItem('cursor-active');
    if (savedCursorState !== null) {
      setIsCursorActive(JSON.parse(savedCursorState));
    }

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'cursor-active') {
        const updatedState = event.newValue ? JSON.parse(event.newValue) : true;
        setIsCursorActive(updatedState);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // --- Render
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Toaster richColors />
      {isCursorActive && <AnimatedCursor />}
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};
