import test_images from '../../../public/images/bouddha.jpg';

export interface ITimelineItem {
  picture?: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  color: string;
  link?: string;
}

/**
 * @constant EXPERIENCES
 * @description Experiences data.
 * @type {ITimelineItem[]} The experiences data.
 * @exports EXPERIENCES
 */
export const EXPERIENCES: ITimelineItem[] = [
  {
    picture: '/logos/comai.png',
    title: 'Comai - Développeur Full Stack',
    slug: 'comai',
    description:
      "Développement d'un SaaS (MVP) pour la gestion et l'automatisation des comptes réseaux sociaux.",
    date: '2024',
    color: 'bg-purple-500',
  },
  {
    picture: '/logos/42.jpeg',
    title: '42 Bangkok - Cadet',
    slug: '42-bangkok',
    description: 'Formation en architecture informatique.',
    date: '2023 - 2024',
    color: 'bg-blue-800',
  },
  {
    picture: '/logos/azertyconsulting.svg',
    title: 'Azerty Consutling - Développeur Full Stack',
    slug: 'azerty-consulting',
    description: 'Développement & Accompagnement sur des solutions sur mesure.',
    date: '2022',
    color: 'bg-red-500',
  },
  {
    picture: '/logos/nicoka.png',
    title: 'Nicoka - Développeur Backend',
    slug: 'nicoka',
    description:
      "Stage de fin d'études chez Nicoka, entreprise dédiée aux métiers du conseil et du service.",
    date: '2022',
    color: 'bg-blue-900',
  },
  {
    picture: '/logos/autodidact.svg',
    title: 'Appprentissage en auto-didacte',
    slug: 'autodidact',
    description:
      'Développement de projets personnels principalement sur du Web & Mobile.',
    date: '2018 - 2022',
    color: 'bg-green-500',
  },
];

export const COMAI_PICTURES = [
  test_images.src,
  test_images.src,
  test_images.src,
];
