import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { FilterProvider } from "@/components/FilterContext";

// Lazy load sections below the fold for performance
const FeatureProperties = dynamic(() => import("@/components/FeatureProperties"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});
const Stats = dynamic(() => import("@/components/Stats"), {
  loading: () => <div className="h-40 bg-white animate-pulse" />,
});
const PropertyMap = dynamic(() => import("@/components/PropertyMap"), {
  loading: () => <div className="h-[500px] bg-gray-50 animate-pulse" />,
});
const PropertyGrid = dynamic(() => import("@/components/PropertyGrid"), {
  loading: () => <div className="h-[600px] bg-white animate-pulse" />,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});
const CTA = dynamic(() => import("@/components/CTA"), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />,
});
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <FilterProvider>
      <main>
        <Navbar />
        <Hero />
        <FeatureProperties />
        <Stats />
        <PropertyMap />
        <PropertyGrid />
        <FAQ />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </FilterProvider>
  );
}
