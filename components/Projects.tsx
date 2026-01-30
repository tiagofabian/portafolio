"use client"

import React, { useState } from 'react';
import '@/assets/styles/dashboard/repo/projects.css'
import { projects } from "@/lib/list/projects"
import { Badge } from "@/components/reuse/Badge"
import { IconSVG } from '@/components/reuse/IconSVG';
import { useDevice } from '@/lib/hooks/useDevice';
import Image from "next/image";
import github from "@/assets/icons/svg/github.svg"

const Projects = () => {
  const [ projectsState ] = useState(projects)
  const { isMobile, isTablet } = useDevice();

  const badgeColors: Record<string, string> = {
    Typescript: "bg-[#2679D1] text-white border border-[#cccccc]",
    Tailwind: "bg-[#383E6B] text-white border border-[#cccccc]",
    Javascript: "bg-[#E5C322] text-white border border-[#cccccc]",
    Next: "bg-[#000000] text-white border border-[#cccccc]",        // sin borde
    Nest: "bg-[#101010] text-white border border-[#cccccc]",
    PHP: "bg-indigo-400 text-white border border-[#cccccc]",
    CSS: "bg-[#416AD1] text-white border border-[#cccccc]",
    React: "bg-[#2a2a43] text-white border border-[#cccccc]",
    SASS: "bg-[#DEA0BA] text-white border border-[#cccccc]",
    Vite: "bg-[#8878ff] text-white border border-[#cccccc]",
  };

  return (
    <div className='projects-container d-container gap-4xl px-12xl py-6xl tb:px-8xl tb:py-4xl mb:gap-16xl mb:px-12xl mb:py-12xl'>
      <h2 className='projects-title text-xs font-medium mb:text-15xl'>Proyectos</h2>
      <div className='projects-subcontainer'>
      {projectsState && projectsState.map((project, idx) => (
        <div className='projects-card' key={idx}>
          <div className="projects-image-container">
            <a href={project.urlProd} target="_blank" rel="noreferrer">
              <Image src={project.preview} alt="alt" />
            </a>
          </div>
          <div className='projects-info-container'>
            <div className="projects-description flex w-full flex-wrap gap-4xs">
              <p className="text-3xs tb:text-md mb:text-9xl">
                <span>{project.title}</span> - {project.description}
              </p>
              <div className='flex gap-5xs flex-wrap'>
                {project.badges.map((badge, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className={`${badgeColors[badge.name] ?? "bg-gray-300 text-black"} text-5xs flex justify-center items-center px-6xs py-[0.05vw] tb:px-4xs tb:py-[0.1vw] mb:text-md mb:px-2xs mb:py-6xs`}    
                  >
                    <IconSVG icon={badge.icon} size={isMobile ? "1.3vw" : isTablet ? "0.9vw" : "0.7vw"}/>
                    {badge.name}
                  </Badge>
                ))}
              </div>
            </div>
            <a className="flex items-center gap-[0.2vw] leading-none cursor-pointer text-5xs tb:text-xs mb:text-4xl">
              <IconSVG
                icon={github}
                size={isMobile ? "0.95vw" : isTablet ? "0.65vw" : "0.55vw"}
                fill="#006a86"
                className="shrink-0"
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

export { Projects}
