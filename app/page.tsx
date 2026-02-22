import CaseStudiesSection from "@/components/landing/CaseStudiesSection";
import ContactSection from "@/components/landing/ContactSection";
import HeroSection from "@/components/landing/HeroSection";
import { IndustrySolutionsSection } from "@/components/landing/IndustrySolutionsSection";
import { TrustedBySection } from "@/components/landing/TrustedBySection";
import { FAQSection } from "@/components/landing/FAQSection";
import ProcessSection from "@/components/landing/ProcessSection";
import StatsSection from "@/components/landing/StatsSection";
import TechStackSection from "@/components/landing/TechStackSection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata("home");

export default function Home() {
  return (
    <main id="main-content" role="main">
      <div className="mx-auto max-w-7xl">
        <HeroSection />
        <TrustedBySection />
        <IndustrySolutionsSection />
        <StatsSection />
        <CaseStudiesSection />
        <ProcessSection />
        <TestimonialSection />
        <TechStackSection />
        <FAQSection />
        <ContactSection />
      </div>
    </main>
  );
}
