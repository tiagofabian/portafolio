import "@/assets/styles/ui/contact-info.css"
import { contacts } from "@/lib/list/contacts";
import Image from 'next/image';

const ContactInfo = () => (
  <div className='foot-contactinfo-container'>
    <ul className='foot-contactinfo-list gap-[0.2vw]'>
      {contacts.length > 0 && contacts.map((contact, idx) => (
        <li className='foot-contactinfo-item text-3xs tb:text-md mb:text-10xl' key={idx}>
          <Image 
              src={contact.icon} 
              alt={contact.alt} 
              sizes={contact.sizes} 
              className="object-cover aspect-square w-[0.8vw] tb:w-[1.3vw] mb:w-[2.2vw]"
            />
          {contact.title !== ""
            ? <span>{contact.title}</span> 
            : <a href={contact.url}>{contact.url}</a>
          }
        </li>
      ))}
    </ul>
  </div>
)

export { ContactInfo }
