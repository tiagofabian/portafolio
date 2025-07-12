import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToasterProvider } from "@/lib/provider/ToasterProvider";

const inter = Inter({ 
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "portafolio",
  description: "next v15.3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}