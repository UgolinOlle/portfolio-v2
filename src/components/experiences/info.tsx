import { EXPERIENCES } from '@/lib/constants/experience';
import { Timeline } from '../ui/time-line';
import { Heading } from '../ui/headers';

/**
 * @function ExperienceInfo
 * @description Display the experience information.
 * @returns {JSX.Element} The experience information.
 * @exports ExperienceInfo
 */
export const ExperiencesInfo: React.FC = (): JSX.Element => {
  // -- Render
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full max-w-2xl flex flex-col gap-3 items-start">
        <Heading variant="h2">Experiences</Heading>
        <p className="text-lg text-gray-700/75 text-justify">
          Voici l'ensemble de mes expériences professionnelles.
        </p>
        <Timeline timelineData={EXPERIENCES} />
      </div>
    </div>
  );
};
