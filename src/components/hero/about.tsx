'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';

/**
 * @function HeroAbout
 * @description Simple component that displays a short description of the author.
 * @exports HeroAbout
 */
const HeroAbout: React.FC = () => {
  return (
    <motion.div
      className="relative"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div
        className="absolute pointer-events-none"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        variants={{
          rest: { opacity: 0, x: 0, y: 0 },
          hover: { opacity: 1, x: '-190%', y: '240%', rotate: '6deg' },
        }}
        transition={{ duration: 0.2 }}
      >
        <Badge text="Neovim ❤️" color="blue-500" />
      </motion.div>

      <motion.div
        className="absolute pointer-events-none"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        variants={{
          rest: { opacity: 0, x: 0, y: 0 },
          hover: { opacity: 1, x: '50%', y: '140%', rotate: '-7deg' },
        }}
        transition={{ duration: 0.2 }}
      >
        <Badge
          text="🎨 J'apprend le design parce que c'est cool"
          color="purple-500"
        />
      </motion.div>

      <motion.div
        className="absolute pointer-events-none"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        variants={{
          rest: { opacity: 0, x: 0, y: '-100%' },
          hover: { opacity: 1, x: '-320%', y: '-80%', rotate: '-1jdeg' },
        }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src="/images/me/me-3.svg"
          width={200}
          height={200}
          alt="Ugolin OLLE"
        />
      </motion.div>

      <p className="text-lg text-neutral-800 dark:text-neutral-300 text-justify w-full md:w-3/4 md:m-auto">
        Je suis Ugolin Ollé, développeur full stack spécialisé dans les
        logiciels SaaS. Ce qui me motive, c’est de créer des solutions qui
        facilitent la vie des gens. J’adore explorer de nouvelles technologies
        et relever des défis techniques pour transformer des idées en produits
        concrets et fonctionnels.
      </p>
    </motion.div>
  );
};

const HeroAboutTwo: React.FC = () => {
  // --- Render
  return (
    <p className="text-lg text-neutral-800 dark:text-neutral-300 text-justify w-full md:w-3/4 md:m-auto">
      J'aime partager mes expériences et mes réflexions sur le développement et
      l'entrepreneuriat.
      <br />
      <br />
      Sur LinkedIn, j'essaie d'inspirer et de motiver les autres à travers des
      contenus autour de ces thèmes, en partageant mes apprentissages et mes
      conseils pour ceux qui cherchent à se lancer.
      <br />
      <br />
      Sur X (Twitter), je me tourne vers un partage plus personnel, en racontant
      mon quotidien de développeur et d'entrepreneur, les défis que je
      rencontre, les petites victoires, et tout ce qui fait la richesse de cette
      aventure.
    </p>
  );
};

export { HeroAbout, HeroAboutTwo };
