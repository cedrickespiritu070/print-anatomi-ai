"use client";

import {
  TrendingDown,
  RefreshCw,
  Calculator,
  Target,
  FileText,
  Zap,
  CheckSquare,
  CalendarDays,
  BarChart2,
} from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const primaryFeatures = [
  {
    icon: TrendingDown,
    title: "Vendor Price Comparison",
    description:
      "Stop checking 4 supplier sites per order. We show you the cheapest blank in seconds.",
    badge: null,
  },
  {
    icon: RefreshCw,
    title: "Reorder Automation",
    description:
      "Your best customers already want to reorder. We make sure you never miss the window.",
    badge: "Popular",
  },
  {
    icon: Calculator,
    title: "Instant Quoting",
    description:
      "Turn a 20-minute back-and-forth into a 30-second auto-quote customers approve on the spot.",
    badge: "Automated",
  },
  {
    icon: Target,
    title: "Prospect Scoring",
    description:
      "AI ranks local businesses by likelihood to buy — so your postcards go to the hottest leads first.",
    badge: "AI",
  },
  {
    icon: FileText,
    title: "Campaign Templates",
    description:
      "Industry-specific postcard templates for restaurants, salons, retail, and more — ready to deploy.",
    badge: null,
  },
  {
    icon: Zap,
    title: "Same-Day Dispatch",
    description:
      "Orders placed before 2 PM ship same day. Keep your turnaround promises without the stress.",
    badge: "Fast",
  },
];

const secondaryFeatures = [
  {
    icon: CheckSquare,
    title: "Art Approval & Order Lock-In",
    description:
      "Eliminate scope creep. Clients approve designs digitally before production starts.",
    badge: "Automated",
  },
  {
    icon: CalendarDays,
    title: "Production Scheduling",
    description:
      "Ditch the whiteboard. A drag-and-drop scheduler built for high-volume print shops.",
    badge: null,
  },
  {
    icon: BarChart2,
    title: "Analytics Dashboard",
    description:
      "Track every cent. See the exact ROI of your postcard campaigns in real-time.",
    badge: "New",
  },
];

const badgeColors: Record<string, string> = {
  Popular:   "bg-teal text-white",
  Automated: "bg-teal-light text-teal-dark",
  New:       "bg-charcoal text-white",
  AI:        "bg-purple-100 text-purple-700",
  Fast:      "bg-orange-100 text-orange-700",
};

function FeatureCard({
  feature,
  delay,
}: {
  feature: (typeof primaryFeatures)[number];
  delay: number;
}) {
  const Icon = feature.icon;
  const badgeClass = feature.badge ? badgeColors[feature.badge] : "";
  return (
    <FadeIn delay={delay}>
      <div className="group rounded-2xl bg-white border border-border p-7 flex flex-col gap-4 shadow-diffuse hover:shadow-diffuse-md hover:border-teal/30 transition-all h-full">
        <div className="flex items-center justify-between">
          <div className="w-11 h-11 rounded-xl bg-teal-light flex items-center justify-center text-teal-dark group-hover:bg-teal group-hover:text-white transition-colors">
            <Icon size={20} />
          </div>
          {feature.badge && (
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}>
              {feature.badge}
            </span>
          )}
        </div>
        <h3 className="font-semibold text-charcoal text-lg leading-snug">
          {feature.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed">
          {feature.description}
        </p>
      </div>
    </FadeIn>
  );
}

export function FeatureGrid() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-3">
              Platform Features
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
              Everything a print shop owner needs.
              <br />
              Nothing they don&apos;t.
            </h2>
          </div>
        </FadeIn>

        {/* Primary — 3 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {primaryFeatures.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={i * 0.07} />
          ))}
        </div>

        {/* Secondary divider */}
        <FadeIn delay={0.1}>
          <div className="mt-14 mb-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted">
              Shop Operations
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </FadeIn>

        {/* Secondary — 3 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {secondaryFeatures.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
