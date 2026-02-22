"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
    {
        id: 1,
        value: 10,
        suffix: "+",
        label: "Websites Built",
        icon: "https://r2-storage.dignizant.com/dev/webBuild.svg",
    },
    {
        id: 2,
        value: 10,
        suffix: "+",
        label: "Skilled Experts",
        icon: "https://r2-storage.dignizant.com/dev/teamMember.svg",
    },
    {
        id: 3,
        value: 97,
        suffix: "%",
        label: "Client Satisfaction",
        icon: "https://r2-storage.dignizant.com/dev/review.svg",
    },
    {
        id: 4,
        value: 5,
        suffix: "+",
        label: "Happy Global Clients",
        icon: "https://r2-storage.dignizant.com/dev/Happy%20Global%20Clients.svg",
    },
];

export default function StatsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const statItems = gsap.utils.toArray(".stat-item") as HTMLElement[];

        // Animation for the whole section
        gsap.from(".stats-header", {
            opacity: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            }
        });

        // Animation for items and counters
        statItems.forEach((item, index) => {
            const counter = item.querySelector(".counter") as HTMLElement;
            const targetValue = parseInt(counter.getAttribute("data-target") || "0");

            gsap.from(item, {
                opacity: 0,
                y: 40,
                duration: 0.8,
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                }
            });

            // Animated counter with fast-to-slow effect
            const countObj = { val: 0 };
            gsap.to(countObj, {
                val: targetValue,
                duration: 2.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                },
                onUpdate: () => {
                    counter.innerText = Math.floor(countObj.val).toString();
                }
            });

            // Spotlight effect logic
            const spotlight = item.querySelector(".spotlight") as HTMLElement;
            item.addEventListener("mousemove", (e: MouseEvent) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                gsap.to(spotlight, {
                    maskImage: `radial-gradient(150px circle at ${x}px ${y}px, black 20%, transparent 100%)`,
                    duration: 0.2,
                    ease: "power1.out"
                });
            });

            item.addEventListener("mouseleave", () => {
                gsap.to(spotlight, {
                    maskImage: `radial-gradient(0px circle at 0 0, black 0%, transparent 0%)`,
                    duration: 0.5
                });
            });
        });
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="py-20 px-4 relative overflow-hidden"
            aria-labelledby="stats-heading"
        >
            <div className="max-w-6xl mx-auto">
                <div className="stats-header text-center mb-16 space-y-4">
                    <h2
                        id="stats-heading"
                        className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
                    >
                        Proven Track Record That Speaks for Itself
                    </h2>
                    <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        As one of the best software development agencies, we&apos;ve built digital products that drive growth, retention, and results across industries and geographies.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="stat-item group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden cursor-default"
                        >
                            {/* Spotlight Jali/Mesh Background Pattern */}
                            <div
                                className="spotlight absolute inset-0 opacity-15 pointer-events-none transition-opacity duration-300"
                                style={{
                                    WebkitMaskImage: 'radial-gradient(0px circle at 0 0, black 0%, transparent 0%)',
                                    maskImage: 'radial-gradient(0px circle at 0 0, black 0%, transparent 0%)'
                                }}
                            >
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
                                    backgroundSize: `20px 20px`,
                                }}></div>
                            </div>

                            <div className="relative z-10 flex flex-col items-start space-y-4">
                                <div className="w-16 h-16 rounded-xl flex items-center justify-center p-3 transition-transform duration-500 group-hover:scale-110">
                                    <img
                                        src={stat.icon}
                                        alt={stat.label}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <div className="text-4xl font-extrabold text-slate-900 flex items-baseline">
                                        <span className="counter" data-target={stat.value}>0</span>
                                        <span className="text-primary">{stat.suffix}</span>
                                    </div>
                                    <p className="text-slate-600 font-medium text-lg leading-tight">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 bg-radial-gradient from-blue-50/50 to-transparent opacity-50" />
        </section>
    );
}
