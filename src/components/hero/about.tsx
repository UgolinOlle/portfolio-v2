'use client'

import React from 'react'

/**
 * @function HeroAbout
 * @description Simple component that displays a short description of me.
 * @exports HeroAbout
 */
const HeroAbout: React.FC = () => {
  // --- Render
  return (
    <p className="w-full text-justify text-xl text-neutral-800 dark:text-neutral-300 md:m-auto md:w-3/4">
      Je suis Ugolin Ollé, développeur full stack spécialisé dans les logiciels
      SaaS. Ce qui me motive, c’est de créer des solutions qui facilitent la vie
      des gens. J’adore explorer de nouvelles technologies et relever des défis
      techniques pour transformer des idées en produits concrets et
      fonctionnels.
    </p>
  )
}

/**
 * @function HeroAboutTwo
 * @description Simple component that displays a short description of me.
 * @exports HeroAboutTwo
 */
const HeroAboutTwo: React.FC = () => {
  // --- Render
  return (
    <p className="w-full text-justify text-xl text-neutral-800 dark:text-neutral-300 md:m-auto md:w-3/4">
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
  )
}

export { HeroAbout, HeroAboutTwo }
