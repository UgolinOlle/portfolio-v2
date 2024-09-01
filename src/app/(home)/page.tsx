import React from 'react';
import { Metadata } from 'next';

import { AnimatedContainer } from '@/components/commons/animation';
import { Heading } from '@/components/ui/headers';
import { PicturesBento } from '@/components/about/pictures-bento';
import { Skills } from '@/components/about/skills';

export const metadata: Metadata = {
  title: 'Accueil | Ugolin Ollé',
  description:
    'Développeur full stack passionné par la création de logiciels SaaS et la création de contenu éducatif.',
};

export default function HomePage() {
  // -- Render
  return (
    <div className="flex flex-col gap-28 my-28">
      <AnimatedContainer custom={0}>
        <Heading variant="h2" className="flex items-center gap-2">
          À propos de moi
        </Heading>
        <p className="text-md text-slay-700/75 dark:text-slay-300/75 text-justify w-3/4">
          Je m'appelle Ugolin Ollé et je suis un développeur full stack
          passionné, spécialisé dans le développement de logiciels SaaS. J'aime
          explorer de nouvelles technologies et créer des solutions innovantes
          qui simplifient la vie des gens. Je suis constamment à la recherche de
          nouveaux défis techniques pour transformer des idées en produits
          fonctionnels.
        </p>
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
