import React from 'react';

import { MainContainer } from '@/components/ui/container';

export default function BioLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainContainer>
      <div className="w-full lg:w-[90vw] xl:w-[80vw] h-full flex flex-col justify-center gap-3 lg:gap-5 lg:justify-between">
        {children}
      </div>
    </MainContainer>
  );
}
