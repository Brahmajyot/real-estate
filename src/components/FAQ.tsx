"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "What types of properties do you sell?",
        a: "We specialize in a wide range of property types including luxury single-family homes, modern apartments, residential estates, commercial spaces, and investment properties. Our portfolio spans 150+ cities across multiple countries, catering to first-time buyers, seasoned investors, and everyone in between.",
    },
    {
        q: "How do I know if a property is a good investment?",
        a: "Our expert agents provide comprehensive market analysis reports for each property, including historical price trends, neighborhood growth metrics, rental yield projections, and comparable sales data. We also offer personalized investment consultations to align property choices with your financial goals.",
    },
    {
        q: "Do I need to hire a real estate agent?",
        a: "While not legally required, working with our experienced agents significantly streamlines the buying process. Our agents handle negotiations, paperwork, inspections, and legal coordination — saving you time, money, and stress. We offer flexible service packages from full-service to advisory-only.",
    },
    {
        q: "What is the process for buying property?",
        a: "The typical process involves: (1) Initial consultation and budget assessment, (2) Property search and shortlisting, (3) Site visits and inspection, (4) Making an offer and negotiation, (5) Legal due diligence and contracts, (6) Mortgage arrangement if needed, (7) Final closing and key handover. Our agents guide you through every step.",
    },
    {
        q: "Can I tour a property before purchasing?",
        a: "Absolutely! We offer both in-person and virtual tours for all listed properties. In-person tours can be scheduled at your convenience via our online booking system. We also offer 360° virtual walkthroughs and video tours for international buyers or those with limited availability.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 sm:py-24 bg-secondary">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
                    {/* Left — Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-2"
                    >
                        <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4 sm:mb-6">
                            ❓ FAQ
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-4 sm:mb-6 leading-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                            Have questions? We&apos;ve got answers. If you don&apos;t see what you&apos;re
                            looking for, feel free to contact our team.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary text-sm sm:text-base"
                        >
                            Contact Support
                        </motion.button>

                        {/* Decorative Card — shown below on mobile, but positioned nicely on lg */}
                        <div className="mt-8 sm:mt-10 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-card">
                            <p className="font-bold text-accent text-sm mb-1">Still have questions?</p>
                            <p className="text-gray-500 text-sm mb-4">
                                Our agents are available 24/7 to assist you.
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 rounded-full border-2 border-white bg-cover bg-center"
                                            style={{
                                                backgroundImage: `url('https://i.pravatar.cc/64?img=${i + 10}')`,
                                            }}
                                        />
                                    ))}
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-accent">Live Support</p>
                                    <p className="text-xs text-primary-600 font-semibold">● Online now</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Accordion */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="lg:col-span-3 flex flex-col gap-3"
                    >
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className={`bg-white rounded-2xl shadow-card overflow-hidden transition-shadow duration-200 ${openIndex === i ? "shadow-card-hover" : ""
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between gap-3 p-4 sm:p-6 text-left"
                                >
                                    <span
                                        className={`font-bold text-sm sm:text-base transition-colors ${openIndex === i ? "text-primary-600" : "text-accent"
                                            }`}
                                    >
                                        {faq.q}
                                    </span>
                                    <div
                                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openIndex === i
                                            ? "bg-primary-600 text-white"
                                            : "bg-gray-100 text-gray-500"
                                            }`}
                                    >
                                        {openIndex === i ? (
                                            <Minus size={14} />
                                        ) : (
                                            <Plus size={14} />
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {openIndex === i && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                        >
                                            <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-3 sm:pt-4">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
