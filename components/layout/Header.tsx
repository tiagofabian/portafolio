import Link from "next/link";
import "@/assets/styles/layout/header.css";
import { headerTabs } from "@/lib/list/headerTabs";
import { ReactNode } from "react";

interface HeaderProps {
  className?: string;
  children?: ReactNode;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={className}>
      <div className="header-presentation flex-row justify-start">
        {/* <img src={perfilIMG} alt="perfil-img" className='nav-photo-img'/> */}
        <div className="header-presentation-title gap-4xs tb:gap-5xs mb:gap-sm">
          <div className="header-title flex-col mb:text-center">
            <h1 className="text-20xl font-bold leading-[1.10] tb:text-16xl mb:text-50xl">
              TIAGO <br className="tb:hidden mb:hidden" /> <span className="text-sky">ALCÁZAR</span>
            </h1>
            <h4 className="text-sm font-bold tb:text-2xl mb:text-20xl">DESAROLLADOR DE SOFTWARE</h4>
          </div>
          
          <p className="text-3xs tb:text-md mb:text-center mb:text-9xl">
            Soy un desarrollador fullstack especializado en React con Node.
            Poseo experiencia diseñando aplicaciones web con multiples librerias
            y herramientas de optimización, prueba, documentación y despliegue.
            A lo largo de mi carrera, he estudiado diferentes
            tecnologías y siempre estoy listo para afrontar nuevos desafíos.
          </p>
        </div>
      </div>
      <div className="header-btn-section flex-row mb:justify-center">
        <ul className="header-list flex-col justify-center gap-xl tb:gap-sm mb:flex-row mb:justify-evenly mb:gap-12xl ">
          {headerTabs.length !== 0 && headerTabs.map((headerTab, idx) => (
            <li className="header-item rounded-lg aspect-[2/1] min-w-[6.5vw] tb:min-w-[10vw] tb:rounded-md mb:rounded-md mb:min-w-[17vw] mb:aspect-[3/1]" key={idx}>
              <Link className="header-link text-sm tb:text-5xl mb:text-16xl" href={headerTab.href}>
                {headerTab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export { Header };
