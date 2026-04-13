"use client"

import React, { useState } from 'react';
import styles from "@/assets/styles/dashboard/work-experience.module.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shared/Accordion"
import { backgrounds } from '@/lib/list/backgrounds';

const WorkExperience = () => {
  const [openAcademics, setOpenAcademics] = useState<string[]>(
    backgrounds.academics
      .map((a, i) => (a.selected ? `academic-${i}` : null))
      .filter(Boolean) as string[]
  );

  const [openProfessionals, setOpenProfessionals] = useState<string[]>(
    backgrounds.professionals
      .map((p, i) => (p.selected ? `professional-${i}` : null))
      .filter(Boolean) as string[]
  );

  return (
    <div className={`
      ${styles['we-container']} 
      g-container glass 

      gap-16xl px-12xl py-12xl
      sm:gap-4xl sm:px-8xl sm:py-4xl
      lg:gap-4xl lg:px-12xl lg:py-6xl
    `}>
      
      {/* ================= ACADEMIC ================= */}
      <div className={`${styles['we-subcontainer']} gap-13xl sm:gap-2xl`}>
        
        <h2 className={`${styles['we-title']} g-title font-medium text-15xl sm:text-xl lg:text-xs`}>
          Historial Académico
        </h2>

        <Accordion 
          type="multiple" 
          value={openAcademics}
          onValueChange={setOpenAcademics}
          className='
            flex flex-col gap-7xl
            sm:flex-row sm:flex-wrap sm:justify-start sm:items-start sm:gap-x-[4%] sm:gap-y-8
            lg:flex-row lg:flex-wrap lg:justify-start lg:items-start lg:gap-x-[4%] lg:gap-y-8
          '
        >
          {backgrounds.academics.map((academic, idx) => (
            <AccordionItem 
              key={academic.name}
              value={`academic-${idx}`}
              className='
                flex flex-col gap-3xl w-full
                sm:flex-[0_0_48%] sm:gap-xs
                lg:flex-[0_0_48%] lg:gap-xs
              '
            >
              <AccordionTrigger
                className="
                  flex items-center w-full 
                  text-11xl px-xl py-sm font-bold text-[aliceblue]
                  bg-[linear-gradient(150deg,_#253164_0%,_#0070ef80_85%,_#c3cdd8_92%,_#0070ef80_100%)]
                  [&>svg]:w-[4vw] [&>svg]:h-[4vw] [&>svg]:stroke-[3]

                  sm:text-xs sm:px-4xs sm:py-7xs
                  sm:[&>svg]:w-[2.2vw] sm:[&>svg]:h-[2.2vw] 
                   
                  lg:text-2xs lg:px-4xs lg:py-7xs
                  lg:[&>svg]:w-[1.8vw] lg:[&>svg]:h-[1.8vw]
                "
              >
                {academic.title}
              </AccordionTrigger>

              <AccordionContent className='flex flex-col gap-5xs ml-3xl sm:ml-3xs lg:ml-3xs'>
                <span className='text-11xl sm:text-2xs lg:text-2xs'>
                  <strong>{academic.content.subtitle} </strong>
                  <i>{academic.content.yearRange}</i>
                </span>

                <ul className='text-[2.25vw] ml-md sm:text-[0.85vw] sm:ml-2xs lg:text-[0.85vw] lg:ml-2xs'>
                  {academic.content.subjects.map((subject, idx) => (
                    <li key={idx}>{subject}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* ================= PROFESSIONAL ================= */}
      <div className={`${styles['we-subcontainer']} gap-13xl sm:gap-2xl`}>
        
        <h2 className={`${styles['we-title']} g-title font-medium text-15xl sm:text-xl lg:text-xs`}>
          Historial Laboral
        </h2>

        <Accordion
          type="multiple" 
          value={openProfessionals}
          onValueChange={setOpenProfessionals}
          className='
            flex flex-col gap-7xl
            sm:flex-row sm:flex-wrap sm:justify-between sm:items-start sm:gap-4xl
            lg:flex-row lg:flex-wrap lg:justify-between lg:items-start lg:gap-4xl
          '
        >
          {backgrounds.professionals.map((professional, idx) => (
            <AccordionItem 
              key={professional.name}
              value={`professional-${idx}`}
              className='
                flex flex-col gap-3xl w-full
                sm:flex-[0_0_48%] sm:gap-xs
                lg:flex-[0_0_48%] lg:gap-xs
              '
            >
              <AccordionTrigger
                className="
                  flex items-center w-full 
                  text-11xl px-xl py-sm font-bold text-[aliceblue]
                  bg-[linear-gradient(150deg,_#0f2f2a_0%,_#00b3a480_85%,_#c2e6e1_92%,_#00b3a480_100%)]
                  [&>svg]:w-[4vw] [&>svg]:h-[4vw] [&>svg]:stroke-[3]

                  sm:text-xs sm:px-4xs sm:py-7xs
                  sm:[&>svg]:w-[2.2vw] sm:[&>svg]:h-[2.2vw] 
                   
                  lg:text-2xs lg:px-4xs lg:py-7xs
                  lg:[&>svg]:w-[1.8vw] lg:[&>svg]:h-[1.8vw]
                "
              >
                {professional.title}
              </AccordionTrigger>

              <AccordionContent className='flex flex-col gap-5xs ml-3xl sm:ml-3xs lg:ml-3xs'>
                <span className='text-11xl sm:text-2xs lg:text-2xs'>
                  <strong>{professional.content.subtitle} </strong>
                  <i>{professional.content.yearRange}</i>
                </span>

                <ul className='text-[2.25vw] ml-md sm:text-[0.85vw] sm:ml-2xs lg:text-[0.85vw] lg:ml-2xs'>
                  {professional.content.subjects.map((subject, idx) => (
                    <li key={idx}>{subject}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
    </div>
  );
};

export { WorkExperience };