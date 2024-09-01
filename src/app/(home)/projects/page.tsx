'use client';

import { useState, useMemo } from 'react';

import { ProjectsList } from '@/components/projects/list';
import { Folder, File, Tree } from '@/components/ui/file-tree';
import { Heading } from '@/components/ui/headers';
import { AnimatedContainer } from '@/components/commons/animation';
import * as projects from '@/lib/constants/projects';

export default function ProjectsPage() {
  // -- Variables
  const [selectedKeyword, setSelectedKeyword] = useState('');

  // -- Functions
  const handleSelect = (element: any) => {
    setSelectedKeyword(element);
  };

  const filteredProjects = useMemo(() => {
    if (!selectedKeyword) return projects.PROJECTS;
    return projects.PROJECTS.filter((project) =>
      project.technologies.includes(selectedKeyword)
    );
  }, [selectedKeyword]);

  // -- Render
  return (
    <AnimatedContainer custom={0} className="flex flex-col gap-10 mt-10 mb-28">
      <Heading variant="h2">Projects</Heading>
      <div className="flex flex-col lg:flex-row gap-10 mt-12">
        <AnimatedContainer
          custom={1}
          className="lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:w-1/3 flex-shrink-0 overflow-auto"
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-4">
            <Tree
              className="w-full overflow-hidden rounded-md bg-background"
              initialSelectedId="7"
              initialExpandedItems={[
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
              ]}
            >
              <Folder element="src" value="1">
                <Folder value="2" element="perso">
                  <Folder value="6" element="ui">
                    <File value="7">
                      <p>landing-page.tsx</p>
                    </File>
                  </Folder>
                  <File value="3" onSelect={handleSelect}>
                    <p>web-app.tsx</p>
                  </File>
                  <File value="4">
                    <p>software.tsx</p>
                  </File>
                </Folder>
                <Folder value="5" element="core">
                  <File value="6">
                    <p>libft.c</p>
                  </File>
                  <File value="7">
                    <p>ft_printf.c</p>
                  </File>
                  <File value="8">
                    <p>get_next_line.c</p>
                  </File>
                  <File value="9">
                    <p>born_to_be_root.mdx</p>
                  </File>
                  <File value="10">
                    <p>minitalk.c</p>
                  </File>
                  <File value="11">
                    <p>fractol.c</p>
                  </File>
                  <File value="12">
                    <p>push_swap.c</p>
                  </File>
                  <File value="13">
                    <p>philosophers.c</p>
                  </File>
                  <File value="14">
                    <p>minishell.c</p>
                  </File>
                  <File value="15">
                    <p>minirt.c</p>
                  </File>
                </Folder>
              </Folder>
            </Tree>
          </div>
        </AnimatedContainer>
        <ProjectsList filteredProjects={filteredProjects} custom={2} />
      </div>
    </AnimatedContainer>
  );
}
