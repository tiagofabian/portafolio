import styles from "@/assets/styles/layout/footer.module.css";
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
    <footer className={`${styles['footer-container']} ${className ?? ''}`}>
      
      <div className={`
        ${styles['foot-element-container']}
        inline-flex flex-row items-start flex-wrap
        gap-3xl justify-center
        sm:gap-2xl sm:justify-start sm:flex-nowrap
        lg:gap-3xl
      `}>
        <ContactInfo />
        <ContactForm />
      </div>

      <div className={`${styles['foot-date-container']} flex flex-col items-center gap-sm`}>
        <Separator 
          orientation="horizontal" 
          className="block bg-[#848484] scale-x-[0.98] origin-center z-0" 
        />

        <span className={`
          ${styles['foot-date-text']}
          text-5xl
          sm:text-4xs
          lg:text-5xs
        `}>
          ©{new Date().getFullYear()} - nextjs v16
        </span>
      </div>

    </footer>
  )
}

export { Footer }