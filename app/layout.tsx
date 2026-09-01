import type { Metadata } from "next";
import AdvancedMotion from "../components/AdvancedMotion";
import LiquidCursor from "../components/LiquidCursor";
import MotionExperience from "../components/MotionExperience";
import ScrollProgress from "../components/ScrollProgress";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/sora";
import "./globals.css";
import "./premium.css";
import "./warm.css";
import "./selection.css";
import "./motion.css";
import "./project-previews.css";
import "./portfolio-expansion.css";
import "./final-polish.css";

const siteUrl = "https://basit-ahmed-developer.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Basit Ahmed — Senior Web Developer", template: "%s — Basit Ahmed" },
  description: "Senior web developer building high-performance websites, SaaS products, Shopify and WordPress commerce experiences, and API-connected applications for ambitious teams.",
  keywords: ["Senior Web Developer", "Next.js Developer", "React Developer", "WordPress Developer", "Shopify Developer", "WooCommerce Developer", "Laravel Developer", "Pakistan"],
  authors: [{ name: "Basit Ahmed", url: "https://github.com/Basit95" }],
  creator: "Basit Ahmed",
  openGraph: { type: "website", locale: "en_US", title: "Basit Ahmed — Senior Web Developer", description: "Web products built to perform. Product engineering, commerce and full-stack development for ambitious teams.", url: "/", siteName: "Basit Ahmed", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Basit Ahmed — Senior Web Developer" }] },
  twitter: { card: "summary_large_image", title: "Basit Ahmed — Senior Web Developer", description: "Web products built to perform.", images: ["/og.png"] },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }], shortcut: "/favicon.svg", apple: "/favicon.svg" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", "@id": siteUrl + "/#person", name: "Basit Ahmed", jobTitle: "Senior Web Developer", url: siteUrl, sameAs: ["https://github.com/Basit95", "https://www.linkedin.com/in/basit-ahmed-857151156"], knowsAbout: ["React", "Next.js", "TypeScript", "Angular", "WordPress", "Shopify", "Liquid", "WooCommerce", "Laravel", "PHP", "PostgreSQL", "REST APIs", "Role-based access control", "Web Performance"] },
    { "@type": "ProfessionalService", "@id": siteUrl + "/#service", name: "Basit Ahmed — Web Development", url: siteUrl, description: "Frontend engineering, backend applications, Shopify commerce, WordPress and full-stack web development for ambitious international teams.", founder: { "@id": siteUrl + "/#person" }, areaServed: "Worldwide" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><ScrollProgress /><LiquidCursor /><MotionExperience /><AdvancedMotion />{children}</body></html>;
}
