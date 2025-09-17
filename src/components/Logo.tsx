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
        className="relative flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg"
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        {/* Envelope SVG Icon */}
        <svg
          className="absolute inset-0 p-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Envelope Back */}
          <path
            d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Letter/AI indicator dot */}
          <circle
            cx="18"
            cy="6"
            r="2"
            fill="#10B981"
            stroke="white"
            strokeWidth="1"
          />
        </svg>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-white/0 to-white/20"></div>
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
      className="relative flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg"
      style={{ width: size, height: size }}
    >
      <svg
        className="absolute inset-0 p-2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="18"
          cy="6"
          r="2"
          fill="#10B981"
          stroke="white"
          strokeWidth="1"
        />
      </svg>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-white/0 to-white/20"></div>
    </div>
  );
}