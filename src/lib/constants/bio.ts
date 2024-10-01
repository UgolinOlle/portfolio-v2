import { SOCIALS_ICONS } from '~/components/commons/icons/socials';
import { IBioItem } from '~/lib/interfaces/bio';
import { GITHUB_URL } from './common';

/**
 * @constant BIO_LINKS
 * @description List of links to social media and other profiles.
 * @exports BIO_LINKS
 */
export const BIO_LINKS: IBioItem[] = [
  {
    name: 'GitHub',
    url: GITHUB_URL,
    icon: SOCIALS_ICONS.github,
    color: '#2b3137',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ugolin-olle/',
    icon: SOCIALS_ICONS.linkedin,
    color: '#0077b5',
  },
  {
    name: 'Twitter / X',
    url: 'https://twitter.com/ugolin_olle',
    icon: SOCIALS_ICONS.x,
    color: '#1da1f2',
  },
];
