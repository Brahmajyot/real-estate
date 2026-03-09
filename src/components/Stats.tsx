"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "100%", label: "Satisfied Clients", icon: "😊" },
    { value: "500+", label: "Property Sales", icon: "🏡" },
    { value: "150+", label: "Cities & Countries", icon: "🌍" },
    { value: "2000+", label: "Positive Reviews", icon: "⭐" },
];

export default function Stats() {
    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-14"
                >
                    <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                        Our Track Record
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent px-4">
                        Numbers That Speak for Themselves
                    </h2>
                </motion.div>

                {/* 2-col on mobile, 4-col on md+ */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-100 rounded-2xl overflow-hidden">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className={`flex flex-col items-center text-center p-6 sm:p-8 md:p-10 bg-white
                                ${i % 2 === 0 ? "border-r border-gray-100" : ""}
                                ${i < 2 ? "border-b md:border-b-0 border-gray-100" : ""}
                                ${i === 1 || i === 2 ? "md:border-r border-gray-100" : ""}
                            `}
                        >
                            <span className="text-2xl sm:text-3xl mb-2 sm:mb-3">{stat.icon}</span>
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.1, duration: 0.5, type: "spring" }}
                                className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-primary-600 mb-1 sm:mb-2"
                            >
                                {stat.value}
                            </motion.span>
                            <span className="text-gray-500 font-medium text-xs sm:text-sm md:text-base leading-tight">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-10 sm:mt-14"
                >
                    <p className="text-gray-500 text-base sm:text-lg mb-5 sm:mb-6 px-4">
                        Join thousands of satisfied homeowners who found their perfect property with us.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                    >
                        Start Your Journey
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
