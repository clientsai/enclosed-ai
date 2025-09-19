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
    <div >
      <Navigation variant="app" />
      <div >
        <h1 >Billing Help</h1>
        <p >Learn about billing and pricing in Enclosed.AI</p>
      </div>
    </div>
  );
}