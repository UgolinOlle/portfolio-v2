import { getBaseUrl } from '../utils';

/**
 * @interface IProjectItem
 * @description Interface for project item.
 * @property {string} id - Project id.
 * @property {string} name - Project name.
 * @property {string} description - Project description.
 * @property {string} imageUrl - Project image url.
 * @property {string} url - Project url.
 * @property {string} githubUrl - Project github url.
 * @property {string[]} technologies - Project technologies.
 * @property {string} date - Project date.
 * @export IProjectItem
 */
export interface IProjectItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  url: string;
  githubUrl: string;
  technologies: string[];
  date: string;
}

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
    imageUrl: `${getBaseUrl()}/images/bouddha.jpg`,
    url: '/whoa-ide',
    githubUrl: 'https://github.com/UgolinOlle/WhoaIDE',
    technologies: ['Neovim', 'Lua'],
    date: '2023',
  },
  {
    id: 'portfolio-v2',
    name: 'Portfolio v2',
    description:
      '💻 · My simple portfolio to show my skills, projects, experiences.',
    imageUrl: `${getBaseUrl()}/images/bouddha.jpg`,
    url: '/portfolio-v2',
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
    url: '/vaultflow',
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
];

/**
 * @constant PROJECTS_TREE
 * @description List of projects in tree format.
 * @export PROJECTS_TREE
 */
export const PROJECTS_TREE = [
  {
    id: '1',
    isSelectable: true,
    name: 'src',
    children: [
      {
        id: '2',
        isSelectable: true,
        name: 'app',
        children: [
          {
            id: '3',
            isSelectable: true,
            name: 'layout.tsx',
          },
          {
            id: '4',
            isSelectable: true,
            name: 'page.tsx',
          },
        ],
      },
      {
        id: '5',
        isSelectable: true,
        name: 'components',
        children: [
          {
            id: '6',
            isSelectable: true,
            name: 'header.tsx',
          },
          {
            id: '7',
            isSelectable: true,
            name: 'footer.tsx',
          },
        ],
      },
      {
        id: '8',
        isSelectable: true,
        name: 'lib',
        children: [
          {
            id: '9',
            isSelectable: true,
            name: 'utils.ts',
          },
        ],
      },
    ],
  },
];
