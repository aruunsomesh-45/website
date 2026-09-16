import type { Metadata } from "next";
import { Geist, Geist_Mono, Bodoni_Moda, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arunasomesh.com"),
  title: {
    default: "Aruna Somesh | Full-Stack & AI Developer",
    template: "%s | Aruna Somesh",
  },
  description:
    "Portfolio of Aruna Somesh. 1.5+ years building production AI solutions, autonomous AI agents, and high-performance full-stack web applications.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aruna Somesh | Full-Stack & AI Developer",
    description:
      "Full-stack developer with 1.5+ years building AI-driven products, custom AI solutions, and agents that convert visitors into believers.",
    url: "https://arunasomesh.com",
    siteName: "Aruna Somesh",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aruna Somesh — Full-Stack & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aruna Somesh | Full-Stack & AI Developer",
    description:
      "Full-stack developer with 1.5+ years building AI-driven products, custom AI solutions, and autonomous agents.",
    images: ["/og-image.jpg"],
    creator: "@arunasomesh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://arunasomesh.com/#person",
      name: "Aruna Somesh",
      jobTitle: "Full-Stack & AI Developer",
      url: "https://arunasomesh.com",
      "sameAs": ["https://github.com", "https://twitter.com"],
      knowsAbout: [
        "Full-Stack Web Development",
        "Autonomous AI Agents",
        "Next.js",
        "TypeScript",
        "Artificial Intelligence",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://arunasomesh.com/#website",
      url: "https://arunasomesh.com",
      name: "Aruna Somesh",
      publisher: {
        "@id": "https://arunasomesh.com/#person",
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bodoniModa.variable} ${playfairDisplay.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
