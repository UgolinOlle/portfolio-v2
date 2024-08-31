import React from 'react';

export const LabCard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // -- Render
  return <div className="border-2 border-slate-100 shadow-xl rounded-lg p-6">{children}</div>;
};
