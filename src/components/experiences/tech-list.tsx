import React from 'react';

interface TechItem {
  item: string;
  color: string;
}

interface TechListProps {
  items: TechItem[];
}

export const TechList: React.FC<TechListProps> = ({ items }) => {
  return (
    <ul className="flex flex-wrap items-center gap-3 pl-5">
      {items.map((item, index) => (
        <li
          key={index}
          className={`text-md md:text-lg ${item.color} p-2 rounded-md`}
        >
          {item.item}
        </li>
      ))}
    </ul>
  );
};
