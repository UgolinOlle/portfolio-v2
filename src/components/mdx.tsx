import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { ComponentProps } from 'react';

const H1 = (props: ComponentProps<'h1'>) => (
  <h1 className="text-4xl font-bold mb-4" {...props} />
);

const P = (props: ComponentProps<'p'>) => (
  <p className="text-lg mb-4" {...props} />
);

const MDXComponents = {
  h1: H1,
  p: P,
};

export const MDXWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <MDXProvider components={MDXComponents}>{children}</MDXProvider>;
};
