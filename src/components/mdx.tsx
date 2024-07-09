import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { ComponentProps } from 'react';
import { ImageSwiper } from './experiences/images-swiper';
import { Heading } from './ui/headers';

const DIV = (props: ComponentProps<'div'>) => (
  <div className="my-5" {...props} />
);

const P = (props: ComponentProps<'p'>) => (
  <p className="text-lg text-justify my-4" {...props} />
);

const UL = (props: ComponentProps<'ul'>) => (
  <ul className="list-disc list-inside my-4" {...props} />
);

const LI = (props: ComponentProps<'li'>) => (
  <li className="text-lg my-2" {...props} />
);

const MDXComponents = {
  div: DIV,
  p: P,
  ul: UL,
  li: LI,
  ImageSwiper,
  Heading,
};

export const MDXWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <MDXProvider components={MDXComponents}>{children}</MDXProvider>;
};
