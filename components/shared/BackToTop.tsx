"use client"

import { useState, useEffect, useRef } from 'react'
import { 
  Provider, 
  Root, 
  Trigger, 
  Portal,
  Content 
} from '@radix-ui/react-tooltip'
import styles from "@/assets/styles/shared/back-to-top.module.css"

const BackToTop = () => {
  const [visible, setVisible] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)
  const isDesktopRef = useRef(false)

  useEffect(() => {
    isDesktopRef.current = window.innerWidth >= 640

    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })

    const onResize = () => {
      isDesktopRef.current = window.innerWidth >= 640
    }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const scrollUp = () => {
    setScrolling(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })

    const handleScrollEnd = () => {
      setScrolling(false)
      window.removeEventListener('scrollend', handleScrollEnd)
    }
    window.addEventListener('scrollend', handleScrollEnd)
  }

  return (
    <Provider delayDuration={1000} disableHoverableContent>
      <Root
        open={tooltipOpen}
        onOpenChange={(open) => {
          if (isDesktopRef.current) setTooltipOpen(open)
        }}
      >
        <Trigger asChild>
          <button
            onClick={scrollUp}
            aria-label="Volver arriba"
            className={`
              ${styles['back-to-top']}
              fixed bottom-2 left-1/2 -translate-x-1/2
              w-[8vw] h-[8vw]
              transition-transform duration-100 ease-in-out
              ${visible ? styles['visible'] + ' translate-y-0' : 'translate-y-2'}
              ${scrolling ? '!opacity-100 scale-95' : 'scale-100'}

              sm:w-[4vw] sm:h-[4vw] sm:bottom-4
              sm:scale-100 sm:active:scale-95

              lg:w-[2.5vw] lg:h-[2.5vw] lg:bottom-4
            `}
          >
            <svg 
              className="
                w-[2.8vw] h-[2.8vw] 
                sm:w-[1.5vw] sm:h-[1.5vw]
                lg:w-[1vw] lg:h-[1vw]
              "
              viewBox="0 0 16 16" 
              fill="none"
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            >
              <path d="M8 12V4M4 7l4-4 4 4"/>
            </svg>
          </button>
        </Trigger>
        <Portal>
          <Content 
            className={`${styles['tooltip-content']} 
              text-[2vw] px-[0.8vw] py-[0.1vw] rounded-sm
              sm:text-[0.8vw] sm:px-[0.4vw] sm:py-[0.1vw] sm:rounded-sm
              lg:text-[0.6vw] lg:px-[0.3vw] lg:py-[0.1vw] lg:rounded-md
            `}
            side="top" 
            sideOffset={6}
          >
            Subir
          </Content>
        </Portal>
      </Root>
    </Provider>
  )
}

export { BackToTop }