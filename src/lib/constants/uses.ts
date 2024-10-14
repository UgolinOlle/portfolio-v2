/**
 * @file uses.ts
 * @description Constants for the uses page
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import { CardProps } from '~/components/uses/card';

import Arc from 'public/images/uses/arc.svg';
import Warp from 'public/images/uses/warp.svg';
import TablePlus from 'public/images/uses/tableplus.avif';
import Framer from 'public/images/uses/framer.png';
import Figma from 'public/images/uses/figma.webp';
import ScreenStudio from 'public/images/uses/screen-studio.webp';
import Notion from 'public/images/uses/notion.png';
import Slack from 'public/images/uses/slack.png';

import Macbook from 'public/images/uses/mac.jpg';
import Keychron from 'public/images/uses/keycron.webp';
import THFBag from 'public/images/uses/bag.webp';
import iPhone from 'public/images/uses/iphone.jpeg';

import WhoaWallpaper from 'public/images/uses/wallpapers/whoa-wallpaper.png';

/**
 * @constant USES_APP
 * @description - List of applications that I use on a daily basis.
 * @type {Array<CardProps>}
 * @exports USES_APP
 */
export const USES_APP: CardProps[] = [
  {
    title: 'Arc',
    description: "Le navigateur web que j'utilise pour tout.",
    image: Arc,
    link: 'https://arc.net/gift/c2348a9f',
  },
  {
    title: 'Warp',
    description: "Mon terminal préféré, rapide, je l'utilise pour tout.",
    image: Warp,
    link: 'https://www.warp.dev',
  },
  {
    title: 'TablePlus',
    description: 'GUI pour les bases de données, rapide et efficace.',
    image: TablePlus,
    link: 'https://tableplus.com',
  },
  {
    title: 'Framer',
    description: 'Mon tout nouveau petit bijou pour faire mes sites web.',
    image: Framer,
    link: 'https://www.framer.com',
  },
  {
    title: 'Figma',
    description: 'Outil de design pour les maquettes et les prototypes.',
    image: Figma,
    link: 'https://www.figma.com',
  },
  {
    title: 'Screen Studio',
    description: 'Un outil pour enregistrer et modifier des vidéos.',
    image: ScreenStudio,
    link: 'https://www.screen.studio',
  },
  {
    title: 'Notion',
    description: 'Mon outil de prise de notes et de gestion de projet.',
    image: Notion,
    link: 'https://www.notion.so',
  },
  {
    title: 'Slack',
    description: "L'indispensable de communication préféré pour le travail.",
    image: Slack,
    link: 'https://www.slack.com',
  },
];

/**
 * @constant USES_GEAR
 * @description - List of gear that I use on a daily basis.
 * @type {Array<CardProps>}
 * @exports USES_GEAR
 */
export const USES_GEAR: CardProps[] = [
  {
    title: 'Macbook Air',
    description: 'Un Macbook Air M1, pour le développement et le design.',
    image: Macbook,
    link: 'https://support.apple.com/en-us/111883',
  },
  {
    title: 'Keychron K2',
    description: 'Un clavier mécanique sans fil.',
    image: Keychron,
    link: 'https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard?srsltid=AfmBOoqqA5AjaJ52V3lt7p5p3m7MZDNeWjP8Fdw2p9AKixeP2jXoi54J',
  },
  {
    title: 'Sac à dos',
    description: 'Un sac à dos (TNF) pour transporter mon matériel.',
    image: THFBag,
    link: 'https://www.farfetch.com/kh/shopping/men/the-north-face-borealis-shell-backpack-item-15435176.aspx',
  },
  {
    title: 'iPhone 13',
    description: 'Un iPhone 13 pour gérer mes tâches et mes projets.',
    image: iPhone,
    link: 'https://www.apple.com/shop/buy-iphone/iphone-13',
  },
];

/**
 * @constant USES_WALLPAPER
 * @description - List of my favorite wallpapers that I use on a daily basis.
 * @type {Array<CardProps>}
 * @exports USES_WALLPAPER
 */
export const USES_WALLPAPER: CardProps[] = [
  {
    title: 'Whoa Wallpaper',
    description: "Un fond d'écran realisé sur Figma.",
    image: WhoaWallpaper,
    link: 'https://ugolin-olle.com/',
  },
];
