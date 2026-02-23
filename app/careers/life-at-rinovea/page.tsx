"use client";

import Image from "next/image";

export default function LifeAtRinovea() {
    return (
        <main className="min-h-screen bg-transparent">
            {/* Banner Section */}
            <section className="relative pt-20 flex flex-col items-center">
                <div className="relative w-full overflow-hidden rounded-t-[50px]">
                    <img
                        src="https://i.ibb.co/nqDz1J3j/1760942378760-1.jpg"
                        alt="Life at Rinovea"
                        className="w-full h-auto object-cover"
                    />

                    {/* Bottom Blur Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-background/20 backdrop-blur-xl [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 py-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Life at <span className="text-blue-600">Rinovea</span>
                    </h1>
                    <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        At Rinovea, we don't just build technology; we build futures. Join a team where your ideas matter and your growth is our priority.
                    </p>
                </div>
            </section>

            {/* Why Work With Rinovea Section */}
            <section className="py-24 bg-background dark:bg-transparent">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-12 max-w-6xl mx-auto">
                        {/* Left Side: Heading */}
                        <div className="md:w-1/2">
                            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-[1.1]">
                                Why Work <br />
                                With <span className="text-blue-500">Rinovea?</span>
                            </h2>
                        </div>

                        {/* Right Side: Content */}
                        <div className="md:w-1/2 space-y-8">
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Rinovea is a place where you'll work with others who share the same passion and dedication, where a dynamic working environment and healthy respect encourage you to give your best shot every time we do it together.
                            </p>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                If you really want to understand how you can make a difference in the digital world and be super creative, then Rinovea is the perfect place for you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-10 bg-muted/50 dark:bg-transparent">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-blue-500">
                                        <path d="M7 10v12M17 10v12M2 10h20M7 10a5 5 0 0 1 10 0M10 2l2 2 2-2" />
                                    </svg>
                                ),
                                label: "Work-Life Balance"
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-blue-500">
                                        <circle cx="12" cy="12" r="3" />
                                        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
                                        <path d="M12 3v18M3 12h18" />
                                        <path d="M12 12l6.36 6.36M12 12l-6.36-6.36M12 12l6.36-6.36M12 12l-6.36 6.36" />
                                    </svg>
                                ),
                                label: "Innovation"
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-blue-500">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                ),
                                label: "Encouragement"
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-blue-500">
                                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                                        <path d="M5 3l1.4 1.4M19 3l-1.4 1.4M5 21l1.4-1.4M19 21l-1.4-1.4" />
                                    </svg>
                                ),
                                label: "Super-Creative"
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-xl p-5 flex flex-col items-center justify-center gap-4 shadow-[0_0_20px_rgba(59,130,246,0.2)] border border-border transition-all hover:scale-105"
                            >
                                {item.icon}
                                <span className="text-foreground font-bold text-base whitespace-nowrap">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Management Quote Section */}
            <section className="py-24 bg-background dark:bg-transparent overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
                        {/* Left Side: Quote & Text */}
                        <div className="lg:w-1/2 space-y-8">
                            <div className="w-16 h-16 text-blue-500">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <path d="M14.4 34.4H21.6L26.4 24.8V13.6H12V24.8H19.2L14.4 34.4ZM31.2 34.4H38.4L43.2 24.8V13.6H28.8V24.8H36L31.2 34.4Z" fill="currentColor" />
                                </svg>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90 leading-tight">
                                We Always Aim To Be The No.1 Company In Regards To Customer Satisfaction, And For That, We Strive To Create <span className="font-bold text-foreground">"Inspiring The Next"</span> With The Pursuit Of Creativity And Technical Expertise.
                            </h2>

                            <div className="space-y-1">
                                <h3 className="text-2xl font-bold text-foreground">Management</h3>
                                <p className="text-muted-foreground font-medium font-sans">Rinovea Technology Solutions</p>
                            </div>
                        </div>

                        {/* Right Side: Circular Image Layout */}
                        <div className="lg:w-1/2 relative flex justify-center items-center">
                            <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
                                {/* Blue Decorative Background Shape */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[60px] border-blue-500/5 rounded-full"></div>

                                {/* Main Large Image */}
                                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border-[10px] border-card shadow-2xl overflow-hidden z-20">
                                    <img
                                        src="https://media.licdn.com/dms/image/v2/D4D22AQEKlBq2zBJWAQ/feedshare-shrink_2048_1536/B4DZoAWECPGwA0-/0/1760942383989?e=1773273600&v=beta&t=dBBvhKx8IlXPBaiatyZiXmyPi9pcLuFB_ri3vA18N5w"
                                        alt="Team Meeting"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Top Small Image */}
                                <div className="absolute top-10 right-0 w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full border-[10px] border-card shadow-2xl overflow-hidden z-10">
                                    <img
                                        src="https://i.ibb.co/nqDz1J3j/1760942378760-1.jpg"
                                        alt="Office Event"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Bottom Small Image */}
                                <div className="absolute bottom-10 right-10 w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full border-[10px] border-card shadow-2xl overflow-hidden z-30">
                                    <img
                                        src="https://media.licdn.com/dms/image/v2/D4D22AQHfHt4mxjQwjw/feedshare-shrink_2048_1536/B4DZoAWECbHsAw-/0/1760942378793?e=1773273600&v=beta&t=l5KS6xxoxr-hiqCpJACjyflwelMXLjYGb4ndiQaG-AA"
                                        alt="Team Discussion"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Team Members Section */}
            <section className="py-24 bg-muted/30 dark:bg-transparent overflow-hidden">
                <div className="container mx-auto px-4 mb-12">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            The Brains Behind Our <span className="text-blue-600">Innovation</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Our team of creative minds and technical experts is dedicated to delivering excellence and pushing the boundaries of what's possible.
                        </p>
                    </div>
                </div>

                <div className="relative flex overflow-x-hidden">
                    <div className="flex animate-marquee-custom whitespace-nowrap py-12">
                        {[...members, ...members, ...members, ...members].map((member, index) => (
                            <div
                                key={index}
                                className="inline-block px-4"
                            >
                                <div className="group relative w-[280px] h-[400px] bg-card rounded-[1.5rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-700 hover:shadow-[0_15px_60px_rgba(59,130,246,0.12)] border border-border">
                                    {/* Member Image */}
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                    />

                                    {/* Glassmorphism Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent dark:opacity-60 group-hover:opacity-100 transition-all duration-700"></div>
                                    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-[1px]"></div>

                                    {/* Content Container */}
                                    <div className="absolute inset-x-0 bottom-0 p-6 pt-0">
                                        <div className="relative z-10">
                                            {/* Name & Role Wrapper */}
                                            <div className="transform transition-transform duration-700 ease-in-out translate-y-10 group-hover:translate-y-0">
                                                {/* Name & Role */}
                                                <div className="mb-3">
                                                    <h4 className="text-xl font-bold text-white mb-1.5 tracking-tight flex items-center gap-2">
                                                        {member.name}
                                                        {(member.name === "Shrish Sontakke" || member.name === "Rakhee Hande") && (
                                                            <img
                                                                src="https://cdn.pixabay.com/photo/2021/08/07/22/30/verified-6529507_960_720.png"
                                                                alt="Verified"
                                                                className="w-5 h-5 object-contain"
                                                            />
                                                        )}
                                                    </h4>
                                                    <div className="flex items-center gap-2">
                                                        <span className="h-[1px] w-3 bg-orange-400 group-hover:w-6 transition-all duration-700"></span>
                                                        <p className="text-[9px] font-bold text-orange-300 uppercase tracking-[0.2em] leading-none">{member.role}</p>
                                                    </div>
                                                </div>

                                                {/* Hidden Button - Animates in */}
                                                {member.linkedin && member.linkedin !== "#" && (
                                                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 pt-1.5 pb-1.5">
                                                        <a
                                                            href={member.linkedin}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-orange-500 text-white border border-white/20 hover:border-orange-500 backdrop-blur-md rounded-xl text-[10px] font-bold transition-all duration-300 group/btn"
                                                        >
                                                            View Profile
                                                            <svg className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                )}

                                                {/* Animated Divider */}
                                                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-1.5"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes marquee-left-to-right {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                    .animate-marquee-custom {
                        display: flex;
                        animation: marquee-left-to-right 40s linear infinite;
                    }
                    .animate-marquee-custom:hover {
                        animation-play-state: paused;
                    }
                ` }} />
            </section>

            {/* What Can You Expect Section */}
            <ExpectSection />
        </main>
    );
}

import React from "react";

function ExpectSection() {
    const [activeTab, setActiveTab] = React.useState(0);

    const expectations = [
        {
            title: "Work Flexibility",
            content: "Embrace new ways of working with Rinovea; we support our workforce with solutions that show them how they can perform at their best and be their most productive at the office."
        },
        {
            title: "Collaborative Team",
            content: "Collaborating is hard, but Rinovea makes it simple. At Rinovea, you will find people sharing common beliefs and working towards common goals."
        },
        {
            title: "Open Environment",
            content: "Talk Less, Listen more; we believe in listening and encouraging open communication across the organization to boost our colleague's morale and confidence."
        },
        {
            title: "Healthcare Benefits",
            content: "Our employees are our second family, and taking care of their well-being is our priority. We provide healthcare benefits to our employees to keep them safe, happy, and healthy."
        },
        {
            title: "Strong Cultural Values",
            content: "At Rinovea, we build a culture that aligns with our people's values because a great culture provides continuous alignment to the vision, purpose, and goals of the organization."
        }
    ];

    return (
        <section className="py-20 bg-muted/30 dark:bg-transparent">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Side: Heading */}
                    <div className="lg:w-1/3 text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                            What Can You Expect <br /> <span className="text-blue-600">From us?</span>
                        </h2>
                        <p className="text-muted-foreground text-base leading-relaxed">
                            We are committed to creating an environment where excellence is recognized, and every team member has the support they need to thrive.
                        </p>
                    </div>

                    {/* Right Side: Interactive Tabs & Content */}
                    <div className="lg:w-2/3 flex flex-col md:flex-row items-start gap-0 w-full group/main">
                        {/* Tabs List */}
                        <div className="flex flex-col w-full md:w-1/2 bg-muted/50 backdrop-blur-sm rounded-l-2xl overflow-hidden border border-border shadow-sm">
                            {expectations.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`relative px-7 py-5 text-left transition-all duration-300 flex items-center justify-between cursor-pointer ${activeTab === index
                                        ? "text-blue-600 bg-card font-bold"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                                        }`}
                                >
                                    <span className="text-base md:text-lg whitespace-nowrap">{item.title}</span>
                                    {activeTab === index && (
                                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Content Display Card */}
                        <div className="w-full md:w-1/2 min-h-[260px] flex items-center bg-card p-8 md:p-10 rounded-r-2xl shadow-[20px_0_40px_rgba(0,0,0,0.02)] border border-border">
                            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-medium transition-all duration-300">
                                    {expectations[activeTab].content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const members = [
    {
        name: "Shrish Sontakke",
        role: "Founder & CEO at Rinovea",
        photo: "https://media.licdn.com/dms/image/v2/D4D03AQGnLK5Gko9-ng/profile-displayphoto-shrink_800_800/B4DZeEDfGgGUAc-/0/1750267197164?e=1773273600&v=beta&t=3mnaDcYe650niSmxVopvm0pjN2wUWqsTg2gBAqroPtU",
        linkedin: "https://www.linkedin.com/in/shrish-sontakke/"
    },
    {
        name: "Rakhee Hande",
        role: "Co-Founder & HR",
        photo: "https://media.licdn.com/dms/image/v2/D4E03AQGWT8PmHobBWw/profile-displayphoto-crop_800_800/B4EZitGxvOHgAM-/0/1755250892524?e=1773273600&v=beta&t=UCziLGHYSuP6Kiph9JP-WOu8Tb-5wcBdZtz1o_-eIbw",
        linkedin: "https://www.linkedin.com/in/rakhee-hande-051235374/"
    },
    {
        name: "Pratiksha Shukla",
        role: "Senior Software Engineer",
        photo: "https://media.licdn.com/dms/image/v2/D4D03AQErJXASGLdPOg/profile-displayphoto-crop_800_800/B4DZv.VVbhGUAI-/0/1769498566199?e=1773273600&v=beta&t=-qRa1v3xGw0s4uQ3BdNLvmQO0LVil07ODHDJ6Ruil3k",
        linkedin: "https://www.linkedin.com/in/pratiksha-shukla-256b43208/"
    },
    {
        name: "Narsi Jangid",
        role: "Full Stack developer",
        photo: "https://media.licdn.com/dms/image/v2/D5603AQEU78-jGQrm1g/profile-displayphoto-scale_400_400/B56ZjlcfJeHUAk-/0/1756196107512?e=1773273600&v=beta&t=O5HdvRdAzO9qAXxsnVZnYdkmsz88vbujbkt1BRpmlLE",
        linkedin: "https://www.linkedin.com/in/narsijangid/"
    },
    {
        name: "Om Ghulaxe",
        role: "Full stack developer",
        photo: "https://media.licdn.com/dms/image/v2/D5603AQFdJPtHxQeIoA/profile-displayphoto-crop_800_800/B56ZpFbkW5KEAI-/0/1762101446951?e=1773273600&v=beta&t=q4s0C3jGSTIC1KCJiwda6Vziji2iyujI6rQHUWCo2AU",
        linkedin: "https://www.linkedin.com/in/om-ghulaxe/"
    },
    {
        name: "Deepak Lasod",
        role: "SDE-II, Full stack developer",
        photo: "https://media.licdn.com/dms/image/v2/D4D03AQHUsIuwZKvq5g/profile-displayphoto-shrink_800_800/B4DZc08SMyGwAc-/0/1748939909568?e=1773273600&v=beta&t=nqo725hRLppSqHJZnMzZOB3Bi20wX_sAdxdbLAKe9xA",
        linkedin: "https://www.linkedin.com/in/deepak-lasod-78113b110/"
    }
];
