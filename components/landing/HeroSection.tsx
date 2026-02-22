"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import { Button } from "@/components/ui/button";
import "@/lib/GSAPAnimations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Sparkles } from "lucide-react";
import { useRef } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef(null);

  useGSAP(() => {
    const headingElement = heroRef?.current?.querySelector("h1");
    if (headingElement) {
      SplitText.create(headingElement, {
        type: "lines, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.words, {
            duration: 0.6,
            y: 10,
            opacity: 0.5,
            filter: "blur(6px)",
            autoAlpha: 0,
            stagger: 0.06,
          });
        },
      });
    }

    if (heroRef?.current && caseStudiesRef?.current) {
      gsap.effects.fadeUpOnScroll(caseStudiesRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="item-center flex flex-col flex-nowrap p-5">
      <div
        ref={heroRef}
        className="hero space-y-4 pt-[116px] pb-[48px] md:pt-[128px] md:pb-[128px] md:text-center lg:pt-[140px] lg:pb-[96px]"
      >
        <SectionHeading
          badge="AI Strategy & Development"
          heading="AI Transformation Partner for Growing Businesses"
          description="Rinovea is a next-generation technology partner helping product-driven companies build modern web,
mobile, cloud, and AI applications - crafted with clarity, engineered for scale.
From MVPs to GCCs, we’re your product ally from idea to impact."
          icon={Sparkles}
          size="lg"
          align="center"
          as="h1"
          className="heading max-w-4/5 mx-auto"
          headingClassName="md:mx-auto md:w-2/3 leading-tight"
          showDescriptionToScreenReaders={true}
        />

        <div
          aria-label="Call to action buttons"
          className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-center"
        >
          <Button
            aria-describedby="founder-cta-description"
            type="button"
            className="cursor-pointer"
          >
            Talk to our founder
          </Button>
          <Button
            aria-describedby="case-studies-cta-description"
            type="button"
            className="cursor-pointer"
            variant={"outline"}
          >
            View Case Studios
          </Button>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
