import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';
import { cn } from '@/lib/utils';
import { Providers } from '@/components/providers';
import { Footer } from '@/components/commons/footer';
import { BottomMenu } from '@/components/commons/bottom-menu';

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
            'bg-background font-body antialiased flex flex-col items-center relative px-4 sm:px-6 md:px-8 py-4'
          )}
        >
          <Providers>
            {children}
            <BottomMenu />
            <Footer />
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
