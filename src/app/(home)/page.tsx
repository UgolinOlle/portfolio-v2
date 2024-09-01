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
    <div className="flex flex-col gap-28 mt-10 mb-28">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-3 items-center lg:items-start justify-between">
        <AnimatedContainer custom={0} className="w-full lg:w-[45%]">
          <Heading variant="h2" className="flex items-center gap-2 group/hand">
            <span className="group-hover/hand:animate-phone transition ease-in-out">
              👋
            </span>
            À propos de moi
          </Heading>
          <p className="text-md text-slay-700/75 dark:text-slay-300/75 text-justify">
            Je m'appelle Ugolin Ollé et je suis un développeur full stack
            passionné, spécialisé dans le développement de logiciels SaaS.
            J'aime explorer de nouvelles technologies et créer des solutions
            innovantes qui simplifient la vie des gens. Je suis constamment à la
            recherche de nouveaux défis techniques pour transformer des idées en
            produits fonctionnels.
          </p>
        </AnimatedContainer>
        <AnimatedContainer custom={1} className="w-full lg:w-[45%]">
          <Heading
            variant="h2"
            className="flex items-center gap-2 group/camera"
          >
            <span className="group-hover/camera:animate-flash transition ease-in-out">
              📸
            </span>
            Création de contenu
          </Heading>
          <p className="text-md text-slay-700/75 dark:text-slay-300/75 text-justify">
            Je suis animé par une envie de partager mes connaissances et
            d'inspirer d'autres développeurs à travers la création de contenu
            éducatif. Mon objectif est de démystifier les aspects techniques
            complexes et de rendre l'apprentissage du développement accessible
            et engageant.
          </p>
        </AnimatedContainer>
      </div>

      <AnimatedContainer custom={2}>
        <Heading variant="h2">🌆 Quelques images</Heading>
        <PicturesBento />
      </AnimatedContainer>

      <AnimatedContainer custom={3}>
        <Heading variant="h2">📚 Skills</Heading>
        <Skills />
      </AnimatedContainer>
    </div>
  );
}
