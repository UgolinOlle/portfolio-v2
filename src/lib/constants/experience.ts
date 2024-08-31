import dashboard from '../../../public/images/projects/comai-dashboard.jpg';
import login from '../../../public/images/projects/comai-login.jpg';
import publication from '../../../public/images/projects/comai-publication.jpg';
import { ISchoolPicture, ITimelineItem } from '@/lib/interfaces/experience';

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

export const COMAI_PICTURES = [dashboard.src, login.src, publication.src];

export const SCHOOL_PICTURES: ISchoolPicture[] = [
  {
    src: '/images/school/libftn.png',
    alt: 'Libft',
  },
  {
    src: '/images/school/get_next_linen.png',
    alt: 'Get Next Line',
  },
  {
    src: '/images/school/ft_printfn.png',
    alt: 'Ft Printf',
  },
  {
    src: '/images/school/born2berootn.png',
    alt: 'Born2BeRoot',
  },
  {
    src: '/images/school/fract-ole.png',
    alt: 'Fractol',
  },
  {
    src: '/images/school/minitalke.png',
    alt: 'Minitalk',
  },
  {
    src: '/images/school/push_swapn.png',
    alt: 'Push Swap',
  },
  {
    src: '/images/school/philosophersn.png',
    alt: 'Philosophers',
  },
  {
    src: '/images/school/minishelln.png',
    alt: 'Minishell',
  },
  {
    src: '/images/school/netpracticen.png',
    alt: 'NetPractice',
  },
];
