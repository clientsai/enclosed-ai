import { NextRequest, NextResponse } from 'next/server';
import { getAuthUrl } from '@/lib/google-calendar';

export async function GET(req: NextRequest) {
  try {
    // Get the user ID from session or auth
    const userId = req.nextUrl.searchParams.get('userId') || '';

    // Generate Google OAuth URL with state parameter
    const authUrl = getAuthUrl(userId);

    // Redirect to Google OAuth consent screen
    return NextResponse.redirect(authUrl);
  } catch (error) {
    console.error('Error generating Google auth URL:', error);
    return NextResponse.json(
      { error: 'Failed to initiate Google authentication' },
      { status: 500 }
    );
  }
}