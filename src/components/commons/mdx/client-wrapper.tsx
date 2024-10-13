import { ReactNode, Suspense } from 'react';
import { MDXProvider } from '@mdx-js/react';

import { MDX_COMPONENTS } from '~/components/commons/mdx/components';

type MdxClientWrapperProps = {
  children: ReactNode;
};

export const MdxClientWrapper: React.FC<MdxClientWrapperProps> = ({ children }) => {
  return (
    <Suspense fallback={<div className="text-center">Chargement du contenu MDX...</div>}>
      <MDXProvider components={MDX_COMPONENTS}>{children}</MDXProvider>
    </Suspense>
  );
};
