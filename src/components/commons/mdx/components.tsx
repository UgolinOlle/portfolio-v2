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

import { MdxNote } from '~/components/commons/mdx/note';
import { Detail, IconListItem, Keyword } from '~/components/commons/mdx/ui';
import { ProjectGrid } from '~/components/projects/grid';
import { ImageSwiper } from '~/components/experiences/images-swiper';
import { SchoolProjects } from '~/components/experiences/school-projects';
import { COMMON_ICONS } from '~/components/commons/icons/common';

import { SCHOOL_PICTURES } from '~/lib/constants/experiences';

// --- Custom components
const SchoolImageSwiper = () => <ImageSwiper images={SCHOOL_PICTURES} />;

export const MDX_COMPONENTS = {
  // --- Components
  ProjectGrid: ProjectGrid,
  SchoolProjects: SchoolProjects,
  ImageSwiper: ImageSwiper,
  SchoolImageSwiper: SchoolImageSwiper,

  Keyword: Keyword,
  Detail: Detail,
  Note: MdxNote,
  IconListItem: IconListItem,

  // --- Icons
  FaClipboard: FaClipboard,
  FaCode: FaCode,
  FaCog: FaCog,
  FaFile: FaFile,
  FaFolder: FaFolder,
  FaGithub: FaGithub,
  FaGlobe: FaGlobe,
  FaPaintBrush: FaPaintBrush,
  FaPlug: FaPlug,
  FaSearch: FaSearch,
  FaSitemap: FaSitemap,
  FaTerminal: FaTerminal,
  FaBug: FaBug,

  // --- Variables
  COMMON_ICONS: COMMON_ICONS,
};
