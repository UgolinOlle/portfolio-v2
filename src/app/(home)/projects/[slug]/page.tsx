import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import { Heading } from '@/components/ui/headers';
import { AnimatedContainer } from '@/components/commons/animation';
import { ClientMDX } from '@/components/commons/mdx/client';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('contents/projects'));

  return files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const filePath = path.join('content', `${slug}.mdx`);
  let fileContents;

  if (!fs.existsSync(filePath)) return notFound();
  else fileContents = fs.readFileSync(filePath, 'utf8');

  const { data: frontMatter } = matter(fileContents);

  return {
    title: frontMatter.title,
  };
}

const ProjectItemPage = async ({ params }: Props) => {
  const { slug } = params;
  const filePath = path.join('content', `${slug}.mdx`);
  let fileContents;

  if (!fs.existsSync(filePath)) return notFound();
  else fileContents = fs.readFileSync(filePath, 'utf8');
  const { data: frontMatter, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return (
    <AnimatedContainer custom={0} className="flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:w-1/2 flex flex-col gap-3 items-start">
        <Heading variant="h2">{frontMatter.title}</Heading>
        <ClientMDX mdxSource={mdxSource} />
      </div>
    </AnimatedContainer>
  );
};

export default ProjectItemPage;
