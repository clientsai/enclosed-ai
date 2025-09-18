import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Analytics - Enclosed.AI Help Center",
  description:
    "Master Enclosed.AI analytics and reporting. Learn how to track performance, measure ROI, and optimize your direct mail campaigns.",
};

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="md" />
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Analytics Help</h1>
        <p className="text-gray-600">Learn how to use analytics in Enclosed.AI</p>
      </div>
    </div>
  );
}