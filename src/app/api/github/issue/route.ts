/**
 * @file route.ts
 * @description Route to create an issue on GitHub
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import { NextRequest, NextResponse } from 'next/server';

/**
 * POST request to create an issue on GitHub
 * 
 * @param {NextRequest} req - The request object
 * @returns {Promise<NextResponse>} The response object
 */
export async function POST(req: NextRequest) {
  // --- Variables
  const { title, body } = await req.json();
  const GITHUB_TOKEN = process.env.GITHUB_API_TOKEN;
  const GITHUB_REPO = 'UgolinOlle/portfolio-v2';

  // --- Try to create an issue on GitHub
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
      // --- If the issue creation failed, return the error message
      const data = await response.json();
      return NextResponse.json(
        { error: data.message },
        { status: response.status }
      );
    }
  } catch (error) {
    // --- If an error occurred, return the error message
    return NextResponse.json(
      { error: 'An error occurred while creating issue on GitHub' },
      { status: 500 }
    );
  }
}
