import React from "react";
import Link from "next/link";
import TechStackCarousel from "@/components/TechStackCarousel";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process & How I Work | Aruna Somesh",
  description: "A deep dive into our 3-stage engineering methodology: The Pledge (Discovery), The Turn (Build & Design), and The Prestige (Launch & Scale).",
};

const STAGES = [
  {
    step: "01",
    name: "The Pledge",
    phase: "Discovery, Architecture & Wireframing",
    tagline: "Before writing a single line of code, we align on strategy, audience, and system architecture.",
    duration: "Week 1",
    activities: [
      {
        title: "Deep-Dive Discovery Call",
        detail: "We unpack your core value proposition, audience personas, competitors, and conversion goals.",
      },
      {
        title: "Technical Architecture & Sitemap",
        detail: "Mapping out data schemas, API integrations (Stripe, Auth, AI vectors), and responsive URL hierarchy.",
      },
      {
        title: "Interactive Low-Fi Wireframing",
        detail: "Rapid Figma layout sketches to validate user journeys and content flow before design polish.",
      },
    ],
  },
  {
    step: "02",
    name: "The Turn",
    phase: "Spatial UI/UX Design & Full-Stack Engineering",
    tagline: "Where concepts transform into high-performance, responsive digital realities.",
    duration: "Weeks 2 - 4",
    activities: [
      {
        title: "High-Fidelity UI & Motion Design",
        detail: "Pixel-perfect Figma designs, custom design tokens, dark modes, and micro-interactions.",
      },
      {
        title: "Next.js & TypeScript Full-Stack Build",
        detail: "Strict type safety, Server Components, dynamic edge routing, and clean component modularity.",
      },
      {
        title: "Database, Auth & AI Integration",
        detail: "Connecting Supabase/PostgreSQL backends, Clerk user authentication, and LLM automation pipelines.",
      },
    ],
  },
  {
    step: "03",
    name: "The Prestige",
    phase: "QA Testing, Global Launch & 30-Day Support",
    tagline: "The final reveal: speed optimization, SEO auditing, deployment, and ongoing peace of mind.",
    duration: "Week 5 & Beyond",
    activities: [
      {
        title: "Lighthouse 95+ Audit & Stress Testing",
        detail: "Ensuring sub-second LCP, perfect mobile responsiveness across 12 device viewports, and clean accessibility.",
      },
      {
        title: "Production DNS & Edge Deployment",
        detail: "Global CDN edge deployment on Vercel with automatic SSL certificates and automated backups.",
      },
      {
        title: "30-Day Post-Launch Warranty",
        detail: "Dedicated support window to handle bug fixes, questions, and guarantee flawless real-world operation.",
      },
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#070709] text-white selection:bg-[#eb3d26]/30 selection:text-white">
      
      {/* Hero Header */}
      <section className="pt-28 pb-16 md:pb-24 px-6 sm:px-10 md:px-14 border-b border-white/[0.08] relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#eb3d26] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-300">
              Engineering Methodology
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            How we turn ambitious visions into shipped products.
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Inspired by classic theatrical mastery, every project follows a disciplined three-act structure designed to eliminate risk and deliver exceptional results.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-4 rounded-full bg-[#eb3d26] text-white font-medium hover:bg-[#d6331d] transition-all duration-200 shadow-lg shadow-red-600/20"
            >
              Start Stage 01 (The Pledge)
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Detailed Process Stages */}
      <main className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-20 space-y-20">
        {STAGES.map((stage) => (
          <section
            key={stage.step}
            className="p-8 sm:p-12 rounded-3xl bg-[#0f0f14] border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#eb3d26]/20 text-[#eb3d26] border border-[#eb3d26]/30 uppercase tracking-widest">
                    Stage {stage.step}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">{stage.duration}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {stage.name}
                </h2>
                <p className="text-sm font-mono text-zinc-400 mt-1">{stage.phase}</p>
              </div>

              <p className="text-sm text-zinc-400 max-w-md font-light">
                {stage.tagline}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stage.activities.map((act, idx) => (
                <div key={act.title} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                  <span className="text-xs font-mono text-zinc-500">{(idx + 1).toString().padStart(2, "0")}</span>
                  <h3 className="font-semibold text-white text-base">{act.title}</h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{act.detail}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <TechStackCarousel />

      {/* CTA */}
      <section className="py-20 px-6 sm:px-10 md:px-14 text-center border-t border-white/10 max-w-4xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Ready for your prestige moment?
        </h3>
        <p className="text-zinc-400 text-base mb-8 max-w-lg mx-auto font-light">
          Let&apos;s begin with a discovery consultation to map out your architecture and milestone schedule.
        </p>
        <Link
          href="/#contact"
          className="inline-block px-8 py-4 rounded-full bg-[#eb3d26] text-white font-semibold hover:bg-[#d6331d] transition-all duration-200 shadow-lg shadow-red-600/20"
        >
          Begin Discovery
        </Link>
      </section>

      <Footer />
    </div>
  );
}
