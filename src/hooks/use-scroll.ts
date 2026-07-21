"use client";

import { useEffect, useState } from "react";

/**
 * Tracks vertical scroll position and whether the page has scrolled past
 * a threshold — used for sticky-header behavior (Navigation spec).
 */
export function useScroll(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > threshold);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { scrolled, scrollY };
}
