"use client";

import React, { useState } from "react";
import {
    ShoppingCart,
    Package,
    Users,
    Zap,
    Smartphone,
    LineChart,
    ShieldCheck,
    Layers,
    RefreshCw,
    ArrowRight,
    ChevronRight,
    ChevronDown,
    Monitor,
    Headphones,
    CreditCard,
    Target
} from "lucide-react";
import Link from "next/link";

export default function EcommercePage() {
    return (
        <main className="min-h-screen bg-transparent pt-20">
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden bg-primary/5 dark:bg-transparent text-foreground dark:text-white py-12 md:py-16">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full skew-x-[-20deg] bg-gradient-to-r from-orange-600/10 to-orange-400/5 transform translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 skew-y-[10deg] bg-orange-500/5 blur-3xl"></div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-10">
                    {/* Left Content */}
                    <div className="lg:w-1/2 text-left space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight uppercase">
                            ECOMMERCE SOFTWARE <br />
                            <span className="text-orange-500 text-2xl md:text-4xl">DEVELOPMENT COMPANY</span>
                        </h1>
                        <p className="text-base md:text-lg text-muted-foreground dark:text-gray-300 leading-relaxed max-w-xl">
                            From custom storefronts to scalable mobile commerce platforms, Rinovea empowers your retail business with world-class eCommerce software development.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="px-7 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-orange-600/20 text-sm">
                                Create E-Commerce App
                            </button>
                        </div>
                    </div>

                    {/* Right Image/Banner */}
                    <div className="lg:w-1/2 relative animate-in fade-in slide-in-from-right-8 duration-1000">
                        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2HcJNMNrjDwOEQd_Aelsaq3g35rOlOJDNcg&s"
                                alt="E-Commerce Interface"
                                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-600/5 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            {/* 2. E-Commerce App Development Solutions Section */}
            <section className="py-24 bg-muted/30 dark:bg-transparent">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase">
                            E-Commerce App Development Solutions <span className="text-orange-600">Tailored for Growth and Conversion</span>
                        </h2>
                        <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
                        <p className="text-muted-foreground max-w-3xl mx-auto text-lg pt-4">
                            <span className="font-bold text-orange-600">Rinovea</span> develops flexible, conversion-focused eCommerce platforms tailored for D2C, B2B, and marketplace models. From storefront UX to backend automation, we build systems that grow with your business.
                        </p>
                    </div>

                    <SolutionsAccordion />
                </div>
            </section>

            {/* 3. Why Top Retailers Rely on Section */}
            <section className="py-24 bg-muted/20 dark:bg-transparent border-t border-border">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
                            Why Top Retailers Rely on <span className="text-orange-600">Rinovea</span> for E-Commerce Excellence?
                        </h2>
                        <p className="text-muted-foreground max-w-3xl mx-auto mt-6 text-lg">
                            We build secure, conversion-focused <span className="text-orange-600 font-bold underline decoration-2 underline-offset-4">eCommerce</span> platforms with fast rollouts, omnichannel integration, and scalable code for D2C, B2C, and B2B brands.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                        {[
                            {
                                icon: <Monitor className="w-10 h-10 p-2 bg-cyan-500/10 text-cyan-500 rounded-lg" />,
                                title: "Retail-Focused Development",
                                desc: "We understand the nuances of B2B, B2C, and D2C online selling."
                            },
                            {
                                icon: <Zap className="w-10 h-10 p-2 bg-orange-500/10 text-orange-500 rounded-lg" />,
                                title: "Quick Go-to-Market",
                                desc: "Our agile teams help launch custom storefronts and platforms faster."
                            },
                            {
                                icon: <Target className="w-10 h-10 p-2 bg-purple-500/10 text-purple-500 rounded-lg" />,
                                title: "Conversion-Centric Design",
                                desc: "From checkout to product discovery, we focus on driving more purchases."
                            },
                            {
                                icon: <RefreshCw className="w-10 h-10 p-2 bg-green-500/10 text-green-500 rounded-lg" />,
                                title: "Omnichannel Integration",
                                desc: "Connect your e-commerce with mobile apps, POS, CRMs, and warehouses."
                            },
                            {
                                icon: <Layers className="w-10 h-10 p-2 bg-indigo-500/10 text-indigo-500 rounded-lg" />,
                                title: "Scalable Engagement Options",
                                desc: "Choose the model that fits — MVP, module-based, or full-suite delivery."
                            },
                            {
                                icon: <ShieldCheck className="w-10 h-10 p-2 bg-orange-500/10 text-orange-500 rounded-lg" />,
                                title: "Secure, Stable Codebase",
                                desc: "All our solutions meet modern e-commerce security and compliance standards."
                            }
                        ].map((reason, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center space-y-4">
                                <div className="mb-4 transform transition-transform hover:scale-110">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-bold text-foreground">{reason.title}</h3>
                                <p className="text-muted-foreground text-base leading-relaxed">
                                    {reason.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-20 bg-background dark:bg-transparent">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="relative z-10 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold">Ready to Revolutionize Your Retail Experience?</h2>
                            <p className="text-xl text-orange-100/90 max-w-2xl mx-auto">
                                Join hands with Rinovea to build a future-ready eCommerce platform that converts visitors into loyal customers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <button className="px-10 py-5 bg-white text-orange-600 font-extrabold rounded-2xl hover:bg-orange-50 transition-all shadow-xl">
                                    Start Your Project
                                </button>
                                <button className="px-10 py-5 bg-orange-500/30 backdrop-blur-md text-white border border-white/20 font-extrabold rounded-2xl hover:bg-orange-500/50 transition-all">
                                    Talk to an Expert
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function SolutionsAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const solutions = [
        { title: "Multi-Vendor Marketplace Development", desc: "Custom-built marketplaces allow multiple sellers to list, manage inventory, track orders, and receive payments securely within a unified platform." },
        { title: "Inventory & Warehouse Integrations", desc: "Real-time inventory management with alerts, batch tracking, FIFO/LIFO settings, and multi-warehouse capabilities." },
        { title: "B2B & B2C eCommerce Platforms", desc: "Specialized platforms catering to different customer segments with tailored pricing and bulk ordering." },
        { title: "Customer Loyalty & Coupon Engines", desc: "Increase retention with smart loyalty programs, tiered rewards, and dynamic coupon generation." },
        { title: "Headless Commerce Architecture", desc: "Separate front-end and back-end for total design flexibility and faster multi-channel deployment." },
        { title: "Mobile Commerce Apps", desc: "High-performance iOS and Android apps with push notifications and seamless checkout." },
        { title: "Shopping Cart & Checkout Modules", desc: "Frictionless checkout experiences with abandoned cart recovery and multi-payment gateways." },
        { title: "Subscription Billing Systems", desc: "Manage recurring payments, tiered plans, and automated invoicing for subscription-based models." },
        { title: "Product Recommendation Engines", desc: "AI-driven product suggestions based on user behavior to increase average order value." },
        { title: "PWA-Based Storefronts", desc: "Fast, reliable, and installable web applications that work offline and feel like native apps." },
        { title: "Order Management Systems", desc: "End-to-end tracking from purchase to delivery with automated shipping label generation." },
        { title: "E-Commerce Analytics Dashboards", desc: "Deep insights into sales, traffic, and customer behavior with real-time data visualization." }
    ];

    return (
        <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution, idx) => (
                <div
                    key={idx}
                    className={`group bg-card rounded-xl border transition-all duration-300 overflow-hidden ${openIndex === idx ? "border-orange-500 shadow-md ring-1 ring-orange-500/20" : "border-border hover:border-orange-500/50"
                        }`}
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
                    >
                        <h3 className={`text-lg font-bold transition-colors ${openIndex === idx ? "text-orange-500" : "text-foreground"}`}>
                            {solution.title}
                        </h3>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === idx ? "text-orange-500 rotate-180" : "text-muted-foreground"
                            }`} />
                    </button>

                    <div
                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <p className="text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                            {solution.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
