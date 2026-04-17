"use client"

import { useEffect, useRef } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { Progress } from "@/components/shared/Progress"
import type { Skill } from '@/lib/types'
import styles from '@/assets/styles/dashboard/skills.module.css'

type SkillItem = Skill & {
  loaded: boolean
  animated: boolean
  animating: boolean
}

const Card = ({
  item,
  onVisible,
  onFlip,
}: {
  item: SkillItem
  onVisible: () => void
  onFlip: () => void
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        onVisible()
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [onVisible])

  return (
    <div ref={cardRef} className={styles['skill-flipcard-container']}>
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
          onMouseEnter={() => onVisible()}
          onClick={() => {
            onVisible()
            onFlip()
          }}
        >
          <span className={`${styles['skill-progressbar-title']} text-9xl sm:text-[0.8vw]`}>
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
          onClick={() => onFlip()}
        >
          {item.loaded && (
            <Image
              src={item.card}
              alt={`${item.name} card`}
              width={1000}
              height={400}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
              loading="lazy"
              className="animate-[fadeIn_0.3s_ease-in-out]"
            />
          )}
        </button>
      </div>
    </div>
  )
}

export type { SkillItem }
export { Card }