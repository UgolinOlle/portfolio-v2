import { MDXProvider } from '@mdx-js/react';
import React from 'react';

import { ImageSwiper } from '@/components/experiences/images-swiper';
import { SchoolProjects } from '@/components/experiences/school-projects';
import { Heading } from '@/components/ui/headers';
import {
  Bold,
  Detail,
  Keyword,
  List,
  ListItem,
  Paragraph,
  Picture,
} from './ui';
import Image from 'next/image';

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
  Image,
};

export const MDXWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <MDXProvider components={MDXComponents}>{children}</MDXProvider>;
};
