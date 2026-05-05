"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { trackBookDemoClick } from "@/components/analytics/Analytics";

const CALENDLY = "https://calendly.com/atonomi/demo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
      ].join(" ")}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-charcoal hover:text-teal transition-colors"
        >
          atonomi
        </a>

        {/* Book a Demo CTA */}
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackBookDemoClick("navbar")}
          className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-dark transition-colors shadow-md shadow-teal/20"
        >
          Book a Demo
          <ArrowRight size={14} />
        </a>
      </div>
    </motion.header>
  );
}
