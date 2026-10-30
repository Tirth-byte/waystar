export interface MediaManifestEntry {
  id: string;
  title: string;
  purpose: "hero" | "immersion" | "interior" | "estate" | "skyline" | "residence" | "developer-film";
  videoPath?: string;
  posterPath: string;
  sourceType: "native-h264" | "official-embed" | "photo";
  resolution: string;
  duration?: string;
  license: string;
  visualSubject: string;
  assignedSection: string;
  youtubeId?: string;
  attribution?: string;
  status: "APPROVED" | "REJECTED" | "SUPERSEDED";
}

export const WAYSTAR_MEDIA_MANIFEST: Record<string, MediaManifestEntry> = {
  // CHAPTER 01 — ARRIVAL HERO
  "hero-built-around-life": {
    id: "hero-built-around-life",
    title: "Built Around Life — Official Emaar Dubai Flagship",
    purpose: "hero",
    posterPath: "/media/backgrounds/built-around-life-poster.webp",
    sourceType: "official-embed",
    resolution: "1080p / 4K UHD YouTube Stream",
    license: "Official Emaar Dubai Film / YouTube Standard License",
    visualSubject: "Burj Khalifa and monumental urban modern architecture, human scale, light and spatial harmony",
    assignedSection: "Chapter 01: Arrival (HeroScene)",
    youtubeId: "FarxC74rnB4",
    attribution: "Official Developer Film by Emaar Dubai",
    status: "APPROVED",
  },
  "hero-monumental-estate": {
    id: "hero-monumental-estate",
    title: "The Grand Estate Aerial Arrival (Overhead Mansion)",
    purpose: "hero",
    videoPath: "/media/backgrounds/arrival-hero.mp4",
    posterPath: "/media/backgrounds/arrival-hero-poster.webp",
    sourceType: "native-h264",
    resolution: "4096x2160 UHD Master -> 1920x1080 CRF 20 Web Delivery",
    duration: "20.0s",
    license: "Pexels License (Commercial Use Permitted)",
    visualSubject: "White-stone classical mansion (grey roof) - superseded by user direction in Prompt 010",
    assignedSection: "Archive / Superseded",
    status: "SUPERSEDED",
  },

  // CHAPTER 02 — THE ARCHITECTURAL WORLD
  "immersion-lakeside-palazzo": {
    id: "immersion-lakeside-palazzo",
    title: "Lakeside Monumental Palazzo & Cypress Vistas",
    purpose: "immersion",
    videoPath: "/media/backgrounds/waterfront-architecture.mp4",
    posterPath: "/media/backgrounds/waterfront-architecture-poster.webp",
    sourceType: "native-h264",
    resolution: "1920x1080 High Profile CRF 22",
    duration: "8.6s",
    license: "Pexels License (Commercial Use Permitted)",
    visualSubject: "Neoclassical colonnaded stone villa overlooking pristine lake waters and towering cypress groves",
    assignedSection: "Chapter 02: The Architectural World (ImmersionScene)",
    status: "APPROVED",
  },

  // CHAPTER 03 — SIGNATURE RESIDENCES
  "signature-the-aurelia": {
    id: "signature-the-aurelia",
    title: "The Aurelia Cantilevered Sky Estate",
    purpose: "residence",
    posterPath: "/media/residences/aurelia-hero.jpg",
    sourceType: "photo",
    resolution: "1920x1280",
    license: "Unsplash Commercial License",
    visualSubject: "Cantilevered glass and vein-matched Calacatta marble penthouse overlooking Monaco harbor",
    assignedSection: "Chapter 03: Signature Residences (SignatureScene)",
    status: "APPROVED",
  },

  // CHAPTER 04 — THE ART OF LIVING
  "interior-modern-luxury-4k": {
    id: "interior-modern-luxury-4k",
    title: "Double-Height Pavilion Living & Tactile Woodcraft",
    purpose: "interior",
    videoPath: "/media/backgrounds/living-interior.mp4",
    posterPath: "/media/backgrounds/living-interior-poster.webp",
    sourceType: "native-h264",
    resolution: "3840x2160 UHD Master -> 1920x1080 CRF 20 Web Delivery",
    duration: "13.8s",
    license: "Pexels License (Commercial Use Permitted)",
    visualSubject: "Architectural double-height wood paneling, artisan dining table, soaring daylight clerestories",
    assignedSection: "Chapter 04: The Art of Living (ArtOfLivingScene)",
    status: "APPROVED",
  },

  // CHAPTER 05 — THE INVITATION & CLOSING (NEW YORK EXECUTIVE LUXURY)
  "closing-manhattan-executive-4k": {
    id: "closing-manhattan-executive-4k",
    title: "Manhattan Executive Architectural Nocturne",
    purpose: "skyline",
    videoPath: "/media/backgrounds/executive-skyline.mp4",
    posterPath: "/media/backgrounds/executive-skyline-poster.webp",
    sourceType: "native-h264",
    resolution: "3840x2160 UHD Master -> 1920x1080 CRF 20 Web Delivery",
    duration: "6.8s",
    license: "Pexels License (Commercial Use Permitted)",
    visualSubject: "New York high-altitude illuminated glass skyscrapers, avenue grid light trails, cinematic executive prestige",
    assignedSection: "Chapter 05: The Invitation (FinaleScene)",
    status: "APPROVED",
  },

  // PRIVATE ADVISORY & CONTACT
  "advisory-estate-grounds": {
    id: "advisory-estate-grounds",
    title: "Architectural Forest Estate Canopy & Grounds",
    purpose: "estate",
    videoPath: "/media/backgrounds/estate-grounds.mp4",
    posterPath: "/media/backgrounds/estate-grounds-poster.webp",
    sourceType: "native-h264",
    resolution: "1920x1080 60fps CRF 20",
    duration: "15.0s",
    license: "Pexels License (Commercial Use Permitted)",
    visualSubject: "Architectural hipped-roof stone mansion nestled in private forest canopy with geometric pool",
    assignedSection: "Private Experience & Contact Advisory",
    status: "APPROVED",
  },
};
