# 06_CHANGELOG.md — Historical Development Record

* Append-only. Each session gets one entry. Do not rewrite past entries.

---

## Session 0 — Framework & Spec Creation

* **Date:** 2026-09-09
* **Objective:** Define the six-file Spec-Driven Development framework for arunasomesh.com and seed it with real project details.
* **Requirements worked on:** REQ-001 through REQ-008 (defined, not yet implemented).
* **Features implemented:** None (specs only).
* **Files changed:** Created `01_PRD.md`, `02_RULES.md`, `03_PRODUCT_FLOW.md`, `04_DATA_MODEL.md`, `05_BUILD_STATE.md`, `06_CHANGELOG.md`.
* **Architecture changes:** N/A — first definition, not a change.
* **Database changes:** Defined (not yet migrated) — `leads` table in `04_DATA_MODEL.md`.
* **Decisions made:**
  * Positioning built around honesty (2 years dev experience, AI-focused, zero clients, one case study) rather than fabricated social proof.
  * Proposed hook line: "I'm Aruna Somesh — I build the websites, dashboards, and AI agents that let a two-person startup work like a ten-person team."
  * Assumed stack: Next.js + Vercel + Supabase.
  * Assumed primary CTA: book a call.
* **Issues discovered:** None yet — pre-implementation.
* **Remaining work:** Confirm hook line, CTA type, and stack with Arun; gather case study content/assets; begin implementation per `03_PRODUCT_FLOW.md`.
* **Known limitations:** No testimonials or client logos exist and must not be fabricated (see `02_RULES.md`).

---

## Session 1 — Next.js Initialization & GSAP Cinematic Hero

* **Date:** 2026-09-09
* **Objective:** Initialize the workspace and build the cinematic preloader / hero transition as specified by the design prompt.
* **Requirements worked on:** REQ-001 (Hero hook line & visual structure)
* **Features implemented:**
  * Next.js (App Router) environment with Tailwind CSS.
  * Complex GSAP timeline in `components/Hero.tsx` featuring a 0-100 counter, edge-to-edge traveling image, flickering image stack, rotating brand words, and a FLIP-style expansion into the hero background.
  * Added `suppressHydrationWarning` to `app/layout.tsx` to handle browser extension DOM injection (like Scribe).
* **Architecture changes:** Added `gsap`, `@gsap/react`, and `split-type` to the stack.
* **Issues discovered:** Hydration mismatch from Scribe browser extension (resolved via `suppressHydrationWarning`).
* **Remaining work:** Plug in actual Unsplash/portfolio imagery for the 10 stacked frames; finalize the hero copy.
