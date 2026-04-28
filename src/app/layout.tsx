import type { Metadata } from 'next';
import './globals.css';
import { SmoothScroll } from '@/components/portfolio/SmoothScroll';
import { CursorGlow } from '@/components/portfolio/CursorGlow';

export const metadata: Metadata = {
 

  title: {
    default: 'Pranay Gurav | MERN Stack Developer',
    template: '%s | Pranay Gurav',
  },

  description:
    'Pranay Gurav is a MERN Stack Developer building high-performance web applications, modern UI/UX experiences, and scalable full-stack solutions.',

  keywords: [
    'Pranay Gurav',
    'MERN Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Full Stack Developer India',
    'MongoDB Developer',
    'Portfolio',
  ],

  authors: [{ name: 'Pranay Gurav' }],
  creator: 'Pranay Gurav',

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  openGraph: {
    title: 'Pranay Gurav | MERN Stack Developer',
    description:
      'Explore Pranay Gurav’s portfolio – modern full-stack projects, UI/UX design, and scalable MERN applications.',
    url: 'https://yourdomain.com', // ⚠️ change this
    siteName: 'Pranay Portfolio',
    images: [
      {
        url: '/image.webp', // ⚠️ use a proper preview image
        width: 1200,
        height: 630,
        alt: 'Pranay Gurav Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Pranay Gurav | MERN Stack Developer',
    description:
      'Portfolio of Pranay Gurav showcasing MERN stack projects, UI/UX design, and modern web apps.',
    images: ['/image.webp'], // ⚠️ same as OG image
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />

        {/* Favicon fallback (extra safety) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
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