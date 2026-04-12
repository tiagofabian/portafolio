import "@/assets/styles/layout/footer.css";
import { ContactInfo } from "../ui/ContactInfo"
import { ContactForm } from "../ui/ContactForm";
import { ReactNode } from "react";
import { Separator } from "@/components/shared/Separator";

interface FooterProps {
  className?: string
  children?: ReactNode
};

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={className}>
      
      <div className="
        foot-element-container
        flex flex-row items-stretch
        gap-10xl
        sm:flex-row sm:items-center sm:justify-start sm:gap-2xl
        lg:flex-row lg:items-center lg:justify-start lg:gap-3xl
      ">
        <ContactInfo />
        <ContactForm />
      </div>

      <div className="foot-date-container flex flex-col items-center gap-sm">
        <Separator 
          orientation="horizontal" 
          className="block bg-[#848484] scale-x-[0.98] origin-center z-0" 
        />

        <span className="
          foot-date-text
          text-3xl
          sm:text-4xs
          lg:text-5xs
        ">
          ©{new Date().getFullYear()} - nextjs v15
        </span>
      </div>

    </footer>
  )
}

export { Footer }