"use client";

import { ArrowRight, CalendarCheck } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { trackBookDemoClick } from "@/components/analytics/Analytics";

const CALENDLY = "https://calendly.com/atonomi/demo";

export function CTASection() {
  return (
    <section id="book" className="bg-white py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="rounded-3xl bg-charcoal px-10 py-16 text-center shadow-2xl">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal">
              <CalendarCheck size={28} className="text-white" />
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Ready to fill your shop
              <br />
              with new clients?
            </h2>

            {/* Sub-copy */}
            <p className="mt-5 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
              Book a 30-minute demo and we&apos;ll show you exactly how many
              businesses in your area are ready for a print partner.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookDemoClick("cta_section")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-9 py-4 text-white font-semibold text-base hover:bg-teal-dark transition-colors shadow-lg shadow-teal/25"
              >
                Book a 30-Min Demo
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Micro-trust line */}
            <p className="mt-6 text-sm text-white/40">
              No credit card required &bull; 30 min &bull; Cancel anytime
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
