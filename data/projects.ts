export type Project = {
  slug: string;
  title: string;
  type: string;
  location: string;
  area: string;
  budget: string;
  timeline: string;
  awards: string[];
  story: string;
  year: string;
  image: string;
  before: string;
  after: string;
  palette: string[];
  metrics: { label: string; value: string }[];
};

const img = (id: string, fit = "crop") =>
  `https://images.unsplash.com/${id}?auto=format&fit=${fit}&w=1800&q=86`;

export const projects: Project[] = [
  {
    slug: "monolith-house",
    title: "Monolith House",
    type: "Private Residence",
    location: "Malibu, California",
    area: "12,800 sq ft",
    budget: "$18.4M",
    timeline: "22 months",
    awards: ["AIA Honor Shortlist", "Dezeen Longlisted", "Luxe RED Finalist"],
    story:
      "A cliffside residence carved as a sequence of shadowed thresholds, blackened limestone, and rooms that open to the Pacific with museum-grade restraint.",
    year: "2026",
    image: img("photo-1600607687939-ce8a6c25118c"),
    before: img("photo-1600566753190-17f0baa2a6c3"),
    after: img("photo-1600585154340-be6161a56a0c"),
    palette: ["#050505", "#d8b874", "#8d9392", "#efe8dc"],
    metrics: [
      { label: "Ocean frontage", value: "146 ft" },
      { label: "Cantilever", value: "38 ft" },
      { label: "Custom stone", value: "71 tons" }
    ]
  },
  {
    slug: "kuro-penthouse",
    title: "Kuro Penthouse",
    type: "Sky Residence",
    location: "Tokyo, Japan",
    area: "7,450 sq ft",
    budget: "$11.2M",
    timeline: "16 months",
    awards: ["Frame Awards Jury Pick", "IDA Gold", "Architizer Special Mention"],
    story:
      "A nocturnal aerie above Aoyama where lacquered millwork, silk wall panels, and reflective stone turn the skyline into a private installation.",
    year: "2025",
    image: img("photo-1600210492486-724fe5c67fb0"),
    before: img("photo-1600210491369-e753d80a41f3"),
    after: img("photo-1600566752355-35792bedcfea"),
    palette: ["#09090a", "#a24838", "#c7b08a", "#667070"],
    metrics: [
      { label: "Hand lacquer", value: "410 m2" },
      { label: "Terraces", value: "4" },
      { label: "Skyline aperture", value: "270 deg" }
    ]
  },
  {
    slug: "casa-obsidienne",
    title: "Casa Obsidienne",
    type: "Desert Villa",
    location: "Palm Springs, California",
    area: "9,100 sq ft",
    budget: "$9.8M",
    timeline: "18 months",
    awards: ["Wallpaper* Design Award", "Interior Design Best of Year"],
    story:
      "A desert villa composed around a dark reflecting pool, wind-cut courtyards, and bronze screens tuned to the brutal afternoon sun.",
    year: "2025",
    image: img("photo-1600607687644-c7171b42498b"),
    before: img("photo-1600607687920-4e2a09cf159d"),
    after: img("photo-1600585154526-990dced4db0d"),
    palette: ["#050505", "#b78152", "#d8d2c4", "#72806d"],
    metrics: [
      { label: "Water saved", value: "44%" },
      { label: "Courtyards", value: "6" },
      { label: "Solar offset", value: "81%" }
    ]
  },
  {
    slug: "echelon-gallery",
    title: "Echelon Gallery",
    type: "Collector Residence",
    location: "New York, New York",
    area: "10,600 sq ft",
    budget: "$21M",
    timeline: "24 months",
    awards: ["Awwwards Honors Concept", "NYCxDesign Finalist"],
    story:
      "A private gallery home where circulation, lighting, and joinery are choreographed so each room behaves like a changing exhibition.",
    year: "2026",
    image: img("photo-1600607688969-a5bfcd646154"),
    before: img("photo-1600573472592-401b489a3cdc"),
    after: img("photo-1600607688960-e095ff83135c"),
    palette: ["#080808", "#f0eadf", "#8b8f90", "#d0ab65"],
    metrics: [
      { label: "Art walls", value: "19" },
      { label: "Light scenes", value: "84" },
      { label: "Acoustic drop", value: "12 dB" }
    ]
  },
  {
    slug: "sanctum-spa",
    title: "Sanctum Spa",
    type: "Hospitality",
    location: "Reykjavik, Iceland",
    area: "31,000 sq ft",
    budget: "$28.6M",
    timeline: "30 months",
    awards: ["Hospitality Design Winner", "Surface Travel Award"],
    story:
      "A geothermal retreat built from basalt, vapor, and soft darkness, guiding guests from civic arrival to deep mineral silence.",
    year: "2024",
    image: img("photo-1600566752229-250ed79470e0"),
    before: img("photo-1600607687920-4e2a09cf159d"),
    after: img("photo-1600566753190-17f0baa2a6c3"),
    palette: ["#050608", "#415050", "#c7b98c", "#e7e2d6"],
    metrics: [
      { label: "Thermal pools", value: "9" },
      { label: "Guest suites", value: "42" },
      { label: "Basalt blocks", value: "6,200" }
    ]
  },
  {
    slug: "rue-saint-honor",
    title: "Rue Saint-Honor",
    type: "Maison Flagship",
    location: "Paris, France",
    area: "14,200 sq ft",
    budget: "$16.7M",
    timeline: "14 months",
    awards: ["Prix Versailles Selection", "Retail Design Institute Gold"],
    story:
      "A fashion house flagship with raw concrete portals, floating glass vitrine rooms, and salons that feel closer to private ritual than retail.",
    year: "2026",
    image: img("photo-1600607688960-e095ff83135c"),
    before: img("photo-1600210491892-03d54c0aaf87"),
    after: img("photo-1600210492486-724fe5c67fb0"),
    palette: ["#030303", "#ddd5c5", "#b08b58", "#a24838"],
    metrics: [
      { label: "Vitrines", value: "23" },
      { label: "Private salons", value: "7" },
      { label: "Opening uplift", value: "38%" }
    ]
  },
  {
    slug: "lake-atelier",
    title: "Lake Atelier",
    type: "Artist Compound",
    location: "Como, Italy",
    area: "18,900 sq ft",
    budget: "$24.5M",
    timeline: "26 months",
    awards: ["Domus Restoration Prize", "A+Awards Finalist"],
    story:
      "A historic lakeside compound reworked with subterranean studios, sculptural staircases, and windows detailed to frame water like cinema.",
    year: "2024",
    image: img("photo-1600607688066-890987f18a86"),
    before: img("photo-1600566752355-35792bedcfea"),
    after: img("photo-1600585154526-990dced4db0d"),
    palette: ["#070707", "#67726a", "#dfd6c1", "#cba969"],
    metrics: [
      { label: "Restored fresco", value: "300 m2" },
      { label: "Lake edge", value: "92 m" },
      { label: "Studios", value: "5" }
    ]
  },
  {
    slug: "the-ore-room",
    title: "The Ore Room",
    type: "Private Members Club",
    location: "London, United Kingdom",
    area: "22,300 sq ft",
    budget: "$19.3M",
    timeline: "20 months",
    awards: ["FX Awards Winner", "Restaurant & Bar Design Shortlist"],
    story:
      "A subterranean members club with cast metal bars, polished plaster vaults, and amber-lit chambers engineered for privacy.",
    year: "2025",
    image: img("photo-1618220179428-22790b461013"),
    before: img("photo-1600210491369-e753d80a41f3"),
    after: img("photo-1600573472592-401b489a3cdc"),
    palette: ["#050505", "#9a6748", "#d8b874", "#6d7473"],
    metrics: [
      { label: "Acoustic rooms", value: "11" },
      { label: "Member seats", value: "188" },
      { label: "Bronze cast", value: "9 tons" }
    ]
  },
  {
    slug: "halcyon-office",
    title: "Halcyon Office",
    type: "Executive Workplace",
    location: "Zurich, Switzerland",
    area: "46,000 sq ft",
    budget: "$33M",
    timeline: "28 months",
    awards: ["CoreNet Global Finalist", "Frame Workplace Honoree"],
    story:
      "A headquarters designed as an instrument of focus: dimmed materiality, exact acoustics, and boardrooms that open like mechanical watches.",
    year: "2026",
    image: img("photo-1497366754035-f200968a6e72"),
    before: img("photo-1497366811353-6870744d04b2"),
    after: img("photo-1497366216548-37526070297c"),
    palette: ["#060606", "#a0a7a7", "#e6dcc8", "#58716b"],
    metrics: [
      { label: "Focus rooms", value: "64" },
      { label: "Energy drop", value: "31%" },
      { label: "Custom desks", value: "312" }
    ]
  },
  {
    slug: "villa-nero",
    title: "Villa Nero",
    type: "Coastal Estate",
    location: "Tulum, Mexico",
    area: "15,400 sq ft",
    budget: "$14.9M",
    timeline: "21 months",
    awards: ["Azure Design Award", "Tropical Architecture Merit"],
    story:
      "A coastal estate shaded by carbonized timber ribs, with rooms arranged between jungle humidity and black terrazzo courtyards.",
    year: "2025",
    image: img("photo-1613977257363-707ba9348227"),
    before: img("photo-1613545325278-f24b0cae1224"),
    after: img("photo-1600607687644-c7171b42498b"),
    palette: ["#050505", "#23372f", "#b9825a", "#e9dfcf"],
    metrics: [
      { label: "Shaded deck", value: "8,800 ft2" },
      { label: "Rain capture", value: "112k gal" },
      { label: "Guest pavilions", value: "8" }
    ]
  },
  {
    slug: "archive-hotel",
    title: "Archive Hotel",
    type: "Boutique Hotel",
    location: "Lisbon, Portugal",
    area: "38,500 sq ft",
    budget: "$26.1M",
    timeline: "32 months",
    awards: ["Sleeper AHEAD Finalist", "Monocle Design Top 50"],
    story:
      "A former newspaper archive converted into a 54-key hotel with ink-black corridors, tactile suites, and a courtyard restaurant under linen sails.",
    year: "2024",
    image: img("photo-1600585152915-d208bec867a1"),
    before: img("photo-1600573472550-8090b5e0745e"),
    after: img("photo-1600585154340-be6161a56a0c"),
    palette: ["#050505", "#ded3bf", "#6f7777", "#a24838"],
    metrics: [
      { label: "Rooms", value: "54" },
      { label: "Original beams", value: "143" },
      { label: "Occupancy lift", value: "47%" }
    ]
  },
  {
    slug: "nocturne-loft",
    title: "Nocturne Loft",
    type: "Adaptive Reuse",
    location: "Chicago, Illinois",
    area: "8,800 sq ft",
    budget: "$7.4M",
    timeline: "13 months",
    awards: ["IIDA Interior Merit", "Dwell Best Renovation"],
    story:
      "A warehouse loft reassembled around a black steel service spine, luminous kitchens, and sliding planes that shift from family life to patron dinners.",
    year: "2025",
    image: img("photo-1600607688969-a5bfcd646154"),
    before: img("photo-1600573472592-401b489a3cdc"),
    after: img("photo-1600210491892-03d54c0aaf87"),
    palette: ["#060606", "#a24838", "#d7ba76", "#f0eadf"],
    metrics: [
      { label: "Steel spine", value: "86 ft" },
      { label: "Moving walls", value: "12" },
      { label: "Salvaged brick", value: "18k" }
    ]
  }
];

export const testimonials = [
  {
    quote:
      "Atelier Noir turned restraint into theatre. Every meeting felt exacting, and every finished room feels inevitable.",
    name: "Mara Ellison",
    role: "Collector, Echelon Gallery"
  },
  {
    quote:
      "They understand luxury as silence, proportion, and memory. The result has transformed how our guests move and linger.",
    name: "Jonas Veld",
    role: "Founder, Sanctum Spa"
  },
  {
    quote:
      "No surface was decorative. Everything had weight, logic, and a kind of dangerous calm.",
    name: "Akira Sato",
    role: "Client, Kuro Penthouse"
  }
];
