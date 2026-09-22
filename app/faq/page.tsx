"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

interface FAQItem {
  q: string;
  a: string;
  category: "General" | "Engineering & AI" | "Process & Timeline" | "Pricing & Legal";
}

const FAQS: FAQItem[] = [
  {
    category: "General",
    q: "Who is Aruna Somesh?",
    a: "I am a self-taught full-stack engineer, spatial UI/UX designer, and AI systems specialist with 1.5+ years of production experience building high-performance web applications and autonomous AI agents for clients worldwide.",
  },
  {
    category: "General",
    q: "Do you work with international clients outside your local time zone?",
    a: "Yes, absolutely! I regularly collaborate with clients across the US, UK, Europe, Australia, and Asia. We maintain seamless communication using async updates, Loom video walkthroughs, and weekly scheduled video syncs.",
  },
  {
    category: "Engineering & AI",
    q: "What is your primary technology stack?",
    a: "My core frontend framework is React 19 and Next.js 16 (App Router, Server Components) styled with Tailwind CSS and Framer Motion. On the backend, I architect with Node.js, Python, Supabase, PostgreSQL, and MongoDB, integrating AI workflows with LangChain, OpenAI, and cloud edge networks.",
  },
  {
    category: "Engineering & AI",
    q: "How do your custom AI agent and automation workflows work?",
    a: "I build customized AI agents that connect your private business data (via vector embeddings and RAG) to real-time tools like CRM systems, customer support webhooks, and email triggers. They operate with zero hallucination guardrails and follow strict enterprise privacy practices.",
  },
  {
    category: "Process & Timeline",
    q: "What is the 3-step development process?",
    a: "Every engagement follows a structured 3-stage journey: The Pledge (discovery, sitemap, wireframes, and technical audit), The Turn (high-fidelity design, full-stack coding, animations, and database integration), and The Prestige (QA testing, Lighthouse optimization, deployment, and 30-day post-launch warranty).",
  },
  {
    category: "Process & Timeline",
    q: "How long does a typical project take from start to finish?",
    a: "Sprint landing pages typically launch in 1 to 2 weeks. Comprehensive full-stack web applications or AI automation platforms take between 3 to 6 weeks depending on architectural scope and complexity.",
  },
  {
    category: "Pricing & Legal",
    q: "How does payment and milestone billing work?",
    a: "Standard contracts operate on a 50% upfront deposit to reserve calendar bandwidth, with the remaining 50% due upon milestone completion and before final DNS handover. For larger enterprise builds, payments can be split into three equal milestone disbursements.",
  },
  {
    category: "Pricing & Legal",
    q: "Do you offer a post-launch warranty or ongoing maintenance?",
    a: "Yes. Every project includes a complimentary 30-day post-launch warranty covering bug fixes, responsiveness adjustments, and performance tuning. Ongoing retainer packages are also available for continuous feature updates and AI monitoring.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "General", "Engineering & AI", "Process & Timeline", "Pricing & Legal"];

  const filteredFaqs = activeCategory === "All"
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#070709] text-white selection:bg-[#eb3d26]/30 selection:text-white">
      
      {/* Header Banner */}
      <section className="pt-28 pb-16 px-6 sm:px-10 md:px-14 border-b border-white/[0.08] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#eb3d26] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300">
              Frequently Asked Questions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Everything you need to know.
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            Direct answers on tech stack, project timelines, international collaboration, and engagement terms.
          </p>
        </div>
      </section>

      {/* Main FAQ Accordion */}
      <main className="max-w-4xl mx-auto px-6 sm:px-10 md:px-14 py-16">
        
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#eb3d26] text-white"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-[#0f0f14] border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-zinc-500">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                      {faq.q}
                    </h3>
                  </div>
                  <span
                    className={`text-xl text-zinc-400 font-mono transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-45 text-[#eb3d26]" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-300 font-light leading-relaxed border-t border-white/5 animate-in fade-in duration-150">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-16 p-8 rounded-3xl bg-[#121218] border border-white/10 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Have a question that isn&apos;t listed here?
          </h3>
          <p className="text-sm text-zinc-400 max-w-md mx-auto font-light">
            I&apos;m always happy to discuss technical specifications, architecture ideas, or custom project timelines.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-7 py-3 rounded-full bg-[#eb3d26] text-white font-medium text-sm hover:bg-[#d6331d] transition-colors shadow-md shadow-red-600/20"
          >
            Send a Direct Message
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
