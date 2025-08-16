
const products = [
  {
    id: "1",
    name: "Snake Plant - Golden",
    slug: "snake-plant-golden",
    rating: 4.7,
    reviewsCount: 200,
    price: 699,
    originalPrice: 899,
    variants: ["Black Pot", "White Pot"],
    selectedVariant: "Black Pot",
    offers: ["22% OFF on prepaid orders"],
    images: ["/src/Image/snake.avif"],
    frequentlyBoughtTogether: [
      {
        id: "5",
        name: "Ceramic White Pot",
        price: 299,
        image: "/images/ceramic-pot.jpg",
      },
      {
        id: "6",
        name: "Organic Potting Mix",
        price: 199,
        image: "/images/potting-mix.jpg",
      },
    ],
    details: {
      about:
        "Low-maintenance plant with striking golden-edged leaves.",
      whatsInBox: "1 Snake Plant Golden in selected pot, care guide.",
      careTips:
        "Place in indirect sunlight, water lightly every 2-3 weeks, avoid overwatering.",
      faqs:
        "Q: Is the Snake Plant safe for pets? A: It can be mildly toxic to pets if ingested.",
    },
  },
  {
    id: "2",
    name: "Areca Palm Plant",
    slug: "areca-palm",
    rating: 4.8,
    reviewsCount: 150,
    price: 999,
    originalPrice: 1299,
    variants: ["White Pot"],
    selectedVariant: "White Pot",
    offers: ["Free shipping on this product"],
    images: ["/src/Image/areca palm.avif"],
    frequentlyBoughtTogether: [],
    details: {
      about:
        "A tropical palm that thrives indoors and improves air quality.",
      whatsInBox: "1 Areca Palm in selected pot, care guide.",
      careTips:
        "Keep in bright indirect light, water when topsoil feels dry, mist leaves occasionally.",
      faqs:
        "Q: Can Areca Palm grow outdoors? A: Yes, in mild climates with indirect sunlight.",
    },
  },
  {
    id: "3",
    name: "Peace Lily Plant",
    slug: "peace-lily",
    rating: 4.5,
    reviewsCount: 120,
    price: 799,
    originalPrice: 999,
    variants: ["White Pot"],
    selectedVariant: "White Pot",
    offers: ["20% OFF today"],
    images: ["/src/Image/peacelily.avif"],
    frequentlyBoughtTogether: [],
    details: {
      about:
        "A beautiful indoor plant that purifies the air and adds elegance to your space.",
      whatsInBox: "1 Peace Lily in selected pot, care guide.",
      careTips:
        "Keep soil moist but not soggy, place in bright indirect light.",
      faqs:
        "Q: Does Peace Lily bloom indoors? A: Yes, with proper care it produces elegant white flowers.",
    },
  },
  {
    id: "4",
    name: "Jade Plant Mini",
    slug: "jade-plant-mini",
    rating: 4.2,
    reviewsCount: 90,
    price: 299,
    originalPrice: 399,
    variants: ["Mini Pot"],
    selectedVariant: "Mini Pot",
    offers: ["25% OFF on prepaid orders"],
    images: ["/src/Image/jade.avif"],
    frequentlyBoughtTogether: [],
    details: {
      about:
        "A small, easy-to-care succulent perfect for desks and tabletops.",
      whatsInBox: "1 Jade Plant Mini in selected pot, care guide.",
      careTips:
        "Water sparingly, allow soil to dry between waterings, needs bright light.",
      faqs:
        "Q: Is Jade Plant good for gifting? A: Yes, it's considered a symbol of good luck and prosperity.",
    },
  },
    // ✅ New Indoor Plant - Spider Plant
  {
    id: "5",
    name: "Spider Plant",
    slug: "spider-plant",
    rating: 4.8,
    reviewsCount: 120,
    price: 299,
    originalPrice: 399,
    variants: ["Plastic Pot", "Ceramic Pot"],
    selectedVariant: "Plastic Pot",
    offers: ["25% OFF"],
    images: ["/src/Image/spider.avif"],
    frequentlyBoughtTogether: [],
    details: {
      about:
        "Spider Plants are hardy indoor plants that thrive in indirect light and are known for air-purifying qualities.",
      whatsInBox: "1 Spider Plant in selected pot, care guide.",
      careTips:
        "Water moderately, allow soil to partially dry, grows well in bright indirect light.",
      faqs: "Q: Is Spider Plant safe for pets? A: Yes, it is non-toxic to cats and dogs.",
    },
  },

  // ✅ New Indoor Plant - Fiddle Leaf Fig
  {
    id: "6",
    name: "Fiddle Leaf Fig",
    slug: "fiddle-leaf-fig",
    rating: 4.7,
    reviewsCount: 98,
    price: 1299,
    originalPrice: 1499,
    variants: ["White Pot"],
    selectedVariant: "White Pot",
    offers: ["13% OFF"],
    images: ["/src/Image/fiddlefig.avif"],
    frequentlyBoughtTogether: [],
    details: {
      about:
        "A popular indoor plant with large glossy leaves that makes a bold statement in any space.",
      whatsInBox: "1 Fiddle Leaf Fig in selected pot, care guide.",
      careTips:
        "Needs bright indirect light, water when topsoil dries, avoid moving frequently.",
      faqs: "Q: Can it grow outdoors? A: Yes, but only in warm, frost-free climates.",
    },
  },

  // ✅ New Indoor Plant - ZZ Plant
  {
    id: "7",
    name: "ZZ Plant",
    slug: "zz-plant",
    rating: 4.9,
    reviewsCount: 150,
    price: 799,
    originalPrice: null,
    variants: ["Black Pot"],
    selectedVariant: "Black Pot",
    offers: ["Low maintenance plant"],
    images: ["/src/Image/zz.avif"],
    frequentlyBoughtTogether: [],
    details: {
      about:
        "ZZ Plant is a resilient, drought-tolerant indoor plant that thrives even in low light.",
      whatsInBox: "1 ZZ Plant in selected pot, care guide.",
      careTips:
        "Water sparingly, can survive weeks without water, tolerates low light.",
      faqs: "Q: Is ZZ Plant toxic? A: Yes, keep away from pets and children if ingested.",
    },
  },
    // ✅ New Indoor Plant - Parlor Palm
  {
    id: "8",
    name: "Parlor Palm",
    slug: "parlor-palm",
    rating: 4.6,
    reviewsCount: 80,
    price: 499,
    originalPrice: 599,
    variants: ["White Pot"],
    selectedVariant: "White Pot",
    offers: ["17% OFF"],
    images: ["/src/Image/areca palm.avif"], // using same Areca image ref you provided
    frequentlyBoughtTogether: [],
    details: {
      about:
        "A classic indoor palm that is easy to grow and adapts well to low light, perfect for homes and offices.",
      whatsInBox: "1 Parlor Palm in selected pot, care guide.",
      careTips:
        "Thrives in indirect light, water when soil is dry 1-2 inches deep, avoid direct sun.",
      faqs:
        "Q: Can Parlor Palm grow in shade? A: Yes, it’s one of the best low-light indoor plants.",
    },
  },

  // ✅ New Indoor Plant - Rubber Plant
  {
    id: "9",
    name: "Rubber Plant",
    slug: "rubber-plant",
    rating: 4.85,
    reviewsCount: 105,
    price: 599,
    originalPrice: 799,
    variants: ["Black Pot", "White Pot"],
    selectedVariant: "Black Pot",
    offers: ["25% OFF"],
    images: ["/src/Image/rubber.avif"],
    frequentlyBoughtTogether: [],
    details: {
      about:
        "A stylish indoor plant with glossy, deep green leaves, known to improve air quality.",
      whatsInBox: "1 Rubber Plant in selected pot, care guide.",
      careTips:
        "Keep in bright indirect light, water moderately, wipe leaves regularly to keep them shiny.",
      faqs:
        "Q: Does Rubber Plant grow tall indoors? A: Yes, with proper care it can grow up to 6-10 feet indoors.",
    },
  },

  // ✅ New Indoor Plant - Peace Lily (already exists as id:3 but this adds indoor variant)
  {
    id: "10",
    name: "Peace Lily",
    slug: "peace-lily-indoor",
    rating: 4.85,
    reviewsCount: 105,
    price: 599,
    originalPrice: 799,
    variants: ["White Pot"],
    selectedVariant: "White Pot",
    offers: ["25% OFF"],
    images: ["/src/Image/peacelily.avif"],
    frequentlyBoughtTogether: [],
    details: {
      about:
        "A popular flowering indoor plant with white blooms that also purifies the air.",
      whatsInBox: "1 Peace Lily in selected pot, care guide.",
      careTips:
        "Keep soil slightly moist, thrives in bright indirect light, blooms more in higher humidity.",
      faqs:
        "Q: How often does Peace Lily bloom? A: With proper care, it blooms twice a year indoors.",
    },
  },

  // ✅ New Indoor Plant - Tradescantia
  {
    id: "11",
    name: "Tradescantia",
    slug: "tradescantia",
    rating: 4.85,
    reviewsCount: 105,
    price: 599,
    originalPrice: 799,
    variants: ["Ceramic Pot"],
    selectedVariant: "Ceramic Pot",
    offers: ["25% OFF"],
    images: ["/src/Image/transcandia.avif"],
    frequentlyBoughtTogether: [],
    details: {
      about:
        "Tradescantia is a striking trailing plant with purple-green foliage, ideal for hanging pots.",
      whatsInBox: "1 Tradescantia in selected pot, care guide.",
      careTips:
        "Prefers bright indirect light, water when soil is dry, pinch tips to encourage bushier growth.",
      faqs:
        "Q: Is Tradescantia good as a hanging plant? A: Yes, it looks beautiful in hanging baskets.",
    },
  },
  {
    id: "12",
    name: "Bougainvillea",
    slug: "bougainvillea",
    rating: 4.7,
    reviewsCount: 85,
    price: 349,
    originalPrice: 449,
    variants: ["Plastic Pot", "Clay Pot"],
    selectedVariant: "Plastic Pot",
    offers: ["22% OFF"],
    images: ["/src/Image/bougainvillea.avif"],
    frequentlyBoughtTogether: [],
    details: {
      about:
        "Bougainvillea is a vibrant outdoor flowering plant, perfect for gardens and balconies.",
      whatsInBox: "1 Bougainvillea plant in selected pot, care guide.",
      careTips:
        "Thrives in full sunlight, water moderately, prune regularly to encourage blooming.",
      faqs: "Q: Does Bougainvillea need fertilizer? A: Yes, monthly feeding helps better flowering.",
    },
  },

  // ✅ Outdoor Plant - Hibiscus
  {
    id: "13",
    name: "Hibiscus",
    slug: "hibiscus",
    rating: 4.6,
    reviewsCount: 92,
    price: 299,
    originalPrice: 399,
    variants: ["Clay Pot"],
    selectedVariant: "Clay Pot",
    offers: ["25% OFF"],
    images: ["/src/Image/hibiscus.avif"],
    frequentlyBoughtTogether: [],
    details: {
      about:
        "Hibiscus is a tropical flowering plant known for its large, colorful blossoms.",
      whatsInBox: "1 Hibiscus plant in selected pot, care guide.",
      careTips:
        "Requires 4-6 hours of direct sunlight, water regularly, prefers well-drained soil.",
      faqs: "Q: Can Hibiscus grow indoors? A: Best grown outdoors, but can adapt indoors with sunlight.",
    },
  },

  // ✅ Outdoor Plant - Marigold
  {
    id: "14",
    name: "Marigold",
    slug: "marigold",
    rating: 4.8,
    reviewsCount: 110,
    price: 199,
    originalPrice: null,
    variants: ["Plastic Pot"],
    selectedVariant: "Plastic Pot",
    offers: ["Bright outdoor flowering plant"],
    images: ["/src/Image/marigold.avif"],
    frequentlyBoughtTogether: [],
    details: {
      about:
        "Marigold is a cheerful outdoor plant with bright yellow and orange blooms, easy to grow.",
      whatsInBox: "1 Marigold plant in pot, care guide.",
      careTips:
        "Needs full sunlight, water moderately, blooms best in well-drained soil.",
      faqs: "Q: Is Marigold good for pest control? A: Yes, it naturally repels some insects.",
    },
  },

  // ✅ Outdoor Plant - Rose Plant
  {
    id: "15",
    name: "Rose Plant",
    slug: "rose-plant",
    rating: 4.9,
    reviewsCount: 140,
    price: 399,
    originalPrice: 499,
    variants: ["Clay Pot"],
    selectedVariant: "Clay Pot",
    offers: ["20% OFF"],
    images: ["/src/Image/rose.avif"],
    frequentlyBoughtTogether: [],
    details: {
      about:
        "Rose plants are classic garden favorites with fragrant blooms in multiple colors.",
      whatsInBox: "1 Rose plant in pot, care guide.",
      careTips:
        "Requires 5-6 hours of direct sunlight, prune for healthy growth, water regularly.",
      faqs: "Q: How often does Rose bloom? A: With proper care, roses can bloom multiple times a year.",
    },
  },

  // ✅ Outdoor Plant - Jasmine
  {
    id: "16",
    name: "Jasmine",
    slug: "jasmine",
    rating: 4.85,
    reviewsCount: 100,
    price: 299,
    originalPrice: 349,
    variants: ["Plastic Pot"],
    selectedVariant: "Plastic Pot",
    offers: ["14% OFF"],
    images: ["/src/Image/peacelily.avif"], // (replace with correct jasmine image later)
    frequentlyBoughtTogether: [],
    details: {
      about:
        "Jasmine is a fragrant flowering plant popular for its aromatic white blooms.",
      whatsInBox: "1 Jasmine plant in pot, care guide.",
      careTips:
        "Prefers sunlight and well-drained soil, water moderately, support vine growth if needed.",
      faqs: "Q: Can Jasmine be grown indoors? A: Yes, if placed near a sunny window.",
    },
  },

  // ✅ Outdoor Plant - Caladium
  {
    id: "17",
    name: "Caladium",
    slug: "caladium",
    rating: 4.85,
    reviewsCount: 100,
    price: 299,
    originalPrice: 349,
    variants: ["Plastic Pot"],
    selectedVariant: "Plastic Pot",
    offers: ["14% OFF"],
    images: ["/src/Image/caladium.avif"],
    frequentlyBoughtTogether: [],
    details: {
      about:
        "Caladium is a tropical plant with colorful heart-shaped leaves, often grown for foliage.",
      whatsInBox: "1 Caladium plant in pot, care guide.",
      careTips:
        "Best in partial shade, water when soil feels dry, avoid harsh sunlight.",
      faqs: "Q: Does Caladium flower? A: Rarely, mostly grown for ornamental foliage.",
    },
  },

  // ✅ Outdoor Plant - Agave
  {
    id: "18",
    name: "Agave",
    slug: "agave",
    rating: 4.85,
    reviewsCount: 100,
    price: 299,
    originalPrice: 349,
    variants: ["Clay Pot"],
    selectedVariant: "Clay Pot",
    offers: ["14% OFF"],
    images: ["/src/Image/agave.avif"],
    frequentlyBoughtTogether: [],
    details: {
      about:
        "Agave is a hardy succulent plant with thick leaves, perfect for outdoor decoration.",
      whatsInBox: "1 Agave plant in pot, care guide.",
      careTips:
        "Thrives in full sun, water sparingly, highly drought-tolerant.",
      faqs: "Q: Does Agave need much care? A: Very low maintenance, ideal for beginners.",
    },
  },

  // ✅ Outdoor Plant - Persian Shield
  {
    id: "19",
    name: "Persian Shield",
    slug: "persian-shield",
    rating: 4.85,
    reviewsCount: 100,
    price: 299,
    originalPrice: 349,
    variants: ["Plastic Pot"],
    selectedVariant: "Plastic Pot",
    offers: ["14% OFF"],
    images: ["/src/Image/persian sheild.jpg"],
    frequentlyBoughtTogether: [],
    details: {
      about:
        "Persian Shield is a stunning outdoor foliage plant with purple metallic leaves.",
      whatsInBox: "1 Persian Shield plant in pot, care guide.",
      careTips:
        "Prefers partial shade, keep soil evenly moist, thrives in humid climates.",
      faqs: "Q: Can Persian Shield survive indoors? A: Yes, if given enough humidity and indirect light.",
    },
  },
];

export default products;

