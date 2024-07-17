export const Footer: React.FC = (): JSX.Element => {
  // -- Render
  return (
    <footer className="w-full lg:w-[68%] border border-gray-300/75 rounded-lg text-black dark:text-white py-5 px-4 my-5 mx-8 shadow-sm">
      <div className="w-full m-auto flex flex-col lg:flex-row justify-center lg:justify-between gap-3 items-center px-5">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Ugolin Ollé. All rights reserved.
        </p>
        <div className="border border-gray-300 w-[30%]" />
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <p className="text-center text-sm text-gray-700/75 dark:text-gray-300/75">
            Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-center text-sm text-gray-700/75 dark:text-gray-300/75">
            Inspired by rdsx.dev
          </p>
        </div>
      </div>
    </footer>
  );
};
