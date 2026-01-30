import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from '@/lib/utils';

const Separator = React.forwardRef< // especificacion de la referencia en el html
  React.ElementRef<typeof SeparatorPrimitive.Root>, // tipo que recibe
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> // lo que devuelve (contenido a partir del componente)
>(
  (
    { className, orientation = "horizontal", decorative =  true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root 
      ref={ref}
      orientation={orientation}
      decorative={decorative}
      className={cn(
        "bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
)

Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
