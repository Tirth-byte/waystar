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

## 3. Viewport & Responsive Verifications

| Viewport | Target Resolution | Scope | Status | Verification Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Desktop Ultra** | 1920 × 1080 | Full viewport hero & scenes | Passed | Edge-to-edge drone video, crisp typography, generous whitespace. |
| **Desktop Standard** | 1440 × 900 | Developments catalogue & details | Passed | 3-column card grid, specs matrix, no text collisions. |
| **Tablet** | 768 × 1024 | Responsive grid & navigation | Passed | Adaptive 2-column layout, touch controls. |
| **Mobile** | 390 × 844 | Mobile drawer & single column | Passed | Slide-in drawer, full touch targets, zero horizontal overflow. |
