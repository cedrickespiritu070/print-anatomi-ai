"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { trackBookDemoClick } from "@/components/analytics/Analytics";

const CALENDLY = "https://calendly.com/atonomi/demo";

const QUERIES = [
  "Find plumbers in Miami needing branded hoodies...",
  "Find law firms in Dallas for premium stationery...",
  "Find roofers in Denver for custom yard signs...",
  "Find salons in NYC for branded gift bags...",
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Typewriter hook
//   enabled=false  → freezes state in place (no ticks fire)
//   enabled=true   → resumes exactly from the frozen position
// ─────────────────────────────────────────────────────────────────────────────
function useTypewriter(enabled: boolean) {
  const [text, setText] = useState("");
  const [qIndex, setQIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const target = QUERIES[qIndex];

    // Fully typed → hold 3 s then start deleting
    if (!isDeleting && text === target) {
      const t = setTimeout(() => setIsDeleting(true), 3000);
      return () => clearTimeout(t);
    }

    // Fully deleted → short gap then advance to next query
    if (isDeleting && text === "") {
      const t = setTimeout(() => {
        setIsDeleting(false);
        setQIndex((i) => (i + 1) % QUERIES.length);
      }, 150);
      return () => clearTimeout(t);
    }

    // Type one char (50 ms) or delete one char (30 ms)
    const delay = isDeleting ? 30 : 50;
    const t = setTimeout(() => {
      setText((prev) =>
        isDeleting ? prev.slice(0, -1) : target.slice(0, prev.length + 1)
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, qIndex, isDeleting, enabled]);

  return text;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export function HeroInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [userInput, setUserInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Typewriter runs only when the real input is idle
  const animating = !isFocused && userInput === "";
  const typewriterText = useTypewriter(animating);

  return (
    <form
      className="mx-auto max-w-2xl w-full"
      onSubmit={(e) => {
        e.preventDefault();
        trackBookDemoClick("hero_input");
        window.open(CALENDLY, "_blank", "noopener,noreferrer");
      }}
    >
      {/* Pill container */}
      <div
        onClick={() => inputRef.current?.focus()}
        className={[
          "flex items-center gap-2 rounded-full bg-white border px-3 py-2 shadow-xl cursor-text",
          "transition-all duration-300",
          isFocused
            ? "border-teal/50 shadow-2xl"
            : "border-border hover:border-teal/25 hover:shadow-2xl",
        ].join(" ")}
      >
        {/* Left icon */}
        <Search
          size={16}
          className={`ml-2 flex-shrink-0 transition-colors duration-200 ${isFocused ? "text-teal" : "text-muted"}`}
        />

        {/* Input area — fixed height prevents layout shift */}
        <div className="relative flex-1 min-w-0 h-8 flex items-center">
          {/* ── Typewriter overlay ── */}
          {animating && (
            <span
              aria-hidden
              className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden"
            >
              <span className="text-sm text-charcoal/50 whitespace-nowrap">
                {typewriterText}
              </span>
              {/* Blinking cursor — stays solid 45 % of the cycle, invisible 45 % */}
              <motion.span
                className="inline-block w-[1.5px] h-[15px] bg-charcoal/35 ml-[1px] rounded-full flex-shrink-0"
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  times: [0, 0.45, 0.5, 0.95],
                  ease: "linear",
                }}
              />
            </span>
          )}

          {/* Actual input — transparent bg sits on top of the overlay */}
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            // Only show a real placeholder once the user has focused with no typed text
            placeholder={isFocused && userInput === "" ? "Describe your target…" : ""}
            className="w-full h-full bg-transparent outline-none text-sm text-charcoal placeholder:text-muted/60"
          />
        </div>

        {/* CTA button — inside the pill */}
        <button
          type="submit"
          className="flex-shrink-0 rounded-full bg-charcoal text-white text-sm font-semibold px-5 py-2.5 hover:bg-charcoal-soft hover:scale-[1.03] active:scale-[0.97] transition-all whitespace-nowrap"
        >
          Get Started
        </button>
      </div>

      {/* Secondary text CTA */}
      <p className="mt-4 text-center text-sm text-muted">
        or{" "}
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackBookDemoClick("hero_text_link")}
          className="inline-flex items-center gap-1 font-semibold text-charcoal underline underline-offset-2 hover:text-teal transition-colors"
        >
          Book a 30-min demo
          <ArrowRight size={13} />
        </a>
      </p>
    </form>
  );
}
