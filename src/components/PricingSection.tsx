"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { trackBookDemoClick } from "@/components/analytics/Analytics";

const CALENDLY = "https://calendly.com/atonomi/demo";

const plans = [
  {
    name: "Starter",
    price: 197,
    description: "Perfect for shops just testing direct mail.",
    features: [
      "50 personalized postcards / mo",
      "AI mockup generation",
      "Local business scraping (500 leads)",
      "QR code + landing page tracking",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: 397,
    description: "For shops ready to scale their B2B pipeline.",
    features: [
      "200 personalized postcards / mo",
      "Everything in Starter",
      "Reorder automation",
      "Vendor price comparison",
      "Instant client quoting",
      "Priority support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Scale",
    price: 797,
    description: "Full-stack automation for high-volume shops.",
    features: [
      "Unlimited postcards",
      "Everything in Growth",
      "Dedicated account manager",
      "Art approval workflows",
      "Analytics dashboard",
      "Custom campaign templates",
    ],
    cta: "Book a Demo",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="bg-transparent py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-3">
              Pricing
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
              Simple, transparent pricing.
            </h2>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              No setup fees. No hidden costs. Cancel any time.
            </p>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={[
                  "relative flex flex-col rounded-2xl p-8 shadow-diffuse transition-all duration-300",
                  plan.popular
                    ? "bg-charcoal text-white border-2 border-teal shadow-diffuse-lg scale-[1.03]"
                    : "bg-white/80 backdrop-blur-sm border border-border hover:shadow-diffuse-md",
                ].join(" ")}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-teal px-4 py-1 text-xs font-bold text-white shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan name + price */}
                <p
                  className={`text-xs font-bold uppercase tracking-widest mb-3 ${plan.popular ? "text-teal" : "text-muted"}`}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <span
                    className={`text-4xl font-extrabold tracking-tight ${plan.popular ? "text-white" : "text-charcoal"}`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`text-sm mb-1.5 ${plan.popular ? "text-white/60" : "text-muted"}`}
                  >
                    / mo
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed mb-7 ${plan.popular ? "text-white/70" : "text-muted"}`}
                >
                  {plan.description}
                </p>

                {/* Feature list */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Check
                        size={15}
                        className="flex-shrink-0 mt-0.5 text-teal"
                        strokeWidth={2.5}
                      />
                      <span
                        className={`text-sm leading-snug ${plan.popular ? "text-white/85" : "text-charcoal"}`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackBookDemoClick(`pricing_${plan.name.toLowerCase()}`)}
                  className={[
                    "inline-flex items-center justify-center rounded-full py-3 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]",
                    plan.popular
                      ? "bg-teal text-white hover:bg-teal-dark shadow-md shadow-teal/25"
                      : "bg-charcoal text-white hover:bg-charcoal-soft shadow-diffuse",
                  ].join(" ")}
                >
                  {plan.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Footer note */}
        <FadeIn delay={0.35}>
          <p className="mt-10 text-center text-sm text-muted">
            All plans include a{" "}
            <span className="font-semibold text-charcoal">14-day free trial</span>
            . No credit card required.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
