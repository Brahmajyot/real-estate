import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EverGreen Real Estate | Find Your Dream Property",
  description:
    "Discover premium properties with EverGreen Real Estate. Browse houses, apartments, and residential properties across 150+ cities worldwide.",
  keywords: "real estate, property, houses, apartments, buy property, EverGreen",
  openGraph: {
    title: "EverGreen Real Estate",
    description: "Build Your Future, One Property at a Time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
