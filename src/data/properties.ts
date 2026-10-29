import { Property } from "@/types/property";

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
    formattedPrice: "$42,500,000",
    bedrooms: 5,
    bathrooms: 6,
    area: 8400,
    areaUnit: "sq ft",
    completionYear: 2025,
    architect: "Studio Liaigre & Jean Nouvel Atelier",
    shortDescription:
      "A monumental triplex penthouse suspended over the Mediterranean, uniting hand-carved Calacatta marble with panoramic acoustic glazing.",
    description: [
      "The Aurelia represents the pinnacle of Mediterranean architectural modernism. Positioned directly above the glittering coastline of Avenue Princesse Grace, this 8,400-square-foot triplex penthouse commands unbroken 270-degree horizons from Cap Martin to Saint-Jean-Cap-Ferrat.",
      "Conceived through a master collaboration between Studio Liaigre and Jean Nouvel Atelier, the residence is sculpted from monolithic blocks of vein-matched Calacatta marble, brushed bronze millwork, and aerospace-grade acoustic glass that reduces ocean breeze noise to a gentle whisper.",
      "The upper terrace features a 18-meter cantilevered infinity lap pool that dissolves visually into the azure Mediterranean horizon, complemented by an outdoor culinary pavilion, private wellness suite, and subterranean three-bay secured automotive gallery."
    ],
    amenities: [
      "18m Cantilevered Horizon Pool",
      "Private High-Speed Elevator with Biometric Access",
      "Dedicated 24/7 Concierge & Security Staff",
      "Subterranean Temperature-Controlled Wine Sanctuary (1,200 bottles)",
      "Wellness Suite with Infrared Sauna & Cold Plunge",
      "Acoustically Isolated Dolby Atmos Private Cinema",
      "Secured 3-Bay Automotive Gallery",
      "Integrated Bang & Olufsen Architectural Sound"
    ],
    specifications: [
      { label: "Internal Living Area", value: "8,400 sq ft (780 sq m)" },
      { label: "Exterior Terraces", value: "3,200 sq ft (297 sq m)" },
      { label: "Ceiling Clearance", value: "3.8m – 5.2m Double Height" },
      { label: "Automotive Storage", value: "3 Dedicated Bays + Lift" },
      { label: "Climate Architecture", value: "Geothermal Micro-Zoned Radiant" },
      { label: "Structural Engineering", value: "Reinforced Post-Tensioned Concrete" }
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",
    posterImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-facade-41315-large.mp4",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85",
        caption: "Great Room with 270-degree horizon glazing overlooking the Mediterranean",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
        caption: "Minimalist master suite framed by brushed bronze and Belgian linen drapery",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
        caption: "Monolithic Calacatta marble kitchen featuring bespoke Gaggenau 400 series",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
        caption: "Upper sky terrace with cantilevered lap pool and evening sun lounge",
        aspectRatio: "portrait"
      }
    ],
    featured: true,
    editorialHighlight: "Featured in Architectural Digest — Residence of the Year"
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
    formattedPrice: "$18,800,000",
    bedrooms: 4,
    bathrooms: 4,
    area: 6200,
    areaUnit: "sq ft",
    completionYear: 2024,
    architect: "Kengo Kuma & Associates",
    shortDescription:
      "A tranquil forest pavilion harmonizing charred yakisugi cedar, tatami proportions, and hot-spring onsen architecture with serene bamboo views.",
    description: [
      "Nestled against the historic western slopes of Higashiyama, The Kura Sanctuary is an ode to Japanese architectural restraint and biophilic tranquility. Kengo Kuma & Associates crafted the estate around an interior moss rockery and private bamboo preserve.",
      "The residence employs traditional charred cedar (Yakisugi) facades that naturally resist weathering while acquiring an iridescent graphite patina over generations. Hinoki cypress ceilings perfume the interiors, paired with poured basalt flooring and Shoji screens.",
      "A natural subterranean thermal spring feeds the private indoor-outdoor onsen bath, hewn from a single 14-ton block of volcanic granite. Floor-to-ceiling glass pavilions open seamlessly onto contemplation decks surrounded by 300-year-old Japanese maples."
    ],
    amenities: [
      "Natural Mineral Onsen Bath (Indoor & Open-Air)",
      "Private Protected Bamboo Grove & Zen Moss Garden",
      "Traditional Chashitsu (Tea Ceremony Room) by Master Craftsmen",
      "Yakisugi Charred Cedar Weatherproof Exterior",
      "Heated Basalt & Hinoki Cypress Flooring",
      "Subterranean Meditation Pavilion & Library",
      "Continuous High-Efficiency Air Filtration with Cedar Scenting",
      "Discrete Guard House & Private Security Gate"
    ],
    specifications: [
      { label: "Internal Living Area", value: "6,200 sq ft (576 sq m)" },
      { label: "Private Garden Grounds", value: "1.4 Acres (5,660 sq m)" },
      { label: "Timber Structure", value: "Sustainably Harvested Yoshino Cedar" },
      { label: "Thermal Spring", value: "42°C Natural Geothermal Source" },
      { label: "Acoustic Rating", value: "Absolute Serenity (<20dB ambient)" },
      { label: "Automotive Storage", value: "2 Enclosed Timber Pavilion Bays" }
    ],
    heroImage:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=2400&q=85",
    posterImage:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-serene-modern-villa-surrounded-by-nature-42907-large.mp4",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=85",
        caption: "Main pavilion opening toward the protected bamboo grove",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85",
        caption: "Indoor contemplation pavilion with charred yakisugi detailing",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85",
        caption: "Private granite onsen bath fed by geothermal mineral water",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
        caption: "Handcrafted tea room with tatami mats and concealed garden aperture",
        aspectRatio: "portrait"
      }
    ],
    featured: true,
    editorialHighlight: "Pritzker Architecture Selection — Sustainable Modernity"
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
    formattedPrice: "$34,000,000",
    bedrooms: 6,
    bathrooms: 7,
    area: 11200,
    areaUnit: "sq ft",
    completionYear: 2023,
    architect: "Studio Peregalli & Claudio Silvestrin",
    shortDescription:
      "A grand 19th-century waterfront palazzo meticulously reborn with minimalist subterranean wellness vaults and private Riva speedboat dock.",
    description: [
      "Perched on the coveted western shore of Tremezzina, Villa Belvedere enjoys unobstructed views across the tranquil waters toward Bellagio. Originally built in 1892 for a Lombard silk dynasty, the estate has undergone a seven-year architectural restoration led by Studio Peregalli.",
      "The estate marries heritage stucco work, soaring 4.6-meter vaulted ceilings, and antique Venetian terrazzo with an uncompromising modern subterranean wing carved into the granite lakeside bedrock.",
      "The private deepwater jetty accommodates two 40-foot vessels, while the private botanical park boasts century-old Lebanese cedars, tiered olive groves, and a heated black porphyry swimming pool flush with the lake's water level."
    ],
    amenities: [
      "Private Deepwater Mooring Jetty with Riva Yacht Lift",
      "Subterranean Bedrock Spa with Roman Heated Tepidarium",
      "Heated Black Porphyry Infinity Pool at Water's Edge",
      "Restored 19th-Century Frescoes & Venetian Terrazzo",
      "Private 2.2-Acre Lakeside Botanical Parkland",
      "Helipad Landing Rights on Adjoining Grounds",
      "Commercial Chef's Kitchen with Molteni Cooking Suite",
      "Guest Staff Quarters with Independent Access"
    ],
    specifications: [
      { label: "Internal Living Area", value: "11,200 sq ft (1,040 sq m)" },
      { label: "Lakeside Parkland", value: "2.2 Acres (8,900 sq m)" },
      { label: "Waterfront Shoreline", value: "120 Linear Meters" },
      { label: "Watercraft Mooring", value: "Dual Slip Covered Boathouse" },
      { label: "Ceiling Height", value: "Up to 4.6m Original Vaulted" },
      { label: "Guest Residences", value: "2 Detached Independent Suites" }
    ],
    heroImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=85",
    posterImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
        caption: "Grand salon opening onto the stone loggia and Lake Como panorama",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
        caption: "Subterranean Roman-style heated pool carved directly into rock",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
        caption: "Private stone staircase descending to the private Riva boat dock",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
        caption: "Master bathroom clad in honed Fior di Bosco marble",
        aspectRatio: "portrait"
      }
    ],
    featured: true,
    editorialHighlight: "World Luxury Living Award — Exceptional Heritage Restoration"
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
    formattedPrice: "$28,500,000",
    bedrooms: 5,
    bathrooms: 6,
    area: 7850,
    areaUnit: "sq ft",
    completionYear: 2024,
    architect: "John Pawson Architects & David Chipperfield",
    shortDescription:
      "A Portland stone Georgian facade concealing radical sculptural interior architecture, centered around an artisan bronze spiral staircase.",
    description: [
      "Overlooking the secluded plane trees of Mount Street Gardens, The One Mayfair bridges London's aristocratic history with radical minimalist sculpture. Behind an impeccably conserved Grade-II listed Portland stone facade lies an ultra-contemporary six-storey sanctuary.",
      "Pritzker laureate David Chipperfield and minimalist master John Pawson engineered an interior atrium bathed in diffused natural zenith light, anchored by a monolithic, freestanding helical staircase cast in hand-patinated bronze.",
      "The subterranean levels feature a private 12-meter basalt swimming pool, biometric vault room, private screening cinema, and climate-controlled humidor, offering absolute privacy in London's premier luxury postal code."
    ],
    amenities: [
      "Freestanding Hand-Patinated Bronze Helical Staircase",
      "Subterranean 12m Basalt Lap Pool with Starlight Ceiling",
      "Private Access to Gated Mount Street Gardens",
      "Biometric High-Security Vault & Art Storage",
      "10-Seat DCI-Compliant Private Screening Cinema",
      "Bespoke Boffi Kitchen with Pietra d'Avola Stone",
      "Automated Hydraulic Car Lift with Street-Level Discretion",
      "Full Crestron Home Automation with Tunable Circadian Lighting"
    ],
    specifications: [
      { label: "Internal Living Area", value: "7,850 sq ft (729 sq m)" },
      { label: "Storeys", value: "6 Levels Served by Glass Elevator" },
      { label: "Heritage Classification", value: "Grade-II Listed Conserved Facade" },
      { label: "Automotive Storage", value: "2-Car Subterranean Hydraulic Lift" },
      { label: "Acoustic Engineering", value: "Independent Floating Box Structure" },
      { label: "Wine & Spirits Storage", value: "Dual-Zone Humidor & 800-Bottle Cellar" }
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",
    posterImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
        caption: "Sculptural bronze staircase ascending through the illuminated central atrium",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85",
        caption: "Double-aspect reception room with bespoke herringbone French oak floors",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
        caption: "Custom Pietra d'Avola kitchen island crafted as a singular stone sculpture",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
        caption: "Principal bedroom suite with views overlooking historic garden foliage",
        aspectRatio: "portrait"
      }
    ],
    featured: false,
    editorialHighlight: "Architectural Digest International Feature"
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
    formattedPrice: "$26,000,000",
    bedrooms: 5,
    bathrooms: 5,
    area: 9100,
    areaUnit: "sq ft",
    completionYear: 2024,
    architect: "Olson Kundig Architects",
    shortDescription:
      "A monumental alpine residence of board-formed concrete, blackened steel, and heated thermal glass framing Aspen Mountain's dramatic summits.",
    description: [
      "Engineered into the granite slope of prestigious Red Mountain, Solaris Pavilion redefines Rocky Mountain architecture. Rather than traditional log cabin cliches, Olson Kundig designed an assertive modernist pavilion constructed of board-formed architectural concrete, standing-seam copper, and triple-pane thermal glass.",
      "Massive motorized glass walls retract seamlessly at the push of a button, connecting the 35-foot-high great room directly to cantilevered heated stone terraces equipped with dual fire cauldrons and a stainless steel infinity hot tub.",
      "The residence includes a heated indoor ski lounge with boot warmers and direct trail access, radiant geothermal heated floors throughout, and a 20-foot dual-sided granite fireplace anchoring the living salon."
    ],
    amenities: [
      "Direct Ski-In / Ski-Out Access via Private Heated Trail",
      "Heated Stainless Steel Cantilevered Alpine Hot Tub",
      "35-Foot Great Room with Motorized Guillotine Glass Walls",
      "Custom Ski & Snowboard Prep Lounge with Boot Warming Suite",
      "Dual-Sided 20ft Granite Hearth with Artisan Fire Cauldrons",
      "Whole-Home Oxygenation System for High-Altitude Comfort",
      "Heated 4-Car Motor Court with Snow-Melt Geothermal System",
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
    heroImage:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85",
    posterImage:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
        caption: "Soaring 35ft great room framing the snow-covered peaks of Aspen",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
        caption: "Outdoor heated terrace with stainless steel plunge and granite fire table",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
        caption: "Principal suite with private balcony and suspended steel fireplace",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
        caption: "Minimalist mountain kitchen in smoked oak and honed basalt",
        aspectRatio: "portrait"
      }
    ],
    featured: false,
    editorialHighlight: "Mountain Architecture Honor Award"
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
    formattedPrice: "$38,000,000",
    bedrooms: 6,
    bathrooms: 7,
    area: 12500,
    areaUnit: "sq ft",
    completionYear: 2025,
    architect: "Foster + Partners & Patricia Urquiola",
    shortDescription:
      "A transcendent double-height sky mansion on Jumeirah Bay Island featuring a private cantilevered infinity pool 40 storeys above the Arabian Gulf.",
    description: [
      "Commanding the ultra-exclusive shores of Jumeirah Bay Island, The Lumina is an architectural tour-de-force conceived by Foster + Partners. Suspended forty floors into the sky, this 12,500-square-foot duplex penthouse captures the Arabian Gulf and the iconic skyline of Downtown Dubai.",
      "Interior architecture by Patricia Urquiola introduces fluid, organic curves, brushed champagne metals, and hand-carved Roman travertine screening mashrabiya elements that filter the desert light into delicate lace-like patterns.",
      "The private sky deck hosts a 20-meter glass-bottomed infinity pool cantilevered directly over the azure waters below. A private 65-foot yacht berth at the Jumeirah Bay Marina is deeded with the residence."
    ],
    amenities: [
      "Cantilevered Glass-Bottom Sky Pool 40 Floors Above Sea Level",
      "Deeded 65-Foot Superyacht Berth at Jumeirah Bay Marina",
      "Private High-Speed Pneumatic Elevator with Keycard & Iris Lock",
      "Travertine Mashrabiya Solar Shading Screens",
      "2-Level Grand Salon with 7.5m Double-Height Ceilings",
      "Master Spa with Steam Chamber, Cryo-Chamber & Ice Fountain",
      "Secure Subterranean 4-Bay Air-Conditioned Showroom",
      "Dedicated Butler Quarters & Private Catering Pantry"
    ],
    specifications: [
      { label: "Internal Living Area", value: "12,500 sq ft (1,161 sq m)" },
      { label: "Exterior Terraces", value: "4,100 sq ft (381 sq m)" },
      { label: "Superyacht Berth", value: "Up to 65ft (20m) Deeded Dock" },
      { label: "Ceiling Clearance", value: "7.5m Double-Height Central Void" },
      { label: "Climate Control", value: "Solar Micro-Zoning with Air Ionization" },
      { label: "Automotive Storage", value: "4 Air-Conditioned Display Bays" }
    ],
    heroImage:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=2400&q=85",
    posterImage:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-with-glass-facade-41315-large.mp4",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85",
        caption: "Double-height grand salon bathed in filtered Arabian sunlight",
        aspectRatio: "wide"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        caption: "Cantilevered glass sky pool overlooking the gulf horizon",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
        caption: "Kitchen pavilion in champagne bronze and white statuario marble",
        aspectRatio: "landscape"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
        caption: "Principal suite dressing room in fluted glass and custom leather",
        aspectRatio: "portrait"
      }
    ],
    featured: true,
    editorialHighlight: "Middle East Architectural Icon of the Decade"
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
