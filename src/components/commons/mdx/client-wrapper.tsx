'use client';

import React, { Suspense } from 'react';
import HashLoader from 'react-spinners/HashLoader';

import { MdxRender } from '~/components/commons/mdx/render';

export function MdxRenderClientWrapper({ children }: { children: string }) {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center">
          <HashLoader color="#5c01f6" size={100} />
        </div>
      }
    >
      <MdxRender>{children}</MdxRender>
    </Suspense>
  );
}
