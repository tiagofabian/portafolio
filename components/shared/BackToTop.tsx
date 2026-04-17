"use client"

import { useState, useEffect } from 'react'
import { Provider, Root, Trigger, Portal, Content } from '@radix-ui/react-tooltip'
import styles from "@/assets/styles/shared/back-to-top.module.css"

const BackToTop = () => {
  const [visible, setVisible] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 640)

    const onScroll = () => {
      const shouldBeVisible = window.scrollY > 300
      setVisible(prev => prev !== shouldBeVisible ? shouldBeVisible : prev)
    }

    const onResize = () => setIsDesktop(window.innerWidth >= 640)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <Provider delayDuration={1000} disableHoverableContent>
      <Root
        open={tooltipOpen}
        onOpenChange={(open) => { if (isDesktop) setTooltipOpen(open) }}
      >
        <Trigger asChild>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Volver arriba"
            className={`
              ${styles['back-to-top']}
              fixed bottom-2 left-1/2 -translate-x-1/2
              w-[8vw] h-[8vw]
              transition-transform duration-100 ease-in-out
              ${visible ? styles['visible'] + ' translate-y-0' : 'translate-y-2'}
              sm:w-[4vw] sm:h-[4vw] sm:bottom-4
              lg:w-[2.5vw] lg:h-[2.5vw] lg:bottom-4
            `}
          >
            <svg 
              className="w-[2.8vw] h-[2.8vw] sm:w-[1.5vw] sm:h-[1.5vw] lg:w-[1vw] lg:h-[1vw]"
              viewBox="0 0 16 16" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            >
              <path d="M8 12V4M4 7l4-4 4 4"/>
            </svg>
          </button>
        </Trigger>
        {isDesktop && (
          <Portal>
            <Content 
              className={`${styles['tooltip-content']} 
                text-[2vw] px-[0.8vw] py-[0.1vw] rounded-sm
                sm:text-[0.8vw] sm:px-[0.4vw]
                lg:text-[0.6vw] lg:px-[0.3vw] lg:rounded-md
              `}
              side="top" sideOffset={6}
            >
              Subir
            </Content>
          </Portal>
        )}
      </Root>
    </Provider>
  )
}

export { BackToTop }