'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Calendar, icons } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import { ServiceCardProps } from '~/lib/interfaces/service';

import { BorderBeam } from '~/components/ui/border-beam';
import Image from 'next/image';

/**
 * @function ServiceCard
 * @description Card to show a service
 * @exports ServiceCard
 */
export const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  // --- Variables
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 1,
        ease: 'easeOut',
      },
    }),
  };
  const LucideIcon = icons[props.icon as keyof typeof icons];
  const [isHovered, setIsHovered] = React.useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // --- Functions
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // --- Render
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
      className="group/service relative flex min-h-[400px] min-w-[300px] flex-col items-start justify-start gap-5 rounded-xl border p-5 shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <BorderBeam fade size={250} duration={12} delay={9} />}
      <div className="flex w-full items-center justify-between">
        <div className="flex w-2/3 items-center gap-3 text-neutral-900 dark:text-neutral-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 p-2 dark:border-neutral-700 dark:bg-neutral-800">
            <LucideIcon className="m-auto h-6 w-6 transform stroke-neutral-900 transition duration-300 ease-in-out group-hover/service:-rotate-12 dark:stroke-neutral-100" />
          </div>
          <p className="text-xl font-bold">{props.title}</p>
        </div>
        <p className="text-lg text-neutral-900 dark:text-neutral-100">
          {props.price === 0 ? (
            <span className="text-neutral-500">Sur devis</span>
          ) : (
            <>
              {props.price} <span className="text-neutral-500">/ {props.hour === true ? 'heure' : 'jour'}</span>
            </>
          )}
        </p>
      </div>
      <p className="w-3/4 text-lg text-neutral-700 dark:text-neutral-300">{props.description}</p>
      <div className="flex min-h-[150px] w-full flex-col gap-2 rounded-lg border">
        {props.features.map((feature, index) => (
          <p
            key={index}
            className="border-b border-neutral-200 p-2 text-neutral-700 last:border-b-0 dark:border-neutral-700 dark:text-neutral-300"
          >
            {feature}
          </p>
        ))}
      </div>
      <div className="m-auto cursor-pointer rounded-lg border border-neutral-200 bg-primary px-4 py-2 text-lg font-medium tracking-wider text-neutral-100 transition duration-300 ease-in-out hover:bg-primary/90 dark:border-neutral-700 dark:hover:border-neutral-100">
        <Link href={props.link} passHref target="_blank" className="flex items-center gap-2">
          <Calendar size="18" />
          <span className="font-bold">{props.linkText}</span>
        </Link>
      </div>
    </motion.div>
  );
};
