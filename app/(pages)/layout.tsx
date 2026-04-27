import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "portafolio",
  description: "next v15.3",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="
      main relative w-full h-full overflow-hidden min-h-screen
      px-0 py-0
      lg:px-6xs
    ">
      <Navbar/>
      <section className="
        relative
        px-0 py-26xl
        sm:px-xl sm:py-sm
        lg:px-5xl lg:py-sm
      ">
        {children}
      </section>
      <Footer/>
    </div>
  );
};

export default RootLayout;