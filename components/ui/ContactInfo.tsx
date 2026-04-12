import "@/assets/styles/ui/contact-info.css"
import { contacts } from "@/lib/list/contacts";
import Image from 'next/image';

const ContactInfo = () => (
  <div className='foot-contactinfo-container'>
    <ul className='foot-contactinfo-list gap-[0.2vw] w-max'>
      {contacts.length > 0 && contacts.map((contact, idx) => (
        <li
          key={idx}
          className='
            foot-contactinfo-item
            text-10xl
            sm:text-3xs
            lg:text-3xs
          '
        >
          <Image
            src={contact.icon}
            alt={contact.alt}
            sizes={contact.sizes}
            className="
              object-cover aspect-square
              w-[2.2vw]
              sm:w-[0.8vw]
              lg:w-[0.8vw]
            "
          />
          {contact.title !== ""
            ? <span>{contact.title}</span>
            : <a href={contact.url} target="_blank" rel="noreferrer">{contact.url.replace(/^https?:\/\/(www\.)?/, '')}</a>
          }
        </li>
      ))}
    </ul>
  </div>
)

export { ContactInfo }