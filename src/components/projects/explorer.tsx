'use client'

import { FC } from 'react'

import { Tree, Folder, File } from '~/components/ui/file-tree'
import { Button } from '~/components/ui/button'

interface ProjectExplorerProps {
  handleSelect: (element: any) => void
}

export const ProjectExplorer: FC<ProjectExplorerProps> = ({ handleSelect }) => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-neutral-100 p-4 dark:bg-neutral-900">
      <Button
        variant="outline"
        className="absolute right-4 top-4 z-10"
        onClick={() => handleSelect('')}
      >
        Reset
      </Button>
      <Tree
        className="w-full overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-900"
        initialSelectedId="7"
        initialExpandedItems={['src', 'perso', 'ui', 'core']}
      >
        <Folder value="src" element="src">
          <Folder value="perso" element="perso">
            <Folder value="ui" element="ui">
              <File value="landing-page" handleSelect={handleSelect}>
                <p>landing-page.tsx</p>
              </File>
            </Folder>
            <File value="web-app" handleSelect={handleSelect}>
              <p>web-app.tsx</p>
            </File>
            <File value="software" handleSelect={handleSelect}>
              <p>software.tsx</p>
            </File>
          </Folder>
          <Folder value="core" element="core">
            <File value="libft" handleSelect={handleSelect}>
              <p>libft.c</p>
            </File>
            <File value="ft_printf" handleSelect={handleSelect}>
              <p>ft_printf.c</p>
            </File>
            <File value="get_next_line" handleSelect={handleSelect}>
              <p>get_next_line.c</p>
            </File>
            <File value="born_to_be_root" handleSelect={handleSelect}>
              <p>born_to_be_root.mdx</p>
            </File>
            <File value="minitalk" handleSelect={handleSelect}>
              <p>minitalk.c</p>
            </File>
            <File value="fractol" handleSelect={handleSelect}>
              <p>fractol.c</p>
            </File>
            <File value="push_swap" handleSelect={handleSelect}>
              <p>push_swap.c</p>
            </File>
            <File value="philosophers" handleSelect={handleSelect}>
              <p>philosophers.c</p>
            </File>
            <File value="minishell" handleSelect={handleSelect}>
              <p>minishell.c</p>
            </File>
            <File value="minirt" handleSelect={handleSelect}>
              <p>minirt.c</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  )
}
