'use client';

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
  FaCode,
  FaTerminal,
  FaPlug,
  FaSitemap,
  FaSearch,
  FaGithub,
  FaClipboard,
  FaPaintBrush,
  FaBug,
  FaFile,
  FaCog,
  FaFolder,
  FaGlobe,
} from 'react-icons/fa';
import Image from 'next/image';

import { ProjectGrid } from '@/components/projects/grid';
import { ProjectPictures } from '@/components/projects/pictures';
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

const MDXComponents = {
  // --- Icons
  FaGlobe,
  FaCode,
  FaTerminal,
  FaPlug,
  FaSitemap,
  FaSearch,
  FaGithub,
  FaClipboard,
  FaPaintBrush,
  FaBug,
  FaFile,
  FaCog,
  FaFolder,

  // --- Components
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
  ProjectGrid,
  ProjectPictures,
  ImageSwiper,
};

export const MDXWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <MDXProvider components={MDXComponents}>{children}</MDXProvider>;
};
