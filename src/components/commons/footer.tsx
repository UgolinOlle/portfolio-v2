export const Footer: React.FC = () => {
  // -- Variables
  const sharedTextClasses =
    'text-center text-sm text-gray-700/75 dark:text-gray-300/75';

  // -- Render
  return (
    <footer className="w-full text-black dark:text-white py-5 mt-9">
      <div className="border border-gray-300 rounded-lg p-2">
        <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between gap-3 items-center px-2 sm:px-5">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Ugolin Ollé. All rights reserved.
          </p>
          <div className="hidden sm:block border-t sm:border-l border-gray-300 h-8 sm:h-auto sm:w-px my-2 sm:my-0" />
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-10">
            <p className={sharedTextClasses}>
              Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <p className={sharedTextClasses}>Inspired by rdsx.dev</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
