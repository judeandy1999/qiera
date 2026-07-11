import { Hero } from "@/components/sections/Hero";
import { IntelligenceSection } from "@/components/sections/IntelligenceSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { LeveragesSection } from "@/components/sections/LeveragesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntelligenceSection />
      <ProcessSection />
      <SolutionsSection />
      <LeveragesSection />
    </>
  );
}
