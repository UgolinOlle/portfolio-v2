/**
 * @file render.tsx
 * @description MDX render component
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import { MDXRemote } from 'next-mdx-remote/rsc';

import { rehypePlugin } from '~/lib/mdx/utils';
import { MDX_COMPONENTS } from '~/components/commons/mdx/components';

/**
 * @type MdxRenderProps
 * @description MDX render props type
 * @property {string} children The children of the component
 */
export type MdxRenderProps = {
  children: string;
};

/**
 * @name MdxRender
 * @description MDX render component
 * @param {MdxRenderProps} props The props of the component
 * @returns {React.JSX.Element} The MDX render component
 */
export const MdxRender: React.FC<MdxRenderProps> = ({ children }) => {
  // --- Render
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {
          rehypePlugins: rehypePlugin,
        },
      }}
      components={MDX_COMPONENTS}
    />
  );
}
