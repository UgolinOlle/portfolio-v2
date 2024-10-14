'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';

import { COMMON_ICONS } from '~/components/commons/icons/common';
import { SOCIALS_ICONS } from '~/components/commons/icons/socials';

const ANIMATION_DURATION = 0.5;
const ICON_WIDTH = '1.5rem';

const iconVariants = {
  hidden: { opacity: 0, width: 0 },
  visible: { opacity: 1, width: ICON_WIDTH },
};

const textVariants = {
  hidden: { marginLeft: 0 },
  visible: { marginLeft: ICON_WIDTH },
};

type AnimatedTextProps = {
  children: React.ReactNode;
  icon: React.ElementType;
  isInView: boolean;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, icon: Icon, isInView }) => {
  return (
    <span className="relative inline-flex items-center whitespace-nowrap">
      <motion.span
        className="absolute left-0 top-[0.1em]"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={iconVariants}
        transition={{ duration: ANIMATION_DURATION }}
      >
        <Icon className="h-5 w-5" />
      </motion.span>
      <motion.span
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={textVariants}
        transition={{ duration: ANIMATION_DURATION }}
      >
        {children}
      </motion.span>
    </span>
  );
};

const HeroAbout = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="w-full text-xl text-neutral-800 dark:text-neutral-300 md:text-justify lg:m-auto lg:w-3/4"
      id="me"
    >
      <p>
        Je m'appelle Ugolin Ollé,{' '}
        <AnimatedText icon={COMMON_ICONS.neovim} isInView={isInView}>
          développeur full stack
        </AnimatedText>{' '}
        spécialisé dans les logiciels SaaS. Ce qui m'anime, c'est l'envie constante d'explorer de nouvelles technologies{' '}
        <AnimatedText icon={COMMON_ICONS.stars} isInView={isInView}>
          et de relever
        </AnimatedText>{' '}
        des défis techniques. Mon objectif : transformer des idées en produits concrets, fonctionnels et innovants.
        J'aime apporter des solutions qui allient performance et efficacité, tout en restant à l'écoute des besoins des
        utilisateurs.
      </p>
    </div>
  );
};

const HeroAboutTwo = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="flex w-full flex-col items-center gap-14 text-xl text-neutral-800 dark:text-neutral-300 md:text-justify lg:m-auto lg:w-3/4"
    >
      <p>
        J'adore partager mes expériences et réflexions sur le développement et la freelance particulièrement sur{' '}
        <AnimatedText icon={SOCIALS_ICONS.linkedin} isInView={isInView}>
          LinkedIn
        </AnimatedText>
        , je publie régulièrement des contenus pour motiver et aider ceux qui souhaitent se lancer, en partageant mes
        apprentissages, mes erreurs, et des conseils pratiques. Mon but est d'aider chacun à avancer dans son parcours,
        avec des idées concrètes et des exemples issus de mon propre chemin.
      </p>
      <p>
        Sur X (anciennement Twitter){' '}
        <AnimatedText icon={SOCIALS_ICONS.x} isInView={isInView}>
          , je me concentre
        </AnimatedText>{' '}
        sur des aspects plus personnels. J'y raconte mon quotidien de freelance et de développeur : les défis que je
        relève, les petites victoires qui de la journée, et tout ce qui fait de cette aventure unique. C'est un espace
        où je peux être plus spontané, partager les moments authentiques de la vie d'un freelance, et créer des échanges
        plus directs avec les personnes qui me suivent.
      </p>
    </div>
  );
};

export { HeroAbout, HeroAboutTwo };
