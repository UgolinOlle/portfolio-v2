/**
 * @file skills.tsx
 * @description Skills component
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import React from 'react'

import { BentoGrid, BentoGridItem } from '~/components/ui/bento'
import { ABOUT_SKILLS } from '~/lib/constants/about'

/**
 * @name Skills
 * @description Skills component
 * @returns {React.JSX.Element} The skills component
 */
export const Skills: React.FC = () => {
  // --- Render
  return (
    <BentoGrid className="w-full">
      {ABOUT_SKILLS.map((item, index) => (
        <BentoGridItem
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
          className={
            index === 3 || index === 6 || index == 7 ? 'md:col-span-2' : ''
          }
        />
      ))}
    </BentoGrid>
  )
}
