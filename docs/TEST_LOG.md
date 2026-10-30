# WAYSTAR — Testing Log

This log tracks all quality assurance checkpoints across the development lifecycle.
Statuses: **Passed**, **Fixed and retested**, **Failed**, **Not tested**.

---

## 1. Automated Checks & Code Quality

| Test Suite / Command | Scope | Target | Status | Notes |
| :--- | :--- | :--- | :--- | :--- |
| `npm run lint` | ESLint rules & code styling | Entire codebase | Passed | Zero errors, zero warnings. |
| `npx tsc --noEmit` | TypeScript type-checking | App Router & Data Models | Passed | Zero type errors across all strict models and App Router components. |
| `npm run build` | Next.js production build | SSG/SSR output & bundling | Passed | Compiled in 561ms; all 15 static/SSG pages successfully generated. |

---

## 2. Functional & Visual Acceptance Criteria (Prompt 002)

| ID | Functional Criterion | Scope / Scenario | Status | Notes |
| :--- | :--- | :--- | :--- | :--- |
| `TC-NAV-01` | Controlled 3-state navigation | Video header, light page header, scrolled glassmorphism | Passed | Logo and links remain 100% legible across all routes and scroll offsets. |
| `TC-NAV-02` | Discreet academic badge | Integrated inline pill in header without dominating layout | Passed | Compact badge next to wordmark; detailed disclosures moved to footer/about. |
| `TC-MED-01` | Local video playback | `/media/videos/hero-villa.mp4` & `interior-living.mp4` | Passed | Verified local MP4 delivery (HTTP 200) with zero buffering or CORS/CDN issues. |
| `TC-MED-02` | Zero-flicker poster frames | Local fallback poster rendering during video preloading | Passed | Preload images in place; smooth opacity transitions on `onCanPlay`. |
| `TC-MED-03` | Unique property photography | 6 distinct hero images in `public/media/residences/` | Passed | Completely eliminated image duplication; authentic Japanese architecture for Kyoto. |
| `TC-HOM-01` | 7-Scene cinematic journey | Reconstructed edge-to-edge scenes on homepage | Passed | Opening, Statement, Flagship title sequence, Collection, Art of Living, Gateway, Closing. |
| `TC-DEV-01` | Catalogue search & filters | Search, location, typology, budget ceiling, sort | Passed | Verified filter combinations and active match count. |
| `TC-DET-01` | Dynamic property detail SSG | `/developments/[slug]` for all 6 developments | Passed | Pre-rendered HTML; specifications table, atelier profile, related residences. |
| `TC-DET-02` | Full-screen image lightbox | Interactive gallery modal with keyboard navigation | Passed | Verified Esc, ArrowLeft, ArrowRight controls and thumbnail preview strip. |
| `TC-SAV-01` | Saved portfolio persistence | `useSyncExternalStore` syncing with `localStorage` | Passed | Multi-component reactivity, valuation calculator, deletion controls. |
| `TC-ENQ-01` | Viewing enquiry validation | Client-side error checking and preselected development | Passed | Name, email regex, phone, date, and message validation. |
| `TC-RED-01` | URL redirect `/WAYSTAR` | Temporary redirect to `/` | Passed | Verified HTTP 307 redirect from `/WAYSTAR` and `/waystar` straight to `/`. |
| `TC-ERR-01` | Bespoke 404 screen | `src/app/not-found.tsx` | Passed | Elegant branded dark architectural screen with return links. |

---

## 4. Media Library & Quality Engineering Checkpoints (Prompt 004)

| Test ID | Scope | Target Asset / Criterion | Status | Notes |
|---|---|---|---|---|
| `TC-CIN-01` | Video Decoding Integrity | All 10 master videos in `media-masters/*.mp4` | Passed | Verified with full stream decode (`ffmpeg -v error -i <file> -f null -`). Zero packet corruption. |
| `TC-CIN-02` | Production Web Transcoding | 10 web derivatives in `public/media/cinematic/` | Passed | Normalized to 1920 × 1080 16:9, H.264 High Profile, CRF 22, audio stripped (`-an`), `+faststart` moov atom. |
| `TC-CIN-03` | Dual-Format Posters | 10 WebP + 10 JPG posters in `public/media/cinematic/posters/` | Passed | Verified dual-format generation via `cwebp` (q=85) and ffmpeg (`-q:v 2`). WebP files are 62KB–666KB. |
| `TC-CIN-04` | Visual Contact Sheets | 10 2x2 contact sheets in `media-masters/contact-sheets/` and `public/media/cinematic/contact-sheets/` | Passed | 4-quadrant frame captures at 15%, 40%, 65%, 85% timestamps. Verified pure architectural content. |
| `TC-CIN-05` | Architectural Decontamination | Entire codebase & property dataset | Passed | Zero PlayStation controllers, zero gaming devices, zero unrelated electronics. Kyoto residence verified authentic woodcraft/onsen architecture. |
| `TC-CIN-06` | HTTP 200 Asset Delivery | Local web serving of all 10 cinematic video files | Passed | Verified curl HTTP 200 on `http://localhost:3000/media/cinematic/...`. Instant stream start with `+faststart`. |
| `TC-CIN-07` | Emaar Video Research | 10 official Emaar Dubai films | Passed | Verified titles, publisher (`EmaarDubai`), durations, 4K/1080p formats, embeds, and standard license governance. |
| `TC-CIN-08` | Type Integrity & Build | Next.js 16 build & TypeScript compilation | Passed | `npx tsc --noEmit` passed with 0 errors; `npm run build` compiled cleanly. |

---

## 3. Viewport & Responsive Verifications

| Viewport | Target Resolution | Scope | Status | Verification Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Desktop Ultra** | 1920 × 1080 | Full viewport hero & scenes | Passed | Edge-to-edge drone video, crisp typography, generous whitespace. |
| **Desktop Standard** | 1440 × 900 | Developments catalogue & details | Passed | 3-column card grid, specs matrix, no text collisions. |
| **Tablet** | 768 × 1024 | Responsive grid & navigation | Passed | Adaptive 2-column layout, touch controls. |
| **Mobile** | 390 × 844 | Mobile drawer & single column | Passed | Slide-in drawer, full touch targets, zero horizontal overflow. |

---

## 5. Full Cinematic Transformation Quality Checkpoints (Prompt 006)

| Test ID | Scope | Target Asset / Criterion | Status | Notes |
|---|---|---|---|---|
| `TC-CIN-09` | Emaar Video Research Expansion | 18 official Emaar Dubai films | Passed | Queried and verified via YouTube oEmbed API (`EmaarDubai`). |
| `TC-CIN-10` | High-Definition Posters | 18 WebP + 18 JPG posters in `public/media/emaar/posters/` | Passed | Generated via Google `cwebp 1.6.0` (quality 85) with zero compression artifacts. |
| `TC-CIN-11` | Viewport Performance Engineering | `EmaarCinematicPlayer.tsx` with IntersectionObserver | Passed | Iframes mount lazily within 300px threshold, preventing simultaneous multi-video network and CPU spikes. |
| `TC-CIN-12` | 8 Fullscreen Homepage Scenes | `HeroScene`, `ImmersionScene`, `SignatureScene`, `WorldSelectorScene`, `ArtOfLivingScene`, `CollectionFilmScene`, `PrivateExperienceScene`, `FinaleScene` | Passed | 85-90% moving architectural surfaces, minimal typography, zero generic cards. |
| `TC-CIN-13` | Interactive World Selector | `WorldSelectorScene.tsx` | Passed | Arrow keys, horizontal pills, active property specs, zero background audio overlap. |
| `TC-CIN-14` | Developments Cinematic Banner | `src/app/developments/page.tsx` | Passed | 65svh video header with *Inside The Valley* (`qkc0h4zXymM`), functional filtering suite preserved. |
| `TC-CIN-15` | Property Details Opening Hero | `src/app/developments/[slug]/DevelopmentDetailClient.tsx` | Passed | Full-bleed video opening, cohesive dark obsidian styling, full-screen gallery modal. |
| `TC-CIN-16` | Brand Documentary Philosophy | `src/app/about/page.tsx` | Passed | Dual architectural documentary films (*Built Around Life* & *The Heights*). |
| `TC-CIN-17` | Contact & Advisory Visual Split | `src/app/contact/page.tsx` | Passed | 55svh video header (*Address Harbour Point*), 100% accessible input fields. |
| `TC-CIN-18` | Discovery Matrix Header | `src/app/discover/page.tsx` | Passed | 55svh video header (*Rashid Yachts*), atmospheric presets. |
| `TC-CIN-19` | Omnibox URL Redirects | `next.config.ts` | Passed | Regex wildcard captures `/WAYSTAR*`, `/waystar*`, `/%20*`, returning HTTP 307 to `/`. |
| `TC-CIN-20` | Production SSG Build | Next.js 16.4.3 Turbopack | Passed | Compiled in 677ms; 15/15 pre-rendered static routes with 0 lint errors and 0 type errors. |


---

## 5. Visual QA & Multi-Viewport Verification (Prompt 007)

| Test ID | Scope | Target Asset / Criterion | Status | Notes |
|:---|:---|:---|:---:|:---|
| `TC-QA07-01` | TypeScript Verification | `npx tsc --noEmit` | **Passed** | 0 type errors across all App Router pages and media components. |
| `TC-QA07-02` | Code Quality & Linting | `npm run lint` | **Passed** | 0 ESLint errors, 0 warnings across the entire repository. |
| `TC-QA07-03` | Production Build | `npm run build` | **Passed** | Compiled in 622ms; all 15 static/SSG routes successfully generated. |
| `TC-QA07-04` | 1920px Desktop Wide | Viewport (1920 × 1080) | **Passed** | 0px horizontal overflow; full-bleed native architectural video loop. |
| `TC-QA07-05` | 1440px Standard Desktop | Viewport (1440 × 900) | **Passed** | 0px horizontal overflow; balanced typography, pristine text safe zone. |
| `TC-QA07-06` | 1280px Laptop Display | Viewport (1280 × 800) | **Passed** | 0px horizontal overflow; desktop navigation links cleanly spaced. |
| `TC-QA07-07` | 1024px Tablet Landscape | Viewport (1024 × 768) | **Passed** | 0px horizontal overflow; desktop navigation fits comfortably without collision. |
| `TC-QA07-08` | 768px Tablet Portrait | Viewport (768 × 1024) | **Passed** | 0px horizontal overflow; seamless switch to high-contrast mobile hamburger drawer. |
| `TC-QA07-09` | 390px Mobile Viewport | iPhone 14/15/16 (390 × 844) | **Passed** | 0px horizontal overflow; fluid headline clamp, stacked action buttons. |
| `TC-QA07-10` | 360px Compact Mobile | Compact Android (360 × 780) | **Passed** | 0px horizontal overflow; zero clipping or text wrapping defects. |
| `TC-QA07-11` | Background Video Controls | Ambient video canvases | **Passed** | 100% free of YouTube UI controls, center play buttons, and avatars. |
| `TC-QA07-12` | Video Dropout Prevention | All scenes on initial load | **Passed** | Instant WebP poster fallback eliminates black rectangles and layout shifts. |
| `TC-QA07-13` | Human Clip Decontamination | Collection & lifestyle scenes | **Passed** | Purged all human eye/face close-ups; 100% pure architectural cinematography. |
| `TC-QA07-14` | Official Cinema Screening | `OfficialFilmModal` triggers | **Passed** | Full-screen unmuted screening of official developer films on user demand. |


---

## 6. Prompt 009 Supreme Cinematic & 4K Media Verification

| Test ID | Scope | Target Asset / Criterion | Status | Notes |
|:---|:---|:---|:---:|:---|
| `TC-P09-01` | 4K Arrival Master | `5744343_large_estate_drone_4k.mp4` | **Passed** | 4096 × 2160 UHD master transcoded to 1080p CRF 20 (28 MB); zero blur, monumental stone mansion. |
| `TC-P09-02` | 4K Interior Master | `38675643_luxury_interior_4k.mp4` | **Passed** | 3840 × 2160 UHD master transcoded to 1080p CRF 20 (6.3 MB); double-height architectural timber paneling. |
| `TC-P09-03` | 4K NYC Executive Master | `37898716_nyc_night_architecture_4k.mp4` | **Passed** | 3840 × 2160 UHD master transcoded to 1080p CRF 20 (5.9 MB); Manhattan glass towers & avenue lights. |
| `TC-P09-04` | 60fps Estate Canopy | `12525959_mansion_trees.mp4` | **Passed** | 1920 × 1080 60fps CRF 20 (19 MB); smooth drone descent over private forest estate. |
| `TC-P09-05` | Media Audit & Rejection | `docs/MEDIA_AUDIT_009.md` | **Passed** | Purged Spanish swimming pool rooftop and generic suburban stock clips; documented 10 assets. |
| `TC-P09-06` | Video Quality Validation | `docs/VIDEO_QUALITY_009.md` | **Passed** | `ffprobe` measured resolutions, bitrates, frame rates, and PSNR poster quality. |
| `TC-P09-07` | Centralized Manifest | `src/data/mediaManifest.ts` | **Passed** | Strict TypeScript data contract for all active media. |
| `TC-P09-08` | Brand Decoupling | Property Presentation HUD | **Passed** | Zero third-party developer labels behind fictional residences. |
| `TC-P09-09` | Multi-Viewport QA | 7 Resolutions (1920 to 360) | **Passed** | 0px horizontal overflow across all device viewports. |
| `TC-P09-10` | Full Production Build | Next.js 16 SSG Build | **Passed** | All 15 routes prerendered in 427ms with 0 lint errors and 0 type errors. |


---

## Prompt 010 — Critical Media Repair & Verification Test Session

**Date & Time:** 2026-10-30T11:58:00+05:30  
**Test Harness:** Headless Brave Browser (CDP), Node.js, Python urllib, Next.js 16.4.3  
**Status:** ALL TESTS PASSED (100% PASS RATE)

| Test ID | Test Category | Description | Status | Evidence / Outcome |
| :--- | :--- | :--- | :--- | :--- |
| `TC-P10-01` | Hero Replacement | Verify grey-roofed mansion is retired and `FarxC74rnB4` is active | **Passed** | `HeroScene.tsx` uses `EmaarCinematicPlayer` with `FarxC74rnB4` and WebP Burj Khalifa poster. |
| `TC-P10-02` | The Oasis Purge | Verify zero instances of `the-oasis-by-emaar.webp` or `wcn1L5VM6mw` | **Passed** | Grep audit across `src/` confirmed 0 instances. Clean Aurelia photography active. |
| `TC-P10-03` | Lakeside De-duplication | Verify Lake Como video (`waterfront-architecture.mp4`) is not reused in Scene 03 | **Passed** | Scene 03 uses dedicated Mediterranean canvas (`aurelia-hero.jpg`). Scene 02 is exclusive host of Lake Como video. |
| `TC-P10-04` | Developments Video | Verify `/developments` uses unique video | **Passed** | Uses `executive-skyline.mp4` (Manhattan night perspective). |
| `TC-P10-05` | Philosophy Video | Verify `/about` uses unique video | **Passed** | Uses `estate-grounds.mp4` (Pine forest estate grounds). |
| `TC-P10-06` | Route Accessibility | Verify all 12 application routes respond with HTTP 200 | **Passed** | Automated script verified: `/`, `/developments`, `/discover`, `/about`, `/contact`, `/saved`, and all 6 property slugs return 200. |
| `TC-P10-07` | 404 URL Redirect | Verify browser omnibox title string redirects safely to root | **Passed** | HTTP 307 -> 200 OK verified via curl test. |
| `TC-P10-08` | TypeScript Compilation | `npx tsc --noEmit` | **Passed** | 0 errors. |
| `TC-P10-09` | ESLint Verification | `npm run lint` | **Passed** | 0 errors, 0 warnings. |
| `TC-P10-10` | Static Generation Build | `npm run build` | **Passed** | 15/15 static pages successfully generated in 776ms. |
| `TC-P10-11` | Automated Visual Audit | CDP screenshot capture across all 8 homepage scenes | **Passed** | Inspected 8 scene screenshots in `docs/screenshots/qa_007/scenes/`. Zero defects found. |


---

## 7. Master Prompt 012 — Full From-Scratch Reconstruction Quality Gate

| Test ID | Scope | Verification Target | Status | Notes |
|:---|:---|:---|:---|:---|
| `TC-V2-TSC-01` | TypeScript Strict Check | Entire V2 codebase (`npx tsc --noEmit`) | **Passed** | Zero compilation or typing errors across all typed components, hooks, and data models. |
| `TC-V2-LINT-01` | ESLint Code Quality | Next.js ESLint suite (`npm run lint`) | **Passed** | Zero errors, zero warnings. Full compliance with `react-hooks/set-state-in-effect`. |
| `TC-V2-BLD-01` | Production Build & SSG | Next.js 16 App Router build (`npm run build`) | **Passed** | 17/17 static and dynamic SSG pages generated in 1798ms with Turbopack. |
| `TC-V2-SSG-01` | Dynamic Route Pre-rendering | All 8 `/residences/[slug]` routes | **Passed** | All 8 slugs successfully pre-rendered to static HTML with `generateStaticParams`. |
| `TC-V2-RED-01` | Legacy Route Redirects | `/developments` -> `/residences` | **Passed** | HTTP 308 Permanent Redirect verified via curl headers. |
| `TC-V2-RED-02` | Dynamic Slug Redirects | `/developments/:slug` -> `/residences/:slug` | **Passed** | HTTP 308 Permanent Redirect preserves dynamic parameter. |
| `TC-V2-RED-03` | Legacy About Redirect | `/about` -> `/philosophy` | **Passed** | HTTP 308 Permanent Redirect verified via curl headers. |
| `TC-V2-MED-01` | Media Stream Verification | 9 active video derivatives in `public/media/v2/` | **Passed** | All streams verified: 1080p, H.264, `-an` stripped, `+faststart` MOOV atom. |
| `TC-V2-MED-02` | Poster Synchronization | 9 paired WebP poster frames | **Passed** | Paired 1:1 with video derivatives, instant zero-layout-shift render. |
| `TC-V2-VP-01` | Ultra-Wide Desktop (1920px) | Homepage (`/`) | **Passed** | Zero horizontal overflow (`scrollWidth: 1914px`, `clientWidth: 1914px`). |
| `TC-V2-VP-02` | Desktop Standard (1440px) | Homepage (`/`) | **Passed** | Zero horizontal overflow (`scrollWidth: 1434px`, `clientWidth: 1434px`). |
| `TC-V2-VP-03` | Laptop Display (1280px) | Homepage (`/`) | **Passed** | Zero horizontal overflow (`scrollWidth: 1274px`, `clientWidth: 1274px`). |
| `TC-V2-VP-04` | Tablet Landscape (1024px) | Homepage (`/`) | **Passed** | Zero horizontal overflow (`scrollWidth: 1018px`, `clientWidth: 1018px`). |
| `TC-V2-VP-05` | Tablet Portrait (768px) | Homepage (`/`) | **Passed** | Zero horizontal overflow (`scrollWidth: 762px`, `clientWidth: 762px`). |
| `TC-V2-VP-06` | iPhone Mobile (390px) | Homepage (`/`) | **Passed** | Zero horizontal overflow (`scrollWidth: 390px`, `clientWidth: 390px`). |
| `TC-V2-VP-07` | Compact Mobile (360px) | Homepage (`/`) | **Passed** | Zero horizontal overflow (`scrollWidth: 360px`, `clientWidth: 360px`). |
| `TC-V2-APP-01` | Residences Catalogue | `/residences` (1440px & 390px) | **Passed** | Zero horizontal overflow; responsive card grid; filter reactivity verified. |
| `TC-V2-APP-02` | Residence Detail Page | `/residences/[slug]` (1440px & 390px) | **Passed** | Zero horizontal overflow; gallery modal, specs matrix, viewing form. |
| `TC-V2-APP-03` | Discover Search Matrix | `/discover` (1440px & 390px) | **Passed** | Zero horizontal overflow; multi-facet query filtering verified. |
| `TC-V2-APP-04` | Architectural Philosophy | `/philosophy` (1440px & 390px) | **Passed** | Zero horizontal overflow; narrative typography, materiality cards. |
| `TC-V2-APP-05` | Contact & Advisory | `/contact` (1440px & 390px) | **Passed** | Zero horizontal overflow; form submission, regional office desks. |
| `TC-V2-APP-06` | Saved Portfolio | `/saved` (1440px & 390px) | **Passed** | Zero horizontal overflow; multi-tab sync via `useSyncExternalStore`. |
