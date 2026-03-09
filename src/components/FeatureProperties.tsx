"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bed, Bath, Maximize, Star } from "lucide-react";

export default function FeatureProperties() {
    return (
        <section id="about" className="py-16 sm:py-24 bg-secondary">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                        ✨ Featured
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-4">
                        Premium Featured Properties
                    </h2>
                    <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
                        Hand-picked luxury properties in the most sought-after locations.
                    </p>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
                    {/* Left — Large Feature Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-card-hover group cursor-pointer min-h-[360px] sm:min-h-[460px] lg:min-h-[520px]"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop')`,
                            }}
                        />
                        <div className="absolute inset-0 bg-card-gradient" />

                        {/* Badge */}
                        <div className="absolute top-4 sm:top-5 left-4 sm:left-5">
                            <span className="px-3 py-1.5 bg-primary-600 text-white text-xs font-bold rounded-full shadow">
                                FOR SALE
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="absolute top-4 sm:top-5 right-4 sm:right-5 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            <Star size={13} className="fill-amber-400 text-amber-400" />
                            <span className="text-sm font-bold text-gray-800">4.9</span>
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                                Luxury Modern Villa
                            </h3>
                            <p className="text-white/80 text-sm mb-3 sm:mb-4">
                                Beverly Hills, California
                            </p>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-5">
                                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                                    <Bed size={13} className="text-white" />
                                    <span className="text-white text-xs font-semibold">5 Beds</span>
                                </div>
                                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                                    <Bath size={13} className="text-white" />
                                    <span className="text-white text-xs font-semibold">4 Baths</span>
                                </div>
                                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                                    <Maximize size={13} className="text-white" />
                                    <span className="text-white text-xs font-semibold">3,200 sqft</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl sm:text-3xl font-extrabold text-white">$1.85M</span>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl transition-colors text-sm"
                                >
                                    Details <ArrowRight size={15} />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Stacked Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="flex flex-col gap-5 sm:gap-6"
                    >
                        {/* Card 1 — Text/Info */}
                        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card flex-1 flex flex-col justify-between card-hover">
                            <div>
                                <span className="inline-flex w-9 h-9 sm:w-10 sm:h-10 bg-primary-100 rounded-xl sm:rounded-2xl mb-4 items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 17L12 22L22 17" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 12L12 17L22 12" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold text-accent mb-2 sm:mb-3">
                                    Big things can happen in small spaces.
                                </h3>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    We believe every property holds extraordinary potential. Our
                                    expert agents help you unlock the true value of any space,
                                    no matter the size.
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.04, x: 4 }}
                                whileTap={{ scale: 0.96 }}
                                className="mt-5 sm:mt-6 flex items-center gap-2 text-primary-600 font-bold group"
                            >
                                Discover More
                                <ArrowRight
                                    size={18}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </motion.button>
                        </div>

                        {/* Card 2 — Property Preview Card */}
                        <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-card card-hover flex-1 group cursor-pointer">
                            <div className="relative overflow-hidden h-36 sm:h-44">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')`,
                                    }}
                                />
                                <div className="absolute inset-0 bg-card-gradient" />
                                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                                    <span className="px-3 py-1 bg-white/90 text-accent text-xs font-bold rounded-full">
                                        🔥 Hot Deal
                                    </span>
                                </div>
                                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                                    <p className="text-white font-semibold text-sm">Modern Family Home</p>
                                    <p className="text-white/80 text-xs">Austin, Texas</p>
                                </div>
                                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4">
                                    <span className="text-xl sm:text-2xl font-extrabold text-white">$485K</span>
                                </div>
                            </div>
                            <div className="p-4 sm:p-5 flex items-center justify-between">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                                        <Bed size={12} />
                                        <span className="font-semibold">3 Beds</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                                        <Bath size={12} />
                                        <span className="font-semibold">2 Baths</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                                        <Maximize size={12} />
                                        <span className="font-semibold">1,800 sqft</span>
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-1.5 bg-primary-50 text-primary-700 font-bold text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl hover:bg-primary-600 hover:text-white transition-colors"
                                >
                                    Explore <ArrowRight size={12} />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
