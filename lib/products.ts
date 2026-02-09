export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  category: "Floral" | "Woody" | "Fresh" | "Oriental" | "Gourmand";
  intensity: "Light" | "Medium" | "Bold";
  mood: string;
  notes: string[];
  bestseller?: boolean;
};

export const products: Product[] = [
  {
    id: "rose-vault",
    name: "Rose Vault",
    description: "Velvety damask rose wrapped in white musk and pink pepper.",
    price: 128,
    size: "50ml",
    category: "Floral",
    intensity: "Medium",
    mood: "Romantic evenings",
    notes: ["Damask rose", "Pink pepper", "White musk"],
    bestseller: true
  },
  {
    id: "cedar-silhouette",
    name: "Cedar Silhouette",
    description: "Clean cedarwood with soft suede and whisper of cardamom.",
    price: 142,
    size: "75ml",
    category: "Woody",
    intensity: "Bold",
    mood: "Sophisticated nights",
    notes: ["Cedar", "Suede", "Cardamom"]
  },
  {
    id: "azure-coast",
    name: "Azure Coast",
    description: "Mediterranean citrus with sea salt and neroli breeze.",
    price: 110,
    size: "50ml",
    category: "Fresh",
    intensity: "Light",
    mood: "Sunlit mornings",
    notes: ["Bergamot", "Sea salt", "Neroli"],
    bestseller: true
  },
  {
    id: "amber-halo",
    name: "Amber Halo",
    description: "Golden amber layered with saffron and warm vanilla resin.",
    price: 158,
    size: "75ml",
    category: "Oriental",
    intensity: "Bold",
    mood: "Magnetic nights",
    notes: ["Amber", "Saffron", "Vanilla"]
  },
  {
    id: "vanilla-atelier",
    name: "Vanilla Atelier",
    description: "Creamy vanilla bean with caramelized almond and tonka.",
    price: 120,
    size: "50ml",
    category: "Gourmand",
    intensity: "Medium",
    mood: "Cozy escapes",
    notes: ["Vanilla", "Almond", "Tonka"]
  },
  {
    id: "jasmine-silk",
    name: "Jasmine Silk",
    description: "Radiant jasmine sambac with pear nectar and soft cashmere.",
    price: 135,
    size: "50ml",
    category: "Floral",
    intensity: "Light",
    mood: "Garden afternoons",
    notes: ["Jasmine", "Pear", "Cashmere wood"]
  },
  {
    id: "forest-noir",
    name: "Forest Noir",
    description: "Mossy vetiver and black tea with a smoky trail.",
    price: 149,
    size: "75ml",
    category: "Woody",
    intensity: "Bold",
    mood: "Wanderlust",
    notes: ["Vetiver", "Black tea", "Moss"]
  },
  {
    id: "citrus-lume",
    name: "Citrus Lume",
    description: "Sparkling grapefruit, sage, and crystalline cedar.",
    price: 105,
    size: "50ml",
    category: "Fresh",
    intensity: "Light",
    mood: "Daily ritual",
    notes: ["Grapefruit", "Sage", "Cedar"]
  },
  {
    id: "midnight-oud",
    name: "Midnight Oud",
    description: "Smoldering oud with dark plum and incense haze.",
    price: 175,
    size: "75ml",
    category: "Oriental",
    intensity: "Bold",
    mood: "After dark",
    notes: ["Oud", "Plum", "Incense"],
    bestseller: true
  },
  {
    id: "caramel-saffron",
    name: "Caramel Saffron",
    description: "Golden caramel, saffron milk, and almond blossom.",
    price: 132,
    size: "50ml",
    category: "Gourmand",
    intensity: "Medium",
    mood: "Festive glow",
    notes: ["Caramel", "Saffron", "Almond blossom"]
  }
];

export const categories = ["Floral", "Woody", "Fresh", "Oriental", "Gourmand"] as const;
export const intensities = ["Light", "Medium", "Bold"] as const;
