// import Image from 'next/image'
import "@/assets/styles/layout/footer.css";
import { contacts } from "@/lib/list/contacts";
import Image from 'next/image';
import { ReactNode } from "react";
import { Separator } from "@/components/ui/Separator";

interface FooterProps {
  className?: string
  children?: ReactNode
};

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={className} >
      <div className='foot-element-container'>
        <div className='foot-contactinfo-container'>
          <ul className='foot-contactinfo-list'>
            {contacts.length > 0 && contacts.map((contact, idx) => (
              <li className='foot-contactinfo-item text-3xs tb:text-md mb:text-8xl' key={idx}>
                <Image 
                    src={contact.icon} 
                    alt={contact.alt} 
                    sizes={contact.sizes} 
                    className="object-cover aspect-square w-[0.8vw] tb:w-[1.3vw] mb:w-[2vw]"
                  />
                {contact.title !== ""
                  ? <span>{contact.title}</span> 
                  : <a href={contact.url}>{contact.url}</a>
                }
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='foot-date-container'>
        <Separator orientation="horizontal" className="block bg-[#97b6df] scale-x-[0.98] origin-center z-0" />
        <span className='foot-date-text text-5xs tb:text-xs mb:text-4xl'>©{new Date().getFullYear()} - nextjs v15</span>
      </div>
    </footer>
  )
}

export { Footer }
