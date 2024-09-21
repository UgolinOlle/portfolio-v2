import React from 'react';
import { Metadata } from 'next';

import { AnimatedContainer } from '@/components/commons/animation';
import { HeroAbout, HeroAboutTwo } from '@/components/hero/about';
import { PicturesBento } from '@/components/about/pictures-bento';

// --- Metadata
export const metadata: Metadata = {
  title: 'À propos | Ugolin Olle',
  description: "Page d'accueil de mon portfolio",
};

/**
 * @function HomePage
 * @description Main page of the portfolio.
 * @exports HomePage
 */
export default function HomePage() {
  // --- Render
  return (
    <AnimatedContainer custom={0} className="flex flex-col gap-16 mt-16">
      <AnimatedContainer
        custom={1}
        className="flex flex-col items-center gap-5 px-20"
      >
        <HeroAbout />
      </AnimatedContainer>
      <AnimatedContainer custom={2}>
        <PicturesBento />
      </AnimatedContainer>
      <AnimatedContainer custom={3} className="px-20">
        <HeroAboutTwo />
      </AnimatedContainer>
    </AnimatedContainer>
  );
}
