'use client';

import { useState } from 'react';

import { EXPERIENCES, ITimelineItem } from '@/lib/constants/experience';
import { Timeline } from './time-line';
import { Heading } from '../ui/headers';

export const ExperiencesInfo: React.FC = (): JSX.Element => {
  // -- Variables
  const [selectedExperience, setSelectedExperience] =
    useState<ITimelineItem | null>(null);

  // -- Render
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="w-full max-w-2xl flex flex-col gap-3 items-start">
        <Heading variant="h2">Experiences</Heading>
        <p className="text-lg text-gray-700/75 text-justify">
          Voici l'ensemble de mes expériences professionnelles.
        </p>
        <Timeline
          timelineData={EXPERIENCES}
          onExperienceClick={setSelectedExperience}
        />
      </div>
      <div className="w-full max-w-2xl flex flex-col gap-3 items-start">
        {selectedExperience && (
          <Heading variant="h2">{selectedExperience.title}</Heading>
        )}
      </div>
    </div>
  );
};
