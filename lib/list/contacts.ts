import phoneIcon from "@/assets/icons/phone-green.png";
import locationIcon from "@/assets/icons/location.png";
import githubIcon from "@/assets/icons/github.png";
import linkedinIcon from "@/assets/icons/linkedin.png";
import emailIcon from "@/assets/icons/mail.png";
import { Contact } from "../types";

const sizes = "(max-width: 640px) 5vw, 1vw"

export const contacts: Contact[] = [
  {
    title: "(+56) 966200519",
    icon: phoneIcon,
    alt: "phone",
    url: "",
    sizes
  },
  {
    title: "Puente Alto, Chile",
    icon: locationIcon,
    alt: "address",
    url: "",
    sizes
  },
  {
    title: "",
    icon: githubIcon,
    alt: "github",
    url: "https://www.github.com/tiagofabian",
    sizes
  },
  {
    title: "",
    icon: linkedinIcon,
    alt: "linkedin",
    url: "https://www.linkedin.com/in/tiago-fabian",
    sizes
  },
  {
    title: "tiagofabian195@outlook.com",
    icon: emailIcon,
    alt: "email",
    url: "",
    sizes
  }
]