export type PropertyType =
  | "Penthouse"
  | "Waterfront Villa"
  | "Historic Townhouse"
  | "Alpine Sanctuary"
  | "Sky Estate"
  | "Pavilion Residence";

export interface Property {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: string;
  city: string;
  country: string;
  propertyType: PropertyType;
  price: number;
  currency: string;
  formattedPrice: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sq ft
  areaUnit: "sq ft" | "sq m";
  completionYear: number;
  architect: string;
  shortDescription: string;
  description: string[];
  amenities: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  heroImage: string;
  galleryImages: {
    url: string;
    caption: string;
    aspectRatio?: "landscape" | "portrait" | "wide";
  }[];
  videoUrl?: string;
  emaarVideo?: {
    id: string;
    title: string;
    embedUrl: string;
    attribution: string;
  };
  posterImage: string;
  featured: boolean;
  editorialHighlight?: string;
}

export interface PropertyFilterState {
  searchQuery: string;
  location: string;
  propertyType: string;
  minPrice: number;
  maxPrice: number;
  sortBy: "featured" | "price-asc" | "price-desc" | "area-desc";
}

export interface EnquirySubmission {
  id: string;
  submittedAt: string;
  fullName: string;
  email: string;
  phone: string;
  propertySlug: string;
  propertyName: string;
  preferredDate: string;
  message: string;
  isDemo: true;
}

