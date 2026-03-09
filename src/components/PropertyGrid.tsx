"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bed, Bath, Maximize, MapPin, Heart, SearchX } from "lucide-react";
import { useFilters } from "./FilterContext";

const properties = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop",
        title: "Modern Glass Estate",
        location: "Malibu, CA",
        locationFull: "Malibu, CA",
        price: "$2.4M",
        priceNum: 2400000,
        beds: 5,
        baths: 4,
        sqft: "4,200",
        badge: "For Sale",
        type: "House",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop",
        title: "Suburban Family Home",
        location: "Austin, TX",
        locationFull: "Austin, TX",
        price: "$485K",
        priceNum: 485000,
        beds: 4,
        baths: 3,
        sqft: "2,100",
        badge: "For Sale",
        type: "House",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=800&auto=format&fit=crop",
        title: "Downtown Penthouse",
        location: "New York, NY",
        locationFull: "New York, NY",
        price: "$3.1M",
        priceNum: 3100000,
        beds: 3,
        baths: 3,
        sqft: "3,000",
        badge: "For Sale",
        type: "Apartment",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
        title: "Coastal White Villa",
        location: "Miami, FL",
        locationFull: "Miami, FL",
        price: "$1.7M",
        priceNum: 1700000,
        beds: 6,
        baths: 5,
        sqft: "5,100",
        badge: "For Rent",
        type: "House",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop",
        title: "Skyline Loft Apartment",
        location: "Chicago, IL",
        locationFull: "Chicago, IL",
        price: "$620K",
        priceNum: 620000,
        beds: 2,
        baths: 2,
        sqft: "1,400",
        badge: "For Rent",
        type: "Apartment",
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1601760562234-9814eea6db90?q=80&w=800&auto=format&fit=crop",
        title: "Classic Colonial House",
        location: "Boston, MA",
        locationFull: "Boston, MA",
        price: "$890K",
        priceNum: 890000,
        beds: 5,
        baths: 4,
        sqft: "3,800",
        badge: "For Sale",
        type: "Residential",
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
        title: "Luxury LA Mansion",
        location: "Los Angeles, CA",
        locationFull: "Los Angeles, CA",
        price: "$5.2M",
        priceNum: 5200000,
        beds: 7,
        baths: 6,
        sqft: "7,800",
        badge: "For Sale",
        type: "House",
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800&auto=format&fit=crop",
        title: "Modern Studio Flat",
        location: "New York, NY",
        locationFull: "New York, NY",
        price: "$210K",
        priceNum: 210000,
        beds: 1,
        baths: 1,
        sqft: "650",
        badge: "For Rent",
        type: "Apartment",
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=800&auto=format&fit=crop",
        title: "Lakeside Retreat",
        location: "Austin, TX",
        locationFull: "Austin, TX",
        price: "$1.1M",
        priceNum: 1100000,
        beds: 4,
        baths: 3,
        sqft: "3,200",
        badge: "For Sale",
        type: "Residential",
    },
];

const typeFilters = ["All", "House", "Apartment", "Residential"];

// Parse price range string to [min, max]
function parsePriceRange(range: string): [number, number] {
    if (!range) return [0, Infinity];
    const map: Record<string, [number, number]> = {
        "$0 – $250K": [0, 250000],
        "$250K – $500K": [250000, 500000],
        "$500K – $1M": [500000, 1000000],
        "$1M – $2M": [1000000, 2000000],
        "$2M+": [2000000, Infinity],
    };
    return map[range] ?? [0, Infinity];
}

function parseMinRooms(rooms: string): number {
    if (!rooms) return 0;
    return parseInt(rooms.replace("+", ""), 10) || 0;
}

function PropertyCard({ property, index }: { property: typeof properties[0]; index: number }) {
    const [liked, setLiked] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            className="property-card group"
        >
            {/* Image */}
            <div className="relative overflow-hidden h-56">
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${property.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-white text-xs font-bold rounded-full ${property.badge === "For Rent" ? "bg-blue-600" : "bg-primary-600"
                        }`}>
                        {property.badge}
                    </span>
                </div>

                {/* Like Button */}
                <button
                    onClick={() => setLiked(!liked)}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform"
                >
                    <Heart
                        size={15}
                        className={`transition-colors ${liked ? "fill-red-500 text-red-500" : "text-gray-400"}`}
                    />
                </button>

                {/* Stats overlay */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        <Bed size={11} />
                        <span className="font-semibold">{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        <Bath size={11} />
                        <span className="font-semibold">{property.baths}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        <Maximize size={11} />
                        <span className="font-semibold">{property.sqft}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="font-bold text-accent text-lg mb-1 group-hover:text-primary-600 transition-colors">
                    {property.title}
                </h3>
                <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
                    <MapPin size={14} className="text-primary-500" />
                    {property.location}
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-accent">{property.price}</span>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-xs font-bold text-primary-600 bg-primary-50 hover:bg-primary-600 hover:text-white px-4 py-2 rounded-xl transition-colors"
                    >
                        View Details
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}

export default function PropertyGrid() {
    const { filters } = useFilters();
    const [activeTypeFilter, setActiveTypeFilter] = useState("All");

    const filtered = useMemo(() => {
        const [minPrice, maxPrice] = parsePriceRange(filters.priceRange);
        const minRooms = parseMinRooms(filters.rooms);

        return properties.filter((p) => {
            // Type filter (from inline buttons OR context)
            const typeMatch =
                (activeTypeFilter === "All" || p.type === activeTypeFilter) &&
                (filters.propertyType === "All" || p.type === filters.propertyType);

            // Listing type (For Sale / For Rent)
            const listingMatch =
                filters.listingType === "All" || p.badge === filters.listingType;

            // Price
            const priceMatch = p.priceNum >= minPrice && p.priceNum <= maxPrice;

            // Location (partial match)
            const locationMatch =
                !filters.location ||
                p.location.toLowerCase().includes(filters.location.split(",")[0].toLowerCase());

            // Rooms
            const roomsMatch = p.beds >= minRooms;

            return typeMatch && listingMatch && priceMatch && locationMatch && roomsMatch;
        });
    }, [filters, activeTypeFilter]);

    // Sync context propertyType with local inline filter
    const handleTypeFilter = (f: string) => {
        setActiveTypeFilter(f);
    };

    return (
        <section id="properties" className="py-24 bg-white">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6"
                >
                    <div>
                        <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                            🏘️ Our Listings
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-accent">
                            Explore Our Premier Houses
                        </h2>
                        <p className="text-gray-500 mt-2 text-sm">
                            Showing <span className="text-primary-600 font-semibold">{filtered.length}</span> of {properties.length} properties
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-2">
                        {typeFilters.map((f) => (
                            <motion.button
                                key={f}
                                onClick={() => handleTypeFilter(f)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTypeFilter === f
                                        ? "bg-primary-600 text-white shadow-md"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {f}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Grid */}
                <AnimatePresence mode="popLayout">
                    {filtered.length > 0 ? (
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filtered.map((property, i) => (
                                <PropertyCard key={property.id} property={property} index={i} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center py-24 text-center gap-4"
                        >
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                                <SearchX size={28} className="text-gray-400" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-700">No properties found</h3>
                            <p className="text-gray-400 text-sm max-w-xs">
                                Try adjusting your filters to find the perfect property.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Load More */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-14"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-outline"
                    >
                        Load More Properties
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
