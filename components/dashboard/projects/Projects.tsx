"use client"

import React, { useState } from 'react';
import '@/assets/styles/dashboard/projects/projects.css'
import { projects } from "@/lib/list/projects"
import Image from "next/image";

const Projects = () => {
    const [ projectsState, setProjectsState ] = useState(projects)


    return (
      <div className='projects-container d-container gap-4xl px-12xl py-6xl tb:px-8xl tb:py-4xl mb:gap-16xl mb:px-12xl mb:py-12xl'>
        <h2 className='projects-title text-xs font-medium mb:text-12xl'>Proyectos</h2>
        <div className='projects-subcontainer'>
        {projectsState && projectsState.map((project, idx) => (
          <div className='projects-card' key={idx}>
            <div className="projects-image-container">
              <a href={project.url} target="_blank" rel="noreferrer">
                <Image src={project.preview} alt="alt" />
              </a>
            </div>
            <div className='projects-description'>
              <p>
                <span>{project.title}</span> - {project.description}
              </p>
              <a href={project.url} target="_blank" rel="noreferrer">{project.url}</a>
            </div>
          </div>
        ))}
        </div>
      </div>
    )
}

export { Projects}
