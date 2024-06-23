/**
 * @interface ITimelineItem
 * @description The timeline item interface.
 * @property {string} title - The title of the timeline item.
 * @property {string} description - The description of the timeline item.
 * @property {string} date - The date of the timeline item.
 * @property {string} color - The color of the timeline item.
 * @exports ITimelineItem
 */
export interface ITimelineItem {
  picture?: string;
  title: string;
  description: string;
  date: string;
  color: string;
}

/**
 * @constant EXPERIENCES
 * @description Experiences data.
 * @type {ITimelineItem[]} The experiences data.
 * @exports EXPERIENCES
 */
export const EXPERIENCES: ITimelineItem[] = [
  {
    picture: '/logos/nicoka.png',
    title: 'Nicoka - Développeur Backend',
    description:
      "Stage de fin d'études chez Nicoka, entreprise dédiée aux métiers du conseil et du service.",
    date: '2022',
    color: 'bg-blue-900',
  },
  {
    title: 'Open Source Contributor',
    description:
      'I am an open source contributor with a passion for giving back to the community.',
    date: '2019 - Present',
    color: 'bg-blue-500',
  },
  {
    title: 'Full Stack Developer',
    description:
      'I am a full stack developer with a passion for building scalable solutions.',
    date: '2019 - Present',
    color: 'bg-yellow-500',
  },
];
