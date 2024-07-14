import { type ClassValue, clsx } from 'clsx';
import { createSafeActionClient } from 'next-safe-action';
import { twMerge } from 'tailwind-merge';

/**
 * @function cn
 * @description A utility function to merge Tailwind CSS classes with clsx.
 * @param {ClassValue[]} inputs - An array of Tailwind CSS classes.
 * @returns {string} - A string of Tailwind CSS classes.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const actionClient = createSafeActionClient();
