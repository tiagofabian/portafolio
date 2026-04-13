import "@/app/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToasterProvider } from "@/lib/providers/ToasterProvider";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { BackToTop } from '@/components/shared/BackToTop';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap'
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
      </head>
      <body className={inter.className}>
        {children}
        <ToasterProvider />
        <BackToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}