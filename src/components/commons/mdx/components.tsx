/**
 * @file components.tsx
 * @description MDX components
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
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
import { COMMON_ICONS } from '~/components/commons/icons/common';

/**
 * @name MDX_COMPONENTS
 * @description MDX components
 * @returns {React.JSX.Element} The MDX components
 */
export const MDX_COMPONENTS = {
  // --- Components
  ProjectGrid: ProjectGrid,

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
