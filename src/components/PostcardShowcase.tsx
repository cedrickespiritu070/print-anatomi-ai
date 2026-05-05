"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { QrCode, Printer, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "AI-Generated Mockup",
    description: "Their logo on premium apparel — designed in seconds.",
  },
  {
    icon: QrCode,
    title: "Unique QR Code",
    description: "Every postcard links to a personalized landing page.",
  },
  {
    icon: Printer,
    title: "Printed & Mailed For You",
    description: "We handle print, postage, and delivery. Zero work on your end.",
  },
];

export function PostcardShowcase() {
  return (
    <section className="bg-light-neutral/80 backdrop-blur-sm py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-3">
              The Postcard
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
              A physical piece of mail they{" "}
              <span className="text-teal">can&apos;t ignore.</span>
            </h2>
            <p className="mt-5 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Every postcard is personalized with the prospect&apos;s branding.
              No generic flyers. No cold emails. Just a stunning piece of mail
              that makes them say &ldquo;how did they do this?&rdquo;
            </p>
          </div>
        </FadeIn>

        {/* Postcard images */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16">
          {/* Front */}
          <FadeIn delay={0.1} className="w-full sm:w-1/2 max-w-md">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-teal/20 to-purple-400/10 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden shadow-diffuse-lg border border-border rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/assets/postcard-front.jpg"
                  alt="Postcard front — AI mockup with prospect logo on apparel"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-muted">
                Front — AI Mockup + QR Code
              </p>
            </div>
          </FadeIn>

          {/* Back */}
          <FadeIn delay={0.2} className="w-full sm:w-1/2 max-w-md">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-purple-400/10 to-teal/20 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden shadow-diffuse-lg border border-border rotate-[1deg] hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/assets/postcard-back.jpg"
                  alt="Postcard back — professional layout with CTA and contact info"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-muted">
                Back — Professional CTA Layout
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-3 gap-5">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-border p-6 flex flex-col gap-3 shadow-diffuse hover:shadow-diffuse-md transition-all">
                  <div className="w-11 h-11 rounded-xl bg-teal-light flex items-center justify-center text-teal-dark">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-charcoal text-[16px]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
