"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// ---------------------------------------------------------------------------
// Lightweight analytics shim — swap body of `capture` for posthog-js once
// NEXT_PUBLIC_POSTHOG_KEY is set in .env.local:
//   import posthog from "posthog-js";
//   posthog.capture(event, props);
// ---------------------------------------------------------------------------

function capture(event: string, props?: Record<string, unknown>) {
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event, props ?? {});
  }
  // TODO: window.posthog?.capture(event, props);
}

/** Call this on any "Book Demo" click to attribute the conversion source. */
export function trackBookDemoClick(source: string) {
  capture("book_demo_click", { source });
}

/** Drop <Analytics /> once into layout — handles pageviews + scroll depth. */
export function Analytics() {
  const pathname = usePathname();

  // Pageview on mount and every client-side route change
  useEffect(() => {
    capture("$pageview", { path: pathname });
  }, [pathname]);

  // Scroll depth — fires at 25 / 50 / 75 / 100 % per page
  useEffect(() => {
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
          capture("scroll_depth", { percent: cp, path: pathname });
        }
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [pathname]);

  return null;
}
