'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
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

import { MDXWrapper } from '@/components/commons/mdx/mdx';
import { ProjectGrid } from '@/components/projects/grid';
import { ProjectPictures } from '@/components/projects/pictures';

interface ClientMDXProps {
  mdxSource: MDXRemoteSerializeResult;
}

/**
 * @component ClientMDX
 * @description Client-side MDX component.
 * @param {MDXRemoteSerializeResult} mdxSource MDX source
 * @returns {JSX.Element} React component
 * @exports ClientMDX
 */
const ClientMDX = ({ mdxSource }: ClientMDXProps): JSX.Element => {
  // -- Variables
  const components = {
    // -- Elements
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2 className="lg:text-3xl md:text-2xl text-xl font-bold" {...props} />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 className="lg:text-2xl md:text-xl text-lg font-bold" {...props} />
    ),
    ProjectGrid,
    ProjectPictures,

    // -- Icons
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
  };

  // -- Render
  return (
    <MDXWrapper>
      <MDXRemote {...mdxSource} components={components} />
    </MDXWrapper>
  );
};

export { ClientMDX };
