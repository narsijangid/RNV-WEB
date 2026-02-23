"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How much time is required to develop a website?",
        answer: "The schedule varies with the complexity of features and integrations. A simple business site or standard site can take 3-6 weeks to develop, when complex custom web applications or custom enterprise systems are involved they can take months. Agile is the method we use to ensure rapid and efficient milestone delivery.",
    },
    {
        question: "Do you develop websites that are new friendly SEO?",
        answer: "Yes. Each site we build adheres to SEO best practices, clean code, loads quickly is mobile friendly and has a solid technical foundation behind it. This means you can be rest assured that your platform is output search engine optimized.",
    },
    {
        question: "What are the technologies you use in web development?",
        answer: "We use the latest frameworks and technologies such as React, Vue.js, Next.js, Node.js, Python, PHP. The selection of technology stack is done based on your business needs, scalability requirements and long term growth plans.",
    },
    {
        question: "Can I upgrade or migrate my current website?",
        answer: "Yes. We assist you to upgrade your legacy system, migrate your website to modern frameworks, shift your platform to cloud, boost performance and security all while allowing your business to keep moving forward.",
    },
    {
        question: "Do you offer custom web application development services?",
        answer: "Absolutely. We create custom web apps, dashboards, portals, and CMS solutions built entirely around your business logic and workflows. We prioritize scalability, security, and clean integrations.",
    },
    {
        question: "How do you protect the security of a website?",
        answer: "We use secure authentication procedures, we adhere to clean coding standards, we test on an ongoing basis, and we follow the best data security practices. Our software development methodology is designed to ensure long-term platform stability and resistance to exploits.",
    },
];

export function FAQSection() {
    return (
        <section className="py-24 px-4 bg-background">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                        Have Questions? We&apos;re Here to Help
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
                        Everything You Need to Know About Our Web Development Process, Technologies, Timelines, and Support.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border-b border-border last:border-0"
                        >
                            <AccordionTrigger className="flex flex-1 items-center justify-between w-full py-5 text-left font-semibold text-base md:text-lg text-foreground transition-all hover:text-orange-500 group">
                                {faq.question}
                                <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180 group-hover:text-orange-500" />
                            </AccordionTrigger>
                            <AccordionContent className="overflow-hidden text-muted-foreground text-sm md:text-base leading-relaxed pb-6 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
