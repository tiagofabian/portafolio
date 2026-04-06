"use client"

import React, {useState, useEffect} from 'react'
import styles from '@/assets/styles/dashboard/skills.module.css'
import Image from "next/image";
import { Progress } from "@/components/shared/Progress"
import { skills } from '@/lib/list/skills'

const Skills = () => {
  const [skillsState, setSkillsState] = useState(skills);

  const flipCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cardName = e.currentTarget.getAttribute('data-name');
    setSkillsState(skills => ({
      ...skills,
      langs: skills.langs.map((lang) => 
        lang.name === cardName
          ? { ...lang, accDegree: lang.accDegree + 180 }
          : lang
      ),
      techs: skills.techs.map((tech) => 
        tech.name === cardName
          ? { ...tech, accDegree: tech.accDegree + 180 }
          : tech
      )
    }));
  };

  const rotateCard = () => {
    const interval = setInterval(() => {
      setSkillsState((skills) => {
        const updatedLangs = skills.langs.map(lang => ({
          ...lang,
          progressBar: Math.min(lang.progressBar + 1, lang.max)
        }));

        const updatedTechs = skills.techs.map(tech => ({
          ...tech,
          progressBar: Math.min(tech.progressBar + 1, tech.max)
        }));

        const allSkillsComplete = updatedLangs.every(lang => lang.progressBar >= lang.max);
        const allTechsComplete = updatedTechs.every(tech => tech.progressBar >= tech.max);

        if (allSkillsComplete && allTechsComplete) {
          clearInterval(interval);
        }

        return { langs: updatedLangs, techs: updatedTechs };
      });
    }, 30);

    return () => clearInterval(interval);
  }

  useEffect(() => {
    rotateCard()
  }, []);

  return (
    <div className={`
      ${styles['skill-container']} 
      g-container glass 

      gap-16xl px-12xl py-12xl
      sm:gap-8xl sm:px-8xl sm:py-6xl
      lg:gap-4xl lg:px-12xl lg:py-6xl
    `}>
      
      {/* Lenguajes */}
      <div className={`${styles['skill-subcontainer']} gap-13xl sm:gap-6xl lg:gap-2xl`}>
        <h2 className={`${styles['skill-title']} g-title text-15xl sm:text-xl lg:text-xs font-medium`}>
          Lenguajes
        </h2>

        <div className={`${styles['skill-main']} grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3xl sm:gap-md lg:gap-sm`}>
          {skillsState.langs.map((lang, idx) => (
            <div className={styles['skill-flipcard-container']} key={idx}>
              <div 
                className={styles['skill-flipcard-inner']} 
                style={{ transform: `rotateY(${lang.accDegree}deg)` }}
              >
                <button 
                  className={`
                    ${styles['skill-flipcard-front']} 
                    p-10xl gap-md
                    sm:p-lg sm:gap-sm
                    lg:p-md lg:gap-5xs
                  `}
                  data-name={lang.name} 
                  onClick={flipCard}
                >
                  <h4 className={`
                    ${styles['skill-progressbar-title']}
                    text-9xl sm:text-sm lg:text-[0.8vw]
                  `}>
                    {lang.name}
                  </h4>

                  <Progress
                    value={lang.progressBar}
                    className={`
                      ${styles['skill-progressbar-container']}
                      min-h-[2vw] sm:min-h-[1.2vw] lg:min-h-[0.8vw]
                    `}
                  />
                </button>

                <button 
                  className={styles['skill-flipcard-back']} 
                  data-name={lang.name} 
                  onClick={flipCard}
                >
                  <Image src={lang.card} alt="flip" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tecnologías */}
      <div className={`${styles['skill-subcontainer']} gap-13xl sm:gap-6xl lg:gap-2xl`}>
        <h2 className={`${styles['skill-title']} g-title text-15xl sm:text-xl lg:text-xs font-medium`}>
          Tecnologías
        </h2>

        <div className={`${styles['skill-main']} grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3xl sm:gap-md lg:gap-sm`}>
          {skillsState.techs.map((tech, idx) => (
            <div className={styles['skill-flipcard-container']} key={idx}>
              <div 
                className={styles['skill-flipcard-inner']} 
                style={{ transform: `rotateY(${tech.accDegree}deg)` }}
              >
                <button 
                  className={`
                    ${styles['skill-flipcard-front']} 

                    p-10xl gap-3xs
                    sm:p-lg sm:gap-sm
                    lg:p-md lg:gap-5xs
                  `}
                  data-name={tech.name} 
                  onClick={flipCard}
                >
                  <h4 className={`
                    ${styles['skill-progressbar-title']}
                    text-9xl sm:text-sm lg:text-[0.8vw]
                  `}>
                    {tech.name}
                  </h4>

                  <Progress
                    value={tech.progressBar}
                    className={`
                      ${styles['skill-progressbar-container']}
                      min-h-[2vw] sm:min-h-[1.2vw] lg:min-h-[0.8vw]
                    `}
                  />
                </button>

                <button 
                  className={styles['skill-flipcard-back']} 
                  data-name={tech.name} 
                  onClick={flipCard}
                >
                  <Image src={tech.card} alt="flip" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export { Skills }