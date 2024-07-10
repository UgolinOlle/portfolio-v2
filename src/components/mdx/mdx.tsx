import { MDXProvider } from '@mdx-js/react';
import React from 'react';

import { ImageSwiper } from '../experiences/images-swiper';
import { Heading } from '../ui/headers';
import { Detail, List, ListItem, Paragraph } from './ui';

const MDXComponents = {
  ImageSwiper,
  Heading,
  Detail,
  Paragraph,
  List,
  ListItem,
};

export const MDXWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <MDXProvider components={MDXComponents}>{children}</MDXProvider>;
};
