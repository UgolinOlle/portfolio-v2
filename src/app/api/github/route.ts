/**
 * @file route.ts
 * @description Route to get the GitHub user information
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import { NextResponse } from 'next/server';

// --- Variables
const GITHUB_API_URL = 'https://api.github.com/users/ugolinolle';

/**
 * GET request to get the GitHub user information
 * 
 * @returns {Promise<NextResponse>} The response object
 */
export async function GET() {
  // --- Try to get the GitHub user information
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

    // --- Get the GitHub user information
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
