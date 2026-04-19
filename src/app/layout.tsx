import type { Metadata } from 'next';
import './globals.css';
import { SmoothScroll } from '@/components/portfolio/SmoothScroll';
import { CursorGlow } from '@/components/portfolio/CursorGlow';

export const metadata: Metadata = {
  title: 'Pranay Gurav | MERN Stack Developer',
  description: 'Portfolio of Pranay Gurav, focused on digital experiences and high-performance MERN development.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        <SmoothScroll>
          <CursorGlow />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
