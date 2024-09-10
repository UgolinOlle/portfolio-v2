import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { globSync } from 'glob';
import { Project, ProjectData } from '@/lib/interfaces/project';

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
  const date1 = project1.data.publishedDate.getTime();
  const date2 = project2.data.publishedDate.getTime();
  return date2 - date1;
}

function getProjects(): Project[] {
  const filenames = getFilenames();
  return filenames
    .map((filename) => {
      return getProject(filename); // Appelle avec une chaîne de caractères, pas un tableau
    })
    .filter((project): project is Project => project !== null) // Filtrer les null
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
      publishedDate: new Date(data.publishedDate),
      modifiedDate: data.modified ? new Date(data.modified) : undefined,
      title: data.title,
      description: data.description,
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
