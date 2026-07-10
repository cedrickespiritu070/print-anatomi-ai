"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import posthog from "posthog-js";

/** Call on any "Book Demo" click to attribute the conversion source. */
export function trackBookDemoClick(source: string) {
  posthog.capture("book_demo_click", { source });
}

/** Call on any primary CTA click. */
export function trackCTAClick(source: string) {
  posthog.capture("cta_click", { source });
}

/** Drop <Analytics /> once into layout — handles pageviews + scroll depth. */
export function Analytics() {
  const pathname = usePathname();
  const ph = usePostHog();

  // Pageview on each route change
  useEffect(() => {
    if (!ph) return;
    ph.capture("$pageview", { $current_url: window.location.href });
  }, [pathname, ph]);

  // Scroll depth — fires at 25 / 50 / 75 / 100 % per page
  useEffect(() => {
    if (!ph) return;
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
          ph.capture("scroll_depth", { percent: cp, path: pathname });
        }
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [pathname, ph]);

  return null;
}
