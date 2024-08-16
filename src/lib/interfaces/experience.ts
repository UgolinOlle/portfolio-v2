/**
 * @interface IExperience
 * @description Interface for the experience object
 * @param {string} picture - The picture of the experience
 * @param {string} title - The title of the experience
 * @param {string} slug - The slug of the experience
 * @param {string} description - The description of the experience
 * @param {string} date - The date of the experience
 * @param {string} color - The color of the experience
 * @param {string} link - The link of the experience
 * @exports ITimelineItem
 */
export interface ITimelineItem {
  picture?: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  color: string;
  link?: string;
}

/**
 * @interface IExperience
 * @description Interface for the experience object
 * @param {string} title - The title of the experience
 * @param {string} description - The description of the experience
 * @exports IExperience
 */
export interface ISchoolPicture {
  src: string;
  alt: string;
}
