import Link from 'next/link';
import Image from 'next/image';

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
      {/* Modern Envelope Logo using external SVG */}
      <Image
        src="/logo.svg"
        alt="Enclosed.AI Logo"
        width={currentSize.icon}
        height={currentSize.icon}
        className="drop-shadow-lg"
      />

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
    <Image
      src="/logo.svg"
      alt="Enclosed.AI Icon"
      width={size}
      height={size}
      className="drop-shadow-lg"
    />
  );
}