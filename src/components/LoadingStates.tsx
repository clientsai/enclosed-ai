'use client';

import React from 'react';
import { Loader2, Mail, Upload, CreditCard, Users } from 'lucide-react';

// Basic loading spinner
export function LoadingSpinner({ size = 'default', className = '' }: {
  size?: 'small' | 'default' | 'large';
  className?: string;
}) {
  const sizeClasses = {
    small: 'h-4 w-4',
    default: 'h-6 w-6',
    large: 'h-8 w-8'
  };

  return (
    <Loader2
      className={`animate-spin ${sizeClasses[size]} ${className}`}
    />
  );
}

// Full page loading
export function PageLoading({ title = 'Loading...' }: { title?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <LoadingSpinner size="large" className="text-blue-600 mx-auto" />
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-600">Please wait while we load your content</p>
      </div>
    </div>
  );
}

// Button loading state
export function LoadingButton({
  loading,
  children,
  disabled,
  className = '',
  loadingText,
  ...props
}: {
  loading: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  loadingText?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={`inline-flex items-center justify-center relative ${className} ${
        loading || disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {loading && (
        <LoadingSpinner size="small" className="mr-2" />
      )}
      {loading && loadingText ? loadingText : children}
    </button>
  );
}

// Card skeleton loader
export function CardSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="bg-white rounded-lg border p-6 animate-pulse">
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-3 bg-gray-200 rounded"></div>
            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Table skeleton loader
export function TableSkeleton({
  rows = 5,
  columns = 4
}: {
  rows?: number;
  columns?: number;
}) {
  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            {Array.from({ length: columns }).map((_, i) => (
              <th key={i} className="px-6 py-3">
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="px-6 py-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Campaign-specific loading states
export function CampaignLoadingCard() {
  return (
    <div className="bg-white rounded-lg border p-6 animate-pulse">
      <div className="flex items-center space-x-3 mb-4">
        <Mail className="h-5 w-5 text-gray-300" />
        <div className="h-5 bg-gray-200 rounded w-32"></div>
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        <div className="flex space-x-4 mt-4">
          <div className="h-8 bg-gray-200 rounded w-20"></div>
          <div className="h-8 bg-gray-200 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
}

// Upload progress loading
export function UploadProgress({
  progress,
  filename,
  status = 'uploading'
}: {
  progress: number;
  filename: string;
  status?: 'uploading' | 'processing' | 'complete' | 'error';
}) {
  const statusConfig = {
    uploading: { color: 'bg-blue-500', icon: Upload, text: 'Uploading...' },
    processing: { color: 'bg-yellow-500', icon: Loader2, text: 'Processing...' },
    complete: { color: 'bg-green-500', icon: Upload, text: 'Complete' },
    error: { color: 'bg-red-500', icon: Upload, text: 'Error' }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className="bg-white rounded-lg border p-4">
      <div className="flex items-center space-x-3 mb-3">
        <Icon className={`h-5 w-5 ${status === 'processing' ? 'animate-spin' : ''}`} />
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900 truncate">{filename}</p>
          <p className="text-xs text-gray-500">{config.text}</p>
        </div>
        <span className="text-sm font-medium text-gray-900">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${config.color}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

// List loading placeholder
export function ListLoadingPlaceholder({
  count = 3,
  type = 'default'
}: {
  count?: number;
  type?: 'default' | 'campaigns' | 'recipients' | 'transactions';
}) {
  const getIcon = () => {
    switch (type) {
      case 'campaigns': return Mail;
      case 'recipients': return Users;
      case 'transactions': return CreditCard;
      default: return Loader2;
    }
  };

  const Icon = getIcon();

  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center space-x-3 p-4 bg-white rounded-lg border animate-pulse">
          <Icon className="h-5 w-5 text-gray-300" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
          <div className="h-8 w-16 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
}

// Global loading overlay
export function LoadingOverlay({
  visible,
  message = 'Loading...'
}: {
  visible: boolean;
  message?: string;
}) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-xl">
        <div className="flex items-center space-x-3">
          <LoadingSpinner size="default" className="text-blue-600" />
          <span className="text-gray-900 font-medium">{message}</span>
        </div>
      </div>
    </div>
  );
}