"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

let initialized = false;

function init() {
  if (initialized || !KEY || typeof window === "undefined") return;
  posthog.init(KEY, {
    api_host: HOST,
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: true,
  });
  initialized = true;
}

/** Call on any "Book Demo" click to attribute the conversion source. */
export function trackBookDemoClick(source: string) {
  init();
  posthog.capture("book_demo_click", { source });
}

/** Call on any primary CTA click (navbar, hero, etc.). */
export function trackCTAClick(source: string) {
  init();
  posthog.capture("cta_click", { source });
}

/** Drop <Analytics /> once into layout — handles pageviews + scroll depth. */
export function Analytics() {
  const pathname = usePathname();

  // Init PostHog once on first render
  useEffect(() => {
    init();
  }, []);

  // Manual pageview on each route change (capture_pageview is false above)
  useEffect(() => {
    if (!initialized) return;
    posthog.capture("$pageview", { $current_url: window.location.href });
  }, [pathname]);

  // Scroll depth — fires at 25 / 50 / 75 / 100 % per page
  useEffect(() => {
    if (!initialized) return;
    const checkpoints = [25, 50, 75, 100];
    const fired = new Set<number>();

    const handler = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((window.scrollY / docHeight) * 100);
      for (const cp of checkpoints) {
        if (pct >= cp && !fired.has(cp)) {
          fired.add(cp);
          posthog.capture("scroll_depth", {
            percent: cp,
            path: pathname,
          });
        }
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [pathname]);

  return null;
}
