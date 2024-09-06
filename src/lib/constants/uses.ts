import { CardProps } from '@/components/uses/card';
import Arc from 'public/images/uses/arc.svg';
import Warp from 'public/images/uses/warp.svg';
import TablePlus from 'public/images/uses/tableplus.avif';
import Framer from 'public/images/uses/framer.png';

/**
 * @constant USES_APP
 * @description - List of applications that I use on a daily basis.
 * @type {Array<CardProps>}
 * @exports USES_APP
 */
export const USES_APP: CardProps[] = [
  {
    title: 'Arc',
    description: 'A modern terminal emulator with a minimal design.',
    image: Arc,
  },
  {
    title: 'Warp',
    description: "Mon terminal préféré, rapide, je l'utilise pour tout.",
    image: Warp,
  },
  {
    title: 'TablePlus',
    description: 'GUI pour les bases de données, rapide et efficace.',
    image: TablePlus,
  },
  {
    title: 'Framer',
    description: 'Mon tout nouveau petit bijou pour faire mes sites web.',
    image: Framer,
  },
];
