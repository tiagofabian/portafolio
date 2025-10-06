import React, { createContext, useContext, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel"
import AutoScroll from "embla-carousel-auto-scroll"
import { cn } from "@/lib/utils"
// import Autoplay from "embla-carousel-autoplay"

type EmblaContextType = {
  emblaApi: EmblaCarouselType | undefined
  selectedIndex: number
  scrollSnaps: number[]
}

const EmblaContext = createContext<EmblaContextType>({
  emblaApi: undefined,
  selectedIndex: 0,
  scrollSnaps: [],
})

const useEmbla = () => {
  return useContext(EmblaContext)
}

const EmblaCarousel = ({
  children,
  options,
  autoScroll = true,
  gap,
  className
}: {
  children: React.ReactNode
  options?: EmblaOptionsType
  autoScroll?: boolean
  gap?: string
  className?: string
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      // containScroll: "trimSnaps",
      align: "start",
      dragFree: true,
      ...options,
    },
    autoScroll
      ? [AutoScroll({ speed: 0.9, stopOnInteraction: false })]
      : []
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    setSelectedIndex(emblaApi.selectedScrollSnap())

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  return (
    <EmblaContext.Provider value={{ emblaApi, selectedIndex, scrollSnaps }}>
      <div className={cn("block", className)}>
        <div
          className="flex flex-col overflow-hidden"
          style={{ gap: gap }}
          ref={emblaRef}
        >
          {children}
        </div>
      </div>
    </EmblaContext.Provider>
  )
}

const EmblaCarouselContent = ({
  children,
  gap,
  className,
}: {
  children: React.ReactNode
  gap?: string
  className?: string
}) => {
  return (
    <ul 
      className={cn("flex", className)} 
      style={{ gap: gap }}
    >
      {children}
    </ul>
  )
}

const EmblaCarouselItem = ({
  children,
  basis = "25%", // equivale a perPage=4
  className,
}: {
  children: React.ReactNode
  basis?: string
  className?: string
}) => {
  return (
    <li
      className={cn("flex-[0_0_auto]", className)}
      style={{ flexBasis: basis }}
    >
      {children}
    </li>
  )
}

const EmblaCarouselDots = ({
  className,
  dotSize = "0.6vw",
  hidden = false
}: { 
  className?: string
  dotSize?: string
  hidden?: boolean
}) => {
  const { emblaApi, scrollSnaps, selectedIndex } = useEmbla()

  if (!emblaApi) return null

  return (
    <ul className={cn("justify-center items-center", className, hidden ? "hidden" : "flex")} hidden={hidden}>
      {scrollSnaps.map((_, i) => (
        <li key={i} className="flex justify-center items-center">
          <button
            onClick={() => emblaApi.scrollTo(i)}
            style={{ 
              width: i === selectedIndex ? `${parseFloat(dotSize) + 0.15}vw` : dotSize,
              height: i === selectedIndex ? `${parseFloat(dotSize) + 0.15}vw` : dotSize
            }}
            className={`rounded-full ${
              i === selectedIndex ? "bg-[#2c90be]" : "bg-gray-400"
            }`}
          />
        </li>
      ))}
    </ul>
  )
}

export { EmblaCarousel, EmblaCarouselContent, EmblaCarouselItem, EmblaCarouselDots, useEmbla }

