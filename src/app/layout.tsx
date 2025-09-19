import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Enclosed.AI - Direct Mail Marketing Platform",
  description:
    "AI-powered direct mail marketing with personalized sales letters and campaign tracking",
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        url: '/logo.svg',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <div >
          <Navigation variant="landing" />
          <main >
            {children}
          </main>
          <Footer variant="landing" />
        </div>
      </body>
    </html>
  );
}