import { IProjectItem } from '@/lib/interfaces/project';
import { getBaseUrl } from '@/lib/utils';

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
    imageUrl: `${getBaseUrl()}/images/projects/whoa-ide.png`,
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
    imageUrl: `${getBaseUrl()}/images/projects/portfolio-v2.png`,
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
    id: 'ft_printf',
    name: 'ft_printf',
    description: '📚 • A reimplementation of the c library function printf.',
    imageUrl: `${getBaseUrl()}/images/bouddha.jpg`,
    url: 'ft_printf',
    githubUrl: 'https://github.com/UgolinOlle/ft_printf',
    technologies: ['C'],
    date: '12-04-2023',
  },
];
