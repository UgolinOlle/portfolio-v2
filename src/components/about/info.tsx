import React from 'react';

import { Heading } from '../ui/headers';
import { PicturesBento } from './pictures-bento';

export const AboutInfo: React.FC = (): JSX.Element => {
  // -- Render
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row gap-3 items-start justify-between">
        <div className="w-full max-w-2xl border-l-2 border-gray-900 pl-2 flex flex-col gap-5">
          <Heading variant="h2">À propos de moi</Heading>
          <p className="text-lg text-gray-700/75 text-justify">
            Je m'appelle Ugolin Ollé et je suis un développeur full stack
            passionné, spécialisé dans le développement de logiciels SaaS.
            J'aime explorer de nouvelles technologies et créer des solutions
            innovantes qui simplifient la vie des gens. Je suis constamment à la
            recherche de nouveaux défis techniques pour transformer des idées en
            produits fonctionnels.
          </p>
        </div>
        <div className="max-w-xl w-full border-l-2 border-gray-900 pl-2 flex flex-col gap-5">
          <Heading variant="h2">Création de contenue</Heading>
          <p className="text-lg text-gray-700/75 text-justify">
            Je suis animé par une envie de partager mes connaissances et
            d'inspirer d'autres développeurs à travers la création de contenu
            éducatif. Mon objectif est de démystifier les aspects techniques
            complexes et de rendre l'apprentissage du développement accessible
            et engageant.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-start">
        <Heading variant="h3">Quelques images</Heading>
        <PicturesBento />
      </div>
    </div>
  );
};
