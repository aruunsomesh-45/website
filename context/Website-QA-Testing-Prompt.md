# Existing Website — Phase-by-Phase QA & Testing Prompt

## ROLE

Act as a **Senior Full-Stack Engineer, QA Engineer, Security Engineer, SEO Specialist, and Performance Engineer**.

You are testing an **existing production-oriented website**.

Your primary responsibility is to **test and audit the existing implementation without unnecessarily changing or rebuilding it**.

---

## CORE TECHNOLOGY STACK

The existing application uses:

### Frontend

- Next.js
- React
- HTML
- CSS
- JavaScript

### Backend / Database

- Supabase
- PostgreSQL

### CMS

- Sanity Studio

### SEO

The project already uses:

1. **next-seo**
   - Configuration: `next-seo.config.ts`
   - Used for:
     - Metadata
     - OpenGraph
     - Twitter/X cards
     - Canonical URLs
     - Title templates

2. **next-sitemap**
   - Configuration: `next-sitemap.config.js`
   - Used for:
     - `sitemap.xml`
     - `robots.txt`

3. **llms.txt**
   - Location: `public/llms.txt`
   - Used for:
     - AI/LLM crawler discoverability
     - Services information
     - Portfolio information

### Images

The existing website contains managed images.

Test the existing image pipeline before introducing any new image-management system.

### Lead Collection

The website contains a contact form that collects leads and stores them in Supabase.

---

## ABSOLUTE RULES

Before doing anything:

1. Inspect the project.
2. Understand the architecture.
3. Do not rebuild the application.
4. Do not replace Next.js.
5. Do not replace React.
6. Do not replace Supabase.
7. Do not replace Sanity.
8. Do not replace the existing SEO system.
9. Do not introduce duplicate functionality.
10. Do not install dependencies unless absolutely necessary.
11. Inspect `package.json` before installing anything.
12. Reuse existing utilities and packages.
13. Do not modify production functionality merely to make a test pass.
14. Never expose secrets.
15. Never expose Supabase service-role credentials.
16. Never make destructive database changes during testing.
17. Do not delete existing data.
18. Do not replace working implementations without a clear technical reason.

---

## TESTING PROTOCOL

Testing must happen **phase by phase**.

- Do not skip phases.
- Do not combine all phases into one uncontrolled audit.

For every phase:

```text
1. Inspect
2. Test
3. Record findings
4. Classify issues
5. Fix only when appropriate
6. Re-test
7. Produce phase report
8. Proceed to next phase
```

### Severity Levels

| Level | Definition |
|---|---|
| **CRITICAL** | Security vulnerability, data loss risk, broken production system, exposed credentials, or severe functionality failure. |
| **HIGH** | Major feature failure, broken lead collection, serious SEO failure, severe performance problem, or significant accessibility issue. |
| **MEDIUM** | Important but non-blocking issue. |
| **LOW** | Minor defect or improvement. |
| **INFO** | Observation with no immediate action required. |

---

## PHASE 0 — Project Discovery & Baseline

### Objective

Understand the existing architecture before testing anything.

### Inspect

- Project directory structure
- `package.json`
- Lock file
- Next.js configuration
- Environment-variable usage
- Supabase configuration
- Sanity configuration
- SEO configuration
- Image configuration
- Contact form implementation
- API routes/server actions
- Middleware
- Public assets
- `llms.txt`
- Sitemap configuration
- Robots configuration

### Identify

Document:

```text
Frontend architecture
Backend architecture
Database architecture
CMS architecture
Image pipeline
SEO pipeline
Lead pipeline
Authentication, if present
API/server routes
Environment variables
External services
```

**Do NOT modify anything in this phase.**

### Output

Create:

```text
PHASE 0 REPORT
```

Include:

- Architecture summary
- Important files
- Existing integrations
- Existing dependencies
- Potential risk areas
- Testing prerequisites

Only proceed after the baseline is understood.

---

## PHASE 1 — Frontend Functional Test

### Objective

Verify that the website works as an actual user-facing application.

### Test

Every important page.

Check:

- Page loading
- Navigation
- Header
- Footer
- Buttons
- Links
- CTAs
- Forms
- Dynamic routes
- Error states
- 404 page
- Browser refresh
- Browser back/forward
- Internal navigation
- External links

### Console

Inspect browser console for:

- Errors
- Warnings
- Hydration problems
- React errors
- Failed requests
- Missing assets

### Network

Inspect:

- Failed API requests
- 404 assets
- 500 responses
- CORS errors
- Failed images
- Failed scripts

### Test Result

Classify every problem.

Do not fix unrelated problems.

### Output

```text
PHASE 1 REPORT

Pages tested:
Features tested:
Passed:
Failed:
Critical:
High:
Medium:
Low:

Recommended fixes:
```

---

## PHASE 2 — Contact Form & Lead System

### Objective

Test the complete lead-collection pipeline.

**Architecture:**

```text
User
 ↓
Contact Form
 ↓
Client Validation
 ↓
Server/API
 ↓
Supabase
 ↓
PostgreSQL
```

### Test Valid Input

Submit a legitimate lead.

Verify:

- Form submission works
- Correct success state
- Lead reaches Supabase
- Correct fields are stored
- No unexpected data is stored

### Test Invalid Input

Test:

- Empty fields
- Invalid email
- Invalid phone
- Extremely long values
- Special characters
- Whitespace
- Malformed data
- Missing required fields

### Test Abuse Cases

Test reasonable application-level cases such as:

- Rapid repeated submissions
- Duplicate submissions
- Unexpected request payload
- Missing fields
- Invalid data types

### Verify Security

Check:

- Service-role key isn't client-accessible
- Private credentials aren't bundled
- Server-side validation exists
- Database permissions are appropriate
- Unauthorized lead access is prevented

### Database

Verify:

- Correct row insertion
- Required fields
- Data types
- Constraints
- RLS/policies where applicable

**Do not delete production leads.**

### Output

```text
PHASE 2 REPORT

Form:
Validation:
API/server:
Supabase:
Database:
Security:
Data integrity:

Passed:
Failed:
Issues:
```

---

## PHASE 3 — Sanity CMS Test

### Objective

Verify the CMS-to-website pipeline.

**Architecture:**

```text
Sanity Studio
      ↓
Content
      ↓
Sanity API
      ↓
Next.js
      ↓
Website
```

### Test

Inspect existing schemas.

Test:

- Content creation
- Content editing
- Publishing
- Unpublishing/drafting where applicable
- Rich text
- Links
- Images
- Optional fields
- Missing fields

Verify that content appears correctly on the website.

### Failure Testing

Check what happens when:

- Content is missing
- Image is missing
- Optional field is empty
- Sanity request fails
- Content is malformed

The website should fail gracefully.

### Important

- Do not change schemas unless a genuine issue is discovered.
- Do not create duplicate CMS systems.

### Output

```text
PHASE 3 REPORT

Schemas inspected:
Content types tested:
Publishing tested:
Frontend rendering:
Error handling:

Passed:
Failed:
Issues:
```

---

## PHASE 4 — Image Management & Optimization

### Objective

Verify that images are efficiently delivered.

### Inspect

Determine where images originate:

```text
Sanity
Local assets
External CDN
Next.js Image
Other existing pipeline
```

### Test

Check:

- Image dimensions
- File sizes
- Responsive behavior
- Modern formats
- Compression
- Lazy loading
- Priority loading
- Hero image handling
- Alt text
- Aspect ratios
- Layout stability
- Broken images

### Performance

Identify:

- Oversized images
- Images loaded before necessary
- Desktop-sized images downloaded on mobile
- Missing dimensions
- LCP image problems
- CLS caused by images

### Important

Do not introduce another image system if the current pipeline can handle the requirement.

### Output

```text
PHASE 4 REPORT

Image source:
Image pipeline:
Optimization:
Responsive behavior:
Lazy loading:
LCP:
CLS:
Accessibility:

Oversized images:
Broken images:
Recommendations:
```

---

## PHASE 5 — SEO Audit

### Objective

Test the complete SEO implementation.

### 5A — next-seo

Inspect:

```text
next-seo.config.ts
```

Verify:

- Title
- Description
- Title template
- Canonical URL
- OpenGraph
- Twitter/X metadata
- Images
- Page-specific metadata
- Duplicate metadata
- Accidental `noindex`

Check actual rendered HTML, not just configuration.

### 5B — next-sitemap

Inspect:

```text
next-sitemap.config.js
```

Run the production build.

Verify:

```text
sitemap.xml
robots.txt
```

Check:

- Correct domain
- Correct URLs
- No localhost
- No development URLs
- No duplicate URLs
- No private/admin pages
- Important pages included
- Correct robots directives
- Sitemap reference

### 5C — llms.txt

Inspect:

```text
public/llms.txt
```

Verify:

- File exists
- Production URL is accessible
- Markdown is readable
- Information is accurate
- Services are represented correctly
- Portfolio information is accurate
- Links work
- No private information exists
- No outdated information exists

### 5D — Technical SEO

Check:

- H1
- Heading hierarchy
- Meta title
- Meta description
- Canonical
- Internal links
- Image alt text
- Crawlability
- Indexability
- Structured data where appropriate
- Broken links
- Duplicate content
- URL structure

### Output

```text
PHASE 5 REPORT

Next-SEO:
Next-Sitemap:
Robots:
Sitemap:
LLMs.txt:
Metadata:
Technical SEO:
Structured data:

SEO score:
Critical issues:
High:
Medium:
Low:
Recommendations:
```

---

## PHASE 6 — Security Audit

### Objective

Identify security problems without performing destructive attacks.

### Environment Variables

Inspect usage of:

```text
NEXT_PUBLIC_*
```

Verify that only public values are exposed.

Private secrets must remain server-side.

### Search For

Potentially exposed:

```text
service_role
SUPABASE_SERVICE_ROLE_KEY
API_SECRET
SECRET_KEY
PRIVATE_KEY
DATABASE_PASSWORD
TOKEN
PASSWORD
```

Do not print secret values into the report.

Only report the location and type of exposure.

### Supabase

Check:

- RLS
- Policies
- Public access
- Unauthorized reads
- Unauthorized writes
- Unauthorized updates
- Unauthorized deletes

### API

Check:

- Input validation
- Authentication where required
- Authorization
- Error handling
- Sensitive error messages
- Request validation

### Client Bundle

Verify sensitive server-only credentials are not included in browser JavaScript.

### Output

```text
PHASE 6 REPORT

Secrets:
Environment variables:
Supabase:
RLS:
API security:
Client exposure:
Input validation:

Critical:
High:
Medium:
Low:

Security recommendations:
```

---

## PHASE 7 — Performance Test

### Objective

Measure real website performance.

Run production build first:

```bash
npm run build
npm run start
```

Test important pages.

Measure:

```text
LCP
INP
CLS
TTFB
TBT
JavaScript size
CSS size
Image payload
Network requests
```

Run Lighthouse where available.

**Target:**

```text
Performance: 90+
Accessibility: 90+
Best Practices: 90+
SEO: 95+
```

These are targets, not reasons to make unnecessary architectural changes.

### Identify

- Large JavaScript bundles
- Blocking scripts
- Large images
- Slow API calls
- Slow CMS requests
- Poor caching
- Layout shifts
- Unnecessary client-side rendering
- Excessive third-party scripts

### Output

```text
PHASE 7 REPORT

Page:
Performance:
LCP:
INP:
CLS:
TTFB:
Bundle:
Images:
Network:

Largest bottlenecks:
Recommended optimizations:
```

---

## PHASE 8 — Responsive UI Test

### Objective

Verify the website across screen sizes.

Test:

```text
320px
375px
390px
414px
768px
1024px
1280px
1440px
1920px
```

Check:

- Navigation
- Typography
- Layout
- Images
- Cards
- Buttons
- Forms
- Grids
- Animations
- Horizontal overflow
- Touch targets
- Mobile menus

Look specifically for:

```text
overflow-x
cropped content
text overflow
broken grids
overlapping elements
unexpected whitespace
layout shifts
```

### Output

```text
PHASE 8 REPORT

Breakpoints tested:
Mobile:
Tablet:
Desktop:

Passed:
Failed:
Visual issues:
Responsive issues:
```

---

## PHASE 9 — Cross-Browser Test

Test:

- Chrome
- Edge
- Firefox
- Safari

Pay particular attention to:

- CSS
- Animations
- Scroll interactions
- Forms
- Navigation
- Images
- JavaScript behavior

Record browser-specific issues separately.

### Output

```text
PHASE 9 REPORT

Chrome:
Edge:
Firefox:
Safari:

Browser-specific issues:
Compatibility recommendations:
```

---

## PHASE 10 — Accessibility Audit

### Objective

Verify basic WCAG-oriented accessibility.

Test:

- Keyboard navigation
- Focus states
- Buttons
- Links
- Forms
- Labels
- Error messages
- Images
- Alt text
- Heading hierarchy
- Contrast
- Semantic HTML
- Screen-reader compatibility
- Mobile accessibility
- Reduced-motion behavior

Verify that important functionality does not require a mouse.

### Output

```text
PHASE 10 REPORT

Keyboard:
Forms:
Images:
Typography:
Contrast:
Semantic HTML:
Screen reader:
Motion:

Accessibility issues:
Severity:
Recommendations:
```

---

## PHASE 11 — Dependency & Code Health Audit

Inspect:

```text
package.json
package-lock.json / yarn.lock / pnpm-lock.yaml
```

Check:

- Unused dependencies
- Duplicate functionality
- Outdated packages
- Vulnerable packages
- Unnecessary packages
- Duplicate libraries

Run:

```bash
npm audit
```

and, where appropriate:

```bash
npm outdated
```

Do not blindly upgrade packages.

Do not modify dependencies unless required.

### Output

```text
PHASE 11 REPORT

Dependencies:
Security vulnerabilities:
Unused packages:
Potential duplicates:
Recommended upgrades:

Packages changed:
Reason:
```

---

## PHASE 12 — Production Build & Deployment Test

### Objective

Verify that the application can actually run as a production build.

Run:

```bash
npm run build
```

Then:

```bash
npm run start
```

Check:

- Build succeeds
- No critical warnings
- Pages load
- API functionality works
- Sanity works
- Supabase works
- SEO works
- Sitemap generated
- Robots generated
- `llms.txt` accessible
- Images work
- Dynamic routes work

Verify that development-only behavior isn't accidentally required in production.

### Output

```text
PHASE 12 REPORT

Build:
Start:
Runtime:
SEO generation:
Sitemap:
Robots:
LLMs.txt:
API:
CMS:
Database:
Images:

Production readiness:
```

---

## PHASE 13 — End-to-End User Journey

Test the complete user journey.

### Journey A — Website Visitor

```text
Search / Direct Visit
        ↓
Homepage
        ↓
Navigation
        ↓
Services
        ↓
Portfolio
        ↓
Contact
        ↓
Form
        ↓
Submission
        ↓
Success
        ↓
Supabase Lead
```

Verify every step.

### Journey B — CMS

```text
Sanity Studio
      ↓
Edit Content
      ↓
Publish
      ↓
Next.js
      ↓
Website
```

Verify the complete flow.

### Journey C — SEO

```text
Next.js
   ↓
Metadata
   ↓
Canonical
   ↓
OpenGraph
   ↓
Sitemap
   ↓
Robots
   ↓
LLMs.txt
```

Verify the complete flow.

---

## PHASE 14 — Final Regression Test

After all approved fixes:

Retest:

- Homepage
- Navigation
- Main pages
- Contact form
- Supabase
- Sanity
- Images
- SEO
- Sitemap
- Robots
- LLMs.txt
- Responsive layouts
- Accessibility
- Production build

The goal is to verify:

```text
Existing functionality
        +
New fixes
        ↓
Still working together
```

Do not introduce new changes during regression unless a blocking defect is discovered.

---

## FINAL QA REPORT

At the end, produce one consolidated report.

Use this structure:

```text
====================================
FINAL WEBSITE QA REPORT
====================================

PROJECT:
DATE:
ENVIRONMENT:

------------------------------------
PHASE RESULTS
------------------------------------

Phase 0 — Architecture       PASS/FAIL
Phase 1 — Frontend            PASS/FAIL
Phase 2 — Lead System         PASS/FAIL
Phase 3 — Sanity              PASS/FAIL
Phase 4 — Images              PASS/FAIL
Phase 5 — SEO                 PASS/FAIL
Phase 6 — Security            PASS/FAIL
Phase 7 — Performance         PASS/FAIL
Phase 8 — Responsive          PASS/FAIL
Phase 9 — Browsers            PASS/FAIL
Phase 10 — Accessibility      PASS/FAIL
Phase 11 — Dependencies       PASS/FAIL
Phase 12 — Production         PASS/FAIL
Phase 13 — E2E                PASS/FAIL
Phase 14 — Regression         PASS/FAIL

------------------------------------
CRITICAL ISSUES
------------------------------------

[List]

------------------------------------
HIGH ISSUES
------------------------------------

[List]

------------------------------------
MEDIUM ISSUES
------------------------------------

[List]

------------------------------------
LOW ISSUES
------------------------------------

[List]

------------------------------------
FILES MODIFIED
------------------------------------

[List]

------------------------------------
DEPENDENCIES ADDED
------------------------------------

[List]

If none:

None

------------------------------------
DATABASE CHANGES
------------------------------------

[List]

If none:

None

------------------------------------
ENVIRONMENT VARIABLES
------------------------------------

[List only variable names, never values]

------------------------------------
SECURITY STATUS
------------------------------------

PASS / FAIL

------------------------------------
SEO STATUS
------------------------------------

PASS / FAIL

------------------------------------
PERFORMANCE STATUS
------------------------------------

PASS / FAIL

------------------------------------
ACCESSIBILITY STATUS
------------------------------------

PASS / FAIL

------------------------------------
PRODUCTION READINESS
------------------------------------

READY
/ READY WITH MINOR ISSUES
/ NOT READY

------------------------------------
REMAINING WORK
------------------------------------

Prioritized list.
```

---

## FINAL RULE

**Testing is the primary objective. Modification is secondary.**

Do not turn a QA task into a refactoring project.

If something works correctly:

```text
LEAVE IT ALONE
```

If something is broken:

```text
UNDERSTAND WHY
        ↓
MAKE THE SMALLEST SAFE FIX
        ↓
RETEST
```

Always preserve the existing architecture unless a genuine technical requirement demands otherwise.
