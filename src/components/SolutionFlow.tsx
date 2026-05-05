"use client";

import { Database, Sparkles, Mail, BarChart3, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const steps = [
  {
    step: "01",
    icon: Database,
    title: "Scrape Local Businesses",
    description:
      "We pull verified business data — name, address, category, and web presence — from your target zip codes automatically.",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "AI Designs the Mockup",
    description:
      "Our AI generates a custom postcard mockup using the prospect's actual branding, storefront photos, and relevant offers.",
    iconBg: "bg-teal-light text-teal-dark",
  },
  {
    step: "03",
    icon: Mail,
    title: "Print & Mail Automatically",
    description:
      "Postcards go to print and hit their mailbox within days — no vendor calls, no trips to the post office.",
    iconBg: "bg-orange-50 text-orange-600",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Track & Convert",
    description:
      "Each postcard includes a unique QR code and landing page so you know exactly who called and what they ordered.",
    iconBg: "bg-purple-50 text-purple-600",
  },
];

export function SolutionFlow() {
  return (
    /* Transparent so the mesh gradient bleeds through */
    <section id="how-it-works" className="bg-transparent py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-3">
              How It Works
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
              Four steps. Zero manual work.
            </h2>
          </div>
        </FadeIn>

        {/* Steps — glass cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="relative flex flex-col gap-4 rounded-2xl border border-border bg-white/80 backdrop-blur-sm p-6 shadow-diffuse hover:shadow-diffuse-md transition-all h-full">
                  {/* Step number */}
                  <span className="text-xs font-bold tracking-widest text-muted uppercase">
                    Step {step.step}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.iconBg}`}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-charcoal text-[17px] leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector arrow */}
                  {i < steps.length - 1 && (
                    <ArrowRight
                      size={15}
                      className="absolute -right-3 top-1/2 -translate-y-1/2 text-border hidden lg:block"
                    />
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
