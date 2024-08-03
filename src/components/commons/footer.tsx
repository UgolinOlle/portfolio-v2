export const Footer: React.FC = (): JSX.Element => {
  // -- Render
  return (
    <footer className="w-full xl:w-[85vw] text-black dark:text-white py-5 px-4 sm:mx-8 md:px-20">
      <div className="border border-gray-300 rounded-lg p-2">
        <div className="w-full m-auto flex flex-col sm:flex-row justify-center sm:justify-between gap-3 items-center px-2 sm:px-5">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Ugolin Ollé. All rights reserved.
          </p>
          <div className="hidden sm:block border-t sm:border-l border-gray-300 h-8 sm:h-auto sm:w-px my-2 sm:my-0" />
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-10">
            <p className="text-center text-sm text-gray-700/75 dark:text-gray-300/75">
              Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-center text-sm text-gray-700/75 dark:text-gray-300/75">
              Inspired by rdsx.dev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
