"use client"

import { useState, useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (observer.current) {
            observer.current.disconnect();
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px',
      }
    );

    if (element && observer.current) {
      observer.current.observe(element);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [element]);

  return [setElement, isIntersecting];
}
