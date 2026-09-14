# Changelog

## [Unreleased]
### Added
- **"ELEVATE" Hero Section Headline**:
  - Implemented high-contrast Didone serif typography using Google Font `Bodoni_Moda` (with `Playfair_Display` and Didot as fallbacks) in [layout.tsx](file:///c:/Users/aruun/OneDrive/Desktop/New%20folder%20(2)/app/layout.tsx).
  - Applied condensed, tall proportions (`scale(0.92, 1.2)`) and hero-scale typography (`clamp(4.2rem, 14vw, 10.5rem)`).
  - Engineered multi-layered CSS gradient fill using `background-clip: text` in [globals.css](file:///c:/Users/aruun/OneDrive/Desktop/New%20folder%20(2)/app/globals.css):
    - Left-to-right horizontal linear gradient transitioning from deep maroon/burgundy (`#7A3B4A`) on the left to metallic silver-grey (`#B8BEC4` to `#E8EAEC`) on the right.
    - Secondary diagonal specular highlight/sheen layer at ~45deg with light streaks over the silver portion to simulate brushed metal reflection.
    - Multi-stage drop shadow (`filter: drop-shadow(...)`) to ensure legibility across light, teal/seafoam, and dark backgrounds.
  - Positioned the headline at the base of the hero section in [Hero.tsx](file:///c:/Users/aruun/OneDrive/Desktop/New%20folder%20(2)/components/Hero.tsx), slightly overlapping the subject with generous horizontal letter spread.
  - Linked GSAP reveal timeline animation to smoothly ascend the headline into place on preloader completion.
- **Sanity.io Integration**: 
  - Initialized Sanity Studio using the `Blog (schema)` template.
  - Added `.env.local` file containing the `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`.
  - Added configuration files at the root: `sanity.cli.js` and `sanity.config.js`.
  - Created a `sanity/` directory with `env.js`, `structure.js`, and database interactions via `lib/`.
  - Created initial schemas inside `sanity/schemaTypes/` for the blog structure (`authorType.js`, `blockContentType.js`, `categoryType.js`, `postType.js`, `index.js`).
  - Created a custom data model schema for the Services section (`serviceType.js`) and registered it in `index.js`.
  - Embedded Sanity Studio inside the Next.js app router at `/studio` by adding `app/studio/[[...tool]]/page.tsx` and `app/studio/layout.tsx`.
  - Updated `package.json` to include necessary Sanity dependencies (`next-sanity`, `sanity`, `@sanity/image-url`, `@sanity/vision`, `styled-components`, etc.).
  - Wrapped up the `Services.tsx` section to accept dynamic props from Sanity.
  - Added GROQ querying logic in `app/page.tsx` to dynamically pull Services content from the Sanity Cloud instead of local arrays, retaining a local fallback if Sanity is empty.

### Fixed
- **Sanity Live UI Updates & Image Loading**:
  - Configured `cdn.sanity.io` under `images.remotePatterns` in `next.config.ts` to allow Next.js `<Image>` components to load Sanity-hosted images without crashing.
  - Set `useCdn: false` in `sanity/lib/client.js` to bypass Sanity CDN edge cache delay and fetch fresh dataset changes immediately.
  - Configured `dynamic = "force-dynamic"` and `revalidate = 0` in `app/page.tsx` so Next.js does not serve stale cached pages upon data modification.
  - Updated `components/Services.tsx` to pad service IDs automatically to two digits (e.g. `[ 01 ]`).

- **Editorial "Process" Section with Scroll-Driven Curved Typography**:
  - Created `components/Process.tsx` featuring an editorial off-white (`#f5f3f3`) full-screen section pinned across a `320vh` scroll duration.
  - Implemented top micro-typography bar (`{`, `PROCESS`, `♠`, `PROCESS`, `}`) with understated monospace letter spacing.
  - Constructed an invisible circular arc using SVG path geometry (`M -300 950 A 2175 2175 0 0 1 2700 950`) centered horizontally.
  - Rendered oversized H1 typography ("WORK LEAVES EVIDENCE") using SVG `<textPath>`.
  - Linked GSAP ScrollTrigger to scrub `startOffset` from `-25%` to `125%`, causing the text to sweep in from the left, bend over the circular arc at mid-scroll, and exit out the right.
  - Included accessible screen-reader H1 tag, negative-space footer, and `prefers-reduced-motion` detection.
  - Integrated `<Process />` into `app/page.tsx` right after `<Services />`.

- **Services Section Tagline Copy & Font Size Update**:
  - Updated the tagline for "Full-Stack Web Development" to `"Every Trick Leaves Evidence  Clean Code Is What Remains"`.
  - Increased the font size of the tagline highlight div in `components/Services.tsx` to `text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-snug`.

- **Process Section Curved Headline & Scale Upgrade**:
  - Updated the primary animated headline in `components/Process.tsx` to `"EVERY TRICK LEAVES EVIDENCE — CLEAN CODE IS WHAT REMAINS"`.
  - Significantly increased typography scale to `175px` (`font-extrabold`, weight 800) for a massive, architectural, viewport-spanning presence.
  - Recalculated the circular SVG trajectory to `M -2000 1400 A 5280 5280 0 0 1 4400 1400` across an expanded `380vh` scroll distance.
  - Linked micro-navigation header to `FULL STACK WEB DEVELOPMENT` and updated accessible screen reader metadata.

- **Manifesto Downward Circular Arc Section & Circular Symmetry**:
  - Created `components/ManifestoCurve.tsx` placed immediately after `Projects` in `app/page.tsx`.
  - Implemented mathematical downward circular curve (`M -3000 -2509 A 4400 4400 0 0 0 5400 -2509`, trough at `(1200, 580)`) that complements the top upside curve in `Process.tsx` (`⌒`) to form a complete symmetrical circle (`⌣`).
  - Animated `"FULL-STACK DEVELOPER TURNING 1.5 YEARS OF SELF-TAUGHT GRIND INTO AI AGENTS THAT ACTUALLY SHIP"` sweeping smoothly along the downward path with GSAP ScrollTrigger across `380vh` of scroll distance.
  - Linked micro-typography header `{ AUTONOMOUS AGENTS ♠ PRODUCTION SYSTEMS }` and footer anchor.
  - Added explicit responsive `sizes` props to `<Image>` components in `Hero.tsx`, `Projects.tsx`, and `Services.tsx`.

- **Process Cards Sanity Schema & Dynamic CMS Integration**:
  - Created schema `sanity/schemaTypes/stepType.js` (`processStep`) with fields for `order`, `step` tag, `title`, `description`, and `deliverables` list.
  - Registered `stepType` in `sanity/schemaTypes/index.js` for immediate editing in Sanity Studio (`/studio`).
  - Updated `components/ProcessSteps.tsx` to receive `sanitySteps` prop dynamically while retaining physical card rotation angles and hover transitions.
  - Added GROQ query for `processStep` in `app/page.tsx` with graceful fallback to default cards if the dataset is empty.
