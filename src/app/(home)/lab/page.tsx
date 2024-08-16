'use client';

import { AnimatedContainer } from '@/components/commons/animation';
import { Heading } from '@/components/ui/headers';
import * as LabComponents from '@/components/lab/components';
import { LabCard } from '@/components/lab/card';

export default function LabPage() {
  const components = Object.keys(LabComponents).map((key) => {
    const Component = LabComponents[key as keyof typeof LabComponents];
    return (
      <LabCard>
        <Component key={key} />
      </LabCard>
    );
  });

  // -- Render
  return (
    <AnimatedContainer custom={0}>
      <Heading variant="h2">Lab</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {components}
      </div>
    </AnimatedContainer>
  );
}
