'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { toast } from 'sonner';

import { ITimelineItem } from '@/lib/interfaces/experience';
import { EXPERIENCES } from '@/lib/constants/experience';
import { Timeline } from './time-line';
import { Heading } from '@/components/ui/headers';
import { MDXWrapper } from '@/components/commons/mdx/mdx';

export const ExperiencesInfo: React.FC = (): JSX.Element => {
  // --- Variables
  const [selectedExperience, setSelectedExperience] =
    useState<ITimelineItem | null>(null);
  const [mdxExists, setMdxExists] = useState<boolean>(false);
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  // --- Functions
  useEffect(() => {
    const checkMdxFile = async (slug: string) => {
      const res = await fetch(`/api/mdx?slug=${slug}&category=experiences`);
      const data = await res.json();

      if (!data.exists)
        toast.error('Aucune information disponible pour le moment.');
      else setMdxExists(data.exists);
    };

    if (selectedExperience) {
      checkMdxFile(selectedExperience.slug);
    }
  }, [selectedExperience]);

  const loadMdxComponent = (filename: string) =>
    dynamic(() => import(`../../../contents/experiences/${filename}.mdx`), {
      ssr: false,
    });

  const MdxContent =
    selectedExperience && mdxExists
      ? loadMdxComponent(selectedExperience.slug)
      : null;

  // --- Render
  return (
    <>
      <div className="w-full lg:w-1/2 flex flex-col gap-3 items-start">
        <Timeline
          timelineData={EXPERIENCES}
          onExperienceClick={setSelectedExperience}
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-3 items-start">
        {selectedExperience && (
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={variants}
          >
            <div className="flex flex-row items-center gap-5 w-full">
              <Image
                src={selectedExperience.picture || ''}
                alt={selectedExperience.title}
                width={40}
                height={20}
              />
              <Heading variant="h2">{selectedExperience.title}</Heading>
            </div>
            {MdxContent && (
              <MDXWrapper>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  variants={variants}
                  className="my-5"
                >
                  <MdxContent />
                </motion.div>
              </MDXWrapper>
            )}
          </motion.div>
        )}
      </div>
    </>
  );
};
