import styles from "@/assets/styles/ui/contact-info.module.css"
import { contacts } from "@/lib/list/contacts";
import Image from 'next/image';

const ContactInfo = () => (
  <div 
    className={`
      ${styles['foot-contactinfo-container']} 
      w-full
      sm:w-auto
      sm:mt-[1vw] self-start order-2 sm:order-1
    `}
  >
    <ul 
      className={`
        ${styles['foot-contactinfo-list']} 
        items-center gap-[1.5vw] w-full p-0 flex-wrap
        justify-around
        sm:gap-[0.2vw] sm:items-start sm:w-max 
        sm:flex-col sm:flex-nowrap
      `}
    >
      {contacts.length > 0 && contacts.map((contact, idx) => (
        <li
          key={idx}
          className={`
            ${styles['foot-contactinfo-item']}
            text-11xl gap-xs w-max
            sm:text-3xs sm:gap-5xs
            lg:text-3xs
          `}
        >
          <Image
            src={contact.icon}
            alt={contact.alt}
            width={200}
            height={200}
            sizes={contact.sizes}
            className="
              object-cover aspect-square
              w-[2.5vw]
              sm:w-[0.8vw]
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