"use client"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import type { ReactNode } from "react"

export const AnimatedSection = ({ children, stagger = false }: { children: ReactNode; stagger?: boolean }) => {
  const [setElement, isIntersecting] = useScrollAnimation() as [
    (el: HTMLDivElement) => void,
    boolean
  ];
  return (
    <div
      ref={setElement}
      className={`animated-section ${isIntersecting ? "is-visible" : ""} ${stagger ? 'reveal' : ''}`}
      style={{ willChange: isIntersecting ? 'auto' : 'opacity, transform' }}
    >
      {children}
    </div>
  );
};
