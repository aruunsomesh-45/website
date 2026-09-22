import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Bodoni_Moda, Playfair_Display } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
      "sameAs": [
        "https://github.com/aruunsomesh-45",
        "https://www.instagram.com/arunsomesh._45/"
      ],
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5B4R4LLG');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5B4R4LLG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
