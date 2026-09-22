import React from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Discovery | Aruna Somesh",
  description: "Schedule a discovery call or submit your project inquiry for full-stack web development, AI automation, and spatial UI/UX design.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#070709] text-white selection:bg-[#eb3d26]/30 selection:text-white">
      {/* Standalone Header */}
      <section className="pt-28 pb-6 px-6 sm:px-10 md:px-14 border-b border-white/[0.08] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#eb3d26] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300">
              Direct Inquiries &amp; Discovery
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Let&apos;s engineer your next prestige moment.
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto font-light leading-relaxed">
            Available for select clients, venture-backed startups, and forward-thinking brands worldwide.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact Component */}
      <main className="py-4">
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
