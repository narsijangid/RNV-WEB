"use client";

import React, { useState } from "react";
import {
    BookOpen,
    GraduationCap,
    Users,
    Zap,
    Smartphone,
    LineChart,
    ShieldCheck,
    Layers,
    RefreshCw,
    ArrowRight,
    ChevronDown,
    Monitor,
    Video,
    Target,
    FileText
} from "lucide-react";
import Link from "next/link";

export default function EducationPage() {
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
                            EDUCATION & ELEARNING <br />
                            <span className="text-orange-500 text-2xl md:text-4xl">SOFTWARE DEVELOPMENT</span>
                        </h1>
                        <p className="text-base md:text-lg text-muted-foreground dark:text-gray-300 leading-relaxed max-w-xl">
                            Rinovea empowers educational institutions and corporate trainers with cutting-edge eLearning solutions. We build scalable, interactive, and personalized learning platforms.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="px-7 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-orange-600/20 text-sm">
                                Build eLearning App
                            </button>
                        </div>
                    </div>

                    {/* Right Image/Banner */}
                    <div className="lg:w-1/2 relative animate-in fade-in slide-in-from-right-8 duration-1000">
                        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                            <img
                                src="https://dignizant.com/_next/image?url=https%3A%2F%2Fr2-storage.dignizant.com%2Fdev%2FEducationSoftwareDevelopment.webp&w=3840&q=100"
                                alt="Education & eLearning"
                                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-600/5 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            {/* 2. Education Solutions Section */}
            <section className="py-24 bg-muted/30 dark:bg-transparent">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase">
                            Future-Ready eLearning <span className="text-orange-600">Solutions for Modern Learners</span>
                        </h2>
                        <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
                        <p className="text-muted-foreground max-w-3xl mx-auto text-lg pt-4">
                            <span className="font-bold text-orange-600">Rinovea</span> develops intuitive Learning Management Systems (LMS) and custom educational tools. From K-12 to higher education and corporate training, we simplify digital learning.
                        </p>
                    </div>

                    <EducationAccordion />
                </div>
            </section>

            {/* 3. Why Educators Rely Section */}
            <section className="py-24 bg-muted/20 dark:bg-transparent border-t border-border">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
                            Why Top Educators Rely on <span className="text-orange-600">Rinovea</span>?
                        </h2>
                        <p className="text-muted-foreground max-w-3xl mx-auto mt-6 text-lg">
                            We build secure, data-driven <span className="text-orange-600 font-bold underline decoration-2 underline-offset-4">eLearning</span> platforms with global accessibility and advanced assessment tools.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                        {[
                            {
                                icon: <BookOpen className="w-10 h-10 p-2 bg-cyan-500/10 text-cyan-500 rounded-lg" />,
                                title: "Curriculum-Focused UX",
                                desc: "Designed to enhance learning outcomes through structured and engaging user flows."
                            },
                            {
                                icon: <Zap className="w-10 h-10 p-2 bg-orange-500/10 text-orange-500 rounded-lg" />,
                                title: "Scalable Infrastructure",
                                desc: "Support thousands of students and teachers simultaneously with 99.9% uptime."
                            },
                            {
                                icon: <Target className="w-10 h-10 p-2 bg-purple-500/10 text-purple-500 rounded-lg" />,
                                title: "Personalized Learning",
                                desc: "AI-driven paths that adapt to each student's unique learning pace and style."
                            },
                            {
                                icon: <RefreshCw className="w-10 h-10 p-2 bg-green-500/10 text-green-500 rounded-lg" />,
                                title: "Seamless Integrations",
                                desc: "Connect easily with Zoom, Google Classroom, payment gateways, and CRM systems."
                            },
                            {
                                icon: <Layers className="w-10 h-10 p-2 bg-indigo-500/10 text-indigo-500 rounded-lg" />,
                                title: "Data-Driven Insights",
                                desc: "Comprehensive analytics to track student progress and institutional performance."
                            },
                            {
                                icon: <ShieldCheck className="w-10 h-10 p-2 bg-orange-500/10 text-orange-500 rounded-lg" />,
                                title: "Secure & Compliant",
                                desc: "Built with GDPR, FERPA, and top-tier security standards for student data privacy."
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
                            <h2 className="text-3xl md:text-5xl font-bold">Ready to Transform Education?</h2>
                            <p className="text-xl text-orange-100/90 max-w-2xl mx-auto">
                                Partner with Rinovea to build the future of digital learning and reach students globally.
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

function EducationAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const solutions = [
        { title: "Learning Management Systems (LMS)", desc: "Comprehensive platforms for course management, student enrollment, and automated grading for schools and companies." },
        { title: "Virtual Classrooms & Live Teaching", desc: "Interactive live streaming with whiteboards, breakout rooms, and real-time polling for a real classroom feel." },
        { title: "Mobile Learning Apps", desc: "Bite-sized learning experiences with push notifications, offline access, and mobile-responsive content." },
        { title: "Student Assessment & Exam Portals", desc: "Secure online testing with proctoring services, MCQ engines, and detailed performance reports." },
        { title: "Gamified Learning Experiences", desc: "Increase student motivation with badges, leaderboards, and interactive game-based educational modules." },
        { title: "AR/VR Educational Content", desc: "Immersive virtual reality labs and augmented reality textbooks for complex subject visualization." },
        { title: "Corporate Training Portals", desc: "Tailored skill-development platforms with compliance tracking and employee certification paths." },
        { title: "E-library & Resource Management", desc: "Centralized digital repositories for textbooks, research papers, and multimedia educational assets." },
        { title: "Parent-Teacher Communication Hubs", desc: "Secure portals for attendance tracking, homework assignment, and direct messaging between staff and families." },
        { title: "Subscription & Monetization Models", desc: "Integrated payment gateways for selling individual courses, bundles, or monthly institutional access." },
        { title: "AI-Powered Course Recommendations", desc: "Suggest modules based on student interests and previous performance to drive higher completion rates." },
        { title: "K-12 & Higher Ed Portals", desc: "Dedicated student and faculty dashboards for grade management, scheduling, and administrative tasks." }
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
