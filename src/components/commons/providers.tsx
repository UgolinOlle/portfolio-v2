'use client';

import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'sonner';
import { Rain } from 'react-rainfall';

import { ThemeProvider } from '~/lib/providers/theme';
import { Cursor } from '~/components/commons/cursor';

export const Providers = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  // --- Variables
  const [isRainActive, setIsRainActive] = React.useState(false);

  // --- Functions
  useEffect(() => {
    const handleStorage = () => {
      const savedState = localStorage.getItem('rainActive');

      if (savedState !== null) {
        setIsRainActive(JSON.parse(savedState));
      }
    };

    handleStorage();

    window.addEventListener('storage', handleStorage);

    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key: string, value: string) {
      originalSetItem.call(this, key, value);
      if (key === 'rainActive') {
        handleStorage();
      }
    };

    return () => {
      window.removeEventListener('storage', handleStorage);
      localStorage.setItem = originalSetItem;
    };
  }, []);

  // --- Render
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Toaster richColors />
      <ThemeProvider>
        <Cursor />
        {children}

        {isRainActive && (
          <div style={{ pointerEvents: 'none', position: 'absolute', width: '100%', height: '100%' }}>
            <Rain dropletColor="rgb(0, 0, 139)" showImpact={false} />
          </div>
        )}
      </ThemeProvider>
    </>
  );
};
