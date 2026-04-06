import Link from "next/link";
import "@/assets/styles/layout/navbar.css";
import { navbarTabs } from "@/lib/list/navbarTabs";
import { ReactNode } from "react";

interface NavbarProps {
  className?: string;
  children?: ReactNode;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <header className={className}>

      {/* ===== PRESENTATION ===== */}
      <div className="header-presentation flex flex-col sm:flex-row lg:flex-row justify-start">
        
        <div className="
          header-presentation-title
          gap-3xl
          sm:gap-md
          lg:gap-4xs
        ">
          
          <div className="
            header-title 
            flex flex-col
            text-center
            sm:text-left
            lg:text-left
          ">
            <h1 className="
              font-bold leading-[1.10]
              flex flex-row items-center justify-center gap-[0.25em]
              text-50xl
              sm:flex-row sm:items-baseline sm:justify-start sm:text-18xl
              lg:flex-col lg:items-baseline lg:justify-start lg:gap-0 lg:text-20xl
            ">
              <span>TIAGO</span>
              <span className="text-sky">ALCÁZAR</span>
            </h1>

            <h4 className="
              font-bold
              text-19xl
              sm:text-4xl
              lg:text-sm
            ">
              DESAROLLADOR DE SOFTWARE
            </h4>
          </div>
          
          <p className="
            text-center
            sm:text-left lg:text-left
            text-11xl
            sm:text-xs
            lg:text-3xs
          ">
            Desarrollador Fullstack especializado en Javascript, 
            con experiencia en el desarrollo de aplicaciones web, 
            estructuración de APIs y administración de datos. A lo 
            largo de mi carrera, he trabajado con diversas librerias 
            y frameworks, entre ellos React, Next.js, Nest.js, Express, 
            los cuales se han convertido en mis mayores fortalezas para 
            el desarrollo de aplicaciones de alto rendimiento. Mi pasión 
            por la tecnología me motiva a estar al día con las ultimas 
            tendencias y emprender nuevos desafíos.
          </p>
        </div>
      </div>

      {/* ===== BUTTONS ===== */}
      <div className="
        header-btn-section 
        flex
        justify-center
        sm:justify-start
        lg:justify-start
      ">
        <ul className="
          header-list 
          flex flex-row justify-evenly
          gap-12xl
          sm:flex-col sm:justify-center sm:gap-sm
          lg:flex-col lg:justify-center lg:gap-sm
        ">
          {navbarTabs.length !== 0 && navbarTabs.map((navbarTab, idx) => (
            <li 
              className="
                header-item 
                rounded-md
                min-w-[17vw] aspect-[5/2]
                sm:min-w-[7vw] sm:aspect-[2/1] sm:rounded-lg
                lg:min-w-[6.5vw] lg:aspect-[2/1] lg:rounded-lg
              " 
              key={idx}
            >
              <Link 
                className="
                  header-link 
                  text-16xl
                  sm:text-md
                  lg:text-sm
                " 
                href={navbarTab.href}
              >
                {navbarTab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </header>
  );
};

export { Navbar };