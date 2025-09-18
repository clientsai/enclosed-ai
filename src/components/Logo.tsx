import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  linkToHome?: boolean;
}

export default function Logo({
  size = 'md',
  showText = true,
  className = '',
  linkToHome = true
}: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: 'text-lg' },
    md: { icon: 40, text: 'text-xl' },
    lg: { icon: 48, text: 'text-2xl' },
  };

  const currentSize = sizes[size];

  const LogoContent = () => (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Modern Envelope Logo */}
      <div
        className="relative flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg"
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        {/* Clean Envelope SVG Icon */}
        <svg
          width={currentSize.icon * 0.6}
          height={currentSize.icon * 0.6}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Envelope shape */}
          <rect x="2" y="5" width="20" height="14" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
          {/* Envelope flap */}
          <path d="M2 7L12 13L22 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          {/* AI indicator */}
          <circle cx="18" cy="6" r="3" fill="#10B981" />
          <text x="18" y="9" fontSize="4" fill="white" textAnchor="middle" fontWeight="bold">AI</text>
        </svg>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-white/0 to-white/10"></div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-gray-900 ${currentSize.text}`}>
            Enclosed.AI
          </span>
          {size === 'lg' && (
            <span className="text-xs text-gray-600 -mt-1">
              Direct Mail Marketing Platform
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link href="/" className="inline-flex hover:opacity-90 transition-opacity">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}

// Export a simple icon-only version for favicons or small spaces
export function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg"
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M2 7L12 13L22 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="6" r="3" fill="#10B981" />
        <text x="18" y="9" fontSize="4" fill="white" textAnchor="middle" fontWeight="bold">AI</text>
      </svg>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-white/0 to-white/10"></div>
    </div>
  );
}