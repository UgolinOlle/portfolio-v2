import { NextResponse } from 'next/server';

const GITHUB_API_URL = 'https://api.github.com/users/ugolinolle';

export async function GET() {
  try {
    const response = await fetch(GITHUB_API_URL, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch data from GitHub' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const headers = new Headers({
      'Cache-Control': 's-maxage=43200, stale-while-revalidate',
    });

    return NextResponse.json(data, { headers });
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred while fetching data from GitHub' },
      { status: 500 }
    );
  }
}
