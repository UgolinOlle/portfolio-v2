import React from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'sonner';

import { ThemeProvider } from '@/lib/providers/theme';

export const Providers = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  // -- Render
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Toaster richColors />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: '3px solid var(--cursor-color)',
        }}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)',
        }}
      />
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};
