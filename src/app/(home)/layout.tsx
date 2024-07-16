import React from 'react';

import { Hero } from '@/components/hero/hero';
import { MainContainer } from '@/components/ui/container';
import { Navbar } from '@/components/commons/navbar';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainContainer>
      <div className="w-full lg:w-[70vw] h-full flex flex-col justify-center gap-3 lg:gap-5 lg:justify-between">
        <div className="h-full lg:h-2/5 p-2 my-5 md:p-8">
          <Hero />
        </div>
        <div className="h-full lg:h-3/5 p-2 md:pb-8 md:px-8">
          <Navbar />
          {children}
        </div>
      </div>
    </MainContainer>
  );
}
