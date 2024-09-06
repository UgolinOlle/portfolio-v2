import { CrossIcon } from './icons/common';

export const Footer: React.FC = () => {
  // -- Variables
  const sharedTextClasses =
    'text-center text-sm text-gray-700/75 dark:text-gray-300/75';

  // -- Render
  return (
    <footer className="w-full text-black dark:text-white py-5 mt-9">
      <div className="border border-gray-300 relative p-2">
        <CrossIcon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <CrossIcon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <CrossIcon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <CrossIcon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between gap-3 items-center px-2 sm:px-5">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Ugolin Ollé. All rights reserved.
          </p>
          <div className="hidden sm:inline-block h-2 bg-neutral-800/70 dark:bg-neutral-100/70 my-2 sm:my-0" />
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
