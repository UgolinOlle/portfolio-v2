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

export interface ProjectData {
  publishedDate: Date;
  modifiedDate?: Date;
  title: string;
  description: string;
  github?: string;
  tags: string[];
  thumbnailUrl: string;
  status: 'published' | 'draft';
}

export interface Project {
  data: ProjectData;
  slug: string;
  content: string;
}
