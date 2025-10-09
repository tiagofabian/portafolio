"use client"

import React from 'react';
import "@/assets/styles/dashboard/work-experience.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/reusable/Accordion"
import { useDevice } from '@/lib/hooks/useDevice';
import { backgrounds } from '@/lib/list/backgrounds';

const WorkExperience = () => {
  const { isMobile, isTablet } = useDevice();

  return (
    <div className='we-container d-container gap-4xl px-12xl py-6xl tb:px-8xl tb:py-4xl mb:gap-16xl mb:px-12xl mb:py-12xl'>
      <div className='we-subcontainer gap-2xl mb:gap-13xl'>
        <h2 className='we-title text-xs font-medium mb:text-15xl'>Historial Académico</h2>
        <Accordion 
          type="multiple" 
          className='flex justify-between items-start w-full gap-4xl mb:flex-col mb:gap-7xl'
        >
          {backgrounds.academics.map((academic, idx) => (
            <AccordionItem 
              key={idx} 
              value={`item-[${idx}]`}
              className='flex flex-col flex-[0_0_48%] gap-xs mb:flex-[1_1_100%] mb:w-full'
            >
              <AccordionTrigger
                className='flex items-center whitespace-nowrap w-full font-bold text-[aliceblue] text-2xs px-4xs py-7xs tb:text-xs mb:text-11xl mb:px-xs mb:py-4xs'
                style={{ background: "linear-gradient(150deg, #253164 0%, #0070ef80 85%, #c3cdd8 92%, #0070ef80 100%)"}}
                iconSize={isMobile ? "4vw" : isTablet ? "2.2vw" : "1.8vw"}
              >
                {academic.title}
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-5xs ml-3xs mb:ml-3xl'>
                <span className='text-2xs mb:text-11xl'>
                  <strong>{academic.content.subtitle} </strong>
                  <i>{academic.content.yearRange}</i>
                </span>
                <ul className='text-[0.85vw] ml-2xs mb:text-[2.25vw] mb:ml-md'>
                  {academic.content.subjects.map((subject, idx) => (
                    <li key={idx}>{subject}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className='we-subcontainer gap-2xl mb:gap-13xl'>
        <h2 className='we-title text-xs font-medium mb:text-15xl'>Historial Laboral</h2>
        <Accordion 
          type="multiple" 
          className='flex justify-between items-start w-full gap-4xl mb:flex-col mb:gap-7xl'
        >
          {backgrounds.professionals.map((professional, idx) => (
            <AccordionItem 
              key={idx} 
              value={`item-[${idx}]`}
              className='flex flex-col flex-[0_0_48%] gap-xs mb:flex-[1_1_100%] mb:w-full'
            >
              <AccordionTrigger 
                className='flex items-center whitespace-nowrap w-full font-bold text-[aliceblue] text-2xs px-4xs py-7xs tb:text-xs mb:text-11xl mb:px-xs mb:py-4xs'
                style={{ background: "linear-gradient(150deg, #253164 0%, #0070ef80 85%, #c3cdd8 92%, #0070ef80 100%)"}}
                iconSize={isMobile ? "4vw" : isTablet ? "2.2vw" : "1.8vw"}
              >
                {professional.title}
              </AccordionTrigger>
              <AccordionContent className='flex flex-col gap-5xs ml-3xs mb:ml-3xl'>
                <span className='text-2xs mb:text-11xl'>
                  <strong>{professional.content.subtitle} </strong>
                  <i>{professional.content.yearRange}</i>
                </span>
                <ul className='text-[0.85vw] ml-2xs mb:text-[2.25vw] mb:ml-md'>
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