import React from 'react';

import { Heading } from '../ui/headers';

export interface ISkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}

export const SkillCard: React.FC<ISkillCardProps> = ({
  title,
  description,
  icon,
  children,
}): JSX.Element => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-10 w-10 flex items-center justify-center">
            {icon}
          </div>
          <div className="ml-4">
            <Heading variant="h3">{title}</Heading>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
        {children && <div>{children}</div>}
      </div>
    </div>
  );
};
