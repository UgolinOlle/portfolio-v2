import { MDXRemote } from 'next-mdx-remote/rsc';

import { rehypePlugin } from '~/lib/mdx/utils';
import { MDX_COMPONENTS } from '~/components/commons/mdx/components';

export function MdxRender({ children }: { children: string }) {
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
