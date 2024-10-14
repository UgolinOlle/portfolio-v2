/**
 * @file note.tsx
 * @description MDX note component
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import { Notebook } from 'lucide-react';
import { ReactNode } from 'react';

import { Alert } from '~/components/ui/alert';

/**
 * @type MdxNoteProps
 * @description MDX note props type
 * @property {ReactNode} children The children of the note
 */
export type MdxNoteProps = {
  children: ReactNode;
};

/**
 * @name MdxNote
 * @description MDX note component
 * @param {MdxNoteProps} props The props of the component
 * @returns {React.JSX.Element} The MDX note component
 */
export const MdxNote = (props: MdxNoteProps) => {
  return (
    <Alert className="border-blue-500 bg-blue-500/10">
      <Notebook size={18} />
      <div className="mdx-content">{props.children}</div>
    </Alert>
  );
};
