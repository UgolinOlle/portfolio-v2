'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const RollsRoyce: React.FC = () => {
  const [speed, setSpeed] = useState(-90);

  useEffect(() => {
    const increaseSpeed = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSpeed(45);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSpeed(-90);
    };
    increaseSpeed();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-64 h-32 bg-gradient-to-r from-orange-500 to-gray-100 rounded-t-full flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute bg-red-500"
          style={{
            width: '8px',
            height: '80%',
            borderRadius: '4px',
            bottom: 0,
            transformOrigin: 'bottom center',
          }}
          animate={{ rotate: `${speed}deg` }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        />
        <div className="absolute flex items-center justify-center w-16 h-16">
          <Image
            src="/logos/rolls-royce.svg"
            alt="Rolls Royce Logo"
            width={48}
            height={48}
          />
        </div>
      </div>
    </div>
  );
};
