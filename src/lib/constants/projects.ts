import { IProjectItem } from '@/lib/interfaces/project';
import { getBaseUrl } from '@/lib/utils';

import whoaide from 'public/images/projects/whoa-ide/whoa-ide.jpg';
import telescope from 'public/images/projects/whoa-ide/telescope.png';

export const IDE_PICTURES = [whoaide.src, telescope.src];

/**
 * @constant PROJECTS
 * @description List of projects.
 * @type {IProjectItem[]}
 * @export PROJECTS
 */
export const PROJECTS: IProjectItem[] = [
  {
    id: 'whoa-ide',
    name: 'Whoa IDE',
    description: '⌨️ · My custom configuration for Neovim.',
    imageUrl: `${getBaseUrl()}/images/projects/whoa-ide/whoa-ide.jpg`,
    url: 'whoa-ide',
    githubUrl: 'https://github.com/UgolinOlle/WhoaIDE',
    technologies: ['Neovim', 'Lua'],
    date: '2023',
  },
  {
    id: 'portfolio-v2',
    name: 'Portfolio v2',
    description:
      '💻 · My simple portfolio to show my skills, projects, experiences.',
    imageUrl: `${getBaseUrl()}/images/projects/portfolio/portfolio-v2.jpg`,
    url: 'portfolio-v2',
    githubUrl: 'https://github.com/UgolinOlle/portfolio-v2',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
    ],
    date: '2024',
  },
  {
    id: 'vaultflow',
    name: 'Vaultflow',
    description:
      '🌐 · A simple landing page about a modern analytics tool for the modern world.',
    imageUrl: `${getBaseUrl()}/images/projects/vaultflow/home-1.jpg`,
    url: 'vaultflow',
    githubUrl: 'https://github.com/UgolinOlle/vaultflow',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
    ],
    date: '2024',
  },
  {
    id: 'libft',
    name: 'libft',
    description: '📚 • Une bibliothèque de fonctions en C.',
    imageUrl: `${getBaseUrl()}/images/school/libftn.png`,
    imageSize: 'contain',
    imageBg: `${getBaseUrl()}/logos/42.jpeg`,
    url: 'libft',
    githubUrl: 'https://github.com/UgolinOlle/libft',
    technologies: ['C'],
    date: '2023',
  },
  {
    id: 'ft_printf',
    name: 'ft_printf',
    description: '📚 • Une reimplémentation de la fonction printf en C.',
    imageUrl: `${getBaseUrl()}/images/school/ft_printfn.png`,
    imageSize: 'contain',
    imageBg: `${getBaseUrl()}/logos/42.jpeg`,
    url: 'ft_printf',
    githubUrl: 'https://github.com/UgolinOlle/ft_printf',
    technologies: ['C'],
    date: '2023',
  },
  {
    id: 'get_next_line',
    name: 'get_next_line',
    description:
      '📚 • Une fonction qui lit une ligne terminée par un retour à la ligne depuis un file descriptor.',
    imageUrl: `${getBaseUrl()}/images/school/get_next_linen.png`,
    imageSize: 'contain',
    imageBg: `${getBaseUrl()}/logos/42.jpeg`,
    url: 'get_next_line',
    githubUrl: 'https://github.com/UgolinOlle/get_next_line',
    technologies: ['C'],
    date: '2023',
  },
  {
    id: 'born2beroot',
    name: 'Born2beroot',
    description:
      '🐧 • Installation et configuration d’un serveur dédié sous Debian.',
    imageUrl: `${getBaseUrl()}/images/school/born2berootn.png`,
    imageSize: 'contain',
    imageBg: `${getBaseUrl()}/logos/42.jpeg`,
    url: 'born2beroot',
    githubUrl: '',
    technologies: ['Debian', 'Linux', 'VirtualBox'],
    date: '2023',
  },
  {
    id: 'minitalk',
    name: 'Minitalk',
    description:
      '💾 - Programme de communication client/serveur utilisant les signaux UNIX',
    imageUrl: `${getBaseUrl()}/images/school/minitalke.png`,
    imageSize: 'contain',
    imageBg: `${getBaseUrl()}/logos/42.jpeg`,
    url: 'minitalk',
    githubUrl: 'https://github.com/UgolinOlle/minitalk',
    technologies: ['C', 'UNIX'],
    date: '2023',
  },
  {
    id: 'fractol',
    name: 'Fractol',
    description: '🎨 • Premier projet graphique en 42 avec fractale en 2D',
    imageUrl: `${getBaseUrl()}/images/school/fract-ole.png`,
    imageSize: 'contain',
    imageBg: `${getBaseUrl()}/logos/42.jpeg`,
    url: 'fractol',
    githubUrl: 'https://github.com/UgolinOlle/fract-ol',
    technologies: ['C', 'Minilibx'],
    date: '2023',
  },
  {
    id: 'push_swap',
    name: 'push_swap',
    description:
      '📤 • Tri efficace de piles en utilisant des opérations limitées dans push_swap.',
    imageUrl: `${getBaseUrl()}/images/school/push_swapn.png`,
    imageSize: 'contain',
    imageBg: `${getBaseUrl()}/logos/42.jpeg`,
    url: 'push_swap',
    githubUrl: 'https://github.com/UgolinOlle/push_swap',
    technologies: ['C'],
    date: '2024',
  },
  {
    id: 'philosophers',
    name: 'Philosophers',
    description:
      '💻・Projet visant à résoudre le problème des philosophes à table.',
    imageUrl: `${getBaseUrl()}/images/school/philosophersn.png`,
    imageSize: 'contain',
    imageBg: `${getBaseUrl()}/logos/42.jpeg`,
    url: 'philosophers',
    githubUrl: 'https://github.com/UgolinOlle/philosophers',
    technologies: ['C', 'Threads'],
    date: '2024',
  },
  {
    id: 'minishell',
    name: 'minishell',
    description: '💻・Construction de son propre shell, similaire à bash.',
    imageUrl: `${getBaseUrl()}/images/school/minishelln.png`,
    imageSize: 'contain',
    imageBg: `${getBaseUrl()}/logos/42.jpeg`,
    url: 'minishell',
    githubUrl: 'https://github.com/UgolinOlle/minishell',
    technologies: ['C', 'Shell', 'Bash'],
    date: '2024',
  },
  {
    id: 'minirt',
    name: 'miniRT',
    description:
      '📈 • Projet axé sur le ray tracing, mettant en œuvre un ray tracer minimaliste capable de rendre des scènes 3D.',
    imageUrl: `${getBaseUrl()}/images/school/minirt.png`,
    imageSize: 'contain',
    imageBg: `${getBaseUrl()}/logos/42.jpeg`,
    url: 'minirt',
    githubUrl: 'https://github.com/UgolinOlle/minirt',
    technologies: ['C', 'Ray Tracing'],
    date: '2024',
  },
];
