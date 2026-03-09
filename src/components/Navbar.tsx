"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { label: "Home", href: "#home", sectionId: "home" },
    { label: "About Us", href: "#about", sectionId: "about" },
    { label: "Properties", href: "#properties", sectionId: "properties" },
    { label: "Contact", href: "#contact", sectionId: "contact" },
];

const languages = ["EN", "FR", "ES", "DE"];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState("EN");
    const [activeSection, setActiveSection] = useState("home");
    const langRef = useRef<HTMLDivElement>(null);

    // Scroll handler
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Active section via IntersectionObserver
    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.sectionId);
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    // Close lang dropdown on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(e.target as Node)) {
                setLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        // smooth scroll for same-page anchor
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
                }`}
        >
            <div className="section-container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="#home"
                        onClick={() => handleNavClick("#home")}
                        className="flex items-center gap-2"
                    >
                        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" fill="white" />
                            </svg>
                        </div>
                        <span className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? "text-accent" : "text-white"}`}>
                            Ever<span className="text-primary-500">Green</span>
                        </span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.sectionId;
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(link.href);
                                    }}
                                    className={`relative text-sm font-medium transition-colors duration-200 pb-1 ${isScrolled
                                            ? isActive ? "text-primary-600" : "text-gray-700 hover:text-primary-600"
                                            : isActive ? "text-white" : "text-white/80 hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                    {/* Active underline */}
                                    <motion.span
                                        layoutId="nav-underline"
                                        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${isScrolled ? "bg-primary-600" : "bg-white"
                                            }`}
                                        style={{ display: isActive ? "block" : "none" }}
                                    />
                                </a>
                            );
                        })}
                    </div>

                    {/* Right Side */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Language Selector */}
                        <div className="relative" ref={langRef}>
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${isScrolled ? "text-gray-700 hover:text-primary-600" : "text-white/90 hover:text-white"
                                    }`}
                            >
                                <Globe size={16} />
                                {selectedLang}
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                                />
                            </button>
                            <AnimatePresence>
                                {langOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang}
                                                onClick={() => {
                                                    setSelectedLang(lang);
                                                    setLangOpen(false);
                                                }}
                                                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-50 hover:text-primary-600 ${selectedLang === lang ? "text-primary-600 bg-primary-50" : "text-gray-700"
                                                    }`}
                                            >
                                                {lang}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Sign Up */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary-600 text-white text-sm font-semibold px-5 py-2.5 rounded-2xl hover:bg-primary-700 transition-colors shadow-md"
                        >
                            Sign Up
                        </motion.button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/20"
                            }`}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
                    >
                        <div className="section-container py-4 flex flex-col gap-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(link.href);
                                    }}
                                    className={`px-4 py-3 font-medium rounded-xl transition-colors ${activeSection === link.sectionId
                                            ? "bg-primary-50 text-primary-600"
                                            : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                                        }`}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <div className="flex items-center gap-3 pt-3 mt-1 border-t border-gray-100">
                                <button className="flex items-center gap-1.5 text-sm text-gray-600 font-medium px-4 py-2.5 rounded-xl hover:bg-gray-50">
                                    <Globe size={16} /> {selectedLang}
                                </button>
                                <button className="flex-1 bg-primary-600 text-white text-sm font-semibold px-5 py-2.5 rounded-2xl hover:bg-primary-700 transition-colors">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
