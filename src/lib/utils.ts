import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { URL_DEV, URL_PROD } from './constants/common';

/**
 * @function cn
 * @description A utility function to merge Tailwind CSS classes with clsx.
 * @param {ClassValue[]} inputs - An array of Tailwind CSS classes.
 * @returns {string} - A string of Tailwind CSS classes.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * @function getBaseUrl
 * @description A utility function to get the base url.
 * @returns {string} - The base url.
 * @exports getBaseUrl
 */
export function getBaseUrl(): string {
  return process.env.NODE_ENV === 'development' ? URL_DEV : URL_PROD;
}

/**
 * @function adjustColorBrightness
 * @description A utility function to adjust the brightness of a color.
 * @param {string} color - Couleur en format hexadécimal (#rrggbb)
 * @param {number} percent - Pourcentage de modification (-100 à 100)
 * @returns {string} - Nouvelle couleur en format hexadécimal
 */
export function adjustColorBrightness(color: string, percent: number): string {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = Math.min(255, Math.max(0, R + (R * percent) / 100));
  G = Math.min(255, Math.max(0, G + (G * percent) / 100));
  B = Math.min(255, Math.max(0, B + (B * percent) / 100));

  const newColor = `#${((1 << 24) + (R << 16) + (G << 8) + B)
    .toString(16)
    .slice(1)}`;

  return newColor;
}
