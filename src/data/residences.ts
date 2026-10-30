import { Residence } from "@/types/residence";
import { formatPrice } from "@/lib/formatting";

export const RESIDENCES: Residence[] = [
  // ==========================================
  // DUBAI RESIDENCES
  // ==========================================
  {
    id: "dub-01",
    slug: "the-lumina-waterfront-dubai",
    name: "The Lumina Waterfront",
    tagline: "Cantilevered Sky Terraces Above the Marina",
    city: "Dubai",
    country: "United Arab Emirates",
    location: "Dubai Marina",
    propertyType: "Penthouse",
    price: 28500000,
    formattedPrice: formatPrice(28500000),
    bedrooms: 5,
    bathrooms: 6,
    area: 8200,
    areaUnit: "sq ft",
    completionYear: 2026,
    architect: "Foster & Partners Studio Collaboration",
    shortDescription:
      "A monumental triplex penthouse suspended over the Dubai Marina waterway, uniting travertine stone and cantilevered glass with unbroken maritime panoramas.",
    description: [
      "The Lumina Waterfront crowns the uppermost levels of an iconic glass tower on Dubai Marina's premier canal promenade. Conceived as a floating pavilion of light and water, this residence commands unobstructed views spanning the entire marina basin to the Arabian Gulf.",
      "Spanning 8,200 square feet across three interconnected levels, the interior architecture is characterized by double-height living galleries, book-matched Italian marble, and bespoke bronze architectural screening.",
      "An extraordinary 20-meter cantilevered infinity edge pool extends into the sky, paired with a private yacht mooring, an acoustically tuned screening suite, and a climate-controlled four-vehicle gallery."
    ],
    amenities: [
      "20m Cantilevered Sky Infinity Pool",
      "Private Deep-Water Superyacht Mooring",
      "Direct Private Keycard Elevator Access",
      "Subterranean Temperature-Zoned Wine Cellar",
      "Private Wellness Suite with Cold Plunge & Steam",
      "Acoustically Isolated 12-Seat Cinema",
      "Secured 4-Bay Executive Automotive Gallery",
      "Circadian Architectural Lighting Automation"
    ],
    specifications: [
      { label: "Internal Living Area", value: "8,200 sq ft (762 sq m)" },
      { label: "Sky Terrace Area", value: "3,100 sq ft (288 sq m)" },
      { label: "Ceiling Heights", value: "4.2m – 6.8m Double Height" },
      { label: "Automotive Storage", value: "4 Dedicated Private Bays" },
      { label: "Yacht Mooring", value: "Private 40-Meter Berth" },
      { label: "Structural Engineering", value: "Post-Tensioned Architectural Concrete" }
    ],
    heroMedia: {
      type: "video",
      src: "/media/v2/dubai/dubai-marina-aerial.mp4",
      poster: "/media/v2/posters/dubai-marina-aerial.webp",
      caption: "Aerial perspectives across Dubai Marina waterways and residential towers"
    },
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=2000&q=85",
        caption: "Great Room panoramic glazing with views over the marina basin",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
        caption: "Master Bedroom suite opening onto private eastern morning terrace",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
        caption: "Minimalist chef kitchen finished in dark fumed oak and quartzite",
        aspectRatio: "square"
      }
    ],
    isFeatured: true
  },
  {
    id: "dub-02",
    slug: "the-marina-horizon-dubai",
    name: "The Marina Horizon Estate",
    tagline: "Private Superyacht Berth & Unbroken Coastal Panoramas",
    city: "Dubai",
    country: "United Arab Emirates",
    location: "Dubai Marina Yacht Club",
    propertyType: "Waterfront Estate",
    price: 41000000,
    formattedPrice: formatPrice(41000000),
    bedrooms: 7,
    bathrooms: 9,
    area: 14500,
    areaUnit: "sq ft",
    completionYear: 2025,
    architect: "Zaha Hadid Architects Legacy Studio",
    shortDescription:
      "An ultra-rare waterfront sanctuary situated directly on the marina quay, combining fluid architectural concrete curves with private deep-water superyacht access.",
    description: [
      "The Marina Horizon Estate represents the pinnacle of Middle Eastern coastal architecture. Designed as a sculptural stone and glass pavilion directly fronting the marina, the estate seamlessly dissolves boundaries between indoor living and the maritime horizon.",
      "Internal volumes feature 14,500 square feet of curated luxury, complete with an atrium garden courtyard, dual owner suites, and private staff quarters.",
      "Outside, an expansive teak sun deck wraps around an illuminated saltwater swimming lagoon, providing direct boarding to the resident's private yacht."
    ],
    amenities: [
      "Private 50-Meter Superyacht Berth",
      "Saltwater Horizon Swimming Lagoon",
      "Atrium Courtyard with Mature Olive Trees",
      "Dual Primary Presidential Suites",
      "Commercial-Grade Catering Kitchen & Show Kitchen",
      "Private Hamam and Hydrotherapy Suite",
      "6-Car Subterranean Turn-Table Garage",
      "24/7 Monitored Physical Perimeter Security"
    ],
    specifications: [
      { label: "Internal Living Area", value: "14,500 sq ft (1,347 sq m)" },
      { label: "Waterfront Quay Area", value: "5,800 sq ft (539 sq m)" },
      { label: "Ceiling Clearances", value: "4.5m Throughout" },
      { label: "Automotive Gallery", value: "6 Vehicles Subterranean" },
      { label: "Yacht Dockage", value: "50-Meter Direct Access Berth" },
      { label: "Glazing System", value: "Acoustic Triple-Glazed Solar Control" }
    ],
    heroMedia: {
      type: "video",
      src: "/media/v2/dubai/dubai-yachts-skyline.mp4",
      poster: "/media/v2/posters/dubai-yachts-skyline.webp",
      caption: "Marina water-level glide past luxury yachts and modern residential towers"
    },
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=85",
        caption: "Waterfront terrace and illuminated infinity pool at dusk",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2000&q=85",
        caption: "Soaring double-height reception salon with custom lighting installation",
        aspectRatio: "wide"
      }
    ],
    isFeatured: true
  },
  {
    id: "dub-03",
    slug: "the-oasis-pavilion-dubai",
    name: "The Oasis Modernist Pavilion",
    tagline: "Private Courtyard Sanctuary & Reflecting Water Gardens",
    city: "Dubai",
    country: "United Arab Emirates",
    location: "Dubai Hills Estate",
    propertyType: "Villa",
    price: 34000000,
    formattedPrice: formatPrice(34000000),
    bedrooms: 6,
    bathrooms: 8,
    area: 12400,
    areaUnit: "sq ft",
    completionYear: 2026,
    architect: "Kengo Kuma & Associates",
    shortDescription:
      "A serene architectural compound constructed from warm sandstone and charred cedar, woven around reflective water courtyards and private parkland.",
    description: [
      "The Oasis Modernist Pavilion is conceived as an architectural oasis of quiet contemplation. Monolithic sandstone walls shield internal living spaces from urban energy, while wide glass pocket doors slide open to reveal tranquil reflecting ponds.",
      "Materials celebrate natural earth tones: hand-chiselled local stone, Japanese cedar louvers, and honed limestone floors that stay cool under the desert sun.",
      "The residence includes a standalone guest pavilion, an outdoor Japanese tea house, and an Olympic-length private swimming court surrounded by native desert flora."
    ],
    amenities: [
      "25m Olympic Lap Pool & Reflection Basins",
      "Standalone 2-Bedroom Guest Villa",
      "Traditional Cedar Tea Pavilion & Zen Garden",
      "Underground Temperature-Controlled Vault",
      "Private Yoga Court & Meditation Loggia",
      "Automated Solar Shading Pergolas",
      "Full Smart-Home Circadian Environment",
      "Private Gated Estate Perimeter"
    ],
    specifications: [
      { label: "Internal Living Area", value: "12,400 sq ft (1,152 sq m)" },
      { label: "Private Grounds", value: "28,000 sq ft (2,600 sq m)" },
      { label: "Primary Suite Area", value: "2,200 sq ft with Dual Dressing Rooms" },
      { label: "Automotive Court", value: "Covered 5-Car Pavilion" },
      { label: "Energy Efficiency", value: "LEED Platinum Certified Geothermal" }
    ],
    heroMedia: {
      type: "video",
      src: "/media/v2/dubai/dubai-sunset-marina.mp4",
      poster: "/media/v2/posters/dubai-sunset-marina.webp",
      caption: "Waterfront architectural promenade at golden hour"
    },
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85",
        caption: "Geometric sandstone facade reflecting into the serene central pool",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
        caption: "Minimalist living volume opening directly into the bamboo court",
        aspectRatio: "wide"
      }
    ],
    isFeatured: false
  },
  {
    id: "dub-04",
    slug: "solis-tower-sky-suite-dubai",
    name: "Solis Tower Sky Suite",
    tagline: "High-Altitude Terraces Over Shimmering City Horizons",
    city: "Dubai",
    country: "United Arab Emirates",
    location: "Downtown Dubai",
    propertyType: "Sky Residence",
    price: 19200000,
    formattedPrice: formatPrice(19200000),
    bedrooms: 4,
    bathrooms: 5,
    area: 6100,
    areaUnit: "sq ft",
    completionYear: 2025,
    architect: "SOM Architectural Atelier",
    shortDescription:
      "Perched on the 72nd floor of Solis Tower, this full-floor residence commands dramatic 360-degree vistas of the Burj Khalifa and the Persian Gulf.",
    description: [
      "The Solis Tower Sky Suite offers the ultimate high-altitude luxury living experience in the heart of Downtown Dubai. The full-floor floorplate provides panoramic vantage points capturing sunrise over the desert and sunset over the sea.",
      "Custom Italian millwork in smoked eucalyptus and Calacatta Borghini marble create an atmosphere of refined international luxury.",
      "Private elevator foyers open into an expansive entertaining salon with an integrated brass cocktail bar and wrap-around viewing loggias."
    ],
    amenities: [
      "Full-Floor 360-Degree Panoramic View",
      "Private Sky Terraces on Four Facades",
      "Dual High-Speed Private Key Elevators",
      "Executive Study with Private Skyline Balcony",
      "Integrated Bang & Olufsen Spatial Audio",
      "Concierge and Valet Chauffeur Service",
      "Building Helipad Access Privilege",
      "3 Dedicated Subterranean Parking Spaces"
    ],
    specifications: [
      { label: "Internal Floor Area", value: "6,100 sq ft (567 sq m)" },
      { label: "Sky Loggia Area", value: "1,400 sq ft (130 sq m)" },
      { label: "Building Elevation", value: "Floor 72 (290 meters above ground)" },
      { label: "Ceiling Clearances", value: "3.9m Finished Height" },
      { label: "HVAC System", value: "Hospital-Grade HEPA Air Filtration" }
    ],
    heroMedia: {
      type: "video",
      src: "/media/v2/dubai/dubai-night-skyscrapers.mp4",
      poster: "/media/v2/posters/dubai-night-skyscrapers.webp",
      caption: "Illuminated nighttime skyscrapers and expressways in modern Dubai"
    },
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85",
        caption: "Entertaining salon framed by floor-to-ceiling skyline glass",
        aspectRatio: "wide"
      }
    ],
    isFeatured: false
  },

  // ==========================================
  // NEW YORK RESIDENCES
  // ==========================================
  {
    id: "ny-01",
    slug: "the-madison-penthouse-new-york",
    name: "The Madison Penthouse",
    tagline: "Crown Triplex Overlooking Central Park Horizon",
    city: "New York",
    country: "United States",
    location: "Upper East Side, Manhattan",
    propertyType: "Penthouse",
    price: 54000000,
    formattedPrice: formatPrice(54000000),
    bedrooms: 5,
    bathrooms: 6,
    area: 9600,
    areaUnit: "sq ft",
    completionYear: 2025,
    architect: "Robert A.M. Stern Architects",
    shortDescription:
      "A monumental triplex penthouse towering over Madison Avenue and Central Park, featuring classic Indiana limestone terraces and soaring 14-foot coffered ceilings.",
    description: [
      "Occupying the top three floors of a newly erected limestone tower on the Upper East Side, The Madison Penthouse unites Gilded Age proportion with cutting-edge 21st-century residential engineering.",
      "The great hall spans 48 feet overlooking the full expanse of Central Park, flanked by a formal library with a wood-burning marble fireplace and a private gallery for contemporary art.",
      "A sculptural cantilevered bronze staircase connects to the private terrace level, featuring a heated outdoor dip pool, summer culinary loggia, and 360-degree skyline views."
    ],
    amenities: [
      "Heated Rooftop Dip Pool & Central Park Terrace",
      "Direct Private Key Elevator to All Three Floors",
      "Two Working Wood-Burning Carved Marble Fireplaces",
      "Temperature-Controlled 1,200-Bottle Wine Room",
      "Primary Suite with Dual Spa Bathrooms & Dressing Rooms",
      "Integrated Crestron Home Automation & Motorized Shading",
      "White-Glove Doorman and Concierge Stewardship",
      "Dedicated Private Storage Vault & Wine Locker"
    ],
    specifications: [
      { label: "Internal Living Area", value: "9,600 sq ft (892 sq m)" },
      { label: "Private Terraces", value: "2,400 sq ft (223 sq m)" },
      { label: "Ceiling Clearances", value: "4.2m (14 Feet) Finished" },
      { label: "Fireplaces", value: "2 Wood-Burning, 1 Ventless Gas" },
      { label: "Acoustic Rating", value: "STC 65 Triple-Pane Architectural Glass" }
    ],
    heroMedia: {
      type: "video",
      src: "/media/v2/new-york/manhattan-midtown-aerial.mp4",
      poster: "/media/v2/posters/manhattan-midtown-aerial.webp",
      caption: "Midtown Manhattan architectural aerial showcasing classic and modern high-rises"
    },
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=2000&q=85",
        caption: "Great Hall with custom plaster mouldings and direct Central Park views",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
        caption: "Formal dining gallery framed by custom fumed oak panelling",
        aspectRatio: "wide"
      }
    ],
    isFeatured: true
  },
  {
    id: "ny-02",
    slug: "hudson-tower-sky-residence-new-york",
    name: "Hudson Tower Sky Residence",
    tagline: "Cantilevered Glass Architecture Over the Hudson River",
    city: "New York",
    country: "United States",
    location: "Hudson Yards, Manhattan",
    propertyType: "Sky Residence",
    price: 32000000,
    formattedPrice: formatPrice(32000000),
    bedrooms: 4,
    bathrooms: 5,
    area: 7400,
    areaUnit: "sq ft",
    completionYear: 2026,
    architect: "Diller Scofidio + Renfro Collaboration",
    shortDescription:
      "A visionary glass-enclosed sky residence cantilevering dramatically over the Hudson River, framing sunsets behind unobstructed floor-to-ceiling curtain walls.",
    description: [
      "Suspended 65 floors above Hudson Yards, this residence represents the avant-garde of Manhattan glass tower architecture. The interior is anchored by an open-concept great room with 12-foot floor-to-ceiling low-iron insulated glass.",
      "The custom Poliform kitchen features stone monolithic islands and Gaggenau 400 series appliances, opening to an intimate western sunset dining loggia.",
      "The corner master suite features a freestanding soaking tub positioned directly against the glass wall overlooking the illuminated river traffic below."
    ],
    amenities: [
      "Floor-to-Ceiling Low-Iron Acoustic Curtain Wall",
      "Private Corner Sunset Loggia Over Hudson River",
      "Primary Suite with Dual Marble Dressing Suites",
      "Private Soundproof Executive Screening Room",
      "Private Porte-Cochere with Automated Valet",
      "Access to Tower Wellness Club & Sky Lounge",
      "Dedicated Private Resident Elevator",
      "Custom Italian Millwork by Poliform"
    ],
    specifications: [
      { label: "Internal Floor Area", value: "7,400 sq ft (687 sq m)" },
      { label: "Exterior Loggia", value: "850 sq ft (79 sq m)" },
      { label: "Elevation", value: "65th Floor (235 meters elevation)" },
      { label: "Ceiling Clearances", value: "3.7m (12 Feet) Clear" },
      { label: "Glazing", value: "Acoustic Triple-Glazed Low-E Structural Glass" }
    ],
    heroMedia: {
      type: "video",
      src: "/media/v2/new-york/manhattan-sunset-skyline.mp4",
      poster: "/media/v2/posters/manhattan-sunset-skyline.webp",
      caption: "Hudson River aerial overlooking Manhattan skyline at sunset"
    },
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
        caption: "Corner living salon looking west toward sunset over the river",
        aspectRatio: "wide"
      }
    ],
    isFeatured: true
  },
  {
    id: "ny-03",
    slug: "740-park-avenue-heritage-new-york",
    name: "740 Park Avenue Heritage Residence",
    tagline: "Historic Limestone Grandeur & Private Garden Courtyard",
    city: "New York",
    country: "United States",
    location: "Park Avenue, Manhattan",
    propertyType: "Townhouse",
    price: 46500000,
    formattedPrice: formatPrice(46500000),
    bedrooms: 6,
    bathrooms: 7,
    area: 11200,
    areaUnit: "sq ft",
    completionYear: 2025,
    architect: "Rosario Candela / Modern Heritage Restoration",
    shortDescription:
      "A grand 25-foot wide limestone townhouse residence on Park Avenue, pairing preserved 1920s classic architecture with a serene private garden atrium.",
    description: [
      "A distinguished property offering the privacy of a single-family townhouse with the prestige of a Park Avenue address. Meticulously restored to museum standards, the home features six levels served by a private mahogany elevator.",
      "The parlour floor boasts 13-foot ceilings, herringbone parquet de Versailles flooring, and twin carved French limestone fireplaces.",
      "The private landscaped rear garden was conceived by a master landscape architect, featuring mature birch trees, stone water walls, and bluestone entertaining terraces."
    ],
    amenities: [
      "Landscaped English Garden Court & Water Walls",
      "Private High-Speed Mahogany Passenger Elevator",
      "Full Subterranean Wine Tasting Room & Cellar",
      "Gym & Private Steam Room Suite",
      "Separate Staff Accommodation & Service Entrance",
      "Secured Street-Level Automotive Garage",
      "Triple-Tier Comprehensive Security Infrastructure",
      "Radiant Heated Limestone Floors Throughout"
    ],
    specifications: [
      { label: "Internal Living Area", value: "11,200 sq ft (1,040 sq m)" },
      { label: "Garden & Terraces", value: "2,200 sq ft (204 sq m)" },
      { label: "Building Width", value: "25 Feet Wide" },
      { label: "Total Levels", value: "6 Finished Stories plus Cellar" },
      { label: "Automotive Storage", value: "1 Private Attached Heated Bay" }
    ],
    heroMedia: {
      type: "video",
      src: "/media/v2/new-york/manhattan-night-skyline.mp4",
      poster: "/media/v2/posters/manhattan-night-skyline.webp",
      caption: "Illuminated nighttime Manhattan skyline along the East River"
    },
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
        caption: "Historic parlour floor reception room with restored plaster rosettes",
        aspectRatio: "wide"
      }
    ],
    isFeatured: false
  },
  {
    id: "ny-04",
    slug: "the-tribeca-atelier-new-york",
    name: "The Tribeca Atelier Loft",
    tagline: "Cast-Iron Heritage with 22-Foot Double-Height Ceilings",
    city: "New York",
    country: "United States",
    location: "Tribeca, Manhattan",
    propertyType: "Loft",
    price: 22800000,
    formattedPrice: formatPrice(22800000),
    bedrooms: 4,
    bathrooms: 4,
    area: 6800,
    areaUnit: "sq ft",
    completionYear: 2026,
    architect: "Annabelle Selldorf Architects",
    shortDescription:
      "A monumental historic cast-iron duplex loft in landmarked Tribeca, celebrating soaring double-height volumes, exposed structural columns, and museum-grade finishes.",
    description: [
      "The Tribeca Atelier is an extraordinary celebration of industrial architectural heritage elevated to residential art. Situated in an 1890s cast-iron building, original fluted Corinthian columns support 22-foot ceilings in the main gallery.",
      "The spatial design incorporates custom hot-rolled steel architectural staircases, radiant terrazzo flooring, and floor-to-ceiling operable casement windows.",
      "The upper level contains an intimate primary retreat, custom dressing galleries, and a private landscaped rooftop loggia."
    ],
    amenities: [
      "22-Foot Soaring Double-Height Gallery Volumes",
      "Restored Historic Fluted Cast-Iron Columns",
      "Private Landscaped Rooftop Terrace Loggia",
      "Direct Keyed Elevator Entry into Residence",
      "Custom Boffi Kitchen with Integrated Pietra d'Avola Stone",
      "Acoustically Isolated Audio Recording & Screening Studio",
      "Private Climate-Controlled Wine Room",
      "Doorman Building with Private Concierge"
    ],
    specifications: [
      { label: "Internal Living Area", value: "6,800 sq ft (632 sq m)" },
      { label: "Rooftop Loggia", value: "1,100 sq ft (102 sq m)" },
      { label: "Ceiling Clearances", value: "6.7m (22 Feet) Double Height" },
      { label: "Windows", value: "Custom Architectural Steel Casement" },
      { label: "Heating & Cooling", value: "Silent Multi-Zone Radiant System" }
    ],
    heroMedia: {
      type: "video",
      src: "/media/v2/interiors/modern-luxury-interior.mp4",
      poster: "/media/v2/posters/modern-luxury-interior.webp",
      caption: "Double-height architectural interior with timber screen and natural clerestory light"
    },
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
        caption: "Main double-height entertaining gallery showing fluted iron columns",
        aspectRatio: "wide"
      }
    ],
    isFeatured: false
  }
];

export function getResidenceBySlug(slug: string): Residence | undefined {
  return RESIDENCES.find((r) => r.slug === slug);
}

export function getResidencesByCity(city: "Dubai" | "New York"): Residence[] {
  return RESIDENCES.filter((r) => r.city === city);
}

export function getFeaturedResidences(): Residence[] {
  return RESIDENCES.filter((r) => r.isFeatured);
}

