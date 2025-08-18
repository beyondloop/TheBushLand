import React from "react";

const PlantOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Plant Subscriptions",
      description:
        "Receive a curated box of handpicked plants, packaged with care, every month.",
      buttonText: "Start Saving",
      image:
        "src/Image/plantsubsription.avif", // replace with actual
      bgColor: "bg-green-50",
    },
    {
      id: 2,
      title: "Join our Plant Parent Rewards Club",
      description:
        "Earn coins and redeem them for exclusive discounts.",
      buttonText: "Refer a Friend",
      image:
        "src/Image/reward.avif", // replace with actual
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`flex flex-col sm:flex-row items-center justify-between rounded-2xl ${offer.bgColor} p-6 gap-4`}
          >
            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition">
                {offer.buttonText}
              </button>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-40 h-40 object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantOffers;
