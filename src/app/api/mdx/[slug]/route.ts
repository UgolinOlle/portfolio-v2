import { NextResponse } from 'next/server';
import { getExperience } from '~/lib/mdx/experience';

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;

  if (!slug) {
    return NextResponse.json({ message: 'Slug is required' }, { status: 400 });
  }

  const post = await getExperience(slug);

  if (!post) {
    return NextResponse.json({ message: 'Experience not found' }, { status: 404 });
  }

  return NextResponse.json(post);
}
