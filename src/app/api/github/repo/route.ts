/**
 * @file route.ts
 * @description Route to get the recent commits from a GitHub repository
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import { NextRequest, NextResponse } from 'next/server';

/**
 * GET request to get the recent commits from a GitHub repository
 * 
 * @param {NextRequest} request - The request object
 * @returns {Promise<NextResponse>} The response object
 */
export async function GET(request: NextRequest) {
  // --- Variables
  const { searchParams } = new URL(request.url);
  const repoName = searchParams.get('repo');

  if (!repoName) {
    return NextResponse.json(
      { error: 'Repository name is required' },
      { status: 400 }
    );
  }

  // --- GitHub API URL
  const GITHUB_API_URL = `https://api.github.com/repos/UgolinOlle/${repoName}/commits`;

  try {
    const response = await fetch(GITHUB_API_URL, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
      },
    });
    console.log(response);

    if (!response.ok) {
      // --- If the request failed, return the error message
      return NextResponse.json(
        { error: 'Failed to fetch data from GitHub' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const headers = new Headers({
      'Cache-Control': 's-maxage=43200, stale-while-revalidate',
    });

    // --- Get the 5 most recent commits
    const recentCommits = data.slice(0, 5);

    return NextResponse.json(recentCommits, { headers });
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred while fetching data from GitHub' },
      { status: 500 }
    );
  }
}
