'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXWrapper } from '@/components/commons/mdx/mdx';

interface ClientMDXProps {
  mdxSource: MDXRemoteSerializeResult;
}

export const ClientMDX = ({ mdxSource }: ClientMDXProps) => {
  // -- Render
  return (
    <MDXWrapper>
      <MDXRemote {...mdxSource} />
    </MDXWrapper>
  );
};
