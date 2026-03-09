"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "First-Time Homebuyer",
        avatar: "https://i.pravatar.cc/120?img=1",
        text: "EverGreen made my dream of owning a home a reality. From the very first consultation to handing us the keys, every step was handled with professionalism and genuine care. I couldn't be happier with our beautiful Austin home!",
        rating: 5,
        property: "Bought in Austin, TX — $485K",
    },
    {
        id: 2,
        name: "James & Rachel Thompson",
        role: "Property Investors",
        avatar: "https://i.pravatar.cc/120?img=3",
        text: "We've been investing in real estate for over a decade and EverGreen is by far the best agency we've worked with. Their market analysis is top-notch and they helped us close 3 deals this year alone.",
        rating: 5,
        property: "Invested in Miami, FL — $3.2M portfolio",
    },
    {
        id: 3,
        name: "Priya Nair",
        role: "Remote Worker & Relocator",
        avatar: "https://i.pravatar.cc/120?img=5",
        text: "I relocated from London to New York and was completely overwhelmed. EverGreen's virtual tour feature made the whole process seamless. They found me the perfect penthouse apartment — I haven't looked back!",
        rating: 5,
        property: "Moved to New York, NY — $620K",
    },
    {
        id: 4,
        name: "Carlos Rivera",
        role: "Luxury Buyer",
        avatar: "https://i.pravatar.cc/120?img=8",
        text: "Working with EverGreen was an absolute pleasure. They truly understand the luxury market and matched us with a stunning Malibu estate that exceeded every expectation. Their attention to detail is unmatched.",
        rating: 5,
        property: "Purchased in Malibu, CA — $2.4M",
    },
];

const reviewAvatars = [
    "https://i.pravatar.cc/40?img=10",
    "https://i.pravatar.cc/40?img=11",
    "https://i.pravatar.cc/40?img=12",
    "https://i.pravatar.cc/40?img=13",
    "https://i.pravatar.cc/40?img=14",
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1));
    const next = () => setCurrent((p) => (p === testimonials.length - 1 ? 0 : p + 1));

    const t = testimonials[current];

    return (
        <section className="py-16 sm:py-24 bg-white overflow-hidden">
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
                        💬 Testimonials
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
                        Real stories from real homebuyers, sellers, and investors who trusted EverGreen.
                    </p>
                </motion.div>

                {/* Testimonial Card */}
                <div className="max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="bg-gradient-to-br from-primary-50 to-white rounded-2xl sm:rounded-3xl shadow-card-hover overflow-hidden"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                                {/* Top / Left — Photo */}
                                <div className="lg:col-span-2 relative">
                                    <div
                                        className="w-full h-52 sm:h-64 lg:h-full min-h-0 lg:min-h-[340px] bg-cover bg-center"
                                        style={{ backgroundImage: `url('${t.avatar.replace('/120?', '/600?')}')` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-transparent" />
                                    {/* Property tag */}
                                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                                        <div className="glass rounded-xl px-3 sm:px-4 py-2 text-xs font-semibold text-gray-700">
                                            🏡 {t.property}
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom / Right — Content */}
                                <div className="lg:col-span-3 p-5 sm:p-8 lg:p-12 flex flex-col justify-center">
                                    {/* Quote Icon */}
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                                        <Quote size={18} className="text-primary-600" />
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-3 sm:mb-4">
                                        {Array.from({ length: t.rating }).map((_, i) => (
                                            <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed italic mb-5 sm:mb-8">
                                        &ldquo;{t.text}&rdquo;
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary-200 bg-cover bg-center flex-shrink-0"
                                            style={{ backgroundImage: `url('${t.avatar}')` }}
                                        />
                                        <div>
                                            <p className="font-bold text-accent text-sm sm:text-base">{t.name}</p>
                                            <p className="text-xs sm:text-sm text-primary-600 font-medium">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="flex flex-col sm:flex-row items-center justify-between mt-6 sm:mt-8 gap-4">
                        {/* Avatar Group + Count */}
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {reviewAvatars.map((src, i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white bg-cover bg-center"
                                        style={{ backgroundImage: `url('${src}')` }}
                                    />
                                ))}
                            </div>
                            <div>
                                <p className="font-bold text-accent text-sm">500+ Reviews</p>
                                <div className="flex items-center gap-0.5 sm:gap-1">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                                    ))}
                                    <span className="text-xs text-gray-500 ml-1">4.9/5</span>
                                </div>
                            </div>
                        </div>

                        {/* Dots + Arrow Navigation */}
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1.5 mr-1 sm:mr-4">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className={`rounded-full transition-all duration-200 ${i === current ? "w-5 sm:w-6 h-2 bg-primary-600" : "w-2 h-2 bg-gray-200 hover:bg-primary-300"
                                            }`}
                                    />
                                ))}
                            </div>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={prev}
                                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gray-100 hover:bg-primary-600 hover:text-white text-gray-600 flex items-center justify-center transition-colors"
                            >
                                <ChevronLeft size={18} />
                            </motion.button>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={next}
                                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center transition-colors"
                            >
                                <ChevronRight size={18} />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
