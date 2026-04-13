"use client"

import { useState, useEffect } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import "@/assets/styles/shared/back-to-top.css"

const BackToTop = () => {
  const [visible, setVisible] = useState(false)
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => {
    setScrolling(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScrollEnd = () => {
      setScrolling(false);
      window.removeEventListener('scrollend', handleScrollEnd);
    };

    window.addEventListener('scrollend', handleScrollEnd);
  };

  return (
    <Tooltip.Provider delayDuration={1000} disableHoverableContent>
      <Tooltip.Root
        open={tooltipOpen}
        onOpenChange={(open) => {
          if (window.innerWidth >= 640) setTooltipOpen(open);
        }}
      >
        <Tooltip.Trigger asChild>
          <button
            onClick={scrollUp}
            aria-label="Volver arriba"
            className={`back-to-top
              fixed bottom-2 left-1/2 -translate-x-1/2
              w-[8vw] h-[8vw]
              sm:w-[2.5vw] sm:h-[2.5vw] sm:bottom-4
              transition-transform duration-100 ease-in-out
              ${visible ? 'visible translate-y-0' : 'translate-y-2'}
              ${scrolling ? '!opacity-100 scale-95' : 'scale-100'}
              sm:scale-100 sm:active:scale-95
            `}
          >
            <svg 
              className="w-[2.8vw] h-[2.8vw] sm:w-[1vw] sm:h-[1vw]"
              viewBox="0 0 16 16" 
              fill="none"
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            >
              <path d="M8 12V4M4 7l4-4 4 4"/>
            </svg>
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content 
            className="tooltip-content text-[2vw] px-[0.8vw] py-[0.1vw] sm:text-[0.6vw] sm:px-[0.3vw] sm:py-[0.1vw]" 
            side="top" 
            sideOffset={6}
          >
            Subir
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export { BackToTop }