import "@/app/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToasterProvider } from "@/lib/providers/ToasterProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { BackToTop } from '@/components/shared/BackToTop';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter', // expuesto como variable CSS
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portafolio-w8dj.vercel.app/'), 
  title: "Portafolio",
  description: "Portafolio de desarrollo web con React y Next.js",
  openGraph: {
    title: "Tiago | Portafolio",
    description: "Portafolio profesional de desarrollo web",
    images: ["/file.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Preconectar a Google Fonts para reducir latencia de red */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="image"
          href="/bg/svg/blue-mob3.svg"
          media="(max-width: 639px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/bg/svg/blue-desk.svg"
          media="(min-width: 640px)"
          fetchPriority="high"
        />
      </head>
      {/* variable CSS de Inter disponible en toda la app */}
      <body className={`${inter.variable} font-sans`}>
        {children}
        <ToasterProvider />
        <BackToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}