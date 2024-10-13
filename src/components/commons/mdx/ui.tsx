import React, { ReactNode } from 'react';

// -- Interfaces
type IUiProps = {
  children: React.ReactNode;
};

type IKwProps = {
  keywords: string[];
};

type IconListItemProps = {
  icon: ReactNode;
  text: string;
};

export const Keyword: React.FC<IKwProps> = ({ keywords }) => {
  // -- Render
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

export const Detail: React.FC<IUiProps> = ({ children }) => {
  // -- Render
  return <div className="my-4 rounded-lg bg-muted p-4 transition-all ease-in-out">{children}</div>;
};

export const IconListItem: React.FC<IconListItemProps> = ({ icon, text }) => {
  return (
    <li className="mb-2 flex items-start space-x-3">
      <span className="mt-1 h-5 w-5 flex-shrink-0">{icon}</span>
      <span>{text}</span>
    </li>
  );
};
