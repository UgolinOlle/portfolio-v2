/**
 * @file icons.ts
 * @description Interfaces for the icons
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import { IconType } from 'react-icons';

/**
 * @interface IAboutPicture
 * @description Interface for the about page image data.
 * @property {string} src - The image source.
 * @property {string} alt - The image alt text.
 * @property {string} text - The image text.
 * @exports IAboutPicture
 */
export interface IAboutPicture {
  src: string;
  alt: string;
  text: string;
}

/**
 * @interface IAboutSkill
 * @description Interface for the about page skill data.
 * @property {string} title - The skill title.
 * @property {string} description - The skill description.
 * @property {React.ReactNode} icon - The skill icon.
 * @exports IAboutSkill
 */
export interface IAboutSkill {
  title: string;
  description: string;
  icon: IconType;
}
