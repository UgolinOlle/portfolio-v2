/**
 * @file ui.tsx
 * @description MDX UI components
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import React, { ReactNode } from 'react';

/**
 * @type IUiProps
 * @description MDX UI props interface
 * @property {React.ReactNode} children The children of the component
 */
type IUiProps = {
  children: React.ReactNode;
};

/**
 * @type IKwProps
 * @description MDX keyword props interface
 * @property {string[]} keywords The keywords of the component
 */
type IKwProps = {
  keywords: string[];
};

/**
 * @type IconListItemProps
 * @description MDX icon list item props interface
 * @property {React.ReactNode} icon The icon of the component
 * @property {string} text The text of the component
 */
type IconListItemProps = {
  icon: ReactNode;
  text: string;
};

/**
 * @name Keyword
 * @description MDX keyword component
 * @param {IKwProps} props The props of the component
 * @returns {React.JSX.Element} The MDX keyword component
 */
export const Keyword: React.FC<IKwProps> = ({ keywords }) => {
  // --- Render
  return (
    <div className="mb-3 flex flex-wrap gap-2">
      {keywords.map((keyword, index) => (
        <span key={index} className="rounded-lg bg-muted px-2 py-1">
          {keyword}
        </span>
      ))}
    </div>
  );
};

/**
 * @name Detail
 * @description MDX detail component
 * @param {IUiProps} props The props of the component
 * @returns {React.JSX.Element} The MDX detail component
 */
export const Detail: React.FC<IUiProps> = ({ children }) => {
  // --- Render
  return <div className="my-4 rounded-lg bg-muted p-4 transition-all ease-in-out">{children}</div>;
};

/**
 * @name IconListItem
 * @description MDX icon list item component
 * @param {IconListItemProps} props The props of the component
 * @returns {React.JSX.Element} The MDX icon list item component
 */
export const IconListItem: React.FC<IconListItemProps> = ({ icon, text }) => {
  // --- Render 
  return (
    <li className="mb-2 flex items-start space-x-3">
      <span className="mt-1 h-5 w-5 flex-shrink-0">{icon}</span>
      <span>{text}</span>
    </li>
  );
};
