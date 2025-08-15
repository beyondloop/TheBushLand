// src/data/productData.js
const products = [
  {
    id: "1",
    name: "Snake Plant - Golden",
    rating: 4,
    reviewsCount: 65,
    price: 399,
    originalPrice: 599,
    variants: ["Black Pot", "White Pot"],
    selectedVariant: "Black Pot",
    offers: ["15% OFF on prepaid orders"],
    images: [
      "/images/snake1.jpg",
      "/images/snake2.jpg",
      "/images/snake3.jpg"
    ],
    frequentlyBoughtTogether: [
      {
        id: "2",
        name: "Ceramic White Pot",
        price: 299,
        image: "/images/ceramic-pot.jpg"
      },
      {
        id: "3",
        name: "Organic Potting Mix",
        price: 199,
        image: "/images/potting-mix.jpg"
      }
    ],
    details: {
      about:
        "The Snake Plant Golden is a hardy indoor plant known for its striking green leaves with golden edges. It's low-maintenance and an excellent air purifier.",
      whatsInBox: "1 Snake Plant Golden in selected pot, care guide.",
      careTips:
        "Place in indirect sunlight, water lightly every 2-3 weeks, avoid overwatering.",
      faqs:
        "Q: Is the Snake Plant safe for pets? A: It can be mildly toxic to pets if ingested."
    }
  },
  {
    id: "2",
    name: "Areca Palm Plant",
    rating: 5,
    reviewsCount: 120,
    price: 799,
    originalPrice: 999,
    variants: ["White Pot"],
    selectedVariant: "White Pot",
    offers: ["Free shipping on this product"],
    images: [
      "/images/areca1.jpg",
      "/images/areca2.jpg"
    ],
    frequentlyBoughtTogether: [],
    details: {
      about:
        "The Areca Palm is a lush, tropical plant that adds elegance to any indoor space while improving air quality.",
      whatsInBox: "1 Areca Palm in selected pot, care guide.",
      careTips:
        "Keep in bright indirect light, water when topsoil feels dry, mist leaves occasionally.",
      faqs:
        "Q: Can Areca Palm grow outdoors? A: Yes, in mild climates with indirect sunlight."
    }
  }
];

export default products;
