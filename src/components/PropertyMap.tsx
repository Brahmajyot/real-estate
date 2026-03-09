"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Search, Home } from "lucide-react";

const nearbyProperties = [
    { label: "Sunset Villa", price: "$890K", distance: "0.3 km", beds: 4 },
    { label: "Park Avenue Apt", price: "$320K", distance: "0.7 km", beds: 2 },
    { label: "Lakeside Cottage", price: "$550K", distance: "1.2 km", beds: 3 },
];

export default function PropertyMap() {
    return (
        <section className="py-24 bg-secondary overflow-hidden">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Interactive Map Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Map Container */}
                        <div className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-card-hover bg-white">
                            {/* Map Background (real map aesthetic using CSS) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')`,
                                }}
                            />
                            <div className="absolute inset-0 bg-white/10" />

                            {/* SVG Map Overlay */}
                            <div className="absolute inset-0" style={{
                                backgroundImage: `
                  linear-gradient(rgba(22,163,74,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(22,163,74,0.05) 1px, transparent 1px)
                `,
                                backgroundSize: '40px 40px'
                            }} />

                            {/* Pulse Marker — Main Location */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <motion.div
                                    animate={{ scale: [1, 1.4, 1] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                    className="absolute -inset-4 bg-primary-400/20 rounded-full"
                                />
                                <motion.div
                                    animate={{ scale: [1, 1.6, 1] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }}
                                    className="absolute -inset-8 bg-primary-400/10 rounded-full"
                                />
                                <div className="relative w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10">
                                    <Home size={22} className="text-white" />
                                </div>
                                {/* Callout */}
                                <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg px-4 py-2 whitespace-nowrap z-20">
                                    <p className="text-xs font-bold text-accent">🏠 Dream Home</p>
                                    <p className="text-xs text-primary-600 font-semibold">Beverly Hills, CA</p>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
                                </div>
                            </div>

                            {/* Secondary mini markers */}
                            {[
                                { top: "25%", left: "25%", label: "$320K" },
                                { top: "65%", left: "70%", label: "$490K" },
                                { top: "30%", left: "72%", label: "$780K" },
                                { top: "72%", left: "28%", label: "$215K" },
                            ].map((marker, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.15 }}
                                    style={{ top: marker.top, left: marker.left }}
                                    className="absolute"
                                >
                                    <div className="relative group cursor-pointer">
                                        <div className="bg-white text-primary-700 text-xs font-bold px-2.5 py-1 rounded-full shadow-md border border-primary-200 hover:bg-primary-600 hover:text-white transition-colors">
                                            {marker.label}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Map Controls */}
                            <div className="absolute right-4 bottom-4 flex flex-col gap-2">
                                <button className="w-9 h-9 bg-white rounded-lg shadow-md flex items-center justify-center font-bold text-gray-700 hover:bg-primary-600 hover:text-white transition-colors text-lg">+</button>
                                <button className="w-9 h-9 bg-white rounded-lg shadow-md flex items-center justify-center font-bold text-gray-700 hover:bg-primary-600 hover:text-white transition-colors text-lg">−</button>
                            </div>

                            {/* Search bar on map */}
                            <div className="absolute top-4 left-4 right-4">
                                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow px-4 py-2.5 flex items-center gap-3">
                                    <Search size={16} className="text-gray-400" />
                                    <span className="text-sm text-gray-400 font-medium">Search location...</span>
                                </div>
                            </div>
                        </div>

                        {/* Nearby Properties List */}
                        <div className="mt-4 grid grid-cols-3 gap-3">
                            {nearbyProperties.map((p, i) => (
                                <motion.div
                                    key={p.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="bg-white rounded-2xl p-3 shadow-card text-center cursor-pointer hover:shadow-card-hover transition-shadow"
                                >
                                    <p className="text-xs font-bold text-accent truncate">{p.label}</p>
                                    <p className="text-primary-600 font-bold text-sm">{p.price}</p>
                                    <p className="text-gray-400 text-xs">{p.distance} away</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                            📍 Map Search
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-accent leading-tight mb-6">
                            Discover Properties with the{" "}
                            <span className="gradient-text">Best Value</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            Use our interactive map to explore properties in real time. Filter by
                            price, neighborhood, and property type to find exactly what you're
                            looking for — anywhere in the world.
                        </p>

                        {/* Features List */}
                        <div className="flex flex-col gap-4 mb-10">
                            {[
                                { icon: MapPin, title: "Precision Location Finder", desc: "Pinpoint exact neighborhoods with our smart search" },
                                { icon: Navigation, title: "Nearby Amenities", desc: "Schools, hospitals, parks within walking distance" },
                                { icon: Search, title: "Real-Time Listings", desc: "Updated listings every 15 minutes across all cities" },
                            ].map((item) => (
                                <div key={item.title} className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <item.icon size={18} className="text-primary-600" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-accent text-sm mb-0.5">{item.title}</p>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary flex items-center gap-2"
                        >
                            <Navigation size={18} />
                            Find Nearest Properties
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
