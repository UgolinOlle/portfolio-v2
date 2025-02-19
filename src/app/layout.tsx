/**
 * @file layout.tsx
 * @description Layout for the home page
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import type { Metadata } from 'next';
import { Roboto_Slab, Roboto_Mono } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';

import { cn } from '~/lib/utils';

import { Providers } from '~/components/commons/providers';
import { RightMenu } from '~/components/commons/menus/right-menu';

/**
 * Metadata for the home page
 *
 * @returns {Metadata} The metadata for the home page
 */
export const metadata: Metadata = {
  title: 'Ugolin Ollé',
  description:
    'Découvrez mon portfolio, développeur full stack, spécialisé dans la création de SaaS. Explorez mes projets, compétences et expériences.',
  keywords: [
    'Ugolin Ollé',
    'ugolin ollé',
    'Développeur Full Stack',
    'développeur full stack',
    'DÉVELOPPEUR FULL STACK',
    'fullstack',
    'Fullstack',
    'FULLSTACK',
    'full-stack',
    'Full-Stack',
    'FULL-STACK',
    'full stack',
    'Full Stack',
    'FULL STACK',
    'développeur fullstack',
    'Développeur Fullstack',
    'DÉVELOPPEUR FULLSTACK',
    'développeur full-stack',
    'Développeur Full-Stack',
    'DÉVELOPPEUR FULL-STACK',
    'SaaS',
    'saas',
    'SAAS',
    'software as a service',
    'Software as a Service',
    'SOFTWARE AS A SERVICE',
    'Portfolio',
    'portfolio',
    'PORTFOLIO',
    'Projets',
    'projets',
    'PROJETS',
    'Compétences',
    'compétences',
    'COMPÉTENCES',
    'Expériences',
    'expériences',
    'EXPÉRIENCES',
    'React',
    'react',
    'REACT',
    'React.js',
    'react.js',
    'REACT.JS',
    'ReactJS',
    'reactjs',
    'REACTJS',
    'Next.js',
    'next.js',
    'NEXT.JS',
    'NextJS',
    'nextjs',
    'NEXTJS',
    'Tailwind',
    'tailwind',
    'TAILWIND',
    'TailwindCSS',
    'tailwindcss',
    'TAILWINDCSS',
    'Tailwind CSS',
    'tailwind css',
    'TAILWIND CSS',
    'CSS',
    'css',
    'CSS3',
    'css3',
    'CSS',
    'cascading style sheets',
    'Cascading Style Sheets',
    'CASCADING STYLE SHEETS',
    'Node.js',
    'node.js',
    'NODE.JS',
    'NodeJS',
    'nodejs',
    'NODEJS',
    'Node',
    'node',
    'NODE',
    'TypeScript',
    'typescript',
    'TYPESCRIPT',
    'TS',
    'ts',
    'TS',
    'PostgreSQL',
    'postgresql',
    'POSTGRESQL',
    'Postgres',
    'postgres',
    'POSTGRES',
    'Postgre',
    'postgre',
    'POSTGRE',
    'MariaDB',
    'mariadb',
    'MARIADB',
    'Maria DB',
    'maria db',
    'MARIA DB',
    'MongoDB',
    'mongodb',
    'MONGODB',
    'Mongo',
    'mongo',
    'MONGO',
    'Docker',
    'docker',
    'DOCKER',
    'Docker container',
    'docker container',
    'DOCKER CONTAINER',
  ].join(', '),
  openGraph: {
    title: 'Ugolin Ollé - Développeur Full Stack & Créateur de SaaS',
    description: 'Mon portfolio, mes projets, mes compétences et mes expériences.',
    url: 'https://ugolin-olle.com',
    siteName: 'Ugolin Ollé Portfolio',
    images: [
      {
        url: 'https://ugolin-olle.com/profile.png',
        width: 1200,
        height: 630,
        alt: 'Développeur Full Stack · Ugolin Ollé',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ugolin Ollé - Développeur Full Stack & Créateur de SaaS',
    description: 'Mon portfolio, mes projets, mes compétences et mes expériences.',
    images: 'https://ugolin-olle.com/profile.png',
    creator: '@ugolin_olle',
  },
};

/**
 * Roboto Slab font
 *
 * @returns {Roboto_Slab} The Roboto Slab font
 */
const robotSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

/**
 * Roboto Mono font
 *
 * @returns {Roboto_Mono} The Roboto Mono font
 */
const robotMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

/**
 * Root layout component
 *
 * @param {Readonly<{ children: React.ReactNode }>} props - The props for the root layout component
 * @returns {React.JSX.Element} The root layout component
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            'relative flex flex-col items-center bg-background px-4 py-4 font-body text-base antialiased sm:px-6 md:px-8',
            `${robotSlab.className} ${robotMono.className}`
          )}
        >
          <Providers>
            {children}
            <RightMenu />
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
