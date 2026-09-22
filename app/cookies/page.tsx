import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Aruna Somesh",
  description: "Learn about how cookies and tracking technologies are used on arunasomesh.com.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#e4e4e7] selection:bg-[#eb3d26]/30 selection:text-white">
      {/* Header Banner */}
      <header className="border-b border-white/10 bg-[#0f0f13]/80 backdrop-blur-md pt-28 pb-12 px-6 sm:px-10 md:px-14">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/"
              className="text-xs font-mono uppercase tracking-widest text-[#888894] hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
            <span className="text-xs text-white/30">•</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#eb3d26]">
              Cookie Policy
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 font-mono">
            Last Updated: September 22, 2026
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 sm:px-10 md:px-14 py-12 md:py-16">
        <div className="prose prose-invert max-w-none space-y-10 text-zinc-300 leading-relaxed font-light text-base sm:text-lg">
          
          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files placed on your computer, smartphone, or device when you browse websites. They help the website recognize your device, remember preferences, and enhance your user experience.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              2. Categories of Cookies We Use
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <h3 className="text-base font-semibold text-white mb-1">Strictly Essential Cookies</h3>
                <p className="text-sm text-zinc-400">
                  Required for site navigation, security authentication, anti-CSRF protection, and core rendering functionality. These cannot be switched off.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <h3 className="text-base font-semibold text-white mb-1">Performance &amp; Analytics Cookies</h3>
                <p className="text-sm text-zinc-400">
                  Help understand site traffic patterns, page load times, error logs, and user journeys so we can continuously optimize speed and responsiveness.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <h3 className="text-base font-semibold text-white mb-1">Preference &amp; Functional Cookies</h3>
                <p className="text-sm text-zinc-400">
                  Store user interface settings such as dark mode preferences and active filter choices across sessions.
                </p>
              </div>
            </div>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              3. Managing Cookie Preferences
            </h2>
            <p className="mb-3">
              Most modern web browsers allow you to manage or block cookies through browser preferences. You can:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-zinc-400 font-normal text-base">
              <li>Delete all stored cookies in Chrome, Safari, Firefox, or Edge settings.</li>
              <li>Block third-party cookies or configure incognito/private browsing mode.</li>
              <li>Set per-domain cookie permissions.</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              4. Questions &amp; Support
            </h2>
            <p>
              If you have questions regarding our cookie practices, please contact us at <a href="mailto:aruunsomesh@gmail.com" className="text-[#eb3d26] hover:underline">aruunsomesh@gmail.com</a>.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
