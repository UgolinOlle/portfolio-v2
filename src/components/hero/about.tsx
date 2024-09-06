'use client';

import React from 'react';
import { Pen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export const HeroAbout: React.FC = () => {
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
          hover: { opacity: 1, x: '-150%', y: '-350%', rotate: '-10deg' },
        }}
        transition={{ duration: 0.2 }}
      >
        <Badge text="Neovim ❤️" color="blue-500" />
      </motion.div>

      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        variants={{
          rest: { opacity: 0, x: 0, y: 0 },
          hover: { opacity: 1, x: '150%', y: '-150%', rotate: '7deg' },
        }}
        transition={{ duration: 0.2 }}
      >
        <Badge text="📍 J'habitais à Angers" color="red-500" />
      </motion.div>

      <motion.div
        className="absolute pointer-events-none"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        variants={{
          rest: { opacity: 0, x: 0, y: 0 },
          hover: { opacity: 1, x: '-250%', y: '150%', rotate: '7deg' },
        }}
        transition={{ duration: 0.2 }}
      >
        <Badge text="📝 J'aime écrire des articles" color="blue-500" />
      </motion.div>

      <motion.div
        className="absolute pointer-events-none"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        variants={{
          rest: { opacity: 0, x: 0, y: 0 },
          hover: { opacity: 1, x: '50%', y: '150%', rotate: '-11deg' },
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
          rest: { opacity: 0, x: 0, y: 0 },
          hover: { opacity: 1, x: '0', y: '-170%', rotate: '2deg' },
        }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src="/images/me-3.svg"
          width={200}
          height={200}
          alt="Ugolin OLLE"
        />
      </motion.div>

      <p className="text-md text-slay-700/75 dark:text-slay-300/75 text-justify w-full md:w-3/4">
        Je m'appelle Ugolin Ollé et je suis un développeur full stack passionné,
        spécialisé dans le développement de logiciels SaaS. J'aime explorer de
        nouvelles technologies et créer des solutions innovantes qui simplifient
        la vie des gens. Je suis constamment à la recherche de nouveaux défis
        techniques pour transformer des idées en produits fonctionnels.
      </p>
    </motion.div>
  );
};
