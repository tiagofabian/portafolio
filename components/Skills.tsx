"use client"

import React, {useState, useEffect} from 'react'
import styles from '@/assets/styles/dashboard/skills.module.css'
import Image from "next/image";
import { Progress } from "@/components/shared/Progress"
import { skills } from '@/lib/list/skills'

const Skills = () => {
  const [skillsState, setSkillsState] = useState(() => ({
    langs: skills.langs.map(lang => ({
      ...lang,
      loaded: false
    })),
    techs: skills.techs.map(tech => ({
      ...tech,
      loaded: false
    }))
  }))

  const updateSkills = <T extends { name: string }>(
    items: T[],
    name: string,
    updater: (item: T) => Partial<T>
  ): T[] => {
    return items.map(item =>
      item.name === name
        ? { ...item, ...updater(item) }
        : item
    )
  }

  const handleLoad = (name: string) => {
    setSkillsState(prev => ({
      langs: updateSkills(prev.langs, name, () => ({ loaded: true })),
      techs: updateSkills(prev.techs, name, () => ({ loaded: true }))
    }))
  }

  const flipCard = (name: string) => {
    setSkillsState(prev => ({
      langs: updateSkills(prev.langs, name, item => ({
        accDegree: item.accDegree + 180
      })),
      techs: updateSkills(prev.techs, name, item => ({
        accDegree: item.accDegree + 180
      }))
    }))
  }

  const progressbarCard = () => {
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
    progressbarCard()
  }, []);

  return (
    <div
      className={`
        ${styles['skill-container']}
        g-container glass

        gap-16xl px-12xl py-12xl
        sm:gap-8xl sm:px-8xl sm:py-6xl
        lg:gap-4xl lg:px-12xl lg:py-6xl
      `}
    >
      {/* Lenguajes */}
      <div
        className={`
          ${styles['skill-subcontainer']}
          gap-13xl
          sm:gap-6xl
          lg:gap-2xl
        `}
      >
        <h2
          className={`
            ${styles['skill-title']}
            g-title font-medium

            text-15xl
            sm:text-xl
            lg:text-xs
          `}
        >
          Lenguajes
        </h2>

        <div
          className={`
            ${styles['skill-main']}
            grid grid-cols-2 gap-3xl

            sm:grid-cols-5 sm:gap-md
            lg:grid-cols-5 lg:gap-sm
          `}
        >
          {skillsState.langs.map((lang, idx) => (
            <div
              className={styles['skill-flipcard-container']}
              key={idx}
            >
              <div
                className={styles['skill-flipcard-inner']}
                style={{ transform: `rotateY(${lang.accDegree}deg)` }}
              >
                <button
                  className={`
                    ${styles['skill-flipcard-front']}

                    p-10xl gap-md
                    sm:p-lg sm:gap-5xs
                    lg:p-md lg:gap-5xs
                  `}
                  aria-label={`${lang.name} ${lang.progressBar}%. Voltear cara`}
                  onMouseEnter={() => handleLoad(lang.name)}
                  onClick={() => {
                    handleLoad(lang.name)
                    flipCard(lang.name)
                  }}
                >
                  <span
                    className={`
                      ${styles['skill-progressbar-title']}

                      text-9xl
                      sm:text-[0.8vw]
                    `}
                  >
                    {lang.name}
                  </span>

                  <Progress
                    value={lang.progressBar}
                    className={`
                      ${styles['skill-progressbar-container']}

                      min-h-[2.2vw]
                      sm:min-h-[1vw]
                      lg:min-h-[0.8vw]
                    `}
                    aria-label={`${lang.name} ${lang.progressBar}`}
                  />
                </button>

                <button
                  className={styles['skill-flipcard-back']}
                  aria-label='Voltear revés'
                  onClick={() => flipCard(lang.name)}
                >
                  {lang.loaded && <Image src={lang.card} alt="flip" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tecnologías */}
      <div
        className={`
          ${styles['skill-subcontainer']}
          gap-13xl
          sm:gap-6xl
          lg:gap-2xl
        `}
      >
        <h2
          className={`
            ${styles['skill-title']}
            g-title font-medium

            text-15xl
            sm:text-xl
            lg:text-xs
          `}
        >
          Tecnologías
        </h2>

        <div
          className={`
            ${styles['skill-main']}
            grid grid-cols-2

            sm:grid-cols-5
            lg:grid-cols-5

            gap-3xl
            sm:gap-md
            lg:gap-sm
          `}
        >
          {skillsState.techs.map((tech, idx) => (
            <div
              className={styles['skill-flipcard-container']}
              key={idx}
            >
              <div
                className={styles['skill-flipcard-inner']}
                style={{ transform: `rotateY(${tech.accDegree}deg)` }}
              >
                <button
                  className={`
                    ${styles['skill-flipcard-front']}

                    p-10xl gap-md
                    sm:p-lg sm:gap-5xs
                    lg:p-md lg:gap-5xs
                  `}
                  aria-label={`${tech.name} ${tech.progressBar}%. Voltear cara`}
                  onMouseEnter={() => handleLoad(tech.name)}
                  onClick={() => {
                    handleLoad(tech.name)
                    flipCard(tech.name)
                  }}
                >
                  <span
                    className={`
                      ${styles['skill-progressbar-title']}

                      text-9xl
                      sm:text-[0.8vw]
                    `}
                  >
                    {tech.name}
                  </span>

                  <Progress
                    value={tech.progressBar}
                    aria-hidden="true"
                    className={`
                      ${styles['skill-progressbar-container']}

                      min-h-[2.2vw]
                      sm:min-h-[1vw]
                      lg:min-h-[0.8vw]
                    `}
                  />
                </button>

                <button
                  className={styles['skill-flipcard-back']}
                  aria-label='Voltear revés'
                  onClick={() => flipCard(tech.name)}
                >
                  {tech.loaded && <Image src={tech.card} alt="flip" />}
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