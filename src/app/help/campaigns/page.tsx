import Link from "next/link";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
export const metadata = {
  title: "Campaigns - Enclosed.AI Help Center",
  description:
    "Learn how to create and manage direct mail campaigns with Enclosed.AI.",
};
export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation variant="app" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Campaigns Help</h1>
        <p className="text-gray-400">Learn how to create and manage campaigns in Enclosed.AI</p>
      </div>
    </div>
  );
}