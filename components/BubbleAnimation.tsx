"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import "@/assets/styles/dashboard/bubble-animation.css"

const BubbleAnimation = ({className}: { className?: string} ) => {
  const svgRef = useRef<SVGSVGElement | null>(null);;

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const TOTAL_BURBUJAS = 120;

    for (let i = 0; i < TOTAL_BURBUJAS; i++) {
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );

      const cx = Math.random() * 140 - 20;
      const r = Math.random() * 1.8 + 0.5;
      const dur = Math.random() * 10 + 35;
      const delay = Math.random() * 10;
      const scale = Math.random() * 0.5 + 0.8;
      const startX = Math.random() * 40 - 20 + "vw";
      const endX = parseFloat(startX) + (Math.random() * 40 - 20) + "vw";

      circle.setAttribute("cx", cx + "vw");
      circle.setAttribute("cy", "-10vh");
      circle.setAttribute("r", r + "vw");
      circle.setAttribute("fill", "url(#gradiente-burbuja)");

      circle.style.setProperty("--start-x", startX);
      circle.style.setProperty("--end-x", endX);
      circle.style.setProperty("--scale", scale.toString());
      circle.style.animationDuration = dur + "s";
      circle.style.animationDelay = delay + "s";

      svg.appendChild(circle);
    }
  }, []);

  return (
    <svg 
      ref={svgRef} 
      className={cn("bubble absolute left-0 right-0 z-0", className)}
    >
      <defs>
        <radialGradient id="gradiente-burbuja" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#a6c0fe" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export { BubbleAnimation }
