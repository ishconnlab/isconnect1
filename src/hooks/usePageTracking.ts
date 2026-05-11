import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-VT1LJMMVP3";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function usePageTracking() {
  const location = useLocation();
  const isInitial = useRef(true);

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    if (isInitial.current) {
      isInitial.current = false;
      return;
    }

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);
}
