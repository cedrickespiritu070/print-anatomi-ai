import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionFlow } from "@/components/SolutionFlow";
import { FeatureGrid } from "@/components/FeatureGrid";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ProblemSection />
      <SolutionFlow />
      <FeatureGrid />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
