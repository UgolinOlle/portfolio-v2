import { SKILLS_ICONS } from '@/components/commons/icons/skills';
import { IAboutPicture, IAboutSkill } from '@/lib/interfaces/icons';

/**
 * @constant ABOUT_IMAGES
 * @description Array of objects containing image data for the about page.
 * @type {IAboutPicture[]}
 * @exports ABOUT_IMAGES
 */
export const ABOUT_IMAGES: IAboutPicture[] = [
  {
    src: '/images/code/code-1.jpeg',
    alt: 'Développement de mon portfolio à Phnom Penh',
    text: 'Développement de mon portfolio à Phnom Penh',
  },
  {
    src: '/images/misc/city-1.jpeg',
    alt: 'Coucher de soleil à Phnom Penh',
    text: 'Coucher de soleil à Phnom Penh',
  },
  {
    src: '/images/code/code-2.jpeg',
    alt: "Développement de auto-push, un CLI écrit en Go pour automatisé l'update de son profil Github.",
    text: "Développement de auto-push, un CLI écrit en Go pour automatisé l'update de son profil Github.",
  },
  {
    src: '/images/misc/bouddha.jpeg',
    alt: 'Wat Paknam',
    text: 'Wat Paknam, un Bouddha de 69 mètres de haut situé en plein Bangkok.',
  },
];

/**
 * @constant ABOUT_IMAGES_2
 * @description Array of objects containing image data for the about page.
 * @type {IAboutPicture[]}
 * @exports ABOUT_IMAGES_2
 */
export const ABOUT_IMAGES_2: IAboutPicture[] = [
  {
    src: '/images/code/code-3.jpeg',
    alt: 'Développement de mon portfolio à Phnom Penh',
    text: 'Développement de mon portfolio à Phnom Penh',
  },
  {
    src: '/images/code/code-4.jpeg',
    alt: 'Methode Agile',
    text: 'Methode Agile',
  },
  {
    src: '/images/me/me-1.jpeg',
    alt: 'Moi',
    text: 'Moi',
  },
  {
    src: '/images/me/me-2.jpeg',
    alt: 'Moi',
    text: 'Moi',
  },
];

/**
 * @constant ABOUT_SKILLS
 * @description Array of objects containing skill data for the about page.
 * @type {IAboutSkill[]}
 * @exports ABOUT_SKILLS
 */
export const ABOUT_SKILLS: IAboutSkill[] = [
  {
    title: 'Typescript',
    description: "Développement d'applications web et mobiles.",
    icon: SKILLS_ICONS.typescript,
  },
  {
    title: 'Javascript',
    description: "Développement d'applications web et mobiles.",
    icon: SKILLS_ICONS.javascript,
  },
  {
    title: 'Node.js',
    description: "Développement d'applications web et mobiles.",
    icon: SKILLS_ICONS.nodejs,
  },
  {
    title: 'Next.js',
    description: "Développement d'applications web et mobiles.",
    icon: SKILLS_ICONS.nextjs,
  },
  {
    title: 'Nest.js',
    description: "Développement d'applications web et mobiles.",
    icon: SKILLS_ICONS.nestjs,
  },
  {
    title: 'PHP',
    description: "Développement d'applications web.",
    icon: SKILLS_ICONS.php,
  },
  {
    title: 'Symfony',
    description: "Développement d'applications web.",
    icon: SKILLS_ICONS.symfony,
  },
  {
    title: 'Tailwind',
    description: 'Framework CSS.',
    icon: SKILLS_ICONS.tailwindcss,
  },
  {
    title: 'PostgreSQL',
    description: 'Base de données SQL.',
    icon: SKILLS_ICONS.postgresql,
  },
  {
    title: 'C',
    description: 'Langage de programmation.',
    icon: SKILLS_ICONS.c,
  },
  {
    title: 'Bash',
    description: 'Langage de script.',
    icon: SKILLS_ICONS.bash,
  },
];
