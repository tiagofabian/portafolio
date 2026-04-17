import React, { createContext, useContext, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel"
import AutoScroll from "embla-carousel-auto-scroll"
import { cn } from "@/lib/utils"

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
  className,
}: {
  children: React.ReactNode
  options?: EmblaOptionsType
  autoScroll?: boolean
  className?: string
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
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
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <ul
      className={cn("flex", className)}
    >
      {children}
    </ul>
  )
}

const EmblaCarouselItem = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <li className={cn("flex-[0_0_auto]", className)}>
      {children}
    </li>
  )
}

const EmblaCarouselDots = ({
  className,
  dotClassName,
}: {
  className?: string
  dotClassName?: string
}) => {
  const { emblaApi, scrollSnaps, selectedIndex } = useEmbla()

  if (!emblaApi) return null

  return (
    <ul className={cn("flex justify-center items-center", className)}>
      {scrollSnaps.map((_, i) => (
        <li key={i} className={cn("flex justify-center items-center", dotClassName)}>
          <button
            onClick={() => emblaApi.scrollTo(i)}
            aria-label={`slide${i + 1}`}
            aria-current={i === selectedIndex ? 'true' : 'false'}
            className={cn(
              "rounded-full w-full h-full",
              "transition-colors duration-300",
              i === selectedIndex
                ? "bg-[#2c90be]"
                : "bg-gray-400"
            )}
          />
        </li>
      ))}
    </ul>
  )
}

export { EmblaCarousel, EmblaCarouselContent, EmblaCarouselItem, EmblaCarouselDots, useEmbla }