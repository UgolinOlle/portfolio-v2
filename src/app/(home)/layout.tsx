import React from 'react';

import { Hero } from '@/components/hero';
import { RetroGrid } from '@/components/retro';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full p-0 sm:p-5">
      <div className="w-full h-full flex flex-col justify-center lg:justify-between">
        <div className="relative h-full lg:h-2/5 p-2 md:p-8">
          <RetroGrid />
          <Hero />
        </div>
        <div className="border-b border-gray-200 md:mx-8" />
        <div className="h-full lg:h-3/5 p-2 md:p-8">{children}</div>
      </div>
    </main>
  );
}
