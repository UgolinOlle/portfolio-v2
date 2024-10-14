/**
 * @file project.ts
 * @description MDX for the project page
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
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

// Cache to store loaded projects in-memory
let projectCache: Project[] | null = null;

// Path to the projects directory
const projectsDirectory = path.join(process.cwd(), 'contents/projects');

/**
 * @function getFilenames
 * @description Get the filenames of the projects.
 * @returns An array of project filenames.
 */
function getFilenames() {
  return globSync('**/*.mdx', { cwd: projectsDirectory, absolute: true });
}

/**
 * @function sortProjectsByDate
 * @description Sort the projects by date.
 * @param project1 The first project.
 * @param project2 The second project.
 * @returns Numeric value for project sorting.
 */
function sortProjectsByDate(project1: Project, project2: Project) {
  return new Date(project2.date).getTime() - new Date(project1.date).getTime();
}

/**
 * @function getProjects
 * @description Get all projects.
 * @returns A promise that resolves with an array of projects sorted by date.
 */
async function getProjects() {
  if (projectCache) return projectCache;

  const filenames = getFilenames();

  const projects = await Promise.all(
    filenames.map(async (filename) => {
      try {
        const fileContent = await fs.readFile(filename, 'utf-8');
        const { data, content } = matter(fileContent);
        const safeData = ProjectSchema.safeParse(data);

        if (!safeData.success || safeData.data.status !== 'published') {
          return null;
        }

        return {
          ...safeData.data,
          slug: path.basename(filename, '.mdx'),
          content,
        };
      } catch (error) {
        console.error(`Error reading file ${filename}:`, error);
        return null;
      }
    })
  );

  projectCache = projects.filter((project): project is Project => project !== null).sort(sortProjectsByDate);

  return projectCache;
}

/**
 * @function getProject
 * @description Get a project by its slug.
 * @param slug The project slug.
 * @returns A promise that resolves with the corresponding project, or undefined if no project was found.
 */
async function getProject(slug: string) {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug);
}

export { getProjects, getProject, getFilenames };
