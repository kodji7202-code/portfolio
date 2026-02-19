"use client";

import { useState, useEffect, useCallback } from "react";

interface ScrollPosition {
  scrollY: number;
  isScrolled: boolean;
}

export function useScrollPosition(threshold: number = 80): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    isScrolled: false,
  });

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollPosition({
      scrollY: currentScrollY,
      isScrolled: currentScrollY > threshold,
    });
  }, [threshold]);

  useEffect(() => {
    // Set initial scroll position
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return scrollPosition;
}

export default useScrollPosition;
