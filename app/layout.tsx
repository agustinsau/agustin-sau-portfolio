import type { Metadata } from 'next';
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { SkipLink } from "@/components/layout/SkipLink";
import "./globals.css";

const siteUrl = 'https://agustinsau.dev';
const authorName = 'Agustin Sau';
const authorDescription = 'Desarrollador Fullstack Junior especializado en React, Next.js y TypeScript. Creo aplicaciones web modernas, escalables y con diseño excepcional.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  
  title: `${authorName} | Desarrollador Fullstack Junior`,
  description: authorDescription,
  
  keywords: [
    'desarrollador',
    'fullstack',
    'react',
    'next.js',
    'typescript',
    'javascript',
    'argentina',
    'portfolio'
  ],
  
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: siteUrl,
    siteName: authorName,
    title: `${authorName} | Desarrollador Fullstack Junior`,
    description: authorDescription,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${authorName} - Portfolio`,
        type: 'image/jpeg',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: `${authorName} | Desarrollador Fullstack Junior`,
    description: authorDescription,
    creator: '@agustinsau',
    images: {
      url: `${siteUrl}/og-image.jpg`,
      alt: `${authorName} - Portfolio`,
    },
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
        <meta name="theme-color" content="#06C6DB" />
      </head>
      <body>
        <SkipLink />
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
