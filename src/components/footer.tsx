export const Footer: React.FC = (): JSX.Element => {
  // -- Render
  return (
    <footer className="w-full border-t border-gray-300/75 text-black dark:text-white py-5 px-8">
      <div className="w-full m-auto flex flex-col lg:flex-row justify-center lg:justify-between gap-3 items-center px-5">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Ugolin Ollé. All rights reserved.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <p className="text-center text-sm text-gray-700/75">
            Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-center text-sm text-gray-700/75">
            Inspired by rdsx.dev
          </p>
        </div>
      </div>
    </footer>
  );
};
