import React from 'react';

import { AnimatedContainer } from '@/components/commons/animation';
import { Heading } from '@/components/ui/headers';

export const LabRender: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  // -- Render
  return (
    <AnimatedContainer custom={0}>
      <Heading variant="h2">{title}</Heading>
      {children}
    </AnimatedContainer>
  );
};
