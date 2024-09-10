import React from 'react';

import { AnimatedContainer } from '@/components/commons/animation';
import { HeroAbout } from '@/components/hero/about';
import { Heading } from '@/components/ui/headers';
import { PicturesBento } from '@/components/about/pictures-bento';
import { Skills } from '@/components/about/skills';

export default function HomePage() {
  // -- Render
  return (
    <div className="flex flex-col gap-16 mt-8">
      <AnimatedContainer
        custom={1}
        className="flex flex-col items-center gap-5"
      >
        <Heading variant="h2" className="flex items-center gap-2">
          À propos de moi
        </Heading>
        <HeroAbout />
      </AnimatedContainer>

      <AnimatedContainer custom={2}>
        <Heading variant="h2">Quelques images</Heading>
        <PicturesBento />
      </AnimatedContainer>

      <AnimatedContainer custom={3}>
        <Heading variant="h2">Skills</Heading>
        <Skills />
      </AnimatedContainer>
    </div>
  );
}
