"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

const faqs = [
  {
    q: "How does atonomi find the right local businesses to target?",
    a: "We scrape verified business data from public directories in your target zip codes, then filter by industry, recency, and web presence to surface the highest-intent prospects first — the ones most likely to need branded apparel or custom print.",
  },
  {
    q: "What do the AI-generated postcards actually look like?",
    a: "Each postcard features the prospect's own logo printed on a premium hoodie, t-shirt, or hat — rendered in photorealistic AI mockups. They receive something that looks custom-made just for them, because it is. Recipients scan the QR code and land on a personalised page that says \"We designed something just for you.\"",
  },
  {
    q: "How quickly will I start seeing new client inquiries?",
    a: "Most shops see their first inbound inquiry within 7–14 days of their first campaign drop. Full ROI typically materializes in the first 30–60 days as prospects scan QR codes, visit personalized landers, and convert into paying accounts.",
  },
  {
    q: "Do I need to manage printing vendors or postage myself?",
    a: "No. atonomi handles vendor selection, price comparison, print production, and postage automatically. You set the campaign parameters — zip codes, industry, monthly volume — and we handle every step from mockup to mailbox.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No long-term contracts. All plans are month-to-month and you can upgrade, downgrade, or cancel at any time — no questions asked. Most shops stay because the ROI speaks for itself.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-3">
              FAQ
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
              Questions answered.
            </h2>
          </div>
        </FadeIn>

        {/* Accordion */}
        <FadeIn delay={0.1}>
          <div className="divide-y divide-border">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-[15px] font-semibold leading-snug transition-colors ${isOpen ? "text-teal" : "text-charcoal group-hover:text-teal"}`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 ${
                        isOpen
                          ? "border-teal bg-teal text-white"
                          : "border-border bg-white text-muted group-hover:border-teal group-hover:text-teal"
                      }`}
                    >
                      {isOpen ? <Minus size={13} strokeWidth={2.5} /> : <Plus size={13} strokeWidth={2.5} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="pb-5 text-[15px] text-muted leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
