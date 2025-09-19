import Link from "next/link";
import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
export const metadata = {
  title: "Billing - Enclosed.AI Help Center",
  description:
    "Understand Enclosed.AI billing, manage your subscription, and learn about pricing options.",
};
export default function BillingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation variant="app" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Billing Help</h1>
        <p className="text-gray-400">Learn about billing and pricing in Enclosed.AI</p>
      </div>
    </div>
  );
}