import React from "react";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 299,
    img: "src/Image/aloevera.avif",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 399,
    img: "src/Image/snake.avif",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 499,
    img: "src/Image/peacelily.avif",
  },
  {
    id: 4,
    name: "Spider Plant",
    price: 350,
    img: "src/Image/spider.avif",
  },
  {
    id: 5,
    name: "Jade Plant",
    price: 450,
    img: "src/Image/jade.avif",
  },
  {
    id: 6,
    name: "Areca Palm",
    price: 550,
    img: "src/Image/areca palm.avif",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-8 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-3 text-center">
              <h3 className="text-sm sm:text-base font-medium">{product.name}</h3>
              <p className="text-green-600 font-semibold mt-1">₹{product.price}</p>
              <button className="mt-2 px-3 py-1 bg-green-600 text-white text-xs sm:text-sm rounded hover:bg-green-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
