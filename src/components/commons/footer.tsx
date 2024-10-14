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
  const sharedTextClasses =
    'text-center text-sm text-gray-700/75 dark:text-gray-300/75';

  // --- Render
  return (
    <footer className="w-full text-neutral-600 dark:text-neutral-200 py-5 mt-9 shadow-sm">
      <div className="border border-neutral-300 relative p-2">
        <CrossIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <CrossIcon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <CrossIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <CrossIcon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between gap-3 items-center px-2 sm:px-5">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Ugolin Ollé. All rights reserved.
          </p>
          <div className="hidden sm:inline-block h-2 bg-neutral-800 dark:bg-neutral-100 my-2 sm:my-0" />
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-10">
            <p className={sharedTextClasses}>
              Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
