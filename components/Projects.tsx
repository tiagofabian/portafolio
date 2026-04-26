"use client"

import React, { useState } from 'react';
import styles from '@/assets/styles/repo/projects.module.css'
import { projects } from "@/lib/list/projects"
import { Badge } from "@/components/shared/Badge"
import { IconSVG } from '@/components/shared/IconSVG';
import Image from "next/image";
import github from "@/assets/icons/svg/github.svg"

const Projects = () => {
  const [projectsState] = useState(projects)

  const badgeColors: Record<string, string> = {
    Typescript: "bg-[#3178C6] text-[#f5f5f5]",
    Tailwind: "bg-gradient-to-br from-[#06B6D4] to-[#0EA5E9] text-[#f5f5f5]",
    Javascript: "bg-[#E0BC00] text-[#f5f5f5]",
    Next: "bg-[#000000] text-[#f5f5f5]",
    Nest: "bg-[#E0234E] text-[#f5f5f5]",
    PHP: "bg-indigo-400 text-[#f5f5f5]",
    CSS: "bg-[#1572B6] text-[#f5f5f5]",
    React: "bg-[#404040] text-[#f5f5f5]",
    SASS: "bg-[#CC6699] text-[#f5f5f5]",
    Vite: "bg-gradient-to-br from-[#646CFF] to-[#BD34FE] text-[#f5f5f5]",
  };

  return (
    <div className={`
      ${styles['projects-container']}
      g-container glass
      gap-16xl px-12xl py-12xl
      sm:gap-8xl sm:px-8xl sm:py-4xl
      lg:gap-4xl lg:px-12xl lg:py-6xl
    `}>
      <h2 className={`
        ${styles['projects-title']}
        g-title font-medium
        text-15xl
        sm:text-xl
        lg:text-xs
      `}>
        Proyectos
      </h2>

      {/* Grid container */}
      <div className="
        grid grid-cols-2 gap-sm
        
        sm:grid-cols-3 sm:gap-md
        
        lg:grid-cols-4 lg:gap-sm
      ">
        {projectsState && projectsState.map((project, idx) => (
          <div
            className={styles['projects-card']}
            key={idx}
          >
            {/* Imagen */}
            <div className={styles['projects-image-container']}>
              <a
                href={project.urlProd}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={project.preview}
                  alt={`Vista previa de ${project.title}`}
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  className="rounded-md object-cover"
                  quality={85} // Balance entre calidad y peso (80-90 es óptimo)
                  priority={idx === 0} 
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </a>
            </div>

            {/* Información */}
            <div className={styles['projects-info-container']}>
              {/* Descripción */}
              <div className="
                projects-description
                flex w-full flex-wrap
                gap-4xs
              ">
                <p className="
                  text-9xl
                  sm:text-md
                  lg:text-3xs
                ">
                  <span>{project.title}</span> - {project.description}
                </p>

                {/* Badges */}
                <div className="
                  flex
                  gap-5xs
                  flex-wrap
                ">
                  {project.badges.map((badge, idx) => (
                    <Badge
                      key={idx}
                      className={`
                        ${badgeColors[badge.name] ?? "bg-gray-300 text-black"}
                        flex items-center justify-center border border-[#E6E6E6]
                        text-4xl px-5xs py-6xs rounded-[3px] leading-normal h-max
                        sm:text-4xs sm:px-5xs sm:py-7xs sm:rounded-[3px]
                        lg:text-5xs lg:px-6xs lg:py-7xs lg:rounded-[5px]
                      `}
                    >
                      <IconSVG
                        icon={badge.icon}
                        className="
                          w-[2vw] h-[2vw]
                          sm:w-[0.9vw] sm:h-[0.9vw]
                          lg:w-[0.7vw] lg:h-[0.7vw]
                        "
                        size={undefined}
                      />
                      {badge.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Link de GitHub */}
              <a className="
                flex items-center justify-center
                gap-[0.3vw]
                leading-[100%]
                cursor-pointer
                text-4xl
                sm:text-xs sm:gap-[0.2vw]
                lg:text-5xs
              ">
                <IconSVG
                  icon={github}
                  className="
                    shrink-0
                    w-[1.4vw] h-[1.4vw]
                    sm:w-[0.8vw] sm:h-[0.8vw]
                    lg:w-[0.55vw] lg:h-[0.55vw]
                  "
                  size={undefined}
                  fill="#006a86"
                />
                <span className="truncate ">
                  {project.urlGit}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Projects }