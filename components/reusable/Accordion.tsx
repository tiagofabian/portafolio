"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "motion"
// import { motion, AnimatePresence } from "framer-motion"
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDevice } from "@/lib/hooks/useDevice";

const Accordion = ({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) => {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
};

const AccordionItem = ({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) => {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("h-auto border-b last:border-b-0", className)}
      {...props}
    />
  );
};

const AccordionTrigger = ({
  className,
  children,
  iconSize,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & { iconSize?: string }) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "rounded-sm focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon 
          className="text-muted-foreground pointer-events-none size-4 shrink-0 transition-transform duration-300" 
          style={{ width: iconSize, height: iconSize }}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isMobile, isTablet, isDesktop } = useDevice();

  useEffect(() => {
    const content = ref.current;
    if (!content) return;

    const runAnimation = () => {
      const state = content.getAttribute("data-state");
      const height = state === "open" ? content.scrollHeight : "0";
      const opacity = state === "open" ? 1 : 0;

      animate(
        content,
        { height, opacity },
        { type: "spring", stiffness: 120, damping: 24, duration: 0.4 }
      );
    };

    // Animación inicial
    runAnimation();

    // Observador de cambios en data-state
    const observer = new MutationObserver(runAnimation);
    observer.observe(content, { attributes: true, attributeFilter: ["data-state"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const content = ref.current;
    if (!content) return; // 🔹 solo después de primera interacción

    const state = content.getAttribute("data-state");
    if (state !== "open") return;

    const height = "auto";

    animate(content, { height }, {
      type: "spring",
      stiffness: 120,
      damping: 24,
      duration: 0.4
    });
  }, [isMobile, isTablet, isDesktop]);

  return (
    <AccordionPrimitive.Content
      {...props}
      forceMount
      ref={ref}
      className={cn("overflow-hidden h-auto", className)}
    >
      {children}
    </AccordionPrimitive.Content>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };