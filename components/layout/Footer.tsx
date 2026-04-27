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
    <footer className={`
      ${styles['footer-container']} ${className ?? ''}

      relative flex flex-col
      gap-3xl
      px-8xl pt-18xl pb-4xs
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
    `}>
      
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

      <div 
        className={`
          ${styles['foot-date-container']} 
          flex flex-col items-center gap-sm
        `}
      >
        <Separator 
          orientation="horizontal" 
          className="block bg-[#848484] scale-x-[0.98] origin-center z-0" 
        />

        <span className={`
          ${styles['foot-date-text']}
          text-6xl
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