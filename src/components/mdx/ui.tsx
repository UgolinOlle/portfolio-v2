import Image from 'next/image';
import React from 'react';

// -- Interfaces
interface IUiProps {
  children: React.ReactNode;
}

interface IKwProps {
  keywords: string[];
}

interface IPicture {
  src: string;
  alt: string;
}

export const Keyword: React.FC<IKwProps> = ({ keywords }) => {
  // -- Render
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {keywords.map((keyword, index) => (
        <span
          key={index}
          className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md transition-all ease-in-out hover:bg-gray-200"
        >
          {keyword}
        </span>
      ))}
    </div>
  );
};

export const Detail: React.FC<IUiProps> = ({ children }) => {
  // -- Render
  return (
    <div className="p-4 bg-gray-100 rounded-lg my-5 transition-all ease-in-out hover:bg-gray-200">
      {children}
    </div>
  );
};

export const Paragraph: React.FC<IUiProps> = ({ children }) => {
  // -- Render
  return (
    <div className="border-l-2 border-gray-900 pl-2 text-justify rounded-md my-5 transition-all ease-in-out hover:shadow-md">
      {children}
    </div>
  );
};

export const Picture: React.FC<IPicture> = ({ src, alt }) => {
  // -- Render
  return (
    <Image src={src} alt={alt} width={50} height={50} className="rounded-lg" />
  );
};

export const List: React.FC<IUiProps> = ({ children }) => {
  // -- Render
  return (
    <ul className="list-disc list-inside flex flex-col items-start gap-3 my-4">
      {children}
    </ul>
  );
};

export const ListItem: React.FC<IUiProps> = ({ children }) => {
  // -- Render
  return <li className="flex gap-2 items-center">{children}</li>;
};

export const Bold: React.FC<IUiProps> = ({ children }) => {
  // -- Render
  return <strong>{children}</strong>;
};
