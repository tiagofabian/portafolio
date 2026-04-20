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
      
      <Navbar
        className="
          relative
          flex flex-col
          justify-normal
          gap-8xl
          px-8xl pt-26xl pb-5xl
          border-0
          border-[#808080]
          rounded-none
          shadow-box-2
          aspect-[4/3]

          sm:flex-row
          sm:px-10xl sm:pt-8xl sm:pb-sm sm:gap-12xl
          sm:border sm:border-t-0
          sm:rounded-none sm:shadow-box-1
          sm:aspect-[3.34/1]

          lg:px-5xl lg:pt-3xl lg:pb-2xs lg:gap-20xl
        "
      />

      <section className="
        relative
        px-0 py-26xl
        sm:px-xl sm:py-sm
        lg:px-5xl lg:py-sm
      ">
        {children}
      </section>

      <Footer
        className="
          relative flex flex-col
          gap-3xl
          px-8xl pt-8xl pb-4xs
          border-none
          rounded-none
          shadow-box-2

          sm:flex-row sm:flex-wrap
          sm:px-4xl sm:pt-sm sm:pb-5xs sm:gap-sm
          sm:rounded-none sm:shadow-box-1 sm:border-none

          lg:flex-col
          lg:px-md lg:pt-2xs lg:pb-6xs lg:gap-4xs
          lg:border lg:border-b-0 lg:border-[#1b1b1b]
          lg:rounded-md lg:rounded-b-none
        "
      />
    </div>
  );
};

export default RootLayout;