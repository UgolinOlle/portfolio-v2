/**
 * @file socials.ts
 * @description Constants for the socials page
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import { SOCIALS_ICONS } from '~/components/commons/icons/socials';
import { ISocialItem } from '~/lib/interfaces/social';

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
