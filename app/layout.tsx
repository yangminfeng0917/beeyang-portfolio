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
  metadataBase: new URL("https://beeyang-portfolio.vercel.app"),

  title: "BEEYANG — 楊旻峰｜Digital Media / Visual Designer",

  description:
    "數位媒體與視覺設計師｜廣播企劃、影像製作、視覺設計與攝影",

  openGraph: {
    title: "BEEYANG — 楊旻峰｜Digital Media / Visual Designer",
    description:
      "數位媒體與視覺設計師｜廣播企劃、影像製作、視覺設計與攝影",
    url: "https://beeyang-portfolio.vercel.app",
    siteName: "BEEYANG",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BEEYANG — 楊旻峰",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BEEYANG — 楊旻峰｜Digital Media / Visual Designer",
    description:
      "數位媒體與視覺設計師｜廣播企劃、影像製作、視覺設計與攝影",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}