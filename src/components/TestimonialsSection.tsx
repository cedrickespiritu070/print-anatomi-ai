"use client";

import { Star } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const testimonials = [
  {
    quote:
      "We mailed 300 postcards in our first campaign. Within 3 weeks we had 11 inbound calls from local contractors — 4 turned into repeat accounts. I've never had a marketing tool pay for itself that fast.",
    name: "Derek M.",
    role: "Owner, FreshPrint Co. — Austin, TX",
    stat: "11 inbound calls from 300 postcards",
  },
  {
    quote:
      "I was skeptical about direct mail in 2024. But the personalized mockups are genuinely shocking — people call in asking 'did you guys design that just for us?' That reaction alone closes deals.",
    name: "Carla S.",
    role: "Owner, ThreadLine Print — Nashville, TN",
    stat: "4.1x ROI on first campaign",
  },
  {
    quote:
      "The vendor price comparison alone saves me 45 minutes a day. Stack that with the postcard engine and I went from chasing quotes to fielding calls. It's a completely different business now.",
    name: "Tony R.",
    role: "Owner, Inked Unlimited — Denver, CO",
    stat: "45 min saved per day on quoting",
  },
];

const stats = [
  { value: "5–10x", label: "More B2B leads vs. cold outreach" },
  { value: "< 3 wks", label: "Average time to first inbound call" },
  { value: "300+", label: "Print shops in the U.S. using atonomi" },
  { value: "98%", label: "Postcard delivery rate" },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-teal text-teal" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-3">
              Real Results
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
              Print shops are already winning.
            </h2>
          </div>
        </FadeIn>

        {/* Stats bar */}
        <FadeIn delay={0.05}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-teal-light border border-teal/15 px-5 py-6 text-center"
              >
                <p className="text-3xl font-extrabold text-teal tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs text-charcoal font-medium leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="rounded-2xl bg-white border border-border p-7 flex flex-col gap-5 shadow-diffuse hover:shadow-diffuse-md hover:border-teal/30 transition-all h-full">
                <Stars />

                <p className="text-charcoal text-[15px] leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="border-t border-border pt-5 flex flex-col gap-1">
                  <p className="font-semibold text-charcoal text-sm">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                  <div className="mt-3 inline-flex self-start rounded-full bg-teal-light px-3 py-1">
                    <p className="text-xs font-semibold text-teal-dark">
                      {t.stat}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
