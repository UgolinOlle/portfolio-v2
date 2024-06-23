import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import React from 'react';

import { ThemeProvider } from '@/lib/providers/theme';
import AnimatedCursor from 'react-animated-cursor';

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
