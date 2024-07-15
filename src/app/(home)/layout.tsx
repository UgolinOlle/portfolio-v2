import React from 'react';

import { Hero } from '@/components/hero/hero';
import { RetroGrid } from '@/components/retro';
import { MainContainer } from '@/components/ui/container';
import { Navbar } from '@/components/commons/navbar';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainContainer>
      <div className="w-full lg:w-[70vw] h-full flex flex-col justify-center gap-3 lg:gap-6 lg:justify-between">
        <div className="relative h-full lg:h-2/5 p-2 md:p-8">
          <RetroGrid />
          <Hero />
        </div>
        <div className="border-b border-gray-200 mx-4 md:mx-8" />
        <div className="h-full lg:h-3/5 p-2 md:p-8">
          <Navbar />
          {children}
        </div>
      </div>
    </MainContainer>
  );
}
