import phoneIcon from "@/assets/icons/phone_16x16.png";
import addressIcon from "@/assets/icons/address_16x16.png";
import githubIcon from "@/assets/icons/github_16x16.png";
import linkedinIcon from "@/assets/icons/linkedin_16x16.png";
import emailIcon from "@/assets/icons/email_16x16.png";
import { Contact } from "../types";

const sizes = "(max-width: 719.9px) 14px, (max-width: 1024.9px) 16px, 16px"

export const contacts: Contact[] = [
  {
    title: "(+56) 966200519",
    icon: phoneIcon,
    alt: "phone",
    url: "",
    sizes
  },
  {
    title: "Santiago, Chile",
    icon: addressIcon,
    alt: "address",
    url: "",
    sizes
  },
  {
    title: "",
    icon: githubIcon,
    alt: "github",
    url: "https://github.com/tiagofabian",
    sizes
  },
  {
    title: "",
    icon: linkedinIcon,
    alt: "linkedin",
    url: "https://www.linkedin.com/in/tiago-fabian/",
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