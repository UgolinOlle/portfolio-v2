/**
 * @file footer.tsx
 * @description Footer component
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import { CrossIcon } from '~/components/commons/icons/common';

/**
 * @name Footer
 * @description Footer component
 * @returns {React.JSX.Element} The footer component
 */
export const Footer: React.FC = () => {
  // --- Variables
  const sharedTextClasses = 'text-center text-sm text-gray-700/75 dark:text-gray-300/75';

  // --- Render
  return (
    <footer className="mt-9 w-full py-5 text-base text-sm text-neutral-600 dark:text-neutral-200">
      <div className="relative border border-neutral-300 p-2">
        <CrossIcon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
        <CrossIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
        <CrossIcon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
        <CrossIcon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

        <div className="flex w-full flex-col items-center justify-center gap-3 px-2 sm:flex-row sm:justify-between sm:px-5">
          <p className="text-center">© {new Date().getFullYear()} Ugolin Ollé. All rights reserved.</p>
          <div className="my-2 hidden h-2 bg-neutral-800 dark:bg-neutral-100 sm:my-0 sm:inline-block" />
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-10">
            <p className={sharedTextClasses}>Built with Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
