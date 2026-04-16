"use client"
import React, { forwardRef } from "react"
import { Root, Indicator } from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"
import styles from "@/assets/styles/shared/progress.module.css"

type ProgressProps = React.ComponentProps<typeof Root> & {
  animated?: boolean  // activa la transition de entrada
  animating?: boolean // activa el sheen
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, animated = false, animating = false, ...props }, ref) => {
    const safeValue = value ?? 0
    return (
      <Root
        ref={ref}
        className={cn(
          styles['progressbar-container'],
          animated && styles['is-animated'],
          animating && styles['is-animating'],
          className
        )}
        value={safeValue}
        {...props}
      >
        <Indicator
          className={styles['progressbar']}
          style={{ transform: `translateX(-${100 - safeValue}%)` }}
        />
      </Root>
    )
  }
)

Progress.displayName = "Progress"
export { Progress }