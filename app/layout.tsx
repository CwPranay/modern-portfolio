import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranay Gurav - Full Stack Developer",
  description: "Full-stack developer specializing in MongoDB, Express, React, Node.js, and Next.js",
  icons: {
    icon: [

      { url: '/PG.svg', type: 'image/svg+xml', sizes: '32x32' }
    ],

    apple: '/PG.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
