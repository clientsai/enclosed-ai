import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from './supabase-server';
import { createApiError, ErrorCode } from './error-handler';
import { log } from './logger';

/**
 * Authentication middleware for API routes
 * Verifies user authentication and adds user context to request
 */
export async function requireAuth(
  request: NextRequest,
  handler: (request: NextRequest, context: { user: any }) => Promise<NextResponse>
) {
  try {
    const supabase = await createServerSupabaseClient();

    // Get session from headers
    const authHeader = request.headers.get('authorization');

    // Check for API key authentication (for programmatic access)
    if (authHeader?.startsWith('Bearer ')) {
      const token = authHeader.substring(7);

      // Verify the token with Supabase
      const { data: { user }, error } = await supabase.auth.getUser(token);

      if (error || !user) {
        log.warn('Invalid authentication token', {
          error: error?.message,
          path: request.nextUrl.pathname
        });

        throw createApiError(
          ErrorCode.UNAUTHORIZED,
          'Invalid or expired authentication token',
          401
        );
      }

      // Log successful authentication
      log.info('API authenticated', {
        userId: user.id,
        path: request.nextUrl.pathname,
        method: request.method
      });

      // Call the handler with user context
      return handler(request, { user });
    }

    // Check for cookie-based session (browser requests)
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();

    if (sessionError || !session) {
      log.warn('No valid session found', {
        error: sessionError?.message,
        path: request.nextUrl.pathname
      });

      throw createApiError(
        ErrorCode.UNAUTHORIZED,
        'Authentication required',
        401
      );
    }

    // Verify user exists and is active
    const { data: userData, error: userError } = await supabase
      .from('enclosed_users')
      .select('id, email, status, credits_balance')
      .eq('id', session.user.id)
      .single();

    if (userError || !userData) {
      log.error('User not found in database', {
        userId: session.user.id,
        error: userError?.message
      });

      throw createApiError(
        ErrorCode.NOT_FOUND,
        'User account not found',
        404
      );
    }

    // Check if user is active
    if (userData.status !== 'active') {
      log.warn('Inactive user attempted access', {
        userId: userData.id,
        status: userData.status
      });

      throw createApiError(
        ErrorCode.FORBIDDEN,
        'Account is not active',
        403
      );
    }

    // Add user data to context
    const userContext = {
      ...session.user,
      credits_balance: userData.credits_balance,
      db_id: userData.id
    };

    // Call the handler with user context
    return handler(request, { user: userContext });

  } catch (error) {
    // If it's already an API error, throw it as-is
    if (error && typeof error === 'object' && 'statusCode' in error) {
      throw error;
    }

    // Otherwise wrap in generic auth error
    log.error('Authentication middleware error', {
      error: error instanceof Error ? error.message : 'Unknown error',
      path: request.nextUrl.pathname
    });

    throw createApiError(
      ErrorCode.UNAUTHORIZED,
      'Authentication failed',
      401,
      error
    );
  }
}

/**
 * Optional authentication middleware
 * Adds user context if authenticated, but doesn't require it
 */
export async function optionalAuth(
  request: NextRequest,
  handler: (request: NextRequest, context: { user?: any }) => Promise<NextResponse>
) {
  try {
    const supabase = await createServerSupabaseClient();
    const { data: { session } } = await supabase.auth.getSession();

    if (session) {
      const { data: userData } = await supabase
        .from('enclosed_users')
        .select('id, email, status, credits_balance')
        .eq('id', session.user.id)
        .single();

      if (userData && userData.status === 'active') {
        const userContext = {
          ...session.user,
          credits_balance: userData.credits_balance,
          db_id: userData.id
        };

        return handler(request, { user: userContext });
      }
    }

    // No user, but that's okay for optional auth
    return handler(request, { user: undefined });

  } catch (error) {
    // Log error but don't fail for optional auth
    log.warn('Optional auth check failed', {
      error: error instanceof Error ? error.message : 'Unknown error'
    });

    return handler(request, { user: undefined });
  }
}

/**
 * API Key validation for external integrations
 */
export async function validateApiKey(
  request: NextRequest,
  handler: (request: NextRequest, context: { client: any }) => Promise<NextResponse>
) {
  const apiKey = request.headers.get('x-api-key');

  if (!apiKey) {
    throw createApiError(
      ErrorCode.UNAUTHORIZED,
      'API key required',
      401
    );
  }

  const supabase = await createServerSupabaseClient();

  // Look up API key in database
  const { data: client, error } = await supabase
    .from('api_keys')
    .select('*, enclosed_users(*)')
    .eq('key', apiKey)
    .eq('status', 'active')
    .single();

  if (error || !client) {
    log.warn('Invalid API key attempt', { apiKey: apiKey.substring(0, 8) + '...' });

    throw createApiError(
      ErrorCode.UNAUTHORIZED,
      'Invalid API key',
      401
    );
  }

  // Update last used timestamp
  await supabase
    .from('api_keys')
    .update({ last_used_at: new Date().toISOString() })
    .eq('id', client.id);

  // Log API key usage
  log.info('API key authenticated', {
    clientId: client.id,
    userId: client.user_id,
    path: request.nextUrl.pathname
  });

  return handler(request, { client });
}