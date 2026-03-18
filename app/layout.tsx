import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "InOps Solutions | Automated CLMS & Compliance",
    template: "%s | InOps Solutions",
  },
  description:
    "Turn compliance challenges into opportunities with automated CLMS. One unified platform for complete control.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "InOps Solutions",
    title: "InOps Solutions | Automated CLMS & Compliance",
    description:
      "Turn compliance challenges into opportunities with automated CLMS. One unified platform for complete control.",
  },
  twitter: {
    card: "summary_large_image",
    title: "InOps Solutions | Automated CLMS & Compliance",
    description:
      "Turn compliance challenges into opportunities with automated CLMS. One unified platform for complete control.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col overflow-x-hidden bg-white text-gray-900 antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 min-w-0">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
