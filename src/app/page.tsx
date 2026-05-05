import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionFlow } from "@/components/SolutionFlow";
import { PostcardShowcase } from "@/components/PostcardShowcase";
import { FeatureGrid } from "@/components/FeatureGrid";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ProblemSection />
      <SolutionFlow />
      <PostcardShowcase />
      <FeatureGrid />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
