"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

import "@/assets/styles/shared/progress.css"

const Progress = ({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) => {
  const safeValue = value ?? 0

  return (
    <ProgressPrimitive.Root
      className={cn("progressbar-container", className)}
      value={safeValue}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="progressbar"
        style={{
          transform: `translateX(-${100 - safeValue}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }