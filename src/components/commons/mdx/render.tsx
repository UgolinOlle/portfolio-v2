'use client';

import dynamic from 'next/dynamic';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXComponents } from './mdx';

const MDXRemote = dynamic(
  () => import('next-mdx-remote').then((mod) => mod.MDXRemote),
  {
    ssr: false,
  }
);

interface ClientMdxRendererProps {
  content: MDXRemoteSerializeResult;
}

export const ClientMdxRenderer: React.FC<ClientMdxRendererProps> = ({
  content,
}) => {
  return <MDXRemote {...content} components={MDXComponents} />;
};
