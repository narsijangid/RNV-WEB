import Image from "next/image";

export default function LifeAtRinovea() {
    return (
        <main className="min-h-screen bg-white">
            {/* Banner Section */}
            <section className="relative pt-20 flex flex-col items-center">
                <div className="relative w-full overflow-hidden rounded-t-[50px]">
                    <img
                        src="https://i.ibb.co/nqDz1J3j/1760942378760-1.jpg"
                        alt="Life at Rinovea"
                        className="w-full h-auto object-cover"
                    />

                    {/* Bottom Blur Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-white/20 backdrop-blur-xl [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 py-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                        Life at <span className="text-blue-600">Rinovea</span>
                    </h1>
                    <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        At Rinovea, we don't just build technology; we build futures. Join a team where your ideas matter and your growth is our priority.
                    </p>
                </div>
            </section>

            {/* Why Work With Rinovea Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-12 max-w-6xl mx-auto">
                        {/* Left Side: Heading */}
                        <div className="md:w-1/2">
                            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1]">
                                Why Work <br />
                                With <span className="text-blue-500">Rinovea?</span>
                            </h2>
                        </div>

                        {/* Right Side: Content */}
                        <div className="md:w-1/2 space-y-8">
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                Rinovea is a place where you'll work with others who share the same passion and dedication, where a dynamic working environment and healthy respect encourage you to give your best shot every time we do it together.
                            </p>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                If you really want to understand how you can make a difference in the digital world and be super creative, then Rinovea is the perfect place for you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-10 bg-[#14212b]">
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
                                className="bg-white rounded-xl p-5 flex flex-col items-center justify-center gap-4 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:scale-105"
                            >
                                {item.icon}
                                <span className="text-gray-900 font-bold text-base whitespace-nowrap">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Management Quote Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
                        {/* Left Side: Quote & Text */}
                        <div className="lg:w-1/2 space-y-8">
                            <div className="w-16 h-16 text-blue-500">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                    <path d="M14.4 34.4H21.6L26.4 24.8V13.6H12V24.8H19.2L14.4 34.4ZM31.2 34.4H38.4L43.2 24.8V13.6H28.8V24.8H36L31.2 34.4Z" fill="currentColor" />
                                </svg>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight">
                                We Always Aim To Be The No.1 Company In Regards To Customer Satisfaction, And For That, We Strive To Create <span className="font-bold text-gray-900">"Inspiring The Next"</span> With The Pursuit Of Creativity And Technical Expertise.
                            </h2>

                            <div className="space-y-1">
                                <h3 className="text-2xl font-bold text-gray-900">Management</h3>
                                <p className="text-gray-600 font-medium font-sans">Rinovea Technology Solutions</p>
                            </div>
                        </div>

                        {/* Right Side: Circular Image Layout */}
                        <div className="lg:w-1/2 relative flex justify-center items-center">
                            <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
                                {/* Blue Decorative Background Shape */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[60px] border-blue-500/5 rounded-full"></div>

                                {/* Main Large Image */}
                                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border-[10px] border-white shadow-2xl overflow-hidden z-20">
                                    <img
                                        src="https://media.licdn.com/dms/image/v2/D4D22AQEKlBq2zBJWAQ/feedshare-shrink_2048_1536/B4DZoAWECPGwA0-/0/1760942383989?e=1773273600&v=beta&t=dBBvhKx8IlXPBaiatyZiXmyPi9pcLuFB_ri3vA18N5w"
                                        alt="Team Meeting"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Top Small Image */}
                                <div className="absolute top-10 right-0 w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full border-[10px] border-white shadow-2xl overflow-hidden z-10">
                                    <img
                                        src="https://i.ibb.co/nqDz1J3j/1760942378760-1.jpg"
                                        alt="Office Event"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Bottom Small Image */}
                                <div className="absolute bottom-10 right-10 w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full border-[10px] border-white shadow-2xl overflow-hidden z-30">
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
        </main>
    );
}
