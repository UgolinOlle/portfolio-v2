import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  const category = searchParams.get('category');

  if (!slug) {
    return NextResponse.json({ exists: false }, { status: 400 });
  }
  console.log('slug', slug);
  console.log('category', category);

  const categoryName = category ? category : '';
  const filePath = path.join(
    process.cwd(),
    categoryName ? `contents/${categoryName}` : 'contents',
    `${slug}.mdx`
  );

  console.log(filePath);
  const exists = fs.existsSync(filePath);

  return NextResponse.json({ exists });
}
