'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { COMMON_ICONS } from '~/components/commons/icons/common';
import { SOCIALS_ICONS } from '~/components/commons/icons/socials';

/**
 * HeroAbout component
 * @name HeroAbout
 * @description A functional React component that displays a short description of the developer.
 * @returns {JSX.Element} A paragraph element describing the developer's passion and motivation.
 * @example
 * return <HeroAbout />
 */
const HeroAbout: React.FC = (): JSX.Element => {
  // --- Variables
  const [showIcons, setShowIcons] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  // --- Functions
  useEffect(() => {
    const handleScroll = () => {
      const element = textRef.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top < window.innerHeight && top > 0) {
          setShowIcons(true);
        } else {
          setShowIcons(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // --- Render
  return (
    <div
      ref={textRef}
      className="w-full text-justify text-xl text-neutral-800 dark:text-neutral-300 md:m-auto md:w-3/4"
    >
      <p>
        Je m'appelle Ugolin Ollé,{' '}
        <motion.span
          className="relative inline-flex items-center whitespace-nowrap"
          animate={{ paddingLeft: showIcons ? '2.2rem' : '0rem' }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="absolute left-[0.3rem] top-auto"
            initial={{ opacity: 0, width: 0 }}
            animate={{
              opacity: showIcons ? 1 : 0,
              width: showIcons ? 'auto' : 0,
              marginRight: showIcons ? '0rem' : '0rem',
            }}
            transition={{ duration: 0.5 }}
          >
            <COMMON_ICONS.neovim className="h-5 w-5" />
          </motion.span>{' '}
          développeur full stack
        </motion.span>{' '}
        spécialisé dans les logiciels SaaS. Ce qui m'anime, c'est l'envie constante d'explorer de nouvelles technologies{' '}
        <motion.span
          className="relative inline-flex items-center whitespace-nowrap"
          animate={{ paddingLeft: showIcons ? '2rem' : '0rem' }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="absolute left-[0.4rem] top-auto"
            initial={{ opacity: 0, width: 0 }}
            animate={{
              opacity: showIcons ? 1 : 0,
              width: showIcons ? 'auto' : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <COMMON_ICONS.stars className="h-5 w-5" />
          </motion.span>
          et de relever
        </motion.span>{' '}
        des défis techniques. Mon objectif : transformer des idées en produits concrets, fonctionnels et innovants.
        J'aime apporter des solutions qui allient performance et efficacité, tout en restant à l'écoute des besoins des
        utilisateurs.
      </p>
    </div>
  );
};

/**
 * HeroAboutTwo component
 * @component
 * @description A functional React component that displays a description about sharing the developer's experience and thoughts.
 * @returns {JSX.Element} A paragraph element describing the developer's activities on LinkedIn and X (Twitter).
 * @example
 * return <HeroAboutTwo />
 */
const HeroAboutTwo: React.FC = (): JSX.Element => {
  // --- Variables
  const [showIcons, setShowIcons] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  // --- Functions
  useEffect(() => {
    const handleScroll = () => {
      const element = textRef.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top < window.innerHeight && top > 0) {
          setShowIcons(true);
        } else {
          setShowIcons(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // --- Render
  return (
    <div
      ref={textRef}
      className="flex w-full flex-col items-center gap-14 text-justify text-xl text-neutral-800 dark:text-neutral-300 md:m-auto md:w-3/4"
    >
      <p>
        J’adore partager mes expériences et réflexions sur le développement et la freelance particulièrement sur{' '}
        <motion.span
          className="relative inline-flex items-center whitespace-nowrap"
          animate={{ paddingLeft: showIcons ? '2.2rem' : '0rem' }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="absolute left-[0.3rem] top-auto"
            initial={{ opacity: 0, width: 0 }}
            animate={{
              opacity: showIcons ? 1 : 0,
              width: showIcons ? 'auto' : 0,
              marginRight: showIcons ? '0.5rem' : '0rem',
            }}
            transition={{ duration: 0.5 }}
          >
            <SOCIALS_ICONS.linkedin className="h-5 w-5" />
          </motion.span>
          LinkedIn
        </motion.span>
        , je publie régulièrement des contenus pour motiver et aider ceux qui souhaitent se lancer, en partageant mes
        apprentissages, mes erreurs, et des conseils pratiques. Mon but est d'aider chacun à avancer dans son parcours,
        avec des idées concrètes et des exemples issus de mon propre chemin.
      </p>
      <p>
        Sur X (anciennement Twitter){' '}
        <motion.span
          className="relative inline-flex items-center whitespace-nowrap"
          animate={{ paddingLeft: showIcons ? '2.2rem' : '0rem' }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="absolute left-[0.3rem] top-auto"
            initial={{ opacity: 0, width: 0 }}
            animate={{
              opacity: showIcons ? 1 : 0,
              width: showIcons ? 'auto' : 0,
              marginRight: showIcons ? '0.5rem' : '0rem',
            }}
            transition={{ duration: 0.5 }}
          >
            <SOCIALS_ICONS.x className="h-5 w-5" />
          </motion.span>
          , je me concentre
        </motion.span>{' '}
        sur des aspects plus personnels. J’y raconte mon quotidien de freelance et de développeur : les défis que je
        relève, les petites victoires qui de la journée, et tout ce qui fait de cette aventure unique. C’est un espace
        où je peux être plus spontané, partager les moments authentiques de la vie d'un freelance, et créer des échanges
        plus directs avec les personnes qui me suivent.
      </p>
    </div>
  );
};

export { HeroAbout, HeroAboutTwo };
