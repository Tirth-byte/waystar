export interface SpecificationItem {
  label: string;
  value: string;
}

export interface GalleryMediaItem {
  url: string;
  caption: string;
  aspectRatio?: "wide" | "square" | "tall";
}

export interface HeroMediaConfig {
  type: "video" | "image";
  src: string;
  poster: string;
  caption?: string;
}

export interface Residence {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  city: "Dubai" | "New York";
  country: "United Arab Emirates" | "United States";
  location: string; // Specific neighborhood: e.g. "Dubai Marina", "Upper East Side"
  propertyType: "Penthouse" | "Villa" | "Sky Residence" | "Waterfront Estate" | "Loft" | "Townhouse";
  price: number;
  formattedPrice: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: "sq ft";
  completionYear: number;
  architect: string;
  shortDescription: string;
  description: string[];
  amenities: string[];
  specifications: SpecificationItem[];
  heroMedia: HeroMediaConfig;
  galleryImages: GalleryMediaItem[];
  isFeatured?: boolean;
}

export interface ViewingRequestData {
  residenceId?: string;
  residenceName?: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  preferredCity: "Dubai" | "New York" | "Both";
  preferredDate?: string;
  advisoryType: "In-Person Private Viewing" | "Digital Architectural Presentation" | "Portfolio Acquisition Advisory";
  notes?: string;
}

