
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
];

export default products;

