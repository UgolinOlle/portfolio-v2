import { IconType } from 'react-icons';

/**
 * @interface IBioItem
 * @description Interface for bio item object.
 * @property {string} name - Name of the bio item.
 * @property {string} url - URL of the bio item.
 * @property {string} icon - Icon of the bio item.
 * @property {string} color - Color of the bio item.
 * @exports IBioItem
 */
export interface IBioItem {
  name: string;
  url: string;
  icon: IconType;
  color: string;
}
