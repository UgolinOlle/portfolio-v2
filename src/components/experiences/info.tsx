'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

import { ITimelineItem } from '~/lib/interfaces/experience';
import { EXPERIENCES } from '~/lib/constants/experiences';

import { Timeline } from '~/components/experiences/time-line';
import { Heading } from '~/components/ui/headers';
import { MdxClientWrapper } from '~/components/commons/mdx/client-wrapper';

export const ExperiencesInfo: React.FC = (): JSX.Element => {
  const [selectedExperience, setSelectedExperience] = useState<ITimelineItem | null>(null);
  const [experienceContent, setExperienceContent] = useState<string | null>(null);

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

  useEffect(() => {
    const fetchExperienceContent = async (slug: string) => {
      try {
        const res = await fetch(`/api/mdx/${slug}`);
        const experience = await res.json();

        if (!experience) {
          toast.error('Aucune information disponible pour le moment.');
          return;
        }

        setExperienceContent(experience.content);
        const element = document.getElementById('experience-info');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } catch (error) {
        toast.error("Erreur lors du chargement de l'expérience.");
      }
    };

    if (selectedExperience) {
      fetchExperienceContent(selectedExperience.slug);
    }
  }, [selectedExperience]);

  return (
    <>
      <div className="flex w-full flex-col items-start gap-3 lg:mx-5 lg:w-1/2">
        <Timeline timelineData={EXPERIENCES} onExperienceClick={setSelectedExperience} />
      </div>
      <div className="flex w-full flex-col items-start gap-3 lg:w-1/2">
        {selectedExperience && (
          <motion.article
            initial="hidden"
            animate="visible"
            variants={variants}
            id="experience-info"
            className="w-full"
          >
            <div className="mb-10 flex w-full flex-row items-start gap-3">
              <Image
                src={selectedExperience.picture || ''}
                alt={selectedExperience.title}
                width={40}
                height={20}
                className="rounded-sm"
              />
              <Heading variant="h2" border={false} className="m-0">
                {selectedExperience.title}
              </Heading>
            </div>
            {experienceContent && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                className="prose prose-sm max-w-none lg:prose-lg"
              >
                <MdxClientWrapper>{experienceContent}</MdxClientWrapper>
              </motion.div>
            )}
          </motion.article>
        )}
      </div>
    </>
  );
};
