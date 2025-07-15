"use client"

import React, { useEffect, useState } from 'react';
import "@/assets/styles/dashboard/work-experience.css";
import { Accordion } from '../reusable/Accordion';
import { backgrounds } from '@/lib/list/backgrounds';

const WorkExperience = () => {
  const [backgroundsState, setBackgroundsState] = useState(backgrounds);

  const updateDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btnDataName = e.currentTarget.dataset.name;
  
    setBackgroundsState(backgrounds => ({
      academics: backgrounds.academics.map(academic =>
        academic.name === btnDataName ? { ...academic, selected: !academic.selected } : academic
      ),
      professionals: backgrounds.professionals.map(professional =>
        professional.name === btnDataName ? { ...professional, selected: !professional.selected } : professional
      )
    }));
  };

  useEffect(() => {
    const updateHeights = () => {
      const sections = [...backgroundsState.academics, ...backgroundsState.professionals];

      sections.forEach((section) => {
        const content = document.querySelector<HTMLDivElement>(
          `.accordion-content[data-name="${section.name}"]`
        );

        if (content) {
          if (section.selected) {
            content.style.height = content.scrollHeight + "px";
          } else {
            content.style.height = "0px";
          }
        }
      });
    };

    updateHeights();
  }, [backgroundsState])

  return (
    <div className='we-container d-container gap-4xl px-12xl py-6xl tb:px-8xl tb:py-4xl mb:gap-16xl mb:px-12xl mb:py-12xl'>
      <div className='we-subcontainer gap-2xl mb:gap-13xl'>
        <h2 className='we-title text-xs font-medium mb:text-15xl'>Historial Académico</h2>
        <div className='we-main gap-4xl mb:flex-col mb:gap-7xl'>
          {backgroundsState.academics.map((academic, idx) => (
            <Accordion
              key={idx}
              title={academic.title}
              name={academic.name}
              selected={academic.selected}
              onToggle={updateDropdown}
            >
              <div className='flex flex-col gap-5xs'>
                <span className='text-2xs mb:text-11xl'>
                  <strong>{academic.content.subtitle} </strong>
                  <i>{academic.content.yearRange}</i>
                </span>
                <ul className='text-[0.85vw] ml-2xs mb:text-[2.25vw]'>
                  {academic.content.subjects.map((subject, idx) => (
                    <li key={idx}>{subject}</li>
                  ))}
                </ul>
              </div>
            </Accordion>
          ))}
        </div>
      </div>
      <div className='we-subcontainer gap-2xl mb:gap-13xl'>
        <h2 className='we-title text-xs font-medium mb:text-15xl'>Historial Laboral</h2>
        <div className='we-main gap-4xl mb:flex-col mb:gap-7xl'>
          {backgroundsState.professionals.map((professional, idx) => (
            <Accordion
              key={idx}
              title={professional.title}
              name={professional.name}
              selected={professional.selected}
              onToggle={updateDropdown}
            >
              <div className='flex flex-col gap-5xs'>
                <span className='text-2xs mb:text-10xl'>
                  <strong>{professional.content.subtitle} </strong>
                  <i>{professional.content.yearRange}</i>
                </span>
                <ul className='text-[0.85vw] ml-2xs mb:text-[2.25vw]'>
                  {professional.content.subjects.map((subject, idx) => (
                    <li key={idx}>{subject}</li>
                  ))}
                </ul>
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export { WorkExperience };