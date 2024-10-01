import React from 'react';

import { SCHOOL_PROJECTS_PICTURES } from '~/lib/constants/experiences';
import { Picture } from '~/components/commons/mdx/ui';

export const SchoolProjects: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
      {SCHOOL_PROJECTS_PICTURES.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <Picture src={item.src} alt={item.alt} />
          <span>{item.alt}</span>
        </div>
      ))}
    </div>
  );
};
