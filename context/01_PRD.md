# 01_PRD.md — Product Requirements Specification

**Product:** arunasomesh.com — personal freelance website

* Product name: arunasomesh
* Product vision: A personal site that gets a two-year, AI-focused software developer his first real freelance clients by proving skill through depth (one strong case study, visible process, honest framing) instead of volume (client counts, logos, testimonials he doesn't have).
* Product objective: Convert visiting founders and small business owners into booked calls.
* Problem statement: Arun has 2 years of software development experience with a focus on AI, and is launching freelance services across web development, design, custom AI solutions, and AI agents. He has **zero paying clients** and **one case study**. Generic freelancer-site copy ("innovative," "results-driven," "passionate about technology") will not differentiate him and will read as hollow given no client list. The site must build trust through specificity and transparency instead.

## Target Users

* Founders — pre-seed to early-stage, often non-technical, need to look credible fast and don't have an in-house dev team.
* Small business owners — running an existing local or service business, want a modern site plus some automation (e.g. a lead-capture or support agent) without hiring a full agency.

### Personas

* **Founder Priya** — solo or two-person founding team, needs an MVP-quality site plus a simple AI agent (support bot, intake bot) to look bigger than she is.
* **Small-business owner Dinesh** — runs an existing service business, wants a redesigned site and one piece of automation (e.g. booking, lead capture) that saves him time weekly.

## Core Use Cases

* Land on the homepage and understand within 5 seconds what Arun does and who it's for.
* Read the case study in enough depth to trust his technical ability.
* Understand the four service areas (web dev, design, custom AI solutions, AI agents) and roughly what each costs.
* Book a call or send an inquiry.

## User Stories

* As a founder, I want to see one deep, credible case study so I can judge skill without needing ten references.
* As a small business owner, I want to know roughly what something will cost before I message someone.
* As a visitor, I want to know this person is early in freelancing but not junior in skill — so the framing doesn't feel like a bait-and-switch later.

## Features

* Hero section with the approved hook line (REQ-001)
* Four service blocks: Web Development, Design, Custom AI Solutions, AI Agents (REQ-002)
* Case study page/section with problem → approach → result structure (REQ-003)
* "How I work" / process section (REQ-004)
* Pricing framed as "starting at" ranges, not fixed quotes (REQ-005)
* About section with honest positioning: 2 years building software, AI-focused, new to freelance client work (REQ-006)
* Contact / book-a-call CTA (REQ-007)
* Optional: a live, embedded small AI agent demo (e.g. a chat widget) as proof-of-capability (REQ-008, stretch goal — confirm before building)

## Functional Requirements

* REQ-001: Hero renders the approved hook line exactly as written in the approved copy doc (not paraphrased by whoever builds it).
* REQ-002: Each of the four service areas has its own short description and a "who this is for" line.
* REQ-003: Case study includes a specific problem statement, what was built, and a specific outcome or result — no vague "helped improve efficiency" phrasing.
* REQ-004: A visible process section (e.g. Discovery → Build → Launch → Support) so a first-time client knows what working together looks like.
* REQ-005: Pricing is shown as ranges/starting points, never a fixed final number, since scope varies per client.
* REQ-006: About copy explicitly and confidently states this is early in the freelance business, without apologizing for it — see Copy & Credibility Rules in 02_RULES.md.
* REQ-007: Contact method (form or booking link) is functional and delivers to an inbox or database Arun actually checks.
* REQ-008 (stretch): If an AI agent demo is embedded, it must be a real, working, minimal demo — not a mockup pretending to be functional.

## Non-Functional Requirements

* Mobile responsive across common breakpoints.
* Fast load — target under ~2s LCP on a typical connection.
* Baseline accessibility (WCAG AA): color contrast, alt text, keyboard navigation on interactive elements.

## Business Rules — Credibility (critical)

* The site must **never** state or imply a client count, list, or logo wall that doesn't exist.
* The site must **never** include a testimonial, quote, or review that wasn't actually given by a real client.
* The site may **not** claim "years in business" beyond the literal 2 years of software development experience — freelance business age and coding experience must not be conflated.
* If pricing, results, or metrics from the case study are unclear or unverified, the copy must say "estimated" or omit the number rather than invent one.

## Acceptance Criteria

* Each REQ above has a testable pass/fail check recorded against it in `05_BUILD_STATE.md` before it's marked complete.
* Hero, case study, and about copy pass a manual check against the banned-words list in `02_RULES.md` before launch.

## Constraints

* No client testimonials, logos, or client count exist at launch — design and copy must not have placeholder slots implying they're coming "soon" in a way that reads as deceptive.
* Only one case study exists at launch; the case-study section/page must still feel substantial on its own.

## Assumptions (confirm with Arun)

* Primary CTA is "book a call," not a contact form — swap if preferred.
* Stack is Next.js on Vercel with Supabase for storing leads (based on connected tools) — swap if you'd rather go simpler (static site, no DB).
* No blog/content section at v1.

## Dependencies

* Full case study write-up and any assets (screenshots, metrics) from Arun.
* A booking tool (e.g. Calendly) or a working contact form endpoint.
* Final headshot/brand visuals, if used.

## Out of Scope (v1)

* Blog / content marketing section.
* Multi-language support.
* E-commerce or payment collection on-site.
* Client login / portal.

## Success Criteria

* Number of inbound inquiries or booked calls per month post-launch.
* Qualitative signal that visitors understand the four service areas and the positioning without confusion.

## Requirement Identifiers

```text
REQ-001  Hero hook line
REQ-002  Four service blocks
REQ-003  Case study structure
REQ-004  Process section
REQ-005  Pricing as ranges
REQ-006  Honest About/positioning copy
REQ-007  Working contact/booking CTA
REQ-008  (Stretch) Live AI agent demo
```

## Approved Hook Line (pending final sign-off)

* **Primary:** "I'm Aruna Somesh — I build the websites, dashboards, and AI agents that let a two-person startup work like a ten-person team."
* **Alternate:** "Two years deep in code. One real case study. Zero interest in selling you buzzwords."
