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

    return () => {
      clearInterval(interval);
    }
  }

  useEffect(() => {
    rotateCard()
  }, []);

  return (
    <div className={`${styles['skill-container']} g-container glass gap-4xl px-12xl py-6xl tb:px-8xl tb:py-4xl mb:gap-16xl mb:px-12xl mb:py-12xl`}>
      
      <div className={`${styles['skill-subcontainer']} gap-2xl mb:gap-13xl`}>
        <h2 className={`${styles['skill-title']} g-title text-xs font-medium mb:text-15xl`}>Lenguajes</h2>
        <div className={`${styles['skill-main']} gap-sm mb:gap-3xl`}>
          {skillsState.langs.map((lang, idx) => (
            <div className={styles['skill-flipcard-container']} key={idx}>
              <div className={styles['skill-flipcard-inner']} style={{ transform: `rotateY(${lang.accDegree}deg)` }}>
                <button className={`${styles['skill-flipcard-front']} p-md gap-5xs mb:gap-md mb:p-10xl`} data-name={lang.name} onClick={flipCard}>
                  <h4 className={`${styles['skill-progressbar-title']} text-[0.8vw] mb:text-9xl`}>{lang.name}</h4>
                  <Progress
                    value={lang.progressBar}
                    className={`${styles['skill-progressbar-container']} min-h-[0.8vw] mb:min-h-[2vw]`}
                  />
                </button>
                <button className={styles['skill-flipcard-back']} data-name={lang.name} onClick={flipCard}>
                  <Image src={lang.card} alt="flip" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles['skill-subcontainer']} gap-2xl mb:gap-13xl`}>
        <h2 className={`${styles['skill-title']} g-title text-xs font-medium mb:text-15xl`}>Tecnologías</h2>
        <div className={`${styles['skill-main']} gap-sm mb:gap-3xl`}>
          {skillsState.techs.map((tech, idx) => (
            <div className={styles['skill-flipcard-container']} key={idx}>
              <div className={styles['skill-flipcard-inner']} style={{ transform: `rotateY(${tech.accDegree}deg)` }}>
                <button className={`${styles['skill-flipcard-front']} p-md gap-5xs mb:gap-3xs mb:p-10xl`} data-name={tech.name} onClick={flipCard}>
                  <h4 className={`${styles['skill-progressbar-title']} text-[0.8vw] mb:text-9xl`}>{tech.name}</h4>
                  <Progress
                    value={tech.progressBar}
                    className={`${styles['skill-progressbar-container']} min-h-[0.8vw] mb:min-h-[2vw]`}
                  />
                </button>
                <button className={styles['skill-flipcard-back']} data-name={tech.name} onClick={flipCard}>
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