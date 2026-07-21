"use client";

import { useEffect, useState } from "react";

/**
 * Debounces a rapidly-changing value. Used for search inputs
 * (Blog search, FAQ search, Locations search).
 */
export function useDebounce<T>(value: T, delayMs = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(timeout);
  }, [value, delayMs]);

  return debounced;
}
