"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    src: "/assets/postcard-hero.png",
    alt: "Atonomi system — layered postcard paired with a personalized business landing page",
    label: "Postcard + Lander System",
  },
  {
    src: "/assets/hero-screenshot.png",
    alt: "Live lander example — American Town Painting personalized landing page",
    label: "Live Lander — American Town Painting",
  },
];

const slideVariants = {
  enter: { opacity: 0, scale: 0.985 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.008 },
};

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(advance, 3000);
    return () => clearInterval(id);
  }, [advance, paused]);

  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-light-neutral border border-border shadow-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Inner teal glow rim */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl"
        style={{ boxShadow: "inset 0 0 0 1px rgba(0,194,168,0.14)" }}
      />

      {/* Slide viewport — fixed 16:9 */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-contain"
              priority={current === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom bar — slide label + dot nav */}
      <div className="relative z-20 flex items-center justify-between px-5 py-3 bg-white/85 backdrop-blur-sm border-t border-border">
        {/* Slide label */}
        <motion.span
          key={`label-${current}`}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-xs font-semibold text-muted truncate pr-4"
        >
          {slides[current].label}
        </motion.span>

        {/* Dot navigation */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`View slide ${i + 1}: ${slides[i].label}`}
              className={[
                "rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal",
                i === current
                  ? "bg-teal w-5 h-2"
                  : "bg-border w-2 h-2 hover:bg-muted",
              ].join(" ")}
            />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      {!paused && (
        <motion.div
          key={`progress-${current}`}
          className="absolute bottom-[41px] left-0 h-[2px] bg-teal z-20"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "linear" }}
        />
      )}
    </div>
  );
}
