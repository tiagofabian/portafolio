"use client"

import { useState, useEffect, useRef } from 'react'
import styles from '@/assets/styles/dashboard/skills.module.css'
import Image, { type StaticImageData } from 'next/image'
import { Progress } from "@/components/shared/Progress"
import { skills } from '@/lib/list/skills'

type SkillItem = {
  name: string
  card: StaticImageData
  max: number
  progressBar: number
  accDegree: number
  loaded: boolean
  animated: boolean   // ← si ya corrió la transición de entrada (nunca vuelve a false)
  animating: boolean  // ← si el sheen está corriendo (sube y baja con el viewport)
}

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const [skillsState, setSkillsState] = useState<{
    langs: SkillItem[]
    techs: SkillItem[]
  }>(() => {
    const toSkillItem = (item: typeof skills.langs[number]): SkillItem => ({
      ...item,
      loaded: false,
      animated: false,
      animating: false,
    })

    return {
      langs: skills.langs.map(toSkillItem),
      techs: skills.techs.map(toSkillItem),
    }
  })

  const updateByName = <T extends { name: string }>(
    items: T[],
    name: string,
    updater: (item: T) => Partial<T>
  ): T[] =>
    items.map(item => item.name === name ? { ...item, ...updater(item) } : item)

  const handleLoad = (name: string) => {
    setSkillsState(prev => ({
      langs: updateByName(prev.langs, name, () => ({ loaded: true })),
      techs: updateByName(prev.techs, name, () => ({ loaded: true }))
    }))
  }

  const flipCard = (name: string) => {
    setSkillsState(prev => ({
      langs: updateByName(prev.langs, name, item => ({ accDegree: item.accDegree + 180 })),
      techs: updateByName(prev.techs, name, item => ({ accDegree: item.accDegree + 180 }))
    }))
  }

  // Observer 1: dispara la transición de entrada, una sola vez
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        setSkillsState(prev => ({
          langs: prev.langs.map(lang => ({ ...lang, progressBar: lang.max, animated: true, animating: true })),
          techs: prev.techs.map(tech => ({ ...tech, progressBar: tech.max, animated: true, animating: true }))
        }))
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  // Observer 2: pausa/reanuda el sheen según visibilidad
  useEffect(() => {
    const sheenObserver = new IntersectionObserver(
      ([entry]) => {
        setSkillsState(prev => {
          // Solo tocar animating si ya se animó antes
          if (!prev.langs.some(l => l.animated)) return prev
          return {
            langs: prev.langs.map(lang => ({ ...lang, animating: entry.isIntersecting })),
            techs: prev.techs.map(tech => ({ ...tech, animating: entry.isIntersecting }))
          }
        })
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) sheenObserver.observe(containerRef.current)
    return () => sheenObserver.disconnect()
  }, [])

  const renderCards = (items: SkillItem[]) =>
    items.map((item, idx) => (
      <div className={styles['skill-flipcard-container']} key={idx}>
        <div
          className={styles['skill-flipcard-inner']}
          style={{ transform: `rotateY(${item.accDegree}deg)` }}
        >
          <button
            className={`
              ${styles['skill-flipcard-front']}
              p-10xl gap-md
              sm:p-md sm:gap-5xs
              lg:p-md lg:gap-5xs
            `}
            aria-label={`${item.name} ${item.progressBar}%. Voltear cara`}
            onMouseEnter={() => handleLoad(item.name)}
            onClick={() => {
              handleLoad(item.name)
              flipCard(item.name)
            }}
          >
            <span
              className={`
                ${styles['skill-progressbar-title']}
                text-9xl sm:text-[0.8vw]
              `}
            >
              {item.name}
            </span>

            <Progress
              value={item.progressBar}
              aria-hidden="true"
              animated={item.animated}
              animating={item.animating}
              className={`
                ${styles['skill-progressbar-container']}
                min-h-[2.2vw] rounded-sm
                sm:min-h-[1vw] sm:rounded-sm
                lg:min-h-[0.8vw] lg:rounded-sm
              `}
              aria-label={`${item.name} ${item.progressBar}`}
            />
          </button>

          <button
            className={styles['skill-flipcard-back']}
            aria-label="Voltear revés"
            onClick={() => flipCard(item.name)}
          >
            {item.loaded && (
              <Image
                src={item.card}
                alt={`${item.name} card`}
                width={1000}
                height={400}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            )}
          </button>
        </div>
      </div>
    ))

  return (
    <div
      ref={containerRef}
      className={`
        ${styles['skill-container']}
        g-container glass
        gap-16xl px-12xl py-12xl
        sm:gap-8xl sm:px-8xl sm:py-6xl
        lg:gap-4xl lg:px-12xl lg:py-6xl
      `}
    >
      <div
        className={`
          ${styles['skill-subcontainer']}
          gap-13xl sm:gap-6xl lg:gap-2xl
        `}
      >
        <h2
          className={`
            ${styles['skill-title']}
            g-title font-medium
            text-15xl sm:text-xl lg:text-xs
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
          {renderCards(skillsState.langs)}
        </div>
      </div>

      <div
        className={`
          ${styles['skill-subcontainer']}
          gap-13xl sm:gap-6xl lg:gap-2xl
        `}
      >
        <h2
          className={`
            ${styles['skill-title']}
            g-title font-medium
            text-15xl sm:text-xl lg:text-xs
          `}
        >
          Tecnologías
        </h2>
        <div
          className={`
            ${styles['skill-main']}
            grid grid-cols-2 gap-3xl
            sm:grid-cols-5 sm:gap-md
            lg:grid-cols-5 lg:gap-sm
          `}
        >
          {renderCards(skillsState.techs)}
        </div>
      </div>
    </div>
  )
}

export { Skills }