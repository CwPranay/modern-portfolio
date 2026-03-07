import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeScript from "@/components/ThemeScript";

const inter = Inter({ subsets: ["latin"], preload: false });

export const metadata: Metadata = {
  title: "Pranay Gurav | MERN Stack & Full Stack Developer",
  description:
    "Pranay Gurav is a Full Stack Developer specializing in MongoDB, Express, React, Node.js and Next.js. Explore projects like Habit Tracker, AgroInsight, and FixMyArea.",
  
  keywords: [
    "Pranay Gurav",
    "Pranay Gurav developer",
    "MERN stack developer",
    "Full stack developer portfolio",
    "React developer",
    "Next.js developer",
    "MongoDB developer",
  ],

  authors: [{ name: "Pranay Gurav", url: "https://pranaygurav.in" }],

  creator: "Pranay Gurav",

  metadataBase: new URL("https://pranaygurav.in"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Pranay Gurav | Full Stack Developer",
    description:
      "Portfolio of Pranay Gurav – MERN Stack Developer building modern full-stack web applications with React, Node.js, MongoDB and Next.js.",
    url: "https://pranaygurav.in",
    siteName: "Pranay Gurav Portfolio",
    images: [
      {
        url: "/PG.svg",
        width: 1200,
        height: 630,
        alt: "Pranay Gurav Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pranay Gurav | Full Stack Developer",
    description:
      "Portfolio of Pranay Gurav – MERN Stack Developer building modern web applications.",
    images: ["/PG.svg"],
  },

  icons: {
    icon: [
      { url: "/PG.svg", type: "image/svg+xml", sizes: "32x32" },
    ],
    apple: "/PG.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <ThemeScript />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}