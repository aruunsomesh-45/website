import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Aruna Somesh",
  description: "Privacy policy describing how Aruna Somesh collects, uses, and safeguards client and visitor data worldwide.",
};

export default function PrivacyPage() {
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
              Data Protection &amp; Privacy
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Privacy Policy
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
              1. Introduction
            </h2>
            <p>
              This Privacy Policy explains how Aruna Somesh (&quot;I&quot;, &quot;me&quot;, &quot;my&quot;) collects, uses, stores, and protects personal information when you visit <span className="font-mono text-white">arunasomesh.com</span> (the &quot;Website&quot;) or engage my web engineering and AI automation services. By interacting with the Website or submitting project inquiries, you agree to the data collection and usage practices described here.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              2. Information I Collect
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-white mb-1">a) Information You Provide Directly</h3>
                <ul className="list-disc pl-6 space-y-1.5 text-zinc-400 font-normal text-sm sm:text-base">
                  <li>Full name, email address, phone number, and company/organization name.</li>
                  <li>Project briefs, service selections, target budgets, and timeline requirements submitted via the &quot;Ready for your prestige moment?&quot; contact form.</li>
                  <li>Technical assets, brand files, design specifications, and API access credentials supplied during active client engagements.</li>
                  <li>Invoicing and payment metadata (processed securely via Stripe or direct bank transfer).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-1">b) Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-1.5 text-zinc-400 font-normal text-sm sm:text-base">
                  <li>IP address, browser type, device type, operating system, and screen resolution.</li>
                  <li>Referral source URLs, page views, session durations, and user interface interaction events.</li>
                  <li>Approximate regional geolocation derived from standard IP headers.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              3. How I Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 font-normal text-base">
              <li>To evaluate project scopes, prepare technical proposals, and schedule discovery calls.</li>
              <li>To develop, test, optimize, and deploy client software deliverables.</li>
              <li>To process invoices and deliver administrative and post-launch maintenance notices.</li>
              <li>To monitor Website performance, Core Web Vitals, security integrity, and spam prevention.</li>
              <li>To comply with statutory financial, legal, and taxation record-keeping requirements.</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              4. Client Data &amp; AI Tools Integrity
            </h2>
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-sm text-emerald-300">
              <strong className="text-white block mb-1">Zero Proprietary Model Training:</strong>
              I do not use client proprietary source code, confidential business data, or private assets to train public artificial intelligence models. When leveraging AI APIs (e.g., OpenAI, Anthropic, LangChain), data is transmitted solely for real-time inference in accordance with enterprise zero-retention policies.
            </div>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              5. Data Sharing &amp; Third-Party Subprocessors
            </h2>
            <p className="mb-3">
              I never sell, rent, or trade your personal information. Data is shared strictly with essential infrastructure providers:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-zinc-400 font-normal text-base">
              <li><strong className="text-white">Hosting &amp; Edge:</strong> Vercel (Edge network and serverless compute).</li>
              <li><strong className="text-white">Database &amp; Storage:</strong> Supabase / MongoDB / Sanity CMS (encrypted at rest).</li>
              <li><strong className="text-white">Form Webhooks:</strong> Google Cloud Run &amp; AIS automated inquiry router.</li>
              <li><strong className="text-white">Payment Processing:</strong> Stripe (PCI-DSS compliant).</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              6. International Compliance &amp; Your Legal Rights
            </h2>
            <p className="mb-3">
              As I collaborate with clients across the United States, United Kingdom, European Union, India, and worldwide, I adhere to global privacy frameworks including GDPR, UK GDPR, CCPA/CPRA, and India&apos;s Digital Personal Data Protection Act (DPDPA 2023).
            </p>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-zinc-400 font-normal text-base">
              <li>Request a copy of the personal data held about you.</li>
              <li>Request rectification of incomplete or inaccurate records.</li>
              <li>Request erasure of your data (&quot;Right to be Forgotten&quot;).</li>
              <li>Withdraw consent for optional communications at any time.</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              7. Contact &amp; Data Protection Requests
            </h2>
            <p className="mb-4">
              To exercise your privacy rights or request data deletion, please contact:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-zinc-300 space-y-1">
              <p><strong className="text-white">Aruna Somesh</strong></p>
              <p>Email: <a href="mailto:aruunsomesh@gmail.com" className="text-[#eb3d26] hover:underline">aruunsomesh@gmail.com</a></p>
              <p>Website: <a href="https://arunasomesh.com" className="text-white hover:underline">arunasomesh.com</a></p>
              <p className="text-zinc-500">Response time: within 30 days of receipt.</p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
