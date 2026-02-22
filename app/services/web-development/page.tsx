"use client";

import React, { useState } from "react";
import {
    Monitor,
    Database,
    Layers,
    Palette,
    RefreshCw,
    Code,
    Cpu,
    Search,
    Brain,
    AppWindow,
    ArrowRight,
    ChevronRight,
    CheckCircle2,
    Settings,
    Globe,
    Zap,
    MessageSquare,
    Terminal,
    Server,
    Shield,
    Infinity as InfinityIcon,
    Smartphone,
    Layout,
    TestTube2,
    Send
} from "lucide-react";
import Link from "next/link";

export default function WebDevelopmentPage() {
    return (
        <main className="min-h-screen bg-white pt-20">
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden bg-[#0a1e3b] text-white py-16 md:py-24">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full skew-x-[-20deg] bg-blue-600/10 transform translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/5 blur-3xl"></div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Content */}
                    <div className="lg:w-1/2 text-left space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight uppercase">
                            WEB DEVELOPMENT <br />
                            <span className="text-blue-500">COMPANY</span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                            Concept to launch, we build fast, scalable and high performing web based solutions that resonate with your business objectives. As a leading web development company, we bring you futuristic websites and web platforms for ultimate growth.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20 text-sm">
                                Explore Your Web Vision
                            </button>
                        </div>
                    </div>

                    {/* Right Image/Banner */}
                    <div className="lg:w-1/2 relative animate-in fade-in slide-in-from-right-8 duration-1000">
                        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-100232725.jpg"
                                alt="Web Development Interface"
                                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            {/* 2. Our Web Development Capabilities Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                            Our Web Development <span className="text-blue-600">Capabilities</span>
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                        <p className="text-gray-600 max-w-4xl mx-auto text-base pt-4 leading-relaxed">
                            Our web development capabilities span the full range from slick front end display to extensible back-end solutions. We focus on full-stack engineering, transforming digital products, and creating resilient solutions that future proof your organization.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {capabilities.slice(0, 3).map((cap, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="mb-5 inline-block p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    {cap.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{cap.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {cap.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
                        {capabilities.slice(3).map((cap, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="mb-5 inline-block p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    {cap.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{cap.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {cap.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Our Web Development Services Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Our Web Development <span className="text-blue-600">Services</span>
                        </h2>
                        <p className="text-gray-600 max-w-4xl mx-auto mt-4 text-base leading-relaxed">
                            We build modern web development software solutions that combine beautiful frontends with powerful backends. Whether it's a landing page, a mobile app, or an enterprise platform, we deliver lightning fast, secure, scalable solutions that drive real world business success every time.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-100 overflow-hidden rounded-2xl">
                        {services.map((service, idx) => (
                            <div key={idx} className="p-8 border-r border-b border-gray-100 hover:bg-gray-50/50 transition-colors group">
                                <div className={`mb-5 inline-block p-3.5 rounded-xl ${service.bgColor} ${service.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-[13px]">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Rinovea Section */}
            <section className="py-24 bg-[#f8fbff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-2xl md:text-4xl font-bold text-[#0a1e3b]">
                            Why Choose <span className="text-blue-600">Rinovea</span> for Website Development Services?
                        </h2>
                        <p className="text-gray-500 max-w-5xl mx-auto text-sm md:text-base leading-relaxed">
                            We're more than just code monkeys, we create conversion focused, future ready digital experiences. With knowledge in current technologies and frameworks, scrum methodology, and human centric design, Rinovea prides in providing scalable web solutions that cater to startups, small growing businesses and enterprises globally.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {whyChooseData.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 hover:border-blue-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Build Your Web Vision Banner */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="bg-[#0a1b2e] rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
                        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold italic">Let's Build Your Web Vision Together</h2>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                Have a web app idea or want to scale your digital presence? Our web development experts are here to transform your concept into a high-performing reality, with full-stack expertise and future-ready frameworks.
                            </p>
                            <button className="px-8 py-3 bg-[#0070f3] hover:bg-blue-600 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-500/20">
                                Contact Our Experts
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Technology Stack Section */}
            <TechStackSection />

            {/* 7. Development Process Section */}
            <section className="py-24 bg-[#f8fbff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Process Sidebar */}
                        <div className="lg:w-1/3">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1e3b] mb-4">Our Web Development <br /><span className="text-blue-600">Process</span></h2>
                            <p className="text-gray-500 text-sm mb-12">Scalable, flexibly architected future ready web sites, portals and web applications.</p>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl inline-block mb-6">
                                    <Send className="w-5 h-5 -rotate-45" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Websites That Work <br />Beyond Aesthetics</h3>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                    From corporate websites to intricate digital platforms, we develop speedy, safe, and SEO-friendly website solutions.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Custom CMS, dashboards, and web portal solutions",
                                        "Mobile responsive, high performance and SEO ready builds",
                                        "Modern technology stacks such as React, Vue, Node.js and Python",
                                        "Continuous maintenance, analytics and usage and conversion"
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0"></div>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <button className="mt-10 px-6 py-3 bg-[#0a66c2] text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg">
                                    Let's Build Together
                                </button>
                            </div>
                        </div>

                        {/* Process Steps */}
                        <div className="lg:w-2/3 space-y-6">
                            {processSteps.map((step, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-8 items-start group hover:border-blue-200 transition-colors">
                                    <div className="text-5xl md:text-7xl font-bold text-[#e1efff] group-hover:text-[#cce4ff] transition-colors leading-none">
                                        {idx + 1}
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-[2.5rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="relative z-10 space-y-6">
                            <h2 className="text-2xl md:text-4xl font-bold">Ready to Build Your Digital Presence?</h2>
                            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                                Partner with Rinovea to create high-impact, scalable, and secure web solutions that elevate your business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
                                <button className="px-8 py-4 bg-white text-blue-700 font-extrabold rounded-2xl hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-1 group text-sm">
                                    Start Your Project <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-8 py-4 bg-blue-600/30 backdrop-blur-md text-white border border-white/20 font-extrabold rounded-2xl hover:bg-blue-600/50 transition-all hover:-translate-y-1 text-sm">
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

const whyChooseData = [
    {
        title: "Scalable Architecture for Growth",
        desc: "From startup MVPs to enterprise level portals, we design modular and scalable web solutions that grow alongside your business objectives. Our architecture is built for flexibility and long-term expansion, so you can enhance and evolve your platform without rebuilding it from the ground up."
    },
    {
        title: "Agile, Transparent Collaboration",
        desc: "We emphasize speedy iteration and intimate collaboration throughout the development process. With the agile sprints and milestone delivery approach, we're keeping your team actively engaged throughout, from wireframes to releasing."
    },
    {
        title: "Design That Performs",
        desc: "Our UI/UX experts work in house to make sure every interaction has a purpose. From accessibility guidelines to subtle animated messages, we create pixel perfect experiences that reduce bounce rates, increase usability, and generate more conversions."
    },
    {
        title: "Advanced Technology Stack",
        desc: "Using modern frameworks such as React, Next.js, Node.js, Python and PHP in combination with AI and machine learning integrations, we make sure your platform is future ready, scalable and competitive from day one."
    },
    {
        title: "Performance & Security Built-In",
        desc: "The code we provide is clean, optimized for performance, and secure. From server side infrastructure to client side speed and interactivity, we design and develop web applications that are robust, responsive, and scalable."
    },
    {
        title: "Global Delivery. Local Dedication.",
        desc: "With 97% client retention, spanning over 250 clients globally, we have successfully crafted more than 500 high impact digital experiences. Whether you are a local or international operator, we can still be your trusted technology partner through every step of your journey."
    }
];

const processSteps = [
    {
        title: "Discovery & Strategy",
        desc: "We begin by learning about your product vision, business model, and users. Through a series of stakeholder interviews, competitor analysis and technology evaluations, we design a focused development path that builds each feature to quantifiable business outcomes."
    },
    {
        title: "UI/UX Design & Prototyping",
        desc: "In the next step, once the strategy and concept are fully gone, the design team creates interactive wireframes and visual mockups and structured UI kits. We focus on accessibility, usability and brand consistency to make sure that the finished screen not only looks visually attractive but is also intuitive and optimized for conversion rate."
    },
    {
        title: "Frontend & Backend Development",
        desc: "Powered by advanced technologies like React, Vue.js, Node.js and Python, our developers build responsive and scalable web solutions from your designs. From CMS websites to bespoke dashboards, each element is designed to deliver outstanding performance and long term flexibility."
    },
    {
        title: "QA Testing & Optimization",
        desc: "Our QA specialists proceed with functional checks, cross device checks, performance testing and compatibility checks on browsers among others on multiple testing cycles. We make sure every product is stable, secure and fully cooked for real life users."
    },
    {
        title: "Launch & Post-Deployment Support",
        desc: "Following the launch, we support your growth with analytics integration, ongoing SEO improvements, issue resolution, and structured user feedback cycles. Whether you need quick updates, or you want us to maintain your project for years, our team will be committed to scaling and fortifying your digital presence."
    }
];

const techStack = {
    "Backend": {
        "Frameworks": ["NestJS", "Django", "Spring Boot", "Express", "FastAPI", "Laravel", "Flask", "Node.js"],
        "Libraries": ["JWT", "GraphQL", "Socket.IO", "Prisma", "Apollo"],
        "Tools": ["Postman", "Swagger", "Insomnia", "OpenAPI"]
    },
    "Frontend": {
        "Frameworks": ["React", "Next.js", "Vue.js", "Angular", "Svelte", "Nuxt.js"],
        "Libraries": ["Redux", "Tailwind CSS", "Framer Motion", "Three.js", "GSAP"],
        "Tools": ["Vite", "Webpack", "ESLint", "Prettier"]
    },
    "DevOps": {
        "Cloud": ["AWS", "Google Cloud", "Azure", "Vercel", "DigitalOcean"],
        "CI/CD": ["GitHub Actions", "Jenkins", "GitLab CI", "CircleCI"],
        "Containers": ["Docker", "Kubernetes"]
    },
    "Database": {
        "SQL": ["PostgreSQL", "MySQL", "MariaDB", "SQLite"],
        "NoSQL": ["MongoDB", "Redis", "Firebase", "Cassandra", "ElasticSearch"],
        "ORM": ["Prisma", "TypeORM", "Mongoose", "Sequelize"]
    },
    "Mobile Development": {
        "Cross-Platform": ["React Native", "Flutter", "Ionic"],
        "Native": ["Swift", "Kotlin", "Objective-C", "Java"],
        "Tools": ["Expo", "Xcode", "Android Studio"]
    },
    "Testing": {
        "Unit": ["Jest", "Testing Library", "PyTest", "Mocha"],
        "E2E": ["Cypress", "Playwright", "Puppeteer", "Selenium"],
        "API": ["Supertest", "RestAssured"]
    },
    "AI/ML": {
        "Frameworks": ["TensorFlow", "PyTorch", "Scikit-Learn", "Keras"],
        "NLP": ["OpenAI API", "HuggingFace", "LangChain", "SpaCy"],
        "Data": ["Pandas", "NumPy", "Matplotlib"]
    }
};

function TechStackSection() {
    const [activeTab, setActiveTab] = useState("Backend");
    const tabs = Object.keys(techStack);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-[#0a1e3b] mb-6">
                    Technology Stack That Powers <br />Exceptional Development
                </h2>
                <p className="text-gray-500 max-w-4xl mx-auto mb-16 text-sm md:text-base">
                    Explore the frameworks, tools, and platforms our experts use to build secure, scalable, and high-performance solutions tailored to every project need.
                </p>

                {/* Tabs Container */}
                <div className="relative mb-12 flex justify-center">
                    <div className="flex items-center space-x-2 bg-white border border-gray-100 p-1.5 rounded-full shadow-sm overflow-x-auto no-scrollbar">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${activeTab === tab
                                    ? "bg-[#0070f3] text-white shadow-md shadow-blue-200"
                                    : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="grid md:grid-cols-3 gap-8">
                    {Object.entries(techStack[activeTab as keyof typeof techStack]).map(([category, items]) => (
                        <div key={category} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-left hover:shadow-md transition-shadow">
                            <h4 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-50 pb-4">{category}</h4>
                            <div className="flex flex-wrap gap-3">
                                {items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 bg-gray-50 text-gray-600 text-[13px] font-medium rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const capabilities = [
    {
        icon: <Monitor className="w-8 h-8" />,
        title: "Front-End Engineering",
        desc: "We create responsive, accessible and high performance user interfaces with React, Vue.js, Webflow and Next.js. We design for perfect digital experiences that flow seamlessly from one device to the next, with the speed, usability, and visual accuracy you want to see on every screen."
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: "Back-End Development",
        desc: "Our engineers develop scalable backend architectures using Node.js, Python, and PHP to capture complex business logic, API integrations, and secure management of your data. We are committed to performance, system stability, and clean/maintainable architecture in the solutions which we deliver so that you can count on solid long-term value."
    },
    {
        icon: <Layers className="w-8 h-8" />,
        title: "Full-Stack Development",
        desc: "For end to end solutions, we offer full stack development services customized to your needs, from the essential intuitive front-end design, to the scalable robust back-end infrastructure. This full spectrum strategy creates holistic, high performance web products that excel in supporting user engagement and business processes."
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "UI/UX Design",
        desc: "Intuitive navigation, contemporary design standards, and meaningful user flows are at the heart of our UI/UX strategy connecting functionality with delightful interactions."
    },
    {
        icon: <RefreshCw className="w-8 h-8" />,
        title: "Application Modernization",
        desc: "We refactor legacy applications for new tech stacks, cloud enable them, and embed AI/ML capabilities to enhance velocity, security and scalability."
    }
];

const services = [
    {
        icon: <AppWindow className="w-8 h-8" />,
        title: "Custom Web App Development",
        desc: "As a trusted web development agency, we build scalable and responsive business web applications from the ground up using modern tech stacks and third-party API integrations. We prioritize real-time performance and clean architecture across browsers and devices.",
        bgColor: "bg-cyan-50",
        iconColor: "text-cyan-500"
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: "Front-End Development (React, Vue, Next.js)",
        desc: "Our front-end developers produce fluid user experiences with React, Vue.js and Next.js. Single page applications or SEO ready websites, we deliver all with fast rendering, modular structure and easy to use navigation.",
        bgColor: "bg-red-50",
        iconColor: "text-red-500"
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "UI/UX Strategy & Design",
        desc: "We don't just design. We architect and maintain your vision. Our UI/UX designers develop user flows and visual systems that increase retention, engagement, and conversions across web platforms.",
        bgColor: "bg-green-50",
        iconColor: "text-green-500"
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: "Back-End Development (Node.js, Python, PHP)",
        desc: "Whether the task is setting up secure authentication systems or creating complex business logic, our backend developers craft platforms that are powerful, scalable, and API customizable. Node.js, Python or PHP depending on project requirement, we deliver stability, performance and smooth system integration.",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-500"
    },
    {
        icon: <Search className="w-8 h-8" />,
        title: "SEO-Optimized Static Sites (Next.js, Webflow)",
        desc: "Next.js or webflow development for marketing driven and content rich brands that want high performance websites. We combine speed, clean pixel perfect design, and strong native SEO mechanics to make sure you are seen, engaged, and growing measurably.",
        bgColor: "bg-orange-50",
        iconColor: "text-orange-500"
    },
    {
        icon: <Brain className="w-8 h-8" />,
        title: "AI-Enabled Web Solutions (Python + ML)",
        desc: "Use AI and machine learning to bring personalization, predictive analytics or automation to your web apps. Our team weaves python driven AI logic into scalable front ends.",
        bgColor: "bg-yellow-50",
        iconColor: "text-yellow-500"
    },
    {
        icon: <Layers className="w-8 h-8" />,
        title: "Full Stack Integration",
        desc: "We combine front-end and back-end expertise to deliver the best web development services, creating integrated workflows that drive holistic results. Every end-to-end product aligns with business goals, user behavior insights, and long-term scalability.",
        bgColor: "bg-purple-50",
        iconColor: "text-purple-500"
    }
];
