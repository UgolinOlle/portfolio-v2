import React from 'react';

import { Heading } from '@/components/ui/headers';
import { PicturesBento } from '@/components/about/pictures-bento';
import { Skills } from '@/components/about/skills';
import {
  AnimatedContainer,
  AnimatedSection,
} from '@/components/commons/animation';

export default function HomePage() {
  // -- Render
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-3 items-start justify-between">
        <AnimatedSection custom={0}>
          <Heading variant="h2">👋 À propos de moi</Heading>
          <p className="text-md text-gray-700/75 dark:text-gray-300/75 text-justify">
            Je m'appelle Ugolin Ollé et je suis un développeur full stack
            passionné, spécialisé dans le développement de logiciels SaaS.
            J'aime explorer de nouvelles technologies et créer des solutions
            innovantes qui simplifient la vie des gens. Je suis constamment à la
            recherche de nouveaux défis techniques pour transformer des idées en
            produits fonctionnels.
          </p>
        </AnimatedSection>
        <AnimatedSection custom={1}>
          <Heading variant="h2">📸 Création de contenu</Heading>
          <p className="text-md text-gray-700/75 dark:text-gray-300/75 text-justify">
            Je suis animé par une envie de partager mes connaissances et
            d'inspirer d'autres développeurs à travers la création de contenu
            éducatif. Mon objectif est de démystifier les aspects techniques
            complexes et de rendre l'apprentissage du développement accessible
            et engageant.
          </p>
        </AnimatedSection>
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
