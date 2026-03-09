"use client";

import { motion, Variants } from "framer-motion";
import PropertySearch from "./PropertySearch";
import { ArrowRight, MapPin } from "lucide-react";

const categoryPills = ["House", "Apartment", "Residential"];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop')`,
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-hero-gradient" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

            {/* Floating Badges — hidden on small, shown on xl+ */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute top-1/3 right-6 hidden xl:flex flex-col gap-3 max-w-[160px]"
            >
                <div className="glass rounded-2xl p-4 shadow-glass">
                    <p className="text-xs font-semibold text-gray-500 mb-1">🏡 Featured</p>
                    <p className="font-bold text-gray-800 text-sm">Luxury Villa</p>
                    <p className="text-primary-600 font-bold text-sm">$1.2M</p>
                </div>
                <div className="glass rounded-2xl p-4 shadow-glass">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <MapPin size={14} className="text-primary-600" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">New Listing</p>
                            <p className="font-bold text-gray-800 text-sm">Beverly Hills</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 section-container pt-28 pb-12 sm:pt-32 sm:pb-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-2xl"
                >
                    {/* Category Pills */}
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                        {categoryPills.map((pill) => (
                            <span
                                key={pill}
                                className="px-3 sm:px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold border border-white/30 hover:bg-primary-600/70 hover:border-primary-400 transition-colors cursor-pointer"
                            >
                                {pill}
                            </span>
                        ))}
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-4 sm:mb-6"
                    >
                        Build Your Future,{" "}
                        <span className="text-primary-400">One Property</span>{" "}
                        at a Time.
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-4 max-w-xl"
                    >
                        Discover premium properties tailored to your lifestyle — from cozy
                        apartments to sprawling estates.
                    </motion.p>

                    {/* Quick stats */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10"
                    >
                        <div>
                            <span className="text-xl sm:text-2xl font-bold text-white">500+</span>
                            <span className="text-white/70 text-xs sm:text-sm ml-1.5">Properties</span>
                        </div>
                        <div className="w-px h-5 bg-white/30" />
                        <div>
                            <span className="text-xl sm:text-2xl font-bold text-white">150+</span>
                            <span className="text-white/70 text-xs sm:text-sm ml-1.5">Cities</span>
                        </div>
                        <div className="w-px h-5 bg-white/30" />
                        <div>
                            <span className="text-xl sm:text-2xl font-bold text-white">100%</span>
                            <span className="text-white/70 text-xs sm:text-sm ml-1.5">Trusted</span>
                        </div>
                    </motion.div>

                    {/* Explore Button */}
                    <motion.div variants={itemVariants} className="mb-10 sm:mb-14">
                        <motion.a
                            href="#properties"
                            whileHover={{ scale: 1.05, x: 4 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl transition-colors shadow-lg text-sm sm:text-base"
                        >
                            Explore Properties
                            <ArrowRight size={18} />
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Property Search Card */}
                <div className="max-w-4xl">
                    <PropertySearch />
                </div>
            </div>

            {/* Scroll Indicator — hidden on very small screens */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
            >
                <span className="text-white/60 text-xs font-medium">Scroll down</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-5 h-8 border-2 border-white/40 rounded-full flex items-start justify-center p-1"
                >
                    <div className="w-1 h-2 bg-white/70 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
