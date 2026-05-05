"use client";

import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { HeroCarousel } from "@/components/HeroCarousel";
import { HeroInput } from "@/components/HeroInput";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-28 pb-20 px-6">
      {/* Teal radial glow amplifier — top center */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-[0.12]"
        style={{
          background:
            "radial-gradient(ellipse at center, #00c2a8 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Eyebrow pill */}
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal-light px-4 py-1.5 text-sm font-semibold text-teal-dark mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
            </span>
            AI-Powered Direct Mail for Print Shops
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.06] tracking-tight text-charcoal">
            Stop Chasing Customers.{" "}
            <span className="text-teal">Start Getting Calls</span>{" "}
            from Local Businesses.
          </h1>
        </FadeIn>

        {/* Sub-headline */}
        <FadeIn delay={0.18}>
          <p className="mt-6 text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            atonomi sends personalized postcards featuring their logo on premium
            t-shirts, hoodies &amp; hats. They scan the QR code and land on a
            page that says{" "}
            <span className="font-semibold text-charcoal italic">
              &ldquo;We designed something just for you.&rdquo;
            </span>
          </p>
        </FadeIn>

        {/* Dynamic typewriter input */}
        <FadeIn delay={0.28}>
          <div className="mt-9">
            <HeroInput />
          </div>
        </FadeIn>

        {/* Trust bar */}
        <FadeIn delay={0.42}>
          <div className="mt-7 flex items-center justify-center gap-2">
            <CheckCircle2 size={15} className="text-teal flex-shrink-0" />
            <p className="text-sm text-muted">
              Already generating{" "}
              <span className="font-semibold text-charcoal">
                5–10x more B2B leads
              </span>{" "}
              for print shops across the U.S.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Hero Carousel */}
      <FadeIn delay={0.55} id="carousel" className="mx-auto mt-16 max-w-5xl">
        <HeroCarousel />
      </FadeIn>
    </section>
  );
}
