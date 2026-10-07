import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rowth.io"),

  title: {
    default: "ROWTH | Strategy, Systems & Execution",
    template: "%s | ROWTH",
  },

  description:
    "ROWTH helps ambitious companies turn strategy into measurable growth through search, data, technology, systems, and execution.",

  openGraph: {
    title: "ROWTH | Strategy, Systems & Execution",
    description:
      "Strategy, systems, technology, and execution designed to create measurable growth.",
    url: "https://rowth.io",
    siteName: "ROWTH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}