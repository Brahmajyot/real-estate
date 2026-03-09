"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const perks = [
    "No hidden fees",
    "Expert guidance",
    "500+ verified listings",
    "24/7 support",
];

export default function CTA() {
    return (
        <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')`,
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-cta-gradient" />
            <div className="absolute inset-0 bg-black/40" />

            {/* Decorative blur orbs */}
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary-400/10 rounded-full blur-3xl" />

            <div className="relative z-10 section-container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="inline-block px-4 py-1.5 bg-primary-600/80 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 sm:mb-8 border border-primary-400/50">
                        🚀 Get Started Today
                    </span>

                    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-4 sm:mb-6 max-w-4xl mx-auto">
                        Ready to Make Your{" "}
                        <span className="text-primary-400">Dream Property</span> a Reality?
                    </h2>

                    <p className="text-white/75 text-base sm:text-xl leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
                        Join thousands of happy homeowners. Our expert team is ready to guide
                        you to the perfect property at the best price.
                    </p>

                    {/* Perks */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
                        {perks.map((perk) => (
                            <div key={perk} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                                <CheckCircle size={14} className="text-primary-400 flex-shrink-0" />
                                <span className="text-white text-xs sm:text-sm font-medium">{perk}</span>
                            </div>
                        ))}
                    </div>

                    {/* Buttons — stack on mobile */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg transition-colors shadow-lg hover:shadow-xl"
                        >
                            Get Started
                            <ArrowRight size={18} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg transition-colors"
                        >
                            Browse Properties
                        </motion.button>
                    </div>

                    {/* Social proof */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 sm:mt-10 text-white/50 text-xs sm:text-sm"
                    >
                        ✓ Free consultation &nbsp; ✓ No commitment required &nbsp; ✓ Cancel anytime
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
