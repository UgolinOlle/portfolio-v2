import { IconType } from 'react-icons';

/**
 * @interface ISocialItem
 * @description Interface for social item.
 * @property {string} name - Social name.
 * @property {string} url - Social URL.
 * @property {string} icon - Social icon.
 * @exports ISocialItem
 */
export interface ISocialItem {
  name: string;
  url: string;
  icon: IconType;
}
