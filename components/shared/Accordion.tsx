"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "motion/mini";
import { 
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = ({
  ...props
}: React.ComponentProps<typeof Root>) => {
  return <Root data-slot="accordion" {...props} />;
};

const AccordionItem = ({
  className,
  ...props
}: React.ComponentProps<typeof Item>) => {
  return (
    <Item
      data-slot="accordion-item"
      className={cn(className)}
      {...props}
    />
  );
};

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Trigger>) => {
  return (
    <Header className="flex">
      <Trigger
        data-slot="accordion-trigger"
        className={cn(
          `
          flex flex-1 items-center justify-between
          text-left font-medium
          transition-all outline-none
          rounded-sm
          focus-visible:ring-[3px]
          focus-visible:border-ring
          focus-visible:ring-ring/50
          disabled:pointer-events-none disabled:opacity-50
          [&[data-state=open]>svg]:rotate-180
          `,
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className="
            text-muted-foreground
            pointer-events-none shrink-0
            transition-transform duration-300
            size-4 sm:size-5
          "
        />
      </Trigger>
    </Header>
  );
};

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Content>) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = ref.current;
    if (!content) return;

    const inner = content.firstElementChild as HTMLElement;
    if (!inner) return;

    let isAnimating = false;

    const runAnimation = () => {
      const state = content.getAttribute("data-state");
      const height = state === "open" ? content.scrollHeight : 0;
      const opacity = state === "open" ? 1 : 0;

      isAnimating = true;
      animate(
        content,
        { height, opacity },
        {
          stiffness: 120,
          damping: 24,
          duration: 0.4,
          onComplete: () => { isAnimating = false; },
        }
      );
    };

    runAnimation();

    const mutationObserver = new MutationObserver(runAnimation);
    mutationObserver.observe(content, {
      attributes: true,
      attributeFilter: ["data-state"],
    });

    const resizeObserver = new ResizeObserver(() => {
      if (isAnimating) return;
      if (content.getAttribute("data-state") === "open") {
        animate(content, { height: inner.scrollHeight }, { duration: 0 });
      }
    });
    resizeObserver.observe(inner);

    return () => {
      mutationObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <Content
      {...props}
      forceMount
      ref={ref}
      className={cn("overflow-hidden", className)}
      style={{ height: 0, opacity: 0 }}
    >
      <div className="flex flex-col">
        {children}
      </div>
    </Content>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };