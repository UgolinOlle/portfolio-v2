import React from 'react';
import { Metadata } from 'next';

import { Container } from '~/components/commons/animation';
import { HeroAbout, HeroAboutTwo } from '~/components/hero/about';
import { PicturesBento } from '~/components/about/pictures-bento';

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
    <Container  className="flex flex-col gap-16 my-16">
      <Container
        
        className="flex flex-col items-center gap-5 md:px-20"
      >
        <HeroAbout />
      </Container>
      <Container >
        <PicturesBento />
      </Container>
      <Container  className="md:px-20">
        <HeroAboutTwo />
      </Container>
    </Container>
  );
}
