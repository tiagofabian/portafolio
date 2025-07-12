import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "dashboard",
  description: "home page",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dashboard px-6xs py-6xs mb:px-0 mb:py-0">
      <Header className="flex-row gap-20xl pt-3xl pb-2xs px-5xl aspect-[3.34/1] bg-cover bg-blue-desk tb:px-10xl tb:pt-8xl tb:pb-sm mb:flex-col mb:justify-normal mb:gap-10xl mb:px-8xl mb:pt-64xl mb:pb-5xl rounded-md tb:rounded-s mb:rounded-none shadow-box-1 mb:shadow-box-2 mb:aspect-[3/2] mb:bg-blue-mob"/>
      <section className="flex-col py-sm px-5xl tb:px-10xl tb:py-md mb:px-2xl mb:py-2xl">
        {children}
      </section>
      <Footer className="flex-col pt-2xs pb-6xs px-md gap-4xs rounded-md shadow-box-1 tb:px-4xl tb:pt-sm tb:pb-5xs mb:px-5xl mb:pt-5xl mb:pb-4xs tb:rounded-s mb:rounded-none mb:shadow-box-2 mb:gap-md" />
    </div>
  )
}