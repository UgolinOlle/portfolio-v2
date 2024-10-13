/**
 * File containing functions to retrieve and manipulate projects.
 */

import fs from 'fs/promises';
import { z } from 'zod';
import path from 'path';
import matter from 'gray-matter';
import { globSync } from 'glob';

// --- Validation schema for projects
const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.string(),
  github: z.string().optional(),
  tags: z.array(z.string()).optional(),
  thumbnailUrl: z.string().optional(),
  status: z.string().optional().default('published'),
});

// --- Data type for a project
export type Project = z.infer<typeof ProjectSchema> & {
  slug: string;
  content: string;
};

/**
 * Function to get the projects directory.
 * @returns The path of the projects directory.
 */
function getProjectsDirectory() {
  return path.join(process.cwd(), 'contents/projects');
}

/**
 * Function to get the filenames of the projects.
 * @returns An array of project filenames.
 */
function getFilenames() {
  const projectsDirectory = getProjectsDirectory();
  return globSync([projectsDirectory + '/**/*.mdx'], { absolute: false, cwd: projectsDirectory });
}

/**
 * Function to sort the projects by date.
 * @param project1 The first project.
 * @param project2 The second project.
 * @returns Numeric value for project sorting.
 */
function sortProjectsByDate(project1: Project, project2: Project) {
  return new Date(project1.date).getTime() < new Date(project2.date).getTime() ? 1 : -1;
}

/**
 * Function to get all projects.
 * @returns A promise that resolves with an array of projects sorted by date.
 */
async function getProjects() {
  const filenames = getFilenames();
  const projects = [];

  for await (const filename of filenames) {
    const fullPath = path.join(getProjectsDirectory(), filename);
    const fileContent = await fs.readFile(fullPath, 'utf-8');
    const { data, content } = matter(fileContent);

    const safeData = ProjectSchema.safeParse(data);

    if (!safeData.success) {
      console.error(`Error parsing file: ${filename}`);
      safeData.error.issues.forEach((issue) => {
        console.error(`  - ${issue.path.join(' -> ')}: ${issue.message}`);
      });
      continue;
    }

    if (safeData.data.status !== 'published') {
      continue;
    }

    projects.push({
      ...safeData.data,
      slug: filename.replace(/^\d+-/, '').replace('.mdx', ''),
      content,
    });
  }

  return projects.sort(sortProjectsByDate);
}

/**
 * Function to get a project by its slug.
 * @param slug The project slug.
 * @returns A promise that resolves with the corresponding project, or undefined if no project was found.
 */
async function getProject(slug: string) {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug);
}

export { getProjects, getProject, getFilenames };
