/**
 * @file project.ts
 * @description Interfaces for the project page
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

/**
 * @interface IProjectItem
 * @description Interface for project item.
 * @property {string} id - Project id.
 * @property {string} name - Project name.
 * @property {string} description - Project description.
 * @property {string} imageUrl - Project image url.
 * @property {string} url - Project url.
 * @property {string} githubUrl - Project github url.
 * @property {string[]} technologies - Project technologies.
 * @property {string} date - Project date.
 * @export IProjectItem
 */
export interface IProjectItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageSize?: string;
  imageBg?: string;
  url: string;
  githubUrl: string;
  technologies: string[];
  keywords?: string[];
  date: string;
}

/**
 * @interface ProjectData
 * @description Interface for the project data.
 * @property {string} title - The project title.
 * @property {string} description - The project description.
 * @property {Date} date - The project date.
 * @property {string} github - The project github url.
 * @property {string[]} tags - The project tags.
 * @property {string} thumbnailUrl - The project thumbnail url.
 * @property {string} status - The project status.
 * @exports ProjectData
 */
export interface ProjectData {
  title: string;
  description: string;
  date: Date;
  github?: string;
  tags: string[];
  thumbnailUrl: string;
  status: 'published' | 'draft';
}

/**
 * @interface Project
 * @description Interface for the project data.
 * @property {ProjectData} data - The project data.
 * @property {string} slug - The project slug.
 * @property {string} content - The project content.
 * @exports Project
 */
export interface Project {
  data: ProjectData;
  slug: string;
  content: string;
}
