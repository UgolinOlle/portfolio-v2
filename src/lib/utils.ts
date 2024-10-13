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
