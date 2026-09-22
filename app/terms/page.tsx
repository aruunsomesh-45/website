import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Aruna Somesh",
  description: "Terms and conditions for web development, UI/UX design, and AI automation services provided by Aruna Somesh.",
};

export default function TermsPage() {
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
              Legal Agreement
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Terms and Conditions
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
              Welcome to the website of Aruna Somesh (&quot;I&quot;, &quot;me&quot;, &quot;my&quot;, &quot;Service Provider&quot;), located at <span className="font-mono text-white">arunasomesh.com</span> (the &quot;Website&quot;). By accessing or using this Website, or by engaging my services, you (&quot;Client&quot;, &quot;you&quot;, &quot;User&quot;) agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Website or engage my services.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              2. Services
            </h2>
            <p className="mb-3">
              I offer the following digital and technical services, individually or in combination:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 font-normal text-base">
              <li><strong className="text-white">Full-stack web development:</strong> high-performance websites, web applications, APIs, databases, and microservices (React, Next.js, Node.js, MongoDB, PostgreSQL).</li>
              <li><strong className="text-white">UI/UX design &amp; graphic design:</strong> user interface architecture, interactive prototypes, design systems, landing pages, and vector brand assets.</li>
              <li><strong className="text-white">AI agents &amp; workflow automation:</strong> custom LLM applications, retrieval-augmented generation (RAG), autonomous agents, and webhook integrations (GPT, LangChain, Zapier, Make).</li>
              <li><strong className="text-white">Video editing &amp; post-production:</strong> motion graphics, product trailers, and brand media.</li>
            </ul>
            <p className="mt-3 text-sm text-zinc-400">
              The exact scope, deliverables, timeline, and fees for each project will be set out in a written proposal, quote, or statement of work (&quot;Project Agreement&quot;). If a Project Agreement conflicts with these Terms, the Project Agreement prevails for that specific project.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              3. Engagement Process
            </h2>
            <p className="mb-3">Projects generally follow three core stages:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <p className="font-mono text-xs uppercase tracking-wider text-[#eb3d26] mb-1">Stage 01</p>
                <h4 className="font-semibold text-white mb-1">The Pledge</h4>
                <p className="text-xs text-zinc-400">Discovery call, technical audit, sitemap, scope specification, and milestone plan.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <p className="font-mono text-xs uppercase tracking-wider text-[#eb3d26] mb-1">Stage 02</p>
                <h4 className="font-semibold text-white mb-1">The Turn</h4>
                <p className="text-xs text-zinc-400">High-fidelity UI design, full-stack engineering, animation architecture, API &amp; CMS integration.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <p className="font-mono text-xs uppercase tracking-wider text-[#eb3d26] mb-1">Stage 03</p>
                <h4 className="font-semibold text-white mb-1">The Prestige</h4>
                <p className="text-xs text-zinc-400">QA testing, performance &amp; SEO audits, production deployment, client handoff, and 30-day warranty.</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400">
              A project commences only when you have approved the proposal and paid the required initial deposit.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              4. Client Responsibilities
            </h2>
            <p className="mb-2">You agree to:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-zinc-400 font-normal text-base">
              <li>Provide accurate information, content, copy, brand assets, logos, and third-party access credentials in a timely manner.</li>
              <li>Provide feedback, reviews, and sign-offs within agreed timeframes (typically within 3 business days).</li>
              <li>Ensure you own or hold appropriate licenses for all text, images, and trademarks you supply.</li>
              <li>Designate a primary point of contact with decision-making authority.</li>
            </ul>
            <p className="mt-3 text-sm text-zinc-400">
              Delays resulting from late feedback, missing assets, or scope changes will proportionally extend project delivery timelines.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              5. Payments &amp; Invoicing
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 font-normal text-base">
              <li>Project fees are specified in the Project Agreement and invoiced in USD or INR as agreed.</li>
              <li>Standard payment schedule is a <strong className="text-white">50% initial deposit</strong> before work begins, with the remaining <strong className="text-white">50% due upon milestone completion</strong> or prior to final production deployment.</li>
              <li>Invoices are payable within 7 business days of issuance.</li>
              <li>Late balances may accrue interest at 1.5% per month or the statutory maximum rate.</li>
              <li>Final production code, admin credentials, and domain DNS pointing will be delivered upon receipt of full settlement.</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              6. Revisions &amp; Scope Adjustments
            </h2>
            <p>
              Standard contracts include up to <strong className="text-white">2 rounds of structured revisions</strong> per milestone. Requests for features, pages, or architectural changes outside the signed Project Agreement will be estimated separately as a written Change Order.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              7. Intellectual Property &amp; Ownership
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 font-normal text-base">
              <li><strong className="text-white">Client Materials:</strong> You retain full ownership of all intellectual property, copy, trademarks, and media provided by you.</li>
              <li><strong className="text-white">Custom Deliverables:</strong> Full copyright and ownership of bespoke source code and final designs transfer to you upon settlement of all fees.</li>
              <li><strong className="text-white">Pre-existing Frameworks:</strong> Open-source tools, foundational starter boilerplates, and reusable developer utility scripts remain subject to their respective open-source licenses (MIT, Apache). You receive a perpetual, royalty-free license to use them within your project.</li>
              <li><strong className="text-white">Portfolio Rights:</strong> I retain the right to showcase screenshots, case study metrics, and visual demonstrations of the project in my online portfolio and marketing materials, unless a mutual Non-Disclosure Agreement (NDA) is executed prior to kickoff.</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              8. AI-Related Services Disclaimer
            </h2>
            <p>
              Where services involve artificial intelligence, language models, or automated agents (e.g., OpenAI, Claude, LangChain):
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-zinc-400 font-normal text-base mt-2">
              <li>AI outputs are probabilistic and may occasionally generate inaccuracies or unexpected results.</li>
              <li>Third-party AI providers maintain their own usage policies, uptime SLA, and API rate limits.</li>
              <li>Clients are responsible for human oversight and reviewing AI-generated responses delivered to end users.</li>
              <li>I do not guarantee specific autonomous accuracy thresholds beyond agreed architectural benchmarking.</li>
            </ul>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              9. Warranty &amp; Post-Launch Support
            </h2>
            <p>
              All projects include a complimentary <strong className="text-white">30-day post-launch warranty period</strong> covering bug fixes, browser compatibility adjustments, and resolving defects within the original scope. Ongoing maintenance, security patches, and feature expansions after 30 days are provided under dedicated retainer agreements.
            </p>
          </section>

          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white tracking-tight mb-3">
              10. Governing Law &amp; Contact
            </h2>
            <p className="mb-4">
              These Terms shall be construed and governed in accordance with the applicable laws of India, without regard to its conflict of law principles.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs text-zinc-300 space-y-1">
              <p><strong className="text-white">Aruna Somesh</strong> — Full-Stack Developer &amp; AI Systems Specialist</p>
              <p>Email: <a href="mailto:aruunsomesh@gmail.com" className="text-[#eb3d26] hover:underline">aruunsomesh@gmail.com</a></p>
              <p>Website: <a href="https://arunasomesh.com" className="text-white hover:underline">arunasomesh.com</a></p>
              <p className="text-zinc-500">Available for select clients worldwide.</p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
