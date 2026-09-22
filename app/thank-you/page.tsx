import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inquiry Received | Thank You | Aruna Somesh",
  description: "Thank you for reaching out to Aruna Somesh. Your project inquiry has been received and is being reviewed.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#070709] text-white selection:bg-[#eb3d26]/30 selection:text-white flex flex-col justify-between">
      
      <main className="flex-1 flex items-center justify-center px-6 sm:px-10 py-28 relative overflow-hidden">
        {/* Glow circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#eb3d26]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-2xl mb-2">
            ✓
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#eb3d26] animate-pulse" />
            <p className="text-xs font-mono uppercase tracking-widest text-[#888894]">
              Inquiry Confirmed
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Thank you! Your inquiry is in flight.
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-xl mx-auto">
            I review all inbound inquiries personally. You will receive a technical response, scope evaluation, and discovery booking link within <strong className="text-white">24 business hours</strong>.
          </p>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-left max-w-md mx-auto space-y-3 text-xs font-mono text-zinc-400">
            <p className="text-white font-semibold uppercase tracking-wider text-[11px]">What happens next?</p>
            <div className="flex items-start gap-2">
              <span className="text-[#eb3d26]">01.</span>
              <span>Initial project scope &amp; architecture review.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#eb3d26]">02.</span>
              <span>15-min discovery sync to align on milestones &amp; budget.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#eb3d26]">03.</span>
              <span>Written proposal &amp; kickoff for Stage 01 (The Pledge).</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-4 rounded-full bg-[#eb3d26] text-white font-medium hover:bg-[#d6331d] transition-all duration-200 shadow-lg shadow-red-600/20"
            >
              Return to Home
            </Link>
            <Link
              href="/work"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 transition-all duration-200"
            >
              Explore Case Studies
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
