# 02_RULES.md — AI Governance Specification

* This file governs how any AI agent (Claude, Cursor, etc.) must behave while building or editing arunasomesh.com.
* It has procedural authority over every other file — see `05_specification_hierarchy` in the framework overview.

## Specification Hierarchy

```text
01_PRD.md → 02_RULES.md → 03_PRODUCT_FLOW.md → 04_DATA_MODEL.md → CODE → 05_BUILD_STATE.md → 06_CHANGELOG.md
```

* `01_PRD.md` is the authority for what the site should say and do.
* This file is the authority for how the AI is allowed to work.
* Code is never the authority for what the product should do — specs are.

## Copy & Credibility Rules (project-specific — highest priority)

* The AI must never invent or imply a client count, client list, client logo, or testimonial that Arun has not explicitly provided.
* The AI must never fabricate metrics, results, or numbers for the case study. If a number isn't given, use qualitative language or ask, don't invent.
* The AI must never claim "years in business" beyond the 2 years of software development experience Arun actually has.
* Before finalizing any hero, about, or case-study copy, the AI must check it against this banned-words list and flag/replace any hits:
  `innovative, cutting-edge, passionate, seamless, leverage, empower, unlock, revolutionize, game-changing, next-level, results-driven, synergy, world-class, best-in-class`
* Honesty framing ("early in freelancing, not early in skill") must read as confident, not apologetic — the AI should flag copy that sounds defensive or hedging and suggest a more direct version.

## Source-of-Truth Rules

* `01_PRD.md` is authoritative for product requirements and copy intent.
* `03_PRODUCT_FLOW.md` is authoritative for technical structure.
* `04_DATA_MODEL.md` is authoritative for data structure.
* `05_BUILD_STATE.md` reflects reality only — it is never used to decide what the product *should* do.
* `06_CHANGELOG.md` is a historical record only — never a spec.

## File Ownership Rules

* Only update a file for the category it owns (see framework overview). Don't let implementation details leak into `01_PRD.md`, and don't let product decisions get made silently inside code comments.

## Planning & Implementation Rules

* Before implementing any feature, the AI must identify which REQ-XXX it maps to in `01_PRD.md`. If none exists, stop and propose a PRD update first.
* The AI must not invent new pages, sections, or features not traceable to a requirement.
* The AI must not silently change the tech stack, architecture, or database schema — any such change requires updating `03_PRODUCT_FLOW.md` or `04_DATA_MODEL.md` first.

## Testing & Validation Rules

* A feature is only marked complete in `05_BUILD_STATE.md` after its acceptance criteria (from the PRD) are actually checked, not merely coded.
* Copy changes affecting credibility claims (About, case study, hero) must be explicitly reviewed against the Copy & Credibility Rules above before being marked complete.

## Scope-Control Rules

* Out-of-scope items listed in `01_PRD.md` (blog, multi-language, e-commerce, client portal) must not be built without first updating the PRD.
* Stretch features (e.g. REQ-008 live AI agent demo) require explicit confirmation from Arun before implementation begins.

## Conflict-Resolution Rules

* If `01_PRD.md` and `03_PRODUCT_FLOW.md` (or any two specs) contradict each other, the AI must stop and surface the conflict rather than guessing which one is right.
* Conflicts must be resolved by updating the appropriate spec before implementation continues.

## Session-End Rules

* Every session that changes code or specs must update `05_BUILD_STATE.md` and append an entry to `06_CHANGELOG.md` before ending.
* The AI must never treat an unfinished session as "done" in Build State just because time ran out.
