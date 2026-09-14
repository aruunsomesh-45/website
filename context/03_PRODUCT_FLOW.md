# 03_PRODUCT_FLOW.md — Application and Technical Specification

* Describes how arunasomesh.com should be built. Traces back to `01_PRD.md`.

## Technology Stack (assumption — confirm with Arun)

* Framework: Next.js (App Router)
* Hosting/deploy: Vercel
* Backend/data: Supabase (Postgres) — used only for storing contact/lead submissions at v1
* Styling: Tailwind CSS
* No CMS at v1 — case study and copy are hardcoded/MDX, since there is only one case study today

> If you'd rather skip a database entirely and just forward form submissions to email, that's a valid simpler alternative — flag it and `04_DATA_MODEL.md` shrinks to almost nothing.

## Directory Structure (proposed)

```text
app/
├── page.tsx                # Home: hero, services, case study preview, CTA
├── case-study/
│   └── page.tsx             # Full case study
├── about/
│   └── page.tsx             # About / honest positioning
├── contact/
│   └── page.tsx             # Contact / book-a-call
components/
├── Hero.tsx
├── ServiceCard.tsx
├── CaseStudyPreview.tsx
├── ProcessSteps.tsx
├── ContactForm.tsx
lib/
├── supabaseClient.ts
```

## Pages & User Flow

* **Home** → Hero (REQ-001) → Services grid (REQ-002) → Case study preview (REQ-003) → Process (REQ-004) → Pricing snapshot (REQ-005) → CTA (REQ-007)
* **Case Study page** → full problem/approach/result writeup (REQ-003)
* **About page** → 2-years/AI-focused/new-to-freelance framing (REQ-006)
* **Contact page** → form or booking embed (REQ-007)

## Navigation

* Simple top nav: Home, Case Study, About, Contact. No dropdowns/mega-menu needed at this scale.

## Application States

* Contact form: idle → submitting → success ("I'll get back to you within 1–2 days") → error (retry message).
* No auth/login states needed at v1 (no client portal — see out-of-scope in PRD).

## API / Data Flow

* Contact form submits to a Next.js server action or API route → writes a row to Supabase `leads` table (see `04_DATA_MODEL.md`) → optionally triggers an email notification.
* If REQ-008 (AI agent demo) is built: a minimal server route calls the Anthropic API directly (see the Claude-in-Artifacts pattern) to power a small live chat widget demonstrating agent capability — must be a real, working demo, not a static mockup.

## Error Handling Strategy

* Form validation client-side (required fields) plus server-side validation before writing to Supabase.
* Failed submissions show a clear retry message and don't silently fail.

## Technical Constraints

* Must be fast and mobile-first — this is a portfolio site; slow load undercuts the "I build good software" pitch immediately.
* Keep the stack minimal. No unnecessary backend complexity for a single-freelancer site with one case study.

## Architectural Decisions

* No CMS at v1 — revisit once there's more than one case study or a blog is added (currently out of scope).
* Supabase chosen over a headless CMS because the only structured data need at v1 is lead capture.
