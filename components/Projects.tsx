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
    Typescript: "bg-[#2679D1] text-white border border-[#cccccc]",
    Tailwind: "bg-[#383E6B] text-white border border-[#cccccc]",
    Javascript: "bg-[#E5C322] text-white border border-[#cccccc]",
    Next: "bg-[#000000] text-white border border-[#cccccc]",
    Nest: "bg-[#101010] text-white border border-[#cccccc]",
    PHP: "bg-indigo-400 text-white border border-[#cccccc]",
    CSS: "bg-[#416AD1] text-white border border-[#cccccc]",
    React: "bg-[#2a2a43] text-white border border-[#cccccc]",
    SASS: "bg-[#DEA0BA] text-white border border-[#cccccc]",
    Vite: "bg-[#8878ff] text-white border border-[#cccccc]",
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
        grid
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-4
        gap-3xl
        sm:gap-md
        lg:gap-sm
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
                  alt="alt"
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
                      variant="secondary"
                      className={`
                        ${badgeColors[badge.name] ?? "bg-gray-300 text-black"}
                        flex items-center justify-center
                        text-5xs px-6xs py-[0.05vw]
                        sm:text-4xs sm:px-4xs sm:py-[0.1vw]
                        lg:text-5xs lg:px-6xs lg:py-[0.05vw]
                      `}
                    >
                      <IconSVG
                        icon={badge.icon}
                        className="
                          w-[1.3vw] h-[1.3vw]
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
                flex items-center
                gap-[0.2vw]
                leading-none
                cursor-pointer
                text-4xl
                sm:text-xs
                lg:text-5xs
              ">
                <IconSVG
                  icon={github}
                  className="
                    shrink-0
                    w-[0.95vw] h-[0.95vw]
                    sm:w-[0.65vw] sm:h-[0.65vw]
                    lg:w-[0.55vw] lg:h-[0.55vw]
                  "
                  size={undefined}
                  fill="#006a86"
                />
                <span className="truncate">
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