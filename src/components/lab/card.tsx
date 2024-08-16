import React from 'react';

export const LabCard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // -- Render
  return <div className="bg-gray-50 shadow-md rounded-lg p-6">{children}</div>;
};
