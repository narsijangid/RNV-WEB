"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const row1 = [
    { name: "Docker", logo: "https://www.vectorlogo.zone/logos/docker/docker-official.svg" },
    { name: "Elastic Search", logo: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg" },
    { name: "ExpressJS", logo: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
    { name: "Angular", logo: "https://www.vectorlogo.zone/logos/angular/angular-icon.svg" },
    { name: "VueJS", logo: "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" },
    { name: "NodeJS", logo: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
    { name: "React", logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
];

const row2 = [
    { name: "Github", logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg" },
    { name: "Gitlab", logo: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg" },
    { name: "Google Cloud", logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
    { name: "Jira", logo: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg" },
    { name: "AWS", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
    { name: "Kubernetes", logo: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" },
    { name: "TypeScript", logo: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" },
];

export default function TechStackSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Row 1: Left to Right movement synced with scroll
        gsap.fromTo(row1Ref.current,
            { xPercent: 0 },
            {
                xPercent: -40,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                },
            }
        );

        // Row 2: Right to Left movement synced with scroll
        gsap.fromTo(
            row2Ref.current,
            { xPercent: -40 },
            {
                xPercent: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                },
            }
        );
    }, { scope: containerRef });

    const TechCard = ({ item }: { item: typeof row1[0] }) => (
        <div className="flex items-center gap-4 bg-white border border-slate-100 shadow-sm rounded-2xl px-8 py-5 min-w-[280px] hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 flex items-center justify-center">
                <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-slate-700">{item.name}</span>
        </div>
    );

    return (
        <section
            ref={containerRef}
            className="py-24 bg-slate-50/50 overflow-hidden"
            aria-labelledby="tech-stack-heading"
        >
            <div className="max-w-6xl mx-auto px-4 mb-16">
                <div className="text-center space-y-4">
                    <h2
                        id="tech-stack-heading"
                        className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
                    >
                        Technologies We Excel In
                    </h2>
                    <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        Our engineers work with the most reliable and in-demand technologies—empowering you with
                        scalable, secure, and modern solutions built for growth and adaptability.
                    </p>
                </div>
            </div>

            <div className="space-y-8">
                {/* Row 1 */}
                <div className="flex gap-8 whitespace-nowrap" ref={row1Ref}>
                    {[...row1, ...row1, ...row1].map((item, idx) => (
                        <TechCard key={`row1-${idx}`} item={item} />
                    ))}
                </div>

                {/* Row 2 */}
                <div className="flex gap-8 whitespace-nowrap" ref={row2Ref}>
                    {[...row2, ...row2, ...row2].map((item, idx) => (
                        <TechCard key={`row2-${idx}`} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
