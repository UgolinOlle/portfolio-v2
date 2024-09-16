import React, { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface IProjectItem {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ProjectGridProps {
  projects: IProjectItem[];
}

/**
 * @name ProjectCard
 * @description Card for a project.
 * @returns {JSX.Element} React component
 * @exports ProjectCard
 */
const ProjectCard: React.FC<IProjectItem> = (props): JSX.Element => {
  // -- Render
  return (
    <div className="flex flex-col py-10 relative rounded-md hover:shadow-lg transition duration-300 ease-in-out group/feature">
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-200 group-hover/feature:text-[#8338ec] group-hover/feature:translate-x-1 transition duration-300 ease-in-out">
        {props.icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 bg-neutral-200 dark:bg-neutral-800 group-hover/feature:bg-[#8338ec] transition-all duration-200 origin-center rounded-tr rounded-br" />
        <span
          className={cn(
            'group-hover/feature:translate-x-1 transition duration-300 ease-in-out inline-block text-neutral-600 dark:text-neutral-200',
            'group-hover/feature:text-[#8338ec] group-hover/feature:font-bold'
          )}
        >
          {props.title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-200 max-w-xs relative z-10 px-10 group-hover/feature:translate-x-1 transition duration-300 ease-in-out">
        {props.description}
      </p>
    </div>
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
