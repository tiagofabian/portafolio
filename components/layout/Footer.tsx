import "@/assets/styles/layout/footer.css";
import { ContactInfo } from "../ui/ContactInfo"
import { ContactForm } from "../ui/ContactForm";
import { ReactNode } from "react";
import { Separator } from "@/components/reuse/Separator";

interface FooterProps {
  className?: string
  children?: ReactNode
};

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={className} >
      <div className='foot-element-container gap-3xl mb:gap-3xl mb:justify-between'>
        <ContactInfo />
        <ContactForm />
      </div>
      <div className='foot-date-container'>
        <Separator orientation="horizontal" className="block bg-[#97b6df] scale-x-[0.98] origin-center z-0" />
        <span className='foot-date-text text-5xs tb:text-xs mb:text-3xl'>©{new Date().getFullYear()} - nextjs v15</span>
      </div>
    </footer>
  )
}

export { Footer }
