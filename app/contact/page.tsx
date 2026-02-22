"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Mail,
    Phone,
    Briefcase,
    Linkedin,
    Github,
    Instagram,
    Twitter,
    MessageSquare,
    Facebook,
    Globe,
    Plus
} from "lucide-react";

export default function ContactPage() {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const bannerRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);

    const services = [
        "Frontend", "Backend", "Fullstack", "Design",
        "Mobile", "Devops", "Cloud", "Qa", "Consulting", "Maintenance"
    ];

    const toggleService = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service)
                ? prev.filter(s => s !== service)
                : [...prev, service]
        );
    };

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".banner-text > *", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15
        })
            .from(".banner-image", {
                scale: 1.1,
                opacity: 0,
                duration: 1,
                x: 50
            }, "-=0.8")
            .from(".banner-icon", {
                scale: 0,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }, "-=0.5")
            .from(".contact-section", {
                y: 50,
                opacity: 0,
                duration: 0.8
            }, "-=0.4");

    }, { scope: containerRef });

    return (
        <main ref={containerRef} className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
            {/* Banner Section */}
            <section className="relative pt-20 overflow-hidden">
                <div className="relative w-full h-[500px] md:h-[600px] flex items-center bg-[#071626]">
                    {/* Premium Slanted Shapes */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <div className="absolute top-0 left-[35%] md:left-[45%] bottom-0 w-[200px] md:w-[350px] bg-blue-600/90 -skew-x-[25deg] transform origin-top translate-x-16 blur-[1px]"></div>
                        <div className="absolute top-0 left-[30%] md:left-[40%] bottom-0 w-[200px] md:w-[350px] bg-blue-800/80 -skew-x-[25deg] transform origin-top blur-[1px]"></div>
                        <div className="absolute top-0 left-0 bottom-0 w-[45%] md:w-[55%] bg-gradient-to-r from-[#0c1a2c] to-[#071626]"></div>
                        {/* Subtle patterns */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between h-full py-12">
                        <div className="md:w-1/2 banner-text space-y-5">
                            <h1 className="text-3xl md:text-5xl lg:text-[56px] font-black leading-[1.05] tracking-tight text-white uppercase italic">
                                Let's Connect <br />
                                And Build <br />
                                <span className="text-blue-500 drop-shadow-sm">Something Amazing</span> <br />
                                Together
                            </h1>
                            <div className="h-0.5 w-16 bg-blue-500 rounded-full"></div>
                            <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed font-medium">
                                Whether you have a project idea, a partnership opportunity, or simply want to say hello, we're just a message away.
                            </p>
                            <div className="flex gap-4 pt-2">
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs font-bold px-6 py-4 rounded-full transition-all">
                                    GET STARTED
                                </Button>
                            </div>
                        </div>

                        <div className="md:w-1/2 relative h-full flex items-center justify-end">
                            <div className="banner-image relative w-full md:w-[90%] h-[320px] md:h-[450px] rounded-[32px] overflow-hidden border-[12px] border-white/5 shadow-[0_32px_80px_rgba(0,0,0,0.4)] z-20">
                                <img
                                    src="https://img.freepik.com/premium-photo/businessman-touching-icon-mobile-phone-mail-telephone-address_20693-443.jpg?semt=ais_user_personalization&w=740&q=80"
                                    alt="Contact"
                                    className="w-full h-full object-cover grayscale-[20%] brightness-90 transition-all duration-700 hover:scale-105 hover:grayscale-0 hover:brightness-100"
                                />
                                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                            </div>

                            {/* Stylish Floating Icons */}
                            <div className="absolute -bottom-6 right-10 flex gap-3 z-30">
                                {[Phone, Mail, Globe, MessageSquare].map((Icon, i) => (
                                    <div key={i} className="banner-icon w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-xl hover:bg-blue-600/80 hover:-translate-y-2 transition-all cursor-pointer">
                                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-form" className="contact-section py-24 bg-gray-50/50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
                        <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em]">Drop us a line</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Let Us Know What You Think</h2>
                        <p className="text-gray-500 text-sm font-medium">Share your vision. We'll help you bring it to life with our expertise.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto h-full">
                        {/* Form Column */}
                        <div className="lg:col-span-8 bg-white rounded-3xl p-8 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100">
                            <form className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Full Name*</Label>
                                        <Input id="name" placeholder="John Doe" className="bg-gray-50/30 border-gray-100 h-12 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all text-sm border-none shadow-sm" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Phone Number*</Label>
                                        <Input id="phone" placeholder="+1 (555) 000-0000" className="bg-gray-50/30 border-gray-100 h-12 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all text-sm border-none shadow-sm" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Email Address*</Label>
                                    <Input id="email" type="email" placeholder="john@company.com" className="bg-gray-50/30 border-gray-100 h-12 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all text-sm border-none shadow-sm" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Your Message</Label>
                                    <Textarea id="message" placeholder="Tell us about your project or inquiry..." className="bg-gray-50/30 border-gray-100 min-h-[140px] rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all text-sm border-none shadow-sm resize-none" />
                                </div>

                                {/* Services Selection */}
                                <div className="space-y-4">
                                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Required Services</p>
                                    <div className="flex flex-wrap gap-2.5">
                                        {services.map((service) => (
                                            <button
                                                key={service}
                                                type="button"
                                                onClick={() => toggleService(service)}
                                                className={`px-5 py-2 rounded-xl text-[11px] font-bold transition-all duration-300 border ${selectedServices.includes(service)
                                                    ? "bg-blue-600 text-white border-blue-600 shadow-md scale-105"
                                                    : "bg-white text-gray-500 border-gray-100 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50/30"
                                                    }`}
                                            >
                                                {service}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* File Upload */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Project brief / supporting docs</p>
                                        <span className="text-[9px] text-gray-400">PDF, JPG, PNG, DOCX</span>
                                    </div>
                                    <div className="group border-2 border-dashed border-gray-100 bg-gray-50/20 rounded-2xl p-6 text-center cursor-pointer hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300">
                                        <div className="flex flex-center justify-center items-center gap-2.5 text-blue-600 font-bold text-xs">
                                            <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
                                            <span>Attach Documents</span>
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-12 py-7 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-200 hover:shadow-blue-300 transition-all hover:-translate-y-1">
                                    Send Enquiry
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info Column */}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            <div className="bg-[#071626] rounded-[32px] p-8 md:p-10 shadow-2xl flex flex-col h-full text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-3xl transition-all group-hover:bg-blue-500/20"></div>

                                <h3 className="text-xl font-black uppercase tracking-wider mb-10 relative z-10">Reach Out</h3>

                                <div className="space-y-10 relative z-10">
                                    <div className="flex items-start gap-4 group/item cursor-pointer">
                                        <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 group-hover/item:bg-blue-600/20 group-hover/item:border-blue-500/50 transition-all duration-300">
                                            <Briefcase className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-[11px] font-black uppercase tracking-widest text-blue-400 mb-1">Contact HR</h4>
                                            <p className="text-xs text-gray-400 font-medium mb-1.5 leading-relaxed">Join our dynamic team and grow.</p>
                                            <Link href="tel:+916353887820" className="block text-sm font-bold hover:text-blue-400 transition-colors">+91 63538 87820</Link>
                                            <Link href="mailto:hr@rinovea.com" className="block text-xs text-gray-500 font-medium hover:text-white transition-colors">hr@rinovea.com</Link>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group/item cursor-pointer">
                                        <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 group-hover/item:bg-blue-600/20 group-hover/item:border-blue-500/50 transition-all duration-300">
                                            <Phone className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-[11px] font-black uppercase tracking-widest text-blue-400 mb-1">Sales Dept</h4>
                                            <p className="text-xs text-gray-400 font-medium mb-1.5 leading-relaxed">Let's discuss your next big project.</p>
                                            <Link href="tel:+919586213820" className="block text-sm font-bold hover:text-blue-400 transition-colors">+91 95862 13820</Link>
                                            <Link href="mailto:sales@rinovea.com" className="block text-xs text-gray-500 font-medium hover:text-white transition-colors">sales@rinovea.com</Link>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group/item cursor-pointer">
                                        <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10 group-hover/item:bg-blue-600/20 group-hover/item:border-blue-500/50 transition-all duration-300">
                                            <Mail className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-[11px] font-black uppercase tracking-widest text-blue-400 mb-1">Support</h4>
                                            <p className="text-xs text-gray-400 font-medium mb-1.5 leading-relaxed">24/7 client support assistance.</p>
                                            <Link href="mailto:info@rinovea.com" className="block text-sm font-bold hover:text-blue-400 transition-colors">info@rinovea.com</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-14 border-t border-white/5 relative z-10">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6">Connected</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {[Linkedin, Github, Instagram, Twitter, Facebook, Globe].map((Icon, i) => (
                                            <Link key={i} href="#" className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all text-gray-400 group/social">
                                                <Icon className="w-4 h-4 group-social:animate-pulse" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
