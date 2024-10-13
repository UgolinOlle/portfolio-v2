import Image from 'next/image';
import React from 'react';

import { SCHOOL_PROJECTS_PICTURES } from '~/lib/constants/experiences';

export const SchoolProjects: React.FC = () => {
  return (
    <div className="my-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {SCHOOL_PROJECTS_PICTURES.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <Image src={item.src} alt={item.alt} width={100} height={100} />
          <span>{item.alt}</span>
        </div>
      ))}
    </div>
  );
};
