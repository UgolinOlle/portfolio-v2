import { NextResponse } from 'next/server';

export async function GET() {
  const LINKEDIN_API_URL = 'https://api.linkedin.com/v2/userinfo';
  const LINKEDIN_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN;

  if (!LINKEDIN_TOKEN) {
    return NextResponse.json(
      { error: 'Missing LinkedIn token' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(LINKEDIN_API_URL, {
      headers: {
        Authorization: `Bearer ${LINKEDIN_TOKEN}`,
      },
    });

    if (!response.ok)
      return NextResponse.json(
        { error: 'Failed to fetch data from LinkedIn' },
        { status: response.status }
      );

    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred while fetching data from LinkedIn' },
      { status: 500 }
    );
  }
}
