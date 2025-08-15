import React from "react";

const newArrivals = [
  {
    id: 1,
    img: "src/Image/aloevera.avif",
    thumbnail: "src/Image/aloevera.avif",
    name: "Aloe Vera",
    price: "$25",
  },
  {
    id: 2,
    img: "src/Image/snake.avif",
    thumbnail: "src/Image/snake.avif",
    name: "Snake Plant",
    price: "$30",
  },
  {
    id: 3,
    img: "src/Image/peacelily.avif",
    thumbnail: "src/Image/peacelily.avif",
    name: "Peace Lily",
    price: "$28",
  },
  {
    id: 4,
    img: "src/Image/fiddlefig.avif",
    thumbnail: "src/Image/fiddlefig.avif",
    name: "Fiddle Leaf Fig",
    price: "$35",
  },
  {
    id: 5,
    img: "src/Image/spider.avif",
    thumbnail: "src/Image/spider.avif",
    name: "Spider Plant",
    price: "$22",
  },
];

const NewArrivals = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-8 text-center">New Arrivals</h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {newArrivals.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-3 flex flex-col"
          >
            {/* Image wrapper */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover rounded-lg"
              />
              {/* Thumbnail */}
              <div className="absolute bottom-2 left-2">
                <img
                  src={item.thumbnail}
                  alt={`Thumbnail ${item.id}`}
                  className="w-12 h-12 rounded-lg border-2 border-white shadow-md"
                />
              </div>
            </div>

            {/* Text info */}
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-green-600 font-medium">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
