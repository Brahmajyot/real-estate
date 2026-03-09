/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
        formats: ["image/avif", "image/webp"],
    },
    compress: true,
    poweredByHeader: false,
    experimental: {
        optimizePackageImports: ["framer-motion", "lucide-react"],
    },
};

export default nextConfig;
