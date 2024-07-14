'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

/**
 * @name ThemeProvider
 * @description A wrapper around the NextThemesProvider to provide the theme context to the app.
 * @param {React.ReactNode} children - The children to render.
 * @returns {React.ReactNode} The theme provider.
 * @exports ThemeProvider
 */
export function ThemeProvider({
  children,
}: ThemeProviderProps): React.ReactNode {
  return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
}
