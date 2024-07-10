import { MDXProvider } from '@mdx-js/react';
import React from 'react';

import { ImageSwiper } from '../experiences/images-swiper';
import { SchoolProjects } from '../experiences/school-projects';
import { Heading } from '../ui/headers';
import {
  Bold,
  Detail,
  Keyword,
  List,
  ListItem,
  Paragraph,
  Picture,
} from './ui';

const MDXComponents = {
  ImageSwiper,
  Heading,
  Keyword,
  Detail,
  Paragraph,
  Picture,
  List,
  ListItem,
  Bold,
  SchoolProjects,
};

export const MDXWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <MDXProvider components={MDXComponents}>{children}</MDXProvider>;
};
