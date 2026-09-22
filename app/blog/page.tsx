import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Technical Insights | Aruna Somesh",
  description: "Articles, architectural deep-dives, and technical tutorials on React 19, Next.js 16, AI agents, spatial UI design, and full-stack web development.",
};

const ARTICLES = [
  {
    slug: "building-autonomous-ai-agents-with-rag-and-langchain",
    title: "Architecting Zero-Hallucination AI Agents with Next.js & Vector Embeddings",
    date: "September 18, 2026",
    readTime: "6 min read",
    category: "AI & Automation",
    summary:
      "A pragmatic guide to building production RAG pipelines that connect enterprise knowledge bases to Next.js API routes with strict semantic guardrails.",
    tags: ["LangChain", "OpenAI", "Supabase pgvector", "Next.js 16"],
  },
  {
    slug: "mastering-react-19-server-actions-and-optimistic-ui",
    title: "Mastering React 19 Server Actions & Optimistic State in Modern Web Apps",
    date: "September 04, 2026",
    readTime: "8 min read",
    category: "Full-Stack Web",
    summary:
      "Eliminating client-side state boilerplate by pairing React 19 form actions with optimistic UI mutations and server validation schemas.",
    tags: ["React 19", "Server Components", "TypeScript", "Zod"],
  },
  {
    slug: "the-psychology-of-spatial-ui-and-micro-animations",
    title: "Spatial Aesthetics & Micro-Animations: Designing Websites that Convert",
    date: "August 22, 2026",
    readTime: "5 min read",
    category: "UI/UX & Design",
    summary:
      "How intentional spring physics, glassmorphic lighting, and 60fps bezier scroll arcs elevate brand perception and double inquiry conversion rates.",
    tags: ["Framer Motion", "GSAP", "Tailwind CSS", "UI/UX"],
  },
  {
    slug: "fractional-cto-playbook-for-high-growth-startups",
    title: "The Fractional CTO Playbook: Eliminating Tech Debt Before It Sinks Your Seed Round",
    date: "August 10, 2026",
    readTime: "7 min read",
    category: "Strategy & Advisory",
    summary:
      "Key lessons from engineering scalable startups: database indexing, serverless cost optimization, and automated CI/CD deployment pipelines.",
    tags: ["Startups", "Architecture", "PostgreSQL", "DevOps"],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#070709] text-white selection:bg-[#eb3d26]/30 selection:text-white">
      
      {/* Header Banner */}
      <section className="pt-28 pb-16 px-6 sm:px-10 md:px-14 border-b border-white/[0.08] relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#eb3d26] animate-pulse" />
            <p className="text-xs font-mono uppercase tracking-widest text-[#888894]">
              Insights &amp; Engineering Journal
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Thoughts on modern web systems, AI &amp; design.
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl font-light leading-relaxed">
            Technical tutorials, architectural blueprints, and design insights from building real-world software products.
          </p>
        </div>
      </section>

      {/* Articles List */}
      <main className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-16 space-y-8">
        {ARTICLES.map((art) => (
          <article
            key={art.slug}
            className="p-8 sm:p-10 rounded-3xl bg-[#0f0f14] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                    {art.category}
                  </span>
                  <span>•</span>
                  <span>{art.date}</span>
                </div>
                <span>{art.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#eb3d26] transition-colors mb-3">
                {art.title}
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-6">
                {art.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {art.tags.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-500">By Aruna Somesh</span>
              <span className="text-white group-hover:text-[#eb3d26] font-semibold transition-colors">
                Read Article →
              </span>
            </div>
          </article>
        ))}
      </main>

      {/* Newsletter / CTA */}
      <section className="py-20 px-6 sm:px-10 md:px-14 text-center border-t border-white/10 max-w-4xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Want technical insights delivered to your inbox?
        </h3>
        <p className="text-zinc-400 text-base mb-8 max-w-lg mx-auto font-light">
          Subscribe in the footer below to receive curated essays on full-stack architecture, AI automation, and spatial UI design.
        </p>
        <Link
          href="/#site-footer"
          className="inline-block px-8 py-4 rounded-full bg-white/10 border border-white/15 text-white font-medium hover:bg-white/20 transition-all duration-200"
        >
          Subscribe to Newsletter
        </Link>
      </section>

      <Footer />
    </div>
  );
}
