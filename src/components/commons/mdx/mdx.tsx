'use client';

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

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

// --- Icons
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
import { IDE_PICTURES } from '@/lib/constants/projects';

// --- Dynamic imports with named exports handling
const ProjectGrid = dynamic(
  () => import('@/components/projects/grid').then((mod) => mod.ProjectGrid),
  {
    ssr: false,
    loading: () => <p>Loading ProjectGrid...</p>,
  }
);

const ProjectPictures = dynamic(
  () =>
    import('@/components/projects/pictures').then((mod) => mod.ProjectPictures),
  {
    ssr: false,
    loading: () => <p>Loading ProjectPictures...</p>,
  }
);

const ImageSwiper = dynamic(
  () =>
    import('@/components/experiences/images-swiper').then(
      (mod) => mod.ImageSwiper
    ),
  {
    ssr: false,
    loading: () => <p>Loading ImageSwiper...</p>,
  }
);

const SchoolProjects = dynamic(
  () =>
    import('@/components/experiences/school-projects').then(
      (mod) => mod.SchoolProjects
    ),
  {
    ssr: false,
    loading: () => <p>Loading SchoolProjects...</p>,
  }
);

// --- Typing for MDXWrapper props
interface MDXWrapperProps {
  children: React.ReactNode;
}

// --- Define the MDX components mapping
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

  // --- General UI Components
  Heading,
  Keyword,
  Detail,
  Paragraph,
  Picture,
  List,
  ListItem,
  Bold,

  // --- Specific Project Components (loaded dynamically with named exports)
  ProjectGrid,
  ProjectPictures,
  ImageSwiper,
  SchoolProjects,
  IdeGallery: (className: string) => (
    <ImageSwiper className={className} images={IDE_PICTURES} />
  ),

  // --- Default Image component (Next.js optimized image)
  img: (props: any) => (
    <Image {...props} alt={props.alt || ''} loading="lazy" />
  ),
};

// --- MDXWrapper Component
const MDXWrapper: React.FC<MDXWrapperProps> = ({ children }) => {
  return <MDXProvider components={MDXComponents}>{children}</MDXProvider>;
};

export { MDXWrapper, MDXComponents };
