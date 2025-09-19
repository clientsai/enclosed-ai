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
    <div >
      <Navigation variant="app" />
      <div >
        <h1 >Campaigns Help</h1>
        <p >Learn how to create and manage campaigns in Enclosed.AI</p>
      </div>
    </div>
  );
}