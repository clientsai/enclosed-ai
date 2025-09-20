import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

export enum ErrorCode {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  RATE_LIMIT_EXCEEDED = 'RATE_LIMIT_EXCEEDED',
  INSUFFICIENT_CREDITS = 'INSUFFICIENT_CREDITS',
  EXTERNAL_SERVICE_ERROR = 'EXTERNAL_SERVICE_ERROR',
  DATABASE_ERROR = 'DATABASE_ERROR',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
}

export interface ApiError {
  code: ErrorCode;
  message: string;
  details?: unknown;
  statusCode: number;
}

export class AppError extends Error {
  public readonly code: ErrorCode;
  public readonly statusCode: number;
  public readonly details?: unknown;

  constructor(code: ErrorCode, message: string, statusCode: number = 500, details?: unknown) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.details = details;
    this.name = 'AppError';

    // Maintains proper stack trace for where error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }
}

export function createApiError(
  code: ErrorCode,
  message: string,
  statusCode: number = 500,
  details?: unknown
): AppError {
  return new AppError(code, message, statusCode, details);
}

export function handleApiError(error: unknown): NextResponse {
  // Log the error for monitoring
  console.error('API Error:', error);

  // Handle Zod validation errors
  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        error: {
          code: ErrorCode.VALIDATION_ERROR,
          message: 'Invalid request data',
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
      },
      { status: 400 }
    );
  }

  // Handle custom AppError
  if (error instanceof AppError) {
    return NextResponse.json(
      {
        error: {
          code: error.code,
          message: error.message,
          details: error.details,
        },
      },
      { status: error.statusCode }
    );
  }

  // Handle Supabase errors
  if (error && typeof error === 'object' && 'code' in error) {
    const supabaseError = error as { code: string; message: string; details?: string };

    // Map common Supabase error codes
    switch (supabaseError.code) {
      case '23505': // unique_violation
        return NextResponse.json(
          {
            error: {
              code: ErrorCode.VALIDATION_ERROR,
              message: 'A record with this information already exists',
              details: supabaseError.details,
            },
          },
          { status: 409 }
        );
      case '23503': // foreign_key_violation
        return NextResponse.json(
          {
            error: {
              code: ErrorCode.VALIDATION_ERROR,
              message: 'Referenced record does not exist',
              details: supabaseError.details,
            },
          },
          { status: 400 }
        );
      case '42501': // insufficient_privilege
        return NextResponse.json(
          {
            error: {
              code: ErrorCode.FORBIDDEN,
              message: 'Insufficient permissions',
            },
          },
          { status: 403 }
        );
    }

    // Generic database error
    return NextResponse.json(
      {
        error: {
          code: ErrorCode.DATABASE_ERROR,
          message: 'Database operation failed',
          details: process.env.NODE_ENV === 'development' ? supabaseError.message : undefined,
        },
      },
      { status: 500 }
    );
  }

  // Handle standard Error objects
  if (error instanceof Error) {
    // Check for specific error patterns
    if (error.message.includes('fetch')) {
      return NextResponse.json(
        {
          error: {
            code: ErrorCode.EXTERNAL_SERVICE_ERROR,
            message: 'External service unavailable',
          },
        },
        { status: 502 }
      );
    }
  }

  // Fallback for unknown errors
  return NextResponse.json(
    {
      error: {
        code: ErrorCode.INTERNAL_SERVER_ERROR,
        message: 'An unexpected error occurred',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined,
      },
    },
    { status: 500 }
  );
}

// Client-side error handling utilities
export function getErrorMessage(error: unknown): string {
  if (error instanceof AppError) {
    return error.message;
  }

  if (error instanceof ZodError) {
    return error.errors.map(err => err.message).join(', ');
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === 'string') {
    return error;
  }

  return 'An unexpected error occurred';
}

// User-friendly error messages
export const USER_FRIENDLY_MESSAGES = {
  [ErrorCode.VALIDATION_ERROR]: 'Please check your input and try again.',
  [ErrorCode.UNAUTHORIZED]: 'Please log in to continue.',
  [ErrorCode.FORBIDDEN]: 'You don\'t have permission to perform this action.',
  [ErrorCode.NOT_FOUND]: 'The requested item could not be found.',
  [ErrorCode.RATE_LIMIT_EXCEEDED]: 'Too many requests. Please try again later.',
  [ErrorCode.INSUFFICIENT_CREDITS]: 'Insufficient credits. Please purchase more credits to continue.',
  [ErrorCode.EXTERNAL_SERVICE_ERROR]: 'External service is temporarily unavailable. Please try again later.',
  [ErrorCode.DATABASE_ERROR]: 'Database error occurred. Please try again.',
  [ErrorCode.INTERNAL_SERVER_ERROR]: 'Something went wrong. Please try again later.',
};

export function getUserFriendlyMessage(code: ErrorCode): string {
  return USER_FRIENDLY_MESSAGES[code] || USER_FRIENDLY_MESSAGES[ErrorCode.INTERNAL_SERVER_ERROR];
}

// Async error wrapper for API routes
export function withErrorHandling<T extends unknown[], R>(
  handler: (...args: T) => Promise<R>
) {
  return async (...args: T): Promise<R | NextResponse> => {
    try {
      return await handler(...args);
    } catch (error) {
      return handleApiError(error);
    }
  };
}