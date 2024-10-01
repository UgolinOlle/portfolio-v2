import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { globSync } from 'glob';
import { Project, ProjectData } from '~/lib/interfaces/project';

function getProjectsDirectory() {
  const root = process.cwd();
  return path.join(root, 'src/content/projects');
}

function getFilenames() {
  const projectsDirectory = getProjectsDirectory();
  return globSync(
    [projectsDirectory + '/**/*.md', projectsDirectory + '/**/*.mdx'],
    {
      absolute: false,
      cwd: projectsDirectory,
    }
  );
}

function sortProjectsByDate(project1: Project, project2: Project) {
  return project1.data.date.toLocaleDateString() <
    project2.data.date.toLocaleDateString()
    ? 1
    : -1;
}

function getProjects(): Project[] {
  const filenames = getFilenames();
  return filenames
    .map((filename) => {
      return getProject(filename);
    })
    .filter((project): project is Project => project !== null)
    .sort(sortProjectsByDate);
}

function getProject(slugOrFilePath: string): Project | null {
  try {
    const projectsDirectory = path.join(process.cwd(), 'contents/projects');
    const basePath = path.join(projectsDirectory, slugOrFilePath);
    const filePaths = globSync(`${basePath}.mdx`);

    if (filePaths.length === 0) {
      console.error(`No project file found for slug: ${slugOrFilePath}`);
      return null;
    }

    const markdownWithMeta = fs.readFileSync(filePaths[0], 'utf-8');
    const { data, content } = matter(markdownWithMeta);

    const projectData: ProjectData = {
      title: data.title,
      description: data.description,
      date: data.date,
      github: data.github,
      tags: data.tags,
      thumbnailUrl: data.thumbnailUrl,
      status: data.status ?? 'published',
    };

    return {
      data: projectData,
      content: content,
      slug: slugOrFilePath.split('.')[0],
    };
  } catch (error) {
    console.error('Error in getProject:', error);
    return null;
  }
}

export { getProjects, getProject, getFilenames };
