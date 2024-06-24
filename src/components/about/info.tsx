import React from 'react';
import { motion } from 'framer-motion';

import { Heading } from '../ui/headers';
import { PicturesBento } from './pictures-bento';
import { GithubProfile } from './github';

export const AboutInfo: React.FC = (): JSX.Element => {
  // -- Variables
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  // -- Render
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-3 items-start justify-between">
        <motion.div
          className="w-full lg:max-w-2xl border-l-2 border-gray-900 pl-2 flex flex-col gap-5"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={variants}
        >
          <Heading variant="h2">👋 À propos de moi</Heading>
          <p className="text-md text-gray-700/75 text-justify">
            Je m'appelle Ugolin Ollé et je suis un développeur full stack
            passionné, spécialisé dans le développement de logiciels SaaS.
            J'aime explorer de nouvelles technologies et créer des solutions
            innovantes qui simplifient la vie des gens. Je suis constamment à la
            recherche de nouveaux défis techniques pour transformer des idées en
            produits fonctionnels.
          </p>
        </motion.div>
        <motion.div
          className="lg:max-w-xl w-full border-l-2 border-gray-900 pl-2 flex flex-col gap-5"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={variants}
        >
          <Heading variant="h2">📸 Création de contenu</Heading>
          <p className="text-md text-gray-700/75 text-justify">
            Je suis animé par une envie de partager mes connaissances et
            d'inspirer d'autres développeurs à travers la création de contenu
            éducatif. Mon objectif est de démystifier les aspects techniques
            complexes et de rendre l'apprentissage du développement accessible
            et engageant.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="flex flex-col gap-3 items-center lg:items-start"
        initial="hidden"
        animate="visible"
        custom={2}
        variants={variants}
      >
        <Heading variant="h2">🌆 Quelques images</Heading>
        <PicturesBento />
      </motion.div>
      <motion.div
        className="flex flex-col gap-5 items-center lg:items-start"
        initial="hidden"
        animate="visible"
        custom={3}
        variants={variants}
      >
        <Heading variant="h2">🌐 Profiles</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <GithubProfile />
        </div>
      </motion.div>
    </div>
  );
};
