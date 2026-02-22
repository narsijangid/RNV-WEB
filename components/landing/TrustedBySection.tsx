import React from "react";
import {
    Building2,
    Eye,
    GraduationCap,
    Package,
    Handshake,
    Sparkles,
    Zap,
    Bot
} from "lucide-react";
import { cn } from "@/lib/utils";

const companies = [
    { name: "CultBooking", color: "text-blue-500", icon: Building2 },
    { name: "W OPTICS", color: "text-slate-900", icon: Eye },
    { name: "studentink", color: "text-orange-500", icon: GraduationCap },
    { name: "SUBTRAID", color: "text-emerald-600", icon: Package },
    { name: "PVADeals", color: "text-indigo-700", icon: Handshake },
    { name: "OSSA", color: "text-rose-600", icon: Sparkles },
    { name: "rukkor", color: "text-amber-600", icon: Zap },
    { name: "LSP.ai", color: "text-violet-600", icon: Bot },
];

export const TrustedBySection = () => {
    return (
        <section className="w-full py-24 bg-background overflow-hidden relative border-y border-border/50">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-muted/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center justify-center mb-16">
                    <div className="inline-flex items-center rounded-full border border-border bg-card/50 backdrop-blur-xs px-5 py-1.5 text-[10px] tracking-[0.2em] font-bold text-muted-foreground uppercase shadow-sm transition-all hover:border-primary/30 mb-4">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-primary/60 mr-3 animate-pulse" />
                        Trusted by Forward-Thinking Brands Worldwide
                    </div>
                </div>

                <div className="relative">
                    {/* Edge Gradients for smooth transition */}
                    <div className="absolute left-0 top-0 bottom-0 w-40 bg-linear-to-r from-background to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-40 bg-linear-to-l from-background to-transparent z-20 pointer-events-none" />

                    <div className="flex overflow-hidden group">
                        <div
                            className="flex items-center gap-24 animate-marquee py-6 whitespace-nowrap"
                            style={{ "--duration": "60s", "--gap": "6rem" } as React.CSSProperties}
                        >
                            {[...companies, ...companies, ...companies].map((company, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 group/item"
                                >
                                    <div className={cn(
                                        "p-2.5 rounded-2xl bg-card border border-border/50 shadow-2xs group-hover/item:shadow-lg transition-all duration-500",
                                        "flex items-center justify-center w-14 h-14 grayscale group-hover/item:grayscale-0",
                                        "group-hover/item:border-primary/20"
                                    )}>
                                        <company.icon className={cn("w-7 h-7 transition-all duration-500", company.color)} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={cn(
                                            "text-xl font-bold tracking-tight grayscale group-hover/item:grayscale-0 transition-all duration-500 opacity-40 group-hover/item:opacity-100",
                                            "font-sans text-foreground"
                                        )}>
                                            {company.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
