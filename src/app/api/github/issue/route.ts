import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { title, body } = await req.json();

  const GITHUB_TOKEN = process.env.GITHUB_API_TOKEN;
  const GITHUB_REPO = 'UgolinOlle/portfolio-v2';

  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/issues`,
      {
        method: 'POST',
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
      }
    );

    if (response.ok) {
      return NextResponse.json(
        { message: 'Issue created successfully' },
        { status: 200 }
      );
    } else {
      const data = await response.json();
      return NextResponse.json(
        { error: data.message },
        { status: response.status }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred while creating issue on GitHub' },
      { status: 500 }
    );
  }
}
