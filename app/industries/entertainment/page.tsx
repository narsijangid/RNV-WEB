"use client";

import React, { useState } from "react";
import {
    Play,
    Tv,
    Gamepad2,
    Music,
    Radio,
    Smartphone,
    LineChart,
    ShieldCheck,
    Layers,
    RefreshCw,
    ArrowRight,
    ChevronDown,
    Monitor,
    Zap,
    Target,
    Video
} from "lucide-react";
import Link from "next/link";

export default function EntertainmentPage() {
    return (
        <main className="min-h-screen bg-white pt-20">
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden bg-[#051124] text-white py-12 md:py-16">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full skew-x-[-20deg] bg-gradient-to-r from-orange-600/10 to-orange-400/5 transform translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 skew-y-[10deg] bg-orange-500/5 blur-3xl"></div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-10">
                    {/* Left Content */}
                    <div className="lg:w-1/2 text-left space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight uppercase">
                            ENTERTAINMENT SOFTWARE <br />
                            <span className="text-orange-500 text-2xl md:text-4xl">DEVELOPMENT COMPANY</span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                            Rinovea builds high-performance media and entertainment solutions that captivate audiences. From OTT platforms to live streaming and interactive gaming hubs.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="px-7 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-orange-600/20 text-sm">
                                Build Entertainment App
                            </button>
                        </div>
                    </div>

                    {/* Right Image/Banner */}
                    <div className="lg:w-1/2 relative animate-in fade-in slide-in-from-right-8 duration-1000">
                        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                            <img
                                src="https://media.istockphoto.com/id/2166463582/photo/media-concept-multiple-television-screens-smart-tv-digital-data-streaming.jpg?s=612x612&w=0&k=20&c=oKv8MrH3yV5GulDsIQuAkjevtKHXVMugRcp92CsW8Ss="
                                alt="Entertainment Interface"
                                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-600/5 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            {/* 2. Entertainment Solutions Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
                            Entertainment Tech Solutions <span className="text-orange-600">Designed for Engagement</span>
                        </h2>
                        <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg pt-4">
                            <span className="font-bold text-orange-600">Rinovea</span> specializes in creating immersive digital experiences. We help media giants and startups alike to launch scalable platforms that deliver seamless content globally.
                        </p>
                    </div>

                    <EntertainmentAccordion />
                </div>
            </section>

            {/* 3. Why Top Media Brands Rely Section */}
            <section className="py-24 bg-[#fff7ed] border-t border-orange-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a1e3b] tracking-tight">
                            Why Media Giants Rely on <span className="text-orange-600">Rinovea</span>?
                        </h2>
                        <p className="text-gray-500 max-w-3xl mx-auto mt-6 text-lg">
                            We build secure, low-latency <span className="text-orange-600 font-bold underline decoration-2 underline-offset-4">Streaming</span> platforms with global distribution and interactive features.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                        {[
                            {
                                icon: <Video className="w-10 h-10 p-2 bg-cyan-50 text-cyan-500 rounded-lg" />,
                                title: "Low-Latency Streaming",
                                desc: "Real-time delivery with minimal buffering for live events and gaming."
                            },
                            {
                                icon: <Zap className="w-10 h-10 p-2 bg-orange-50 text-orange-500 rounded-lg" />,
                                title: "High Scalability",
                                desc: "Platforms built to handle millions of concurrent viewers effortlessly."
                            },
                            {
                                icon: <Target className="w-10 h-10 p-2 bg-purple-50 text-purple-500 rounded-lg" />,
                                title: "Audience-Centric UX",
                                desc: "Intuitive designs that keep users hooked and browsing more content."
                            },
                            {
                                icon: <RefreshCw className="w-10 h-10 p-2 bg-green-50 text-green-500 rounded-lg" />,
                                title: "Omnichannel Reach",
                                desc: "Deploy across Web, iOS, Android, Smart TVs, and Gaming Consoles."
                            },
                            {
                                icon: <Layers className="w-10 h-10 p-2 bg-indigo-50 text-indigo-500 rounded-lg" />,
                                title: "Advanced DRM",
                                desc: "State-of-the-art content protection and digital rights management."
                            },
                            {
                                icon: <ShieldCheck className="w-10 h-10 p-2 bg-orange-50 text-orange-500 rounded-lg" />,
                                title: "Secure Content Delivery",
                                desc: "End-to-end encryption and secure cloud hosting for your media assets."
                            }
                        ].map((reason, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center space-y-4">
                                <div className="mb-4 transform transition-transform hover:scale-110">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{reason.title}</h3>
                                <p className="text-gray-500 text-base leading-relaxed">
                                    {reason.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="relative z-10 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold">Ready to Entertain the World?</h2>
                            <p className="text-xl text-orange-100/90 max-w-2xl mx-auto">
                                Partner with Rinovea to build the next-gen entertainment platform that users will love.
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

function EntertainmentAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const solutions = [
        { title: "OTT Platform Development", desc: "Build Netflix-like streaming services with subscription models, multi-device support, and personalized profiles." },
        { title: "Live Streaming Apps", desc: "Real-time video delivery for sports, news, and gaming with interactive live chat and donation features." },
        { title: "Music & Audio Streaming", desc: "High-fidelity audio platforms with curated playlists, offline mode, and robust search functionality." },
        { title: "Smart TV & Set-Top Box Apps", desc: "Specialized applications for Roku, Apple TV, Amazon Fire Stick, and Android TV for a big-screen experience." },
        { title: "eSports & Gaming Portals", desc: "Interactive platforms for tournament management, community forums, and player statistics tracking." },
        { title: "Social Media Entertainment Hubs", desc: "Short-video platforms and community-driven entertainment apps with viral growth features." },
        { title: "Digital Rights Management (DRM)", desc: "Integrate Widevine, FairPlay, and PlayReady to protect your premium video content from piracy." },
        { title: "Ad-Tech & Monetization", desc: "Sophisticated ad-insertion (SSAI/CSAI), pay-per-view, and tiered subscription systems." },
        { title: "Cloud Video Editing Solutions", desc: "Web-based professional video editing tools with cloud rendering and collaborative features." },
        { title: "Augmented Reality (AR) Experiences", desc: "Interactive entertainment apps that blend the digital and physical worlds for gaming and events." },
        { title: "Content Management Systems (CMS)", desc: "Specialized video CMS for managing massive libraries, metadata, and multi-CDN distribution." },
        { title: "Big Data & Viewer Analytics", desc: "Real-time tracking of viewer behavior to drive personalized content recommendations and growth." }
    ];

    return (
        <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution, idx) => (
                <div
                    key={idx}
                    className={`group bg-white rounded-xl border transition-all duration-300 overflow-hidden ${openIndex === idx ? "border-orange-500 shadow-md ring-1 ring-orange-100" : "border-gray-200 hover:border-orange-300"
                        }`}
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
                    >
                        <h3 className={`text-lg font-bold transition-colors ${openIndex === idx ? "text-orange-600" : "text-gray-800"}`}>
                            {solution.title}
                        </h3>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === idx ? "text-orange-600 rotate-180" : "text-gray-400"
                            }`} />
                    </button>

                    <div
                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                            {solution.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
