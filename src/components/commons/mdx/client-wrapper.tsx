'use client';

import { MDXRemote } from 'next-mdx-remote-client/rsc';

import { rehypePlugin } from '~/lib/mdx/utils';
import { MDX_COMPONENTS } from '~/components/commons/mdx/components';
import { Suspense } from 'react';

type MdxClientWrapperProps = {
  children: string;
};

export const MdxClientWrapper: React.FC<MdxClientWrapperProps> = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDXRemote
        source={children}
        options={{
          mdxOptions: {
            rehypePlugins: rehypePlugin,
          },
        }}
        components={MDX_COMPONENTS}
      />
    </Suspense>
  );
};
