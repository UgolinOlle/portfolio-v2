import { IProjectItem } from '@/lib/interfaces/project';
import { getBaseUrl } from '@/lib/utils';

import whoaide from '../../../public/images/projects/whoa-ide/whoa-ide.jpg';
import telescope from '../../../public/images/projects/whoa-ide/telescope.png';

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
    imageUrl: `${getBaseUrl()}/images/projects/portfolio-v2.jpg`,
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
    imageUrl: `${getBaseUrl()}/images/bouddha.jpg`,
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
    imageUrl: `${getBaseUrl()}/images/bouddha.jpg`,
    url: 'libft',
    githubUrl: 'https://github.com/UgolinOlle/libft',
    technologies: ['C'],
    date: '2023',
  },
  {
    id: 'ft_printf',
    name: 'ft_printf',
    description: '📚 • Une reimplémentation de la fonction printf en C.',
    imageUrl: `${getBaseUrl()}/images/bouddha.jpg`,
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
    imageUrl: `${getBaseUrl()}/images/bouddha.jpg`,
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
    imageUrl: `${getBaseUrl()}/images/bouddha.jpg`,
    url: 'born2beroot',
    githubUrl: '',
    technologies: ['Debian', 'Linux', 'VirtualBox'],
    date: '2023',
  },
];
