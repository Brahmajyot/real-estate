"use client";

import { motion } from "framer-motion";
import { Search, ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { useFilters, ListingType, PropertyType } from "./FilterContext";

const listingTypes: ListingType[] = ["All", "For Sale", "For Rent"];
const propertyTypes: PropertyType[] = ["All", "House", "Apartment", "Residential", "Commercial"];
const priceRanges = ["", "$0 – $250K", "$250K – $500K", "$500K – $1M", "$1M – $2M", "$2M+"];
const locations = ["", "New York, NY", "Los Angeles, CA", "Chicago, IL", "Miami, FL", "Austin, TX", "Boston, MA", "Malibu, CA"];
const roomOptions = ["", "1+", "2+", "3+", "4+", "5+"];

export default function PropertySearch() {
    const { filters, setFilters, resetFilters } = useFilters();

    const hasActiveFilters =
        filters.propertyType !== "All" ||
        filters.listingType !== "All" ||
        filters.priceRange !== "" ||
        filters.location !== "" ||
        filters.rooms !== "" ||
        filters.searchQuery !== "";

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="glass rounded-2xl sm:rounded-3xl shadow-glass p-4 sm:p-6 md:p-8 w-full border border-white/50"
        >
            {/* Listing Type Chips */}
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {listingTypes.map((chip, i) => (
                    <motion.button
                        key={chip}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFilters({ listingType: chip })}
                        className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${filters.listingType === chip
                                ? "bg-primary-600 text-white shadow-md"
                                : "bg-white/70 text-gray-600 border border-gray-200 hover:border-primary-400 hover:text-primary-600"
                            }`}
                    >
                        {chip === "All" ? "All Listings" : chip}
                    </motion.button>
                ))}

                {hasActiveFilters && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={resetFilters}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-red-500 border border-red-200 bg-red-50 hover:bg-red-100 transition-all"
                    >
                        <X size={12} />
                        Clear
                    </motion.button>
                )}
            </div>

            {/* Search Fields — 1 col on mobile, 2 on sm, 4 on lg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {/* Property Type */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Type
                    </label>
                    <div className="relative">
                        <select
                            value={filters.propertyType}
                            onChange={(e) => setFilters({ propertyType: e.target.value as PropertyType })}
                            className="w-full appearance-none bg-white/80 border border-gray-200 text-gray-700 font-medium px-3 sm:px-4 py-2.5 sm:py-3 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition text-sm cursor-pointer"
                        >
                            {propertyTypes.map((t) => (
                                <option key={t} value={t}>{t === "All" ? "Any Type" : t}</option>
                            ))}
                        </select>
                        <ChevronDown size={15} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                </div>

                {/* Price Range */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Price
                    </label>
                    <div className="relative">
                        <select
                            value={filters.priceRange}
                            onChange={(e) => setFilters({ priceRange: e.target.value })}
                            className="w-full appearance-none bg-white/80 border border-gray-200 text-gray-700 font-medium px-3 sm:px-4 py-2.5 sm:py-3 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition text-sm cursor-pointer"
                        >
                            <option value="">Any Price</option>
                            {priceRanges.filter(Boolean).map((r) => (
                                <option key={r} value={r}>{r}</option>
                            ))}
                        </select>
                        <ChevronDown size={15} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                </div>

                {/* Location */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Location
                    </label>
                    <div className="relative">
                        <select
                            value={filters.location}
                            onChange={(e) => setFilters({ location: e.target.value })}
                            className="w-full appearance-none bg-white/80 border border-gray-200 text-gray-700 font-medium px-3 sm:px-4 py-2.5 sm:py-3 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition text-sm cursor-pointer"
                        >
                            <option value="">Any Location</option>
                            {locations.filter(Boolean).map((l) => (
                                <option key={l} value={l}>{l}</option>
                            ))}
                        </select>
                        <ChevronDown size={15} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                </div>

                {/* Rooms */}
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Min. Beds
                    </label>
                    <div className="relative">
                        <select
                            value={filters.rooms}
                            onChange={(e) => setFilters({ rooms: e.target.value })}
                            className="w-full appearance-none bg-white/80 border border-gray-200 text-gray-700 font-medium px-3 sm:px-4 py-2.5 sm:py-3 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition text-sm cursor-pointer"
                        >
                            <option value="">Any</option>
                            {roomOptions.filter(Boolean).map((r) => (
                                <option key={r} value={r}>{r} beds</option>
                            ))}
                        </select>
                        <ChevronDown size={15} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Search Button Row */}
            <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
                <motion.a
                    href="#properties"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-5 sm:px-8 py-3 sm:py-3.5 rounded-2xl transition-colors shadow-lg hover:shadow-xl text-sm"
                >
                    <Search size={16} />
                    Search
                </motion.a>
                {hasActiveFilters && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={resetFilters}
                        className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl transition-colors text-sm"
                    >
                        <SlidersHorizontal size={16} />
                        <span className="hidden sm:inline">Reset</span>
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
}
