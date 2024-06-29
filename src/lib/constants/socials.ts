import { IconType } from 'react-icons';

import { SOCIALS_ICONS } from '@/components/icons/socials';

/**
 * @interface ISocialItem
 * @description Interface for social item.
 * @property {string} name - Social name.
 * @property {string} url - Social URL.
 * @property {string} icon - Social icon.
 */
interface ISocialItem {
  name: string;
  url: string;
  icon: IconType;
}

/**
 * @constant SOCIALS
 * @description Socials data.
 * @type {ISocialItem[]}
 * @exports SOCIALS
 */
export const SOCIALS: ISocialItem[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/ugolinolle',
    icon: SOCIALS_ICONS.github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/ugolin-olle',
    icon: SOCIALS_ICONS.linkedin,
  },
  {
    name: 'X',
    url: 'https://x.com/ugolin_olle',
    icon: SOCIALS_ICONS.x,
  },
];
