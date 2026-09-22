import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work & Production Systems | Aruna Somesh",
  description: "Explore featured full-stack web applications, AI automations, and digital design projects engineered by Aruna Somesh.",
};

const PROJECTS = [
  {
    id: "cto-bees",
    title: "CTO BEES",
    subtitle: "Enterprise Technical Leadership & Full-Stack Platform",
    category: "Full-Stack Web App & AI",
    year: "2026",
    summary:
      "A flagship technology hub and client onboarding ecosystem engineered for fractional CTO leadership, tech audit automation, and enterprise web architecture.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Supabase", "AI Automation"],
    href: "/#work",
    metrics: ["99.8% Uptime", "98/100 Lighthouse", "3.4x Faster Onboarding"],
    featured: true,
  },
  {
    id: "prestige-os",
    title: "Prestige Momentum",
    subtitle: "Spatial Portfolio & Agency Brand Experience",
    category: "UI/UX & Motion Design",
    year: "2026",
    summary:
      "High-touch editorial portfolio featuring 3D bezier scroll arcs, infinite dual-row tech marquees, and automated AIS inquiry webhook pipelines.",
    tags: ["React 19", "Framer Motion", "GSAP", "Vercel Edge"],
    href: "/#work",
    metrics: ["60 FPS Smooth Scroll", "< 0.8s LCP", "Global CDN"],
    featured: false,
  },
  {
    id: "nexus-agent",
    title: "Nexus RAG Assistant",
    subtitle: "Autonomous Lead & Knowledge Retrieval Engine",
    category: "AI & Automation",
    year: "2026",
    summary:
      "Multi-tenant retrieval-augmented generation engine connecting vector embeddings to live customer support channels with zero model retraining lag.",
    tags: ["Python", "FastAPI", "OpenAI", "Pinecone", "LangChain"],
    href: "/services",
    metrics: ["94% Resolution Rate", "250ms Response", "Zero Hallucination Guardrails"],
    featured: false,
  },
  {
    id: "aura-commerce",
    title: "Aura Minimalist Commerce",
    subtitle: "High-Converting Headless E-Commerce Experience",
    category: "E-Commerce & Full Stack",
    year: "2025",
    summary:
      "Blazing-fast headless storefront with instantaneous client transitions, dynamic cart state management, and Stripe checkout.",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Sanity CMS"],
    href: "/services",
    metrics: ["+42% Conversion", "0.6s Time-to-Interactive"],
    featured: false,
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#070709] text-white selection:bg-[#eb3d26]/30 selection:text-white">
      
      {/* Header Banner */}
      <section className="pt-28 pb-16 px-6 sm:px-10 md:px-14 border-b border-white/[0.08] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#eb3d26] animate-pulse" />
            <p className="text-xs font-mono uppercase tracking-widest text-[#888894]">
              Portfolio &amp; Production Systems
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Selected Works &amp; Production Systems.
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl font-light leading-relaxed">
            A curated collection of web applications, AI automation platforms, and brand experiences built for high-growth businesses.
          </p>
        </div>
      </section>

      {/* Featured Project Hero Card (CTO BEES) */}
      <section className="py-16 md:py-20 px-6 sm:px-10 md:px-14 max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-br from-[#121218] to-[#0a0a0e] border border-white/15 relative overflow-hidden shadow-2xl group">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#eb3d26]/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#eb3d26]/20 text-[#eb3d26] border border-[#eb3d26]/30 uppercase tracking-wider">
                  Featured Project
                </span>
                <span className="text-xs font-mono text-zinc-500">2026</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                CTO BEES
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
                Enterprise technical leadership and full-stack onboarding ecosystem engineered for fractional CTO audits, client workflows, and cloud architecture.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <p className="text-xl sm:text-2xl font-bold text-white font-mono">99.8%</p>
                  <p className="text-[11px] font-mono text-zinc-400">System Uptime</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <p className="text-xl sm:text-2xl font-bold text-white font-mono">98/100</p>
                  <p className="text-[11px] font-mono text-zinc-400">Lighthouse Score</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <p className="text-xl sm:text-2xl font-bold text-white font-mono">3.4x</p>
                  <p className="text-[11px] font-mono text-zinc-400">Faster Onboarding</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/#work"
                  className="px-6 py-3 rounded-full bg-[#eb3d26] text-white font-semibold text-sm hover:bg-[#d6331d] transition-all duration-200 shadow-md shadow-red-600/20"
                >
                  View Showcase →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-[#16161f] p-6 space-y-4">
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">Tech Stack Architecture</p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js 16", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "OpenAI API", "Vercel Edge"].map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/10 text-xs text-zinc-400 leading-normal">
                  Custom-designed user journey with automated scheduling, secure tokenized document exchange, and real-time tech debt reporting.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Other Projects */}
      <section className="py-12 md:py-16 px-6 sm:px-10 md:px-14 max-w-6xl mx-auto space-y-12">
        <h3 className="text-2xl font-bold text-white tracking-tight">More Production Systems</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.filter((p) => !p.featured).map((proj) => (
            <div
              key={proj.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#0f0f14] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 text-xs font-mono text-zinc-400">
                  <span>{proj.category}</span>
                  <span>{proj.year}</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  {proj.title}
                </h4>
                
                <p className="text-xs font-mono text-[#eb3d26] mb-4">
                  {proj.subtitle}
                </p>

                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {proj.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-zinc-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400">
                  {proj.metrics[0]}
                </span>
                <Link
                  href={proj.href}
                  className="text-xs font-mono text-white hover:text-[#eb3d26] transition-colors"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-10 md:px-14 text-center border-t border-white/10 max-w-4xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Have an upcoming project in mind?
        </h3>
        <p className="text-zinc-400 text-base mb-8 max-w-lg mx-auto font-light">
          Let&apos;s build something extraordinary together. Inquire today to discuss architecture, timeline, and deliverables.
        </p>
        <Link
          href="/#contact"
          className="inline-block px-8 py-4 rounded-full bg-[#eb3d26] text-white font-semibold hover:bg-[#d6331d] transition-all duration-200 shadow-lg shadow-red-600/20"
        >
          Book a Discovery Call
        </Link>
      </section>

      <Footer />
    </div>
  );
}
