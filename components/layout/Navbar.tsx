import Link from "next/link";
import "@/assets/styles/layout/header.css";
import { navbarTabs } from "@/lib/list/navbarTabs";
import { ReactNode } from "react";

interface NavbarProps {
  className?: string;
  children?: ReactNode;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <header className={className}>
      <div className="header-presentation flex-row justify-start">
        {/* <img src={perfilIMG} alt="perfil-img" className='nav-photo-img'/> */}
        <div className="header-presentation-title gap-4xs tb:gap-5xs mb:gap-3xl">
          <div className="header-title flex-col mb:text-center">
            <h1 className="text-20xl font-bold leading-[1.10] tb:text-16xl mb:text-50xl">
              TIAGO <br className="tb:hidden mb:hidden" /> <span className="text-sky">ALCÁZAR</span>
            </h1>
            <h4 className="text-sm font-bold tb:text-2xl mb:text-20xl">DESAROLLADOR DE SOFTWARE</h4>
          </div>
          
          <p className="text-3xs tb:text-md mb:text-center mb:text-11xl">
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
      <div className="header-btn-section flex-row mb:justify-center">
        <ul className="header-list flex-col justify-center gap-xl tb:gap-sm mb:flex-row mb:justify-evenly mb:gap-12xl ">
          {navbarTabs.length !== 0 && navbarTabs.map((navbarTab, idx) => (
            <li className="header-item rounded-lg aspect-[2/1] min-w-[6.5vw] tb:min-w-[10vw] tb:rounded-md mb:rounded-md mb:min-w-[17vw] mb:aspect-[5/2]" key={idx}>
              <Link className="header-link text-sm tb:text-5xl mb:text-16xl" href={navbarTab.href}>
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
