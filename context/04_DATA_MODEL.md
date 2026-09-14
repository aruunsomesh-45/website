# 04_DATA_MODEL.md — Data and Database Specification

* At v1, this project has minimal data needs — one lead-capture table. This file will grow only if the site grows (e.g. a blog, multiple case studies, a client portal).

## Database Technology

* Supabase (Postgres), per `03_PRODUCT_FLOW.md`.

## Tables

### `leads`

| Field        | Type      | Required | Notes                                  |
|--------------|-----------|----------|-----------------------------------------|
| id           | uuid (PK) | yes      | default `gen_random_uuid()`             |
| name         | text      | yes      |                                          |
| email        | text      | yes      | validated format                        |
| message      | text      | yes      |                                          |
| service_interest | text  | no       | e.g. "web dev", "ai agent" — optional dropdown |
| source       | text      | no       | e.g. "home_page_form"                   |
| created_at   | timestamptz | yes    | default `now()`                         |

* Primary key: `id`.
* No foreign keys needed at v1 (single table).
* No soft-delete needed at v1 — leads are simply read, not deleted programmatically.

## Validation Rules

* `email` must match a standard email pattern before insert.
* `name` and `message` must be non-empty.

## Data Ownership & Access

* Only Arun (via Supabase dashboard or an authenticated admin view, if built later) can read the `leads` table.
* No public read access to `leads` — insert-only from the contact form, via a server-side route using a service role key, never exposed client-side.

## Migration Requirements

* Single initial migration creating the `leads` table as specified above.
* Any new field (e.g. `phone`, `budget_range`) must be added here first, then migrated, then implemented — not invented ad hoc in code.

## Future Extension (not built at v1)

* `case_studies` table — only needed once there's more than one case study to manage dynamically instead of hardcoding.
* `testimonials` table — must not be created or seeded until Arun has real, consented client testimonials to put in it. See Copy & Credibility Rules in `02_RULES.md`.
