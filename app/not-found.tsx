import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Aruna Somesh",
  description: "The requested page could not be found.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070709] text-white selection:bg-[#eb3d26]/30 selection:text-white flex flex-col justify-between">
      
      <main className="flex-1 flex items-center justify-center px-6 sm:px-10 py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-600/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-xl mx-auto text-center relative z-10 space-y-6">
          <p className="text-8xl sm:text-9xl font-black tracking-tight text-white font-mono opacity-90">
            404
          </p>

          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#eb3d26] animate-pulse" />
            <p className="text-xs font-mono uppercase tracking-widest text-[#888894]">
              Page Not Found
            </p>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Lost in the digital ether?
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-md mx-auto">
            The page you are looking for has been relocated, renamed, or never existed in this dimension.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3.5 rounded-full bg-[#eb3d26] text-white text-sm font-semibold hover:bg-[#d6331d] transition-all duration-200 shadow-lg shadow-red-600/20"
            >
              Return Home
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 rounded-full bg-white/5 border border-white/15 text-white text-sm font-medium hover:bg-white/10 transition-all duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
