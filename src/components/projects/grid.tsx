import { ReactNode } from 'react';
import { CardSpotlight } from '../ui/card-spotlight';

interface IProjectItem {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ProjectGridProps {
  projects: IProjectItem[];
}

/**
 * @component ProjectCard
 * @description Card for a project.
 * @returns {JSX.Element} React component
 * @exports ProjectCard
 */
const ProjectCard: React.FC<IProjectItem> = (props): JSX.Element => {
  // -- Render
  return (
    <CardSpotlight>
      <div className="flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800">
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
          {props.icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
            {props.title}
          </span>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
          {props.description}
        </p>
      </div>
    </CardSpotlight>
  );
};

/**
 * @component ProjectGrid
 * @description Grid for projects.
 * @returns {JSX.Element} React component
 * @exports ProjectGrid
 */
const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }): JSX.Element => {
  // -- Render
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 w-full mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};

export { ProjectCard, ProjectGrid };
