import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';
import { cn } from '@/lib/utils';
import { Providers } from '@/components/providers';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Portfolio | Ugolin Ollé',
  description:
    'Mon portfolio, mes projets, mes compétences et mes expériences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={cn(
            fontSans.variable,
            'min-h-screen bg-background font-sans antialiased'
          )}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
