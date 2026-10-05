import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://iquism-portfolio.vercel.app";

export const metadata: Metadata = {
  title: "iquism — Web Developer",
  description:
    "iquism is a freelance web developer building fast, beautiful, responsive websites for businesses with Next.js, React and Tailwind CSS.",
  keywords: ["web developer", "freelance web developer", "Next.js developer", "iquism", "business websites", "React developer"],
  authors: [{ name: "iquism" }],
  openGraph: {
    title: "iquism — Web Developer",
    description:
      "I build fast, beautiful websites for businesses. Next.js • React • Tailwind CSS.",
    type: "website",
    url: SITE_URL,
    images: [{ url: "/hero-abstract.webp", width: 1200, height: 630, alt: "iquism — Web Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iquism — Web Developer",
    description: "I build fast, beautiful websites for businesses.",
    images: ["/hero-abstract.webp"],
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${display.variable} ${body.variable} font-sans bg-ink-950 text-zinc-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
