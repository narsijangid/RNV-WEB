"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const solutions = [
    {
        id: "fintech",
        name: "FINTECH",
        subtitle: "Financial Technology Solutions",
        shortDesc: "Improving financial services like lending, payments, and investments with secure tech.",
        fullDesc: "This industry uses technology to improve financial services like lending, payments, investments, and compliance. It makes borrowing easier and ensures fast, secure transactions.",
        image: "https://londoncg.com/hubfs/Imagenes%20MS%20(blog)/Octubre-2024/Fintech-qu%C3%A9-son-y-c%C3%B3mo-impulsar-este-servicio-financiero/fintech-que-son-y-como-impulsar-este-servicio-financiero.png",
        gradient: "from-[#4F1DE2] via-[#2D1B69] to-[#1A1140]",
        delay: 0,
    },
    {
        id: "healthtech",
        name: "HEALTHTECH",
        subtitle: "Healthcare Digital Transformation",
        shortDesc: "Improving patient care and efficiency through innovative digital healthcare tools.",
        fullDesc: "HealthTech uses digital tools in healthcare to improve patient care and efficiency. It makes healthcare more accessible, connected, and personalized.",
        image: "https://www.statnews.com/wp-content/uploads/2025/03/AdobeStock_805863545-768x432.jpeg",
        gradient: "from-[#1E293B] to-[#0F172A]",
        delay: 0.1,
    },
    {
        id: "edtech",
        name: "EDTECH",
        subtitle: "Educational Technology",
        shortDesc: "Enhancing the learning experience with engaging and personalized digital tools.",
        fullDesc: "EdTech uses digital tools to improve learning. It makes education more engaging, personalized, and accessible.",
        image: "https://st5.depositphotos.com/10614052/69086/i/450/depositphotos_690863498-stock-photo-man-tablet-computer-virtual-screen.jpg",
        gradient: "from-[#0F172A] to-[#1E1B4B]",
        delay: 0.2,
    },
    {
        id: "ecommerce",
        name: "E-COMMERCE",
        subtitle: "Digital Retail Transformation",
        shortDesc: "Transforming online retail with secure payments and seamless customer experiences.",
        fullDesc: "E-commerce uses digital platforms to transform the way businesses sell products and services online. It enhances customer experience through secure payments, seamless browsing, and efficient delivery systems.",
        image: "https://img.freepik.com/free-photo/black-friday-sales-sign-neon-light_23-2151833073.jpg?semt=ais_user_personalization&w=740&q=80",
        gradient: "from-[#1D4ED8] to-[#1E3A8A]",
        delay: 0.3,
    },
    {
        id: "enterprise-saas",
        name: "ENTERPRISE SAAS",
        subtitle: "Cloud-Based Business Tools",
        shortDesc: "Streamlining business operations and collaboration with smart cloud technologies.",
        fullDesc: "Enterprise SaaS offers cloud-based tools to streamline business operations. It improves efficiency, collaboration, and decision-making through automation and smart technologies.",
        image: "https://www.denovers.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fw43feo7g%2Fproduction%2F427113bedf9be1431fced8cd921f61e68c49c07e-3000x1989.png%3Ffit%3Dmax%26auto%3Dformat&w=1600&q=75",
        gradient: "from-[#312E81] to-[#1E1B4B]",
        delay: 0.4,
    },
];

export function IndustrySolutionsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".solution-card-wrapper");

        cards.forEach((card: any) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            });
        });
    }, { scope: containerRef });

    return (
        <section className="py-20 px-4 bg-transparent overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Industries <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">We Serve</span>
                    </h2>
                    <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-lg font-medium leading-relaxed">
                        Driving global innovation across Finance, Healthcare, EdTech, and SaaS with <br className="hidden md:block" />
                        next-generation technology solutions engineered for scale and impact.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24 items-start px-4 md:px-8"
                >
                    {/* Left Column */}
                    <div className="space-y-24">
                        <SolutionCard solution={solutions[0]} />
                        <SolutionCard solution={solutions[2]} />
                        <SolutionCard solution={solutions[4]} />
                    </div>

                    {/* Right Column (Offset) */}
                    <div className="space-y-24 md:mt-32">
                        <SolutionCard solution={solutions[1]} />
                        <SolutionCard solution={solutions[3]} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SolutionCard({ solution }: { solution: typeof solutions[0] }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);
    const infoCardRef = useRef<HTMLDivElement>(null);

    const [isHovered, setIsHovered] = useState(false);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        if (!isHovered) {
            setDisplayText("");
            return;
        }

        let index = 0;
        const text = solution.fullDesc;
        const interval = setInterval(() => {
            if (index <= text.length) {
                setDisplayText(text.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 10); // Fast typing speed

        return () => clearInterval(interval);
    }, [isHovered, solution.fullDesc]);

    const handleMouseEnter = () => {
        setIsHovered(true);
        gsap.to(infoCardRef.current, {
            y: "40%",
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
        });
        gsap.to(labelRef.current, {
            y: "-140%",
            scale: 0.95,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        });
        gsap.to(cardRef.current, {
            y: -8,
            duration: 0.6,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        gsap.to(infoCardRef.current, {
            y: "110%",
            opacity: 0,
            scale: 0.98,
            duration: 0.8,
            ease: "power2.inOut"
        });
        gsap.to(labelRef.current, {
            y: "50%",
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "power2.inOut"
        });
        gsap.to(cardRef.current, {
            y: 0,
            duration: 0.6,
            ease: "power2.inOut"
        });
    };

    return (
        <div className="solution-card-wrapper relative mx-auto max-w-[380px]">
            {/* The Main Card */}
            <div
                ref={cardRef}
                className="group relative aspect-[1.12/1] rounded-[32px] overflow-hidden cursor-default shadow-2xl transition-all duration-500 bg-[#0A0A0B]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Background Image - Full Cover */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={solution.image}
                        alt={solution.name}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                    />
                </div>

                {/* Subtle Gradient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-20 z-[1]`} />

                {/* Internal Glow Effect */}
                <div className="absolute inset-0 border border-white/20 rounded-[32px] pointer-events-none z-[3]" />
            </div>

            <div
                ref={labelRef}
                className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-fit min-w-[180px] px-8 h-[54px] bg-white/20 backdrop-blur-md backdrop-brightness-110 border border-white/20 rounded-2xl shadow-xl flex items-center justify-center z-10 whitespace-nowrap"
            >
                <span className="text-orange-500 font-extrabold tracking-tight text-lg uppercase">
                    {solution.name}
                </span>
            </div>

            <div
                ref={infoCardRef}
                className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[110%] w-[120%] min-h-[140px] bg-white/20 backdrop-blur-md backdrop-brightness-125 backdrop-saturate-150 border border-white/10 rounded-[32px] p-6 shadow-2xl opacity-0 scale-[0.98] flex items-center justify-center text-center z-[5] pointer-events-none"
            >
                <p className="text-slate-900 text-[13px] md:text-sm font-medium leading-relaxed">
                    {displayText}
                </p>
            </div>
        </div>
    );
}
