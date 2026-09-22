import React from "react";
import Link from "next/link";
import TechStackCarousel from "@/components/TechStackCarousel";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Capabilities | Aruna Somesh",
  description: "Bespoke full-stack web development, UI/UX graphic design, AI agents & workflow automation, and video editing services for ambitious brands worldwide.",
};

const SERVICES = [
  {
    id: "full-stack",
    number: "01",
    title: "Full-Stack Web Development",
    tagline: "High-performance websites, scalable web applications, and rock-solid APIs.",
    description:
      "Modern web architecture built with React 19, Next.js App Router, TypeScript, and serverless backends. From high-converting marketing landing pages to full-scale SaaS platforms with authentication, database orchestration, and instant edge deployments.",
    deliverables: [
      "Next.js & React Full-Stack Web Apps",
      "Headless CMS (Sanity / Contentful) Integration",
      "Database Architecture (Supabase / MongoDB / PostgreSQL)",
      "Secure Auth (Clerk, OAuth, 2FA)",
      "Payment Integrations (Stripe Checkout & Subscriptions)",
      "95+ Lighthouse Score Performance & SEO",
    ],
    timeline: "2 to 6 weeks",
    idealFor: "SaaS founders, funded startups, e-commerce brands, and agency partners.",
    badge: "Most Popular",
  },
  {
    id: "ui-ux",
    number: "02",
    title: "UI/UX & Graphic Design",
    tagline: "World-class interface systems, spatial visual storytelling, and memorable brands.",
    description:
      "I craft pixel-perfect, hyper-polished user interfaces that look like they belong in 2030. Every typography choice, micro-interaction, glassmorphic card, and color palette is designed with intention to maximize user trust and conversion rates.",
    deliverables: [
      "Figma UI/UX Prototypes & Wireframes",
      "Scalable Design Systems & Tokens",
      "Interactive Motion & Spatial Layouts",
      "Conversion-Optimized Landing Page Design",
      "Vector Brand Assets & Logo Marks",
      "Mobile-First Responsive Layout Specs",
    ],
    timeline: "1 to 3 weeks",
    idealFor: "Tech companies rebranding, web3 projects, and high-growth consumer apps.",
    badge: "Design Excellence",
  },
  {
    id: "ai-automation",
    number: "03",
    title: "AI Agents & Workflow Automation",
    tagline: "Intelligent autonomous agents, custom LLM workflows, and automated pipelines.",
    description:
      "Transform manual operational bottlenecks into autonomous 24/7 workflows. I architect custom AI agents using LangChain, OpenAI GPT, Anthropic Claude, and webhook connectors that automate customer support, lead qualification, and data enrichment.",
    deliverables: [
      "Custom RAG (Retrieval-Augmented Generation) Chatbots",
      "Autonomous Multi-Step AI Agents",
      "Zapier & Make.com Advanced Workflow Routing",
      "CRM & Webhook Pipeline Automation",
      "AI Form Processing & Inquiry Classification",
      "Vector Database Setup (Pinecone / pgvector)",
    ],
    timeline: "1 to 4 weeks",
    idealFor: "Agencies, operational teams, and businesses scaling customer engagement.",
    badge: "Next-Gen AI",
  },
  {
    id: "video-editing",
    number: "04",
    title: "Video Editing & Post-Production",
    tagline: "Cinematic product trailers, social-first motion graphics, and editorial content.",
    description:
      "Engage your audience with high-impact visual storytelling. High-retention video editing combining kinetic typography, sound design, 3D motion graphics, and crisp color grading tailored for product launches and social channels.",
    deliverables: [
      "SaaS Product Launch Showcases",
      "High-Retention Reels & TikTok Content",
      "Kinetic Typography & Motion Graphics",
      "Audio Cleanup, Foley & Sound Design",
      "Color Grading & Cinematic Visuals",
      "Multi-Format Aspect Ratio Exports",
    ],
    timeline: "3 to 10 days",
    idealFor: "Product launches, brand marketers, YouTube creators, and event campaigns.",
    badge: "High Impact",
  },
];

const PACKAGES = [
  {
    name: "Prestige Sprint",
    role: "Landing Page & Brand UI",
    description: "Perfect for new product launches, single-page sites, or high-converting landing pages.",
    delivery: "1-2 Weeks",
    features: [
      "High-converting 5-7 section landing page",
      "Figma design & interactive prototype",
      "Next.js / Tailwind CSS / Framer Motion",
      "Contact form with instant email alerts",
      "Perfect mobile responsiveness",
      "30-day post-launch support",
    ],
    highlight: false,
  },
  {
    name: "Full Production",
    role: "Full-Stack Web App + AI Agent",
    description: "End-to-end full-stack web application with database, authentication, and custom AI automations.",
    delivery: "3-5 Weeks",
    features: [
      "Multi-page responsive web application",
      "Supabase / MongoDB database backend",
      "Clerk or NextAuth authentication",
      "Custom AI chatbot or automation pipeline",
      "Stripe payment & billing integration",
      "Sanity CMS integration for easy edits",
      "Lighthouse 95+ performance optimization",
      "60-day priority warranty & support",
    ],
    highlight: true,
  },
  {
    name: "Custom Enterprise",
    role: "Bespoke Architecture & Retainer",
    description: "Tailored for complex enterprise platforms, continuous product engineering, or AI infrastructure.",
    delivery: "Custom Timeline",
    features: [
      "Dedicated full-stack engineering bandwidth",
      "Custom microservices & distributed APIs",
      "Advanced RAG & LLM agent pipelines",
      "Design system development & maintenance",
      "Direct Slack/Discord communication",
      "Continuous CI/CD & DevOps management",
      "Ongoing monthly SLA & security audits",
    ],
    highlight: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#070709] text-white selection:bg-[#eb3d26]/30 selection:text-white">
      
      {/* Hero Header */}
      <section className="pt-28 pb-16 md:pb-24 px-6 sm:px-10 md:px-14 border-b border-white/[0.08] relative overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-red-600/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#eb3d26] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-300">
              Services &amp; Capabilities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Engineering that turns visionary ideas into reality.
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Specialized in high-performance full-stack web applications, spatial UI/UX design, autonomous AI agents, and cinematic post-production.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-4 rounded-full bg-[#eb3d26] text-white font-medium hover:bg-[#d6331d] transition-all duration-200 shadow-lg shadow-red-600/20"
            >
              Start a Project
            </Link>
            <Link
              href="/work"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 transition-all duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Deep-Dive Service Cards */}
      <section className="py-20 px-6 sm:px-10 md:px-14 max-w-6xl mx-auto space-y-16">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#eb3d26] mb-2">Core Disciplines</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Four specialized areas of excellence.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#0f0f14] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-mono text-zinc-500">{srv.number}</span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  {srv.title}
                </h3>
                
                <p className="text-sm font-medium text-[#eb3d26] mb-4">
                  {srv.tagline}
                </p>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {srv.description}
                </p>

                <div className="space-y-2 mb-8">
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-300">Deliverables include:</p>
                  <ul className="grid grid-cols-1 gap-2 text-sm text-zinc-400">
                    {srv.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[#eb3d26] font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Timeline: <strong className="text-white">{srv.timeline}</strong></span>
                <Link
                  href="/#contact"
                  className="text-white hover:text-[#eb3d26] font-semibold flex items-center gap-1 transition-colors"
                >
                  Inquire →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Carousel Section */}
      <TechStackCarousel />

      {/* Engagement Packages */}
      <section className="py-20 md:py-28 px-6 sm:px-10 md:px-14 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#eb3d26] mb-2">Pricing &amp; Engagements</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Transparent, milestone-based packages.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            No surprise invoices or bloated agency overhead. Dedicated calendar commitment with weekly progress demos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                pkg.highlight
                  ? "bg-[#14141d] border-2 border-[#eb3d26] shadow-2xl shadow-red-600/10 relative"
                  : "bg-[#0f0f14] border border-white/10 hover:border-white/20"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#eb3d26] text-white text-[10px] font-mono uppercase tracking-widest">
                  Recommended
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-1">{pkg.name}</h3>
                <p className="text-xs font-mono text-[#eb3d26] mb-4">{pkg.role}</p>
                <p className="text-sm text-zinc-400 font-light mb-6">{pkg.description}</p>
                <p className="text-xs font-mono text-zinc-300 pb-4 border-b border-white/10 mb-6">
                  Typical Delivery: <span className="text-white font-semibold">{pkg.delivery}</span>
                </p>

                <ul className="space-y-2.5 text-sm text-zinc-400 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <span className="text-emerald-400 text-xs">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/#contact"
                className={`w-full py-3.5 rounded-full text-center text-sm font-semibold transition-all duration-200 ${
                  pkg.highlight
                    ? "bg-[#eb3d26] text-white hover:bg-[#d6331d]"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Discuss This Package
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
