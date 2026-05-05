"use client";

import { FadeIn } from "@/components/motion/FadeIn";

const painPoints = [
  {
    quote:
      "I spend hours cold-calling local businesses and get zero responses. My phone never rings with real B2B jobs.",
    owner: "Mike R., Dallas TX",
    icon: "📞",
  },
  {
    quote:
      "I overbuy blanks hoping for orders that never come. Feast-or-famine seasons leave me with dead inventory.",
    owner: "Sandra L., Phoenix AZ",
    icon: "📦",
  },
  {
    quote:
      "Quoting, scheduling, and chasing orders is a daily fire drill. I'm spread thin and missing deadlines.",
    owner: "James T., Atlanta GA",
    icon: "🔥",
  },
  {
    quote:
      "Competing with cheap online printers is killing my profits. Wholesale accounts barely cover costs.",
    owner: "Priya M., Chicago IL",
    icon: "📉",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-light-neutral/80 backdrop-blur-sm py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-3">
              Sound Familiar?
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
              Running a print shop shouldn&apos;t
              <br />
              feel this hard.
            </h2>
          </div>
        </FadeIn>

        {/* Pain point cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {painPoints.map((point, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-border p-7 flex gap-5 shadow-diffuse hover:shadow-diffuse-md transition-all h-full">
                {/* Icon bubble */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-light-neutral-dark flex items-center justify-center text-2xl">
                  {point.icon}
                </div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-charcoal leading-relaxed text-[15px] italic">
                    &ldquo;{point.quote}&rdquo;
                  </p>
                  <p className="text-xs text-muted font-semibold uppercase tracking-wide">
                    — {point.owner}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bridge statement */}
        <FadeIn delay={0.45} className="mt-14 text-center">
          <div className="inline-block rounded-2xl border border-teal/20 bg-teal-light px-8 py-5 max-w-2xl shadow-diffuse">
            <p className="text-lg text-charcoal font-medium leading-relaxed">
              atonomi fixes all four problems with one system — so you can focus
              on printing, not prospecting.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
