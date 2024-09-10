import React from 'react';

import { Hero } from '@/components/hero/hero';
import { MainContainer } from '@/components/ui/container';
import { Navbar } from '@/components/commons/menus/navbar';
import { Footer } from '@/components/commons/footer';
import { AnimatedContainer } from '@/components/commons/animation';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainContainer>
      <div className="w-full lg:w-[90vw] xl:w-[80vw] h-full flex flex-col justify-center gap-3 lg:gap-5 lg:justify-between">
        <AnimatedContainer
          custom={0}
          className="h-full lg:h-2/5 p-2 mt-5 mb-2 md:px-8 md:pt-8"
        >
          <Hero />
        </AnimatedContainer>
        <AnimatedContainer custom={2} className="h-full lg:h-auto p-2 md:px-8">
          <Navbar />
          {children}
          <Footer />
        </AnimatedContainer>
      </div>
    </MainContainer>
  );
}
