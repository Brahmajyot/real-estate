"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Properties", href: "#properties" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#contact" },
];

const services = [
    "Property Sales",
    "Property Management",
    "Investment Advisory",
    "Relocation Services",
];

const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-accent text-white">
            {/* Newsletter Bar */}
            <div className="border-b border-white/10">
                <div className="section-container py-8 sm:py-10">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-1">Stay Updated on New Listings</h3>
                            <p className="text-white/60 text-sm">Get notified when new properties match your criteria.</p>
                        </div>
                        <div className="flex w-full md:w-auto gap-2 sm:gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className="flex-1 md:w-64 bg-white/10 border border-white/20 text-white placeholder-white/40 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm focus:outline-none focus:border-primary-400 transition-colors"
                            />
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-1.5 sm:gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-sm transition-colors whitespace-nowrap"
                            >
                                Subscribe <ArrowRight size={15} />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="section-container py-10 sm:py-16">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1 lg:col-span-1">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-5">
                            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" fill="white" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold">
                                Ever<span className="text-primary-400">Green</span>
                            </span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Your trusted partner in real estate. We help you find, buy, and invest
                            in premium properties across 150+ cities worldwide.
                        </p>
                        {/* Socials */}
                        <div className="flex gap-3">
                            {socials.map((s) => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    whileHover={{ scale: 1.15, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-9 h-9 bg-white/10 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                                    aria-label={s.label}
                                >
                                    <s.icon size={16} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-5">
                            Navigation
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-white/70 hover:text-primary-400 text-sm font-medium transition-colors hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-5">
                            Services
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {services.map((s) => (
                                <li key={s}>
                                    <a href="#" className="text-white/70 hover:text-primary-400 text-sm font-medium transition-colors">
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider text-white/60 mb-5">
                            Contact
                        </h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-primary-600/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <MapPin size={15} className="text-primary-400" />
                                </div>
                                <div>
                                    <p className="text-white/90 text-sm font-medium">Address</p>
                                    <p className="text-white/60 text-xs">123 Evergreen Blvd,<br />Beverly Hills, CA 90210</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-primary-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone size={15} className="text-primary-400" />
                                </div>
                                <div>
                                    <p className="text-white/90 text-sm font-medium">Phone</p>
                                    <a href="tel:+18005552345" className="text-white/60 text-xs hover:text-primary-400 transition-colors">
                                        +1 (800) 555-2345
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-primary-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail size={15} className="text-primary-400" />
                                </div>
                                <div>
                                    <p className="text-white/90 text-sm font-medium">Email</p>
                                    <a href="mailto:hello@evergreen.com" className="text-white/60 text-xs hover:text-primary-400 transition-colors">
                                        hello@evergreen.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="section-container py-5 sm:py-6">
                    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                        <p className="text-white/50 text-xs sm:text-sm text-center sm:text-left">
                            © 2026 EverGreen Real Estate. All rights reserved.
                        </p>
                        <div className="flex gap-4 sm:gap-6">
                            <a href="#" className="text-white/50 hover:text-white/80 text-xs transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-white/50 hover:text-white/80 text-xs transition-colors">
                                Terms
                            </a>
                            <a href="#" className="text-white/50 hover:text-white/80 text-xs transition-colors">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
