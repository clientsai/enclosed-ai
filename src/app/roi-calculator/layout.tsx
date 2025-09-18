import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI Calculator - Enclosed.AI | Calculate Direct Mail Returns",
  description:
    "Calculate your direct mail marketing ROI with our free, comprehensive calculator. Estimate costs, responses, and returns before launching your campaign.",
};

export default function ROICalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}