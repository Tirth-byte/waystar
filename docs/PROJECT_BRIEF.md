# WAYSTAR — Project Brief & Technical Specification

**Brand:** WAYSTAR  
**Brand Descriptor:** Exceptional Residences  
**Tagline:** Architecture worth living in.  
**Domain:** Luxury International Real Estate Development  
**Academic Context:** AI-Assisted Web Application — End Semester Examination (ESE)

---

## 1. Executive Summary

WAYSTAR is a conceptual high-end luxury real estate development brand. The digital experience is conceived not as a transactional listings database, but as a digital architectural flagship. Combining cinematic visual storytelling with practical discovery, WAYSTAR presents a curated portfolio of world-class residential developments across premier global destinations.

## 2. Core Value Proposition & Tone

- **Aesthetic Direction:** Architectural Cinema meets Digital Real Estate.
- **Visual Personality:** Sculptural, serene, monolithic, authentic, tactile, and enduring.
- **Reference Benchmarks:** Emaar Properties, DLF Privana/The Camellias, Lodha Luxury, Douglas Elliman Fine Homes.
- **Design Philosophy:** Avoid boilerplate web design tropes (no generic card grids, no empty beige spaces without purpose, no generic SaaS widgets). Full-bleed architectural imagery and videos, layered editorial typography, asymmetric compositions, and deliberate motion design.

## 3. Brand Color System & Design Tokens

- **Warm Ivory (`#F7F6F2`):** Primary canvas tone providing warmth and architectural softness.
- **Limestone (`#E6DED0`):** Secondary structural surfaces, subtle borders, and architectural card accents.
- **Sandstone (`#B9A994`):** Warm accent tone for editorial metadata, badges, and focus lines.
- **Graphite (`#55544F`):** Secondary text, specifications, and understated navigational cues.
- **Charcoal (`#20211F`):** Deep editorial typography, hero overlays, high-contrast backgrounds, and monolithic footer.
- **Pure White (`#FFFFFF`):** Architectural highlights and contrast elements.

## 4. Typographic System

- **Editorial Display:** *Cinzel* & *Playfair Display* (or *Cormorant Garamond* / *Cinzel Decorative*) for majestic architectural headlines, project titles, and brand statements.
- **Functional Grotesque:** *Plus Jakarta Sans* / *Inter* for crisp specifications, floor plans, filters, and high-legibility interface copy.
- **Architectural Metadata:** Restrained uppercase tracking, tabular numerals for dimensions and monetary figures.

## 5. Information Architecture & Key Routes

1. **`/` (Homepage):** Cinematic video hero, brand manifesto, curated flagship developments, architectural philosophy, collection gateway, closing sequence & footer.
2. **`/developments` (Catalogue):** Curated residential developments with multi-parameter filtering (search, location, property type, price brackets), responsive list/grid views, and zero-state handling.
3. **`/developments/[slug]` (Development Detail):** Architectural hero, deep-dive specifications, high-resolution visual gallery, interactive floor-space stats, curated amenities, viewing enquiry trigger, and related residences.
4. **`/discover` (Interactive Discovery):** Streamlined discovery matrix linking architectural preferences, geographic regions, and living styles.
5. **`/saved` (Saved Residences):** Hydration-safe client-side collection stored via `localStorage`, allowing users to curate and review their portfolio of interest.
6. **`/about` (About WAYSTAR):** Editorial exploration of WAYSTAR's architectural vision, material honesty, craftsmanship, and academic disclaimer.
7. **`/contact` (Private Viewing & Enquiry):** Comprehensive viewing request and private advisory form with client-side validation, preselected developments, and local persistence for demonstration purposes.

## 6. Technical Stack & Architecture

- **Framework:** Next.js (App Router, Server Components where appropriate)
- **Language:** TypeScript (Strict typing for properties, filters, and enquiries)
- **Styling:** Tailwind CSS with custom architectural tokens
- **Motion & Interaction:** GSAP with ScrollTrigger (lifecycle managed, SSR safe, reduced-motion compliant), Motion for React for microinteractions
- **Icons:** Lucide React
- **Media Strategy:** Optimized Next.js Image, high-resolution architectural photography, video backgrounds with static poster fallbacks
- **Persistence:** Safe client-side `localStorage` abstraction for demo enquiry records and saved favourites
- **Compliance & Disclaimer:** Prominently identifies all listings, prices, availability, and enquiries as illustrative and conceptual.

