import fs from 'fs/promises';
import { z } from 'zod';
import path from 'path';
import matter from 'gray-matter';
import { globSync } from 'glob';

// --- Validation schema for experiences
const ExperienceSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.string(),
  company: z.string().optional(),
  tags: z.array(z.string()).optional(),
  thumbnailUrl: z.string().optional(),
  status: z.string().optional().default('published'),
});

// --- Data type for an experience
export type Experience = z.infer<typeof ExperienceSchema> & {
  slug: string;
  content: string;
};

/**
 * Function to get the experiences directory.
 * @returns The path of the experiences directory.
 */
function getExperiencesDirectory() {
  return path.join(process.cwd(), 'contents/experiences');
}

/**
 * Function to get the filenames of the experiences.
 * @returns An array of experience filenames.
 */
function getFilenames() {
  const experiencesDirectory = getExperiencesDirectory();
  return globSync([experiencesDirectory + '/**/*.mdx'], { absolute: false, cwd: experiencesDirectory });
}

/**
 * Function to sort the experiences by date.
 * @param experience1 The first experience.
 * @param experience2 The second experience.
 * @returns Numeric value for experience sorting.
 */
function sortExperiencesByDate(experience1: Experience, experience2: Experience) {
  return new Date(experience1.date).getTime() < new Date(experience2.date).getTime() ? 1 : -1;
}

/**
 * Function to get all experiences.
 * @returns A promise that resolves with an array of experiences sorted by date.
 */
async function getExperiences() {
  const filenames = getFilenames();
  const experiences = [];

  for await (const filename of filenames) {
    const fullPath = path.join(getExperiencesDirectory(), filename);
    const fileContent = await fs.readFile(fullPath, 'utf-8');
    const { data, content } = matter(fileContent);
    console.info(`Parsing file: ${filename}`);

    const safeData = ExperienceSchema.safeParse(data);

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

    experiences.push({
      ...safeData.data,
      slug: filename.replace(/^\d+-/, '').replace('.mdx', ''),
      content,
    });
  }

  return experiences.sort(sortExperiencesByDate);
}

/**
 * Function to get an experience by its slug.
 * @param slug The experience slug.
 * @returns A promise that resolves with the corresponding experience, or undefined if no experience was found.
 */
async function getExperience(slug: string) {
  const experiences = await getExperiences();
  return experiences.find((experience) => experience.slug === slug);
}

export { getExperiences, getExperience, getFilenames };
