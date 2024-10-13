import { Notebook } from 'lucide-react';
import { ReactNode } from 'react';

import { Alert } from '~/components/ui/alert';

export type MdxNoteProps = {
  children: ReactNode;
};

export const MdxNote = (props: MdxNoteProps) => {
  return (
    <Alert className="border-blue-500 bg-blue-500/10">
      <Notebook size={18} />
      <div className="mdx-content">{props.children}</div>
    </Alert>
  );
};
