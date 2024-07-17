'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Clock: React.FC = () => {
  // -- Variables
  const [time, setTime] = useState(new Date());

  const formatTimeUnit = (unit: number) => unit.toString().padStart(2, '0');

  const hour = formatTimeUnit(time.getHours());
  const minute = formatTimeUnit(time.getMinutes());
  const second = formatTimeUnit(time.getSeconds());

  const unitVariants = {
    initial: { y: -50, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  };

  // -- Functions
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // -- Render
  return (
    <div className="flex space-x-1 text-md text-gray-700/75 dark:text-gray-300/75 transition ease-in-out group-hover:text-gray-700">
      <div className="flex">
        {hour.split('').map((char, index) => (
          <AnimatePresence key={`${char}-${index}`}>
            <motion.div
              key={`${char}-${index}`}
              variants={unitVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {char}
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
      <span>:</span>
      <div className="flex">
        {minute.split('').map((char, index) => (
          <AnimatePresence key={`${char}-${index}`}>
            <motion.div
              key={`${char}-${index}`}
              variants={unitVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {char}
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
      <span>:</span>
      <div className="flex">
        {second.split('').map((char, index) => (
          <AnimatePresence key={`${char}-${index}`}>
            <motion.div
              key={`${char}-${index}`}
              variants={unitVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {char}
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

export default Clock;
