import React from 'react';
import { motion } from 'framer-motion';

export const CursorPopup: React.FC<{
  content: string;
  position: { x: number; y: number };
}> = ({
  content,
  position,
}: {
  content: string;
  position: { x: number; y: number };
}): React.ReactElement => {
  // -- Render
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      style={{
        position: 'fixed',
        top: `${position.y - 60}px`,
        left: `${position.x + 20}px`,
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '250px',
        pointerEvents: 'none',
        zIndex: 1000,
        transform: 'translate(10px, 10px)',
      }}
      className="text-black"
    >
      {content}
    </motion.div>
  );
};
