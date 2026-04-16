import { ReactNode } from "react";
import { NavLinks } from "@/components/ui/NavLinks";
import styles from "@/assets/styles/layout/navbar.module.css";

interface NavbarProps {
  className?: string;
  children?: ReactNode;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <header className={`${styles['header-container']} ${className ?? ''}`}>

      {/* Hero Banner */}
      <div className="absolute inset-0">
        <img
          src="/bg/svg/blue-desk.svg"
          srcSet="/bg/svg/blue-mob.svg 640w, /bg/svg/blue-desk.svg 1920w"
          sizes="100vw"
          fetchPriority="high"
          decoding="sync"
          className="object-cover w-full h-full"
          alt=""
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className={`${styles['header-presentation']} relative z-10 flex flex-col sm:flex-row lg:flex-row justify-start`}>
        <div className={`
          ${styles['header-presentation-title']}
          gap-3xl
          sm:gap-md
          lg:gap-4xs
        `}>
          <div className="
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

            <p className="
              font-bold m-0
              text-19xl
              sm:text-4xl
              lg:text-sm
            ">
              DESAROLLADOR DE SOFTWARE
            </p>
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
      <div className={`
        ${styles['header-btn-section']}
        relative z-10
        flex
        justify-center
        sm:justify-start
        lg:justify-start
      `}>
        <NavLinks />
      </div>

    </header>
  );
};

export { Navbar };