import React from 'react';

// -- Interfaces
interface IUiProps {
  children: React.ReactNode;
}

export const Detail: React.FC<IUiProps> = ({ children }) => {
  // -- Render
  return <div className="p-4 bg-gray-100 rounded-lg my-5">{children}</div>;
};

export const Paragraph: React.FC<IUiProps> = ({ children }) => {
  // -- Render
  return (
    <div className="border-l-2 border-gray-900 pl-2 rounded-md my-5">
      {children}
    </div>
  );
};

export const List: React.FC<IUiProps> = ({ children }) => {
  // -- Render
  return <ul className="list-disc list-inside my-4">{children}</ul>;
};

export const ListItem: React.FC<IUiProps> = ({ children }) => {
  // -- Render
  return <li>{children}</li>;
};
