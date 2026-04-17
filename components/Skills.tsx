"use client"

import { useState, useEffect, useRef, useCallback } from 'react'
import styles from '@/assets/styles/dashboard/skills.module.css'
import { skills } from '@/lib/list/skills'
import { Card, type SkillItem } from '@/components/ui/Card'

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

  const handleLoad = useCallback((name: string) => {
    setSkillsState(prev => ({
      langs: updateByName(prev.langs, name, () => ({ loaded: true })),
      techs: updateByName(prev.techs, name, () => ({ loaded: true }))
    }))
  }, [])

  const flipCard = useCallback((name: string) => {
    setSkillsState(prev => ({
      langs: updateByName(prev.langs, name, item => ({ accDegree: item.accDegree + 180 })),
      techs: updateByName(prev.techs, name, item => ({ accDegree: item.accDegree + 180 }))
    }))
  }, [])

  useEffect(() => {
    let triggered = false

    const observer = new IntersectionObserver(([entry]) => {
      if (!triggered && entry.isIntersecting) {
        triggered = true
        setSkillsState(prev => ({
          langs: prev.langs.map(lang => ({ ...lang, progressBar: lang.max, animated: true, animating: true })),
          techs: prev.techs.map(tech => ({ ...tech, progressBar: tech.max, animated: true, animating: true }))
        }))
        return
      }

      if (triggered) {
        setSkillsState(prev => ({
          langs: prev.langs.map(lang => ({ ...lang, animating: entry.isIntersecting })),
          techs: prev.techs.map(tech => ({ ...tech, animating: entry.isIntersecting }))
        }))
      }
    }, { threshold: 0.1 })

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

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
      <div className={`${styles['skill-subcontainer']} gap-13xl sm:gap-6xl lg:gap-2xl`}>
        <h2 className={`${styles['skill-title']} g-title font-medium text-15xl sm:text-xl lg:text-xs`}>
          Lenguajes
        </h2>
        <div className={`
          ${styles['skill-main']}
          grid grid-cols-2 gap-3xl
          sm:grid-cols-5 sm:gap-md
          lg:grid-cols-5 lg:gap-sm
        `}>
          {skillsState.langs.map((item, idx) => (
            <Card
              key={idx}
              item={item}
              onVisible={() => handleLoad(item.name)}
              onFlip={() => flipCard(item.name)}
            />
          ))}
        </div>
      </div>

      <div className={`${styles['skill-subcontainer']} gap-13xl sm:gap-6xl lg:gap-2xl`}>
        <h2 className={`${styles['skill-title']} g-title font-medium text-15xl sm:text-xl lg:text-xs`}>
          Tecnologías
        </h2>
        <div className={`
          ${styles['skill-main']}
          grid grid-cols-2 gap-3xl
          sm:grid-cols-5 sm:gap-md
          lg:grid-cols-5 lg:gap-sm
        `}>
          {skillsState.techs.map((item, idx) => (
            <Card
              key={idx}
              item={item}
              onVisible={() => handleLoad(item.name)}
              onFlip={() => flipCard(item.name)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export { Skills }