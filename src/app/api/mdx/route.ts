import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ exists: false }, { status: 400 });
  }

  const filePath = path.join(
    process.cwd(),
    'contents/experiences',
    `${slug}.mdx`
  );
  const exists = fs.existsSync(filePath);

  return NextResponse.json({ exists });
}
