import { Property } from "@/types/property";

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
};

export const PROPERTIES: Property[] = [
  {
    id: "prop-01",
    slug: "the-aurelia-monaco",
    name: "The Aurelia",
    tagline: "Cantilevered Mediterranean Sky Estate",
    location: "Avenue Princesse Grace",
    city: "Monaco",
    country: "Monaco",
    propertyType: "Penthouse",
    price: 42500000,
    currency: "USD",
    formattedPrice: formatPrice(42500000),
    bedrooms: 5,
    bathrooms: 6,
    area: 8400,
    areaUnit: "sq ft",
    completionYear: 2025,
    architect: "Mediterranean Architectural Atelier",
    shortDescription:
      "A monumental triplex penthouse suspended above Avenue Princesse Grace, uniting vein-matched Calacatta marble with unbroken maritime horizons.",
    description: [
      "The Aurelia occupies the crowning three storeys of an oceanfront tower on Avenue Princesse Grace. Conceived as a celebration of Mediterranean horizon light, the residence commands panoramic views spanning from Cap Martin to Saint-Jean-Cap-Ferrat.",
      "The interior architecture unfolds across 8,400 square feet of curated living volumes. Monolithic Calacatta marble slabs define the double-height great room, paired with brushed bronze millwork and acoustic triple-glazing engineered to preserve quiet stillness above the sea.",
      "An 18-meter cantilevered infinity lap pool extends toward the water, complemented by an outdoor culinary loggia, private wellness pavilion, and secured three-bay automotive gallery."
    ],
    amenities: [
      "18m Cantilevered Infinity Lap Pool",
      "Private High-Speed Direct Access Elevator",
      "Subterranean Temperature-Zoned Wine Cellar",
      "Private Wellness Spa with Cold Plunge & Steam Suite",
      "Acoustically Isolated Private Screening Room",
      "Secured 3-Bay Automotive Gallery",
      "Outdoor Culinary Loggia with Marine-Grade Appliances",
      "Integrated Circadian Architectural Lighting"
    ],
    specifications: [
      { label: "Internal Living Area", value: "8,400 sq ft (780 sq m)" },
      { label: "Exterior Terraces", value: "3,200 sq ft (297 sq m)" },
      { label: "Ceiling Clearance", value: "3.8m – 5.2m Double Height" },
      { label: "Automotive Storage", value: "3 Dedicated Private Bays" },
      { label: "Climate Control", value: "Multi-Zoned Geothermal Radiant System" },
      { label: "Structural Framing", value: "Post-Tensioned Architectural Concrete" }
    ],
    heroImage: "/media/residences/aurelia-hero.jpg",
    posterImage: "/media/residences/aurelia-hero.jpg",
    emaarVideo: {
      id: "44oA4q_VvQ8",
      title: "Palace Beach Residence",
      embedUrl: "https://www.youtube-nocookie.com/embed/44oA4q_VvQ8",
      attribution: "Official Developer Film by Emaar Dubai"
    },
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
        caption: "Great Room with panoramic horizon glazing overlooking the Mediterranean",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
        caption: "Monolithic Calacatta marble kitchen with bespoke integrated cabinetry",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
        caption: "Cantilevered sky terrace and sunset lounge above the water",
        aspectRatio: "portrait"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=85",
        caption: "Principal suite with private seaside balcony and custom dressing suite",
        aspectRatio: "landscape"
      }
    ],
    featured: true,
    editorialHighlight: "Flagship Residential Commission • Monaco"
  },
  {
    id: "prop-02",
    slug: "the-kura-sanctuary-kyoto",
    name: "The Kura Sanctuary",
    tagline: "Biophilic Modernism in Higashiyama",
    location: "Higashiyama Foothills",
    city: "Kyoto",
    country: "Japan",
    propertyType: "Pavilion Residence",
    price: 18800000,
    currency: "USD",
    formattedPrice: formatPrice(18800000),
    bedrooms: 4,
    bathrooms: 4,
    area: 6200,
    areaUnit: "sq ft",
    completionYear: 2024,
    architect: "Kyoto Contemporary Woodcraft Atelier",
    shortDescription:
      "A tranquil forest pavilion harmonizing charred yakisugi cedar, tatami proportions, and natural hot-spring onsen architecture with serene bamboo courtyards.",
    description: [
      "Nestled against the wooded foothills of Higashiyama, The Kura Sanctuary is conceived around an interior moss rockery and private bamboo preserve, offering deep visual and acoustic serenity.",
      "The residence employs traditional charred cedar (Yakisugi) facades that naturally resist weathering while acquiring an iridescent graphite patina over generations. Hinoki cypress ceilings perfume the interiors, paired with poured basalt flooring and sliding Shoji screens.",
      "A natural subterranean thermal spring feeds the private indoor-outdoor onsen bath, hewn from a single 14-ton block of volcanic granite. Living pavilions open seamlessly onto wooden contemplation decks surrounded by mature Japanese maples."
    ],
    amenities: [
      "Natural Geothermal Mineral Onsen (Indoor & Open-Air)",
      "Private Protected Bamboo Grove & Zen Moss Garden",
      "Traditional Chashitsu (Tea Ceremony Pavilion) by Master Joiners",
      "Yakisugi Charred Cedar Weatherproof Exterior Cladding",
      "Radiant Heated Basalt & Hinoki Cypress Flooring",
      "Subterranean Meditation Chamber & Cedar Library",
      "High-Efficiency Particulate Air Filtration with Hinoki Scenting",
      "Enclosed Timber Carriage Pavilion for 2 Vehicles"
    ],
    specifications: [
      { label: "Internal Living Area", value: "6,200 sq ft (576 sq m)" },
      { label: "Private Garden Grounds", value: "1.4 Acres (5,660 sq m)" },
      { label: "Timber Structure", value: "Sustainably Harvested Yoshino Cedar" },
      { label: "Thermal Spring", value: "42°C Natural Geothermal Source" },
      { label: "Acoustic Rating", value: "Ambient Sound Level Below 20dB" },
      { label: "Automotive Storage", value: "2 Enclosed Timber Pavilion Bays" }
    ],
    heroImage: "/media/residences/kura-hero.jpg",
    posterImage: "/media/emaar/posters/emaar-beachfront.webp",
    emaarVideo: {
      id: "Sxsiq1VaHf0",
      title: "Emaar Beachfront",
      embedUrl: "https://www.youtube-nocookie.com/embed/Sxsiq1VaHf0",
      attribution: "Official Developer Film by Emaar Dubai"
    },
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2000&q=85",
        caption: "Main pavilion opening toward the protected bamboo grove",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
        caption: "Minimalist interior with natural Hinoki wood screens and tatami flooring",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85",
        caption: "Private granite onsen bath fed by geothermal mineral water",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=85",
        caption: "Evening twilight over the courtyard contemplation deck",
        aspectRatio: "portrait"
      }
    ],
    featured: true,
    editorialHighlight: "Biophilic Architectural Conception • Kyoto"
  },
  {
    id: "prop-03",
    slug: "villa-belvedere-lake-como",
    name: "Villa Belvedere",
    tagline: "Waterfront Neoclassical Grandeur",
    location: "Tremezzina Waterfront",
    city: "Lake Como",
    country: "Italy",
    propertyType: "Waterfront Villa",
    price: 34000000,
    currency: "USD",
    formattedPrice: formatPrice(34000000),
    bedrooms: 6,
    bathrooms: 7,
    area: 11200,
    areaUnit: "sq ft",
    completionYear: 2023,
    architect: "Lombard Restoration Studio",
    shortDescription:
      "A grand 19th-century waterfront palazzo meticulously reborn with subterranean stone wellness vaults and private speedboat jetty.",
    description: [
      "Perched on the western shore of Tremezzina, Villa Belvedere commands unobstructed views across Lake Como toward the promontory of Bellagio. Originally constructed in 1892, the estate has undergone a comprehensive architectural restoration.",
      "The estate unites heritage lime stucco, 4.6-meter vaulted ceilings, and Venetian terrazzo with a contemporary subterranean wellness wing carved directly into the lakeside bedrock.",
      "A private deepwater jetty accommodates two 40-foot vessels, while the private botanical park features century-old Lebanese cedars, tiered olive groves, and a heated black porphyry swimming pool flush with the lake water level."
    ],
    amenities: [
      "Private Deepwater Mooring Jetty with Automated Boat Lift",
      "Subterranean Bedrock Wellness Spa with Heated Tepidarium",
      "Heated Black Porphyry Infinity Pool at Water's Edge",
      "Conserved 19th-Century Stucco Work & Venetian Terrazzo",
      "2.2-Acre Lakeside Botanical Parkland with Olive Terraces",
      "Commercial Chef's Kitchen with Custom Molteni Suite",
      "Two Independent Detached Guest Suites with Private Entrances",
      "Subterranean Secured 4-Vehicle Gallery"
    ],
    specifications: [
      { label: "Internal Living Area", value: "11,200 sq ft (1,040 sq m)" },
      { label: "Lakeside Parkland", value: "2.2 Acres (8,900 sq m)" },
      { label: "Waterfront Shoreline", value: "120 Linear Meters Direct Lake Access" },
      { label: "Watercraft Mooring", value: "Dual Slip Covered Boathouse" },
      { label: "Ceiling Height", value: "Up to 4.6m Vaulted Ceilings" },
      { label: "Guest Residences", value: "2 Detached Independent Suites" }
    ],
    heroImage: "/media/residences/belvedere-hero.jpg",
    posterImage: "/media/emaar/posters/palace-beach-residence.webp",
    emaarVideo: {
      id: "5rEh1yJt6WA",
      title: "Palace Beach Residence by Emaar",
      embedUrl: "https://www.youtube-nocookie.com/embed/5rEh1yJt6WA",
      attribution: "Official Developer Film by Emaar Dubai"
    },
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85",
        caption: "Grand stone loggia looking across Lake Como toward Bellagio",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
        caption: "Subterranean Roman-inspired heated pool carved into lakeside bedrock",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
        caption: "Restored grand salon featuring original ceiling vaults and Venetian terrazzo",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        caption: "Lakeside dining terrace nestled among ancient olive trees",
        aspectRatio: "portrait"
      }
    ],
    featured: true,
    editorialHighlight: "Historic Waterfront Restoration • Lake Como"
  },
  {
    id: "prop-04",
    slug: "the-one-mayfair-london",
    name: "The One Mayfair",
    tagline: "Sculptural Monolith in Historic Mayfair",
    location: "Mount Street Gardens",
    city: "London",
    country: "United Kingdom",
    propertyType: "Historic Townhouse",
    price: 28500000,
    currency: "USD",
    formattedPrice: formatPrice(28500000),
    bedrooms: 5,
    bathrooms: 6,
    area: 7850,
    areaUnit: "sq ft",
    completionYear: 2024,
    architect: "Mayfair Heritage & Minimalist Studio",
    shortDescription:
      "A conserved Portland stone Georgian facade concealing radical sculptural interior architecture, centered around an artisan bronze spiral staircase.",
    description: [
      "Overlooking the quiet trees of Mount Street Gardens, The One Mayfair bridges London's architectural history with contemporary sculpture. Behind a conserved Grade-II listed Portland stone facade lies an ultra-modern six-storey private residence.",
      "An interior atrium bathed in natural zenith light anchors the home, centered around a freestanding helical staircase cast in hand-patinated architectural bronze.",
      "Subterranean levels feature a private 12-meter basalt swimming pool, biometric art storage vault, private screening room, and climate-controlled humidor, providing complete privacy in London's premier residential enclave."
    ],
    amenities: [
      "Freestanding Hand-Patinated Bronze Helical Staircase",
      "Subterranean 12m Basalt Lap Pool with Starlight Ceiling",
      "Direct Gated Access to Mount Street Gardens",
      "Biometric High-Security Art & Asset Storage Vault",
      "10-Seat Acoustically Isolated Screening Room",
      "Bespoke Kitchen with Honed Pietra d'Avola Stone",
      "Automated Hydraulic Car Lift with Street-Level Discretion",
      "Integrated Home Automation with Circadian Lighting"
    ],
    specifications: [
      { label: "Internal Living Area", value: "7,850 sq ft (729 sq m)" },
      { label: "Storeys", value: "6 Levels Served by Glass Passenger Lift" },
      { label: "Heritage Classification", value: "Grade-II Listed Conserved Facade" },
      { label: "Automotive Storage", value: "2-Car Subterranean Hydraulic Lift" },
      { label: "Acoustic Engineering", value: "Independent Acoustically Decoupled Core" },
      { label: "Wine & Spirits Storage", value: "Dual-Zone Humidor & 800-Bottle Cellar" }
    ],
    heroImage: "/media/residences/mayfair-hero.jpg",
    posterImage: "/media/emaar/posters/address-residences-the-bay.webp",
    emaarVideo: {
      id: "j7CHAFRVCc4",
      title: "Address Residences The Bay",
      embedUrl: "https://www.youtube-nocookie.com/embed/j7CHAFRVCc4",
      attribution: "Official Developer Film by Emaar Dubai"
    },
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
        caption: "Central light atrium with sculptural bronze spiral staircase",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85",
        caption: "Double-aspect reception room with herringbone French oak flooring",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",
        caption: "Private study and library overlooking Mount Street foliage",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
        caption: "Pietra d'Avola kitchen island sculpted from solid Italian stone",
        aspectRatio: "portrait"
      }
    ],
    featured: false,
    editorialHighlight: "Urban Heritage Redefined • Mayfair, London"
  },
  {
    id: "prop-05",
    slug: "solaris-pavilion-aspen",
    name: "Solaris Pavilion",
    tagline: "Modernist Alpine Cantilever on Red Mountain",
    location: "Red Mountain Road",
    city: "Aspen",
    country: "United States",
    propertyType: "Alpine Sanctuary",
    price: 26000000,
    currency: "USD",
    formattedPrice: formatPrice(26000000),
    bedrooms: 5,
    bathrooms: 5,
    area: 9100,
    areaUnit: "sq ft",
    completionYear: 2024,
    architect: "Aspen Alpine Architectural Atelier",
    shortDescription:
      "A monumental alpine residence of board-formed concrete, blackened steel, and heated thermal glass framing Aspen Mountain's dramatic peaks.",
    description: [
      "Engineered into the granite slope of prestigious Red Mountain, Solaris Pavilion redefines high-altitude living. Constructed from board-formed architectural concrete, weathered copper, and triple-pane thermal glass, the home frames unbroken vistas of Aspen Mountain and the Continental Divide.",
      "Retractable motorized glass walls connect the 35-foot great room directly to cantilevered heated stone terraces equipped with dual fire cauldrons and a stainless steel infinity hot tub.",
      "The residence includes a heated private ski lounge with boot warming suites and direct trail access, radiant geothermal heated floors throughout, and a 20-foot dual-sided granite hearth."
    ],
    amenities: [
      "Direct Ski-In / Ski-Out Access via Private Heated Trail",
      "Heated Stainless Steel Cantilevered Alpine Hot Tub",
      "35-Foot Great Room with Retractable Thermal Glazing",
      "Custom Ski Preparation Lounge with Boot Warming Suite",
      "Dual-Sided 20ft Granite Hearth with Artisan Fire Cauldrons",
      "Whole-Home Oxygenation System for High-Altitude Comfort",
      "Heated 4-Car Motor Court with Geothermal Snow-Melt System",
      "Panoramic Views of Aspen Mountain & Continental Divide"
    ],
    specifications: [
      { label: "Internal Living Area", value: "9,100 sq ft (845 sq m)" },
      { label: "Site Area", value: "3.5 Acres Private Forest (14,160 sq m)" },
      { label: "Altitude", value: "8,200 ft (2,500 m) with Oxygen Enriched Suites" },
      { label: "Automotive Storage", value: "4-Car Heated Drive-Through Garage" },
      { label: "Glazing System", value: "Triple-Glazed Argon Insulated Glass" },
      { label: "Heating Technology", value: "100% Geothermal Closed-Loop Array" }
    ],
    heroImage: "/media/residences/solaris-hero.jpg",
    posterImage: "/media/emaar/posters/arabian-ranches-iii.webp",
    emaarVideo: {
      id: "Yzbvd7KJvjg",
      title: "Arabian Ranches III by Emaar",
      embedUrl: "https://www.youtube-nocookie.com/embed/Yzbvd7KJvjg",
      attribution: "Official Developer Film by Emaar Dubai"
    },
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85",
        caption: "Heated outdoor terrace with fire cauldron framing the snowy peaks",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=85",
        caption: "Double-height living salon with exposed board-formed concrete and hearth",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
        caption: "Minimalist alpine kitchen in smoked oak and honed granite",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=85",
        caption: "Exterior pavilion nestled into the Red Mountain pine forest",
        aspectRatio: "portrait"
      }
    ],
    featured: false,
    editorialHighlight: "Mountain Architecture Study • Aspen"
  },
  {
    id: "prop-06",
    slug: "the-lumina-waterfront-dubai",
    name: "The Lumina Waterfront",
    tagline: "Sculptural Duplex Sky Mansion",
    location: "Jumeirah Bay Island",
    city: "Dubai",
    country: "United Arab Emirates",
    propertyType: "Sky Estate",
    price: 38000000,
    currency: "USD",
    formattedPrice: formatPrice(38000000),
    bedrooms: 6,
    bathrooms: 7,
    area: 12500,
    areaUnit: "sq ft",
    completionYear: 2025,
    architect: "Emirates Waterfront Atelier",
    shortDescription:
      "A transcendent double-height sky mansion on Jumeirah Bay Island featuring a private cantilevered infinity pool 40 storeys above the Arabian Gulf.",
    description: [
      "Commanding the exclusive shores of Jumeirah Bay Island, The Lumina is an architectural tour-de-force. Suspended forty storeys above sea level, this 12,500-square-foot duplex penthouse captures the Arabian Gulf and the iconic skyline of Dubai.",
      "The interior architecture introduces fluid, organic curves, brushed champagne metals, and hand-carved Roman travertine screening elements that filter sunlight into delicate geometric patterns.",
      "The private sky terrace features a 20-meter glass-bottomed infinity pool cantilevered directly over the azure waters below, complemented by a private deeded 65-foot yacht berth at the marina."
    ],
    amenities: [
      "Cantilevered Glass-Bottom Sky Pool 40 Floors Above Sea Level",
      "Deeded 65-Foot Superyacht Berth at Jumeirah Bay Marina",
      "Private High-Speed Elevator with Biometric Access",
      "Travertine Mashrabiya Solar Shading Screens",
      "2-Level Grand Salon with 7.5m Double-Height Ceilings",
      "Master Spa with Steam Chamber, Cryo-Chamber & Ice Fountain",
      "Secured Subterranean 4-Bay Air-Conditioned Showroom",
      "Dedicated Butler Quarters & Private Service Pantry"
    ],
    specifications: [
      { label: "Internal Living Area", value: "12,500 sq ft (1,161 sq m)" },
      { label: "Exterior Terraces", value: "4,100 sq ft (381 sq m)" },
      { label: "Superyacht Berth", value: "Up to 65ft (20m) Deeded Dock" },
      { label: "Ceiling Clearance", value: "7.5m Double-Height Central Void" },
      { label: "Climate Control", value: "Solar Micro-Zoning with Air Ionization" },
      { label: "Automotive Storage", value: "4 Air-Conditioned Display Bays" }
    ],
    heroImage: "/media/residences/lumina-hero.jpg",
    posterImage: "/media/emaar/posters/the-heights-country-club.webp",
    emaarVideo: {
      id: "47c2B2qL4hg",
      title: "The Heights Country Club & Wellness by Emaar",
      embedUrl: "https://www.youtube-nocookie.com/embed/47c2B2qL4hg",
      attribution: "Official Developer Film by Emaar Dubai"
    },
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=2000&q=85",
        caption: "Cantilevered glass sky pool overlooking the Arabian Gulf",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
        caption: "Double-height grand salon bathed in filtered sunlight",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=85",
        caption: "Sunset view from the upper sky deck looking toward the marina",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        caption: "Travertine culinary pavilion in champagne bronze and statuario stone",
        aspectRatio: "portrait"
      }
    ],
    featured: true,
    editorialHighlight: "Waterfront Sky Estate • Dubai"
  }
];

export const CITIES = [
  "All Locations",
  "Monaco",
  "Kyoto",
  "Lake Como",
  "London",
  "Aspen",
  "Dubai"
] as const;

export const PROPERTY_TYPES = [
  "All Types",
  "Penthouse",
  "Waterfront Villa",
  "Historic Townhouse",
  "Alpine Sanctuary",
  "Sky Estate",
  "Pavilion Residence"
] as const;
