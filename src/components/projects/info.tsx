'use client';

import { useState, useMemo } from 'react';

import { ProjectsList } from '@/components/projects/list';
import { ProjectExplorer } from '@/components/projects/explorer';
import { AnimatedContainer } from '@/components/commons/animation';
import * as projects from '@/lib/constants/projects';

export const ProjectsInfo: React.FC = () => {
  // --- Variables
  const [selectedKeyword, setSelectedKeyword] = useState('');

  // --- Functions
  const handleSelect = (element: string) => {
    console.log('Selected keyword:', element);
    setSelectedKeyword(element);
  };

  const filteredProjects = useMemo(() => {
    if (!selectedKeyword) return projects.PROJECTS;
    return projects.PROJECTS.filter((project) =>
      project.keywords?.includes(selectedKeyword)
    );
  }, [selectedKeyword]);

  // --- Rendu
  return (
    <AnimatedContainer custom={1} className="flex flex-col lg:flex-row gap-10">
      <AnimatedContainer
        custom={2}
        className="lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:w-1/3 flex-shrink-0 overflow-auto transition duration-300 ease-in-out"
      >
        <ProjectExplorer handleSelect={handleSelect} />
      </AnimatedContainer>
      <ProjectsList filteredProjects={filteredProjects} custom={2} />
    </AnimatedContainer>
  );
};
