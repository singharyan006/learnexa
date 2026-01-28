"use client";

import { useState } from "react";

export default function FAQ() {
    const faqs = [
        {
            question: "Is my data secure?",
            answer: "Absolutely. We employ enterprise-grade 256-bit encryption, regular security audits, and automated backups. Your school's data is hosted on secure cloud infrastructure with strict access controls.",
        },
        {
            question: "How do I get started?",
            answer: "Getting started is simple. Click the 'Request a Demo' button to speak with our experts. We'll set up your environment, help import your existing data, and provide comprehensive training for your staff.",
        },
        {
            question: "Is there a mobile app?",
            answer: "Yes, Learnexa comes with dedicated mobile apps for iOS and Android. There are separate interfaces tailored for Teachers, Parents, and Students to ensure everyone has the right tools on the go.",
        },
        {
            question: "What kind of support do you offer?",
            answer: "We provide 24/7 technical support via chat, email, and phone. Every school is also assigned a dedicated account manager to assist with long-term strategy and implementation optimization.",
        },
        {
            question: "Can we migrate data from our old system?",
            answer: "Yes, our technical team specializes in seamless data migration. We can import student records, historical grades, and financial data from most common legacy systems without any downtime.",
        },
    ];

    return (
        <section id="faq" className="px-4 md:px-20 lg:px-40 py-24 bg-[#0a0e13] border-t border-gray-800">
            <div className="max-w-[800px] mx-auto">
                <div className="flex flex-col gap-6 mb-16 items-center text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                        Questions?
                    </span>
                    <h2 className="text-[#111318] dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[#616f89] dark:text-gray-400 text-lg font-normal leading-normal">
                        Find answers to common questions about our platform and how it can help your institution.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-gray-800/50 rounded-2xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-primary/30"
                        >
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <h3 className="text-[#111318] dark:text-white text-lg font-bold">
                                    {faq.question}
                                </h3>
                                <span className="material-symbols-outlined expand-icon text-primary transition-transform duration-300">
                                    expand_more
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-[#616f89] dark:text-gray-400 leading-relaxed">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
