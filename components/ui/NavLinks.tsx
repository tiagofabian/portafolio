"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarTabs } from "@/lib/list/navbarTabs";
import styles from "@/assets/styles/layout/navbar.module.css";

const NavLinks = () => {
  const pathname = usePathname()

  return (
    <ul className={`
      ${styles['header-list']}
      flex flex-row justify-evenly
      gap-12xl
      sm:flex-col sm:justify-center sm:gap-sm
      lg:flex-col lg:justify-center lg:gap-sm
    `}>
      {navbarTabs.length !== 0 && navbarTabs.map((navbarTab, idx) => {
        const isActive = pathname === navbarTab.href

        return (
          <li
            className={`
              ${styles['header-item']}
              rounded-md
              min-w-[17vw] aspect-[2/1]
              transition-[border,transform] duration-200 ease-in-out
              border-[#51515199]
              sm:min-w-[7vw] sm:aspect-[2/1] sm:rounded-lg
              lg:min-w-[6.5vw]
              ${isActive 
                ? `${styles['header-item-active']} bg-gradient-to-br from-[#4c4c4c] to-[#3c3c3c]`
                : "bg-gradient-to-br from-[#484848] to-[#383838]"
              }
            `}
            key={idx}
          >
            <Link
              className={`
                ${styles['header-link']}
                text-16xl sm:text-md lg:text-sm
                focus:outline-none
                transition-[color,transform] duration-200 ease-in-out
                ${isActive 
                  ? "text-[#4ec0de]" 
                  : "text-[#4ab1d3]"
                }
              `}
              href={navbarTab.href}
            >
              {navbarTab.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export { NavLinks }