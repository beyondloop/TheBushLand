import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: `After receiving this plant (Monstera Deliciosa), the plant was mature,
      tall as promised with a healthy growth… it was well hydrated and full of
      node. The packaging was great… Thank you @ugaoo for this delightful
      Monstera.. I'll be happy to buy it again.`,
      name: "Aishwarya Roy",
      avatar: "https://via.placeholder.com/40x40.png?text=A", // replace with real image
    },
    {
      id: 2,
      text: `It was always wonderful experience with ugaoo plants what they show
      is what customer receives always And that is too big thing to manage
      packaging and quality. Love for ugaoo foundation will remain infinite.`,
      name: "Samarth Goyal",
      avatar: "https://via.placeholder.com/40x40.png?text=S",
    },
    {
      id: 3,
      text: `Ugaoo is a brand that will have a long life once plants and seeds quality
      is a small part of the lifecycle I buy online, from the store… Whether I chat
      on Instagram or email, the return… each and every time speaks the same
      language… That of love. Ugaoo is in my life.`,
      name: "Customer Name",
      avatar: "https://via.placeholder.com/40x40.png?text=C",
    },
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        From Happy Plant Parents
      </h2>

      {/* Wrapper for responsiveness */}
      <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3 md:gap-8 scrollbar-hide">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between bg-white rounded-2xl shadow p-6 min-w-[300px] md:min-w-0 border"
          >
            <p className="text-gray-700 text-sm md:text-base mb-4 italic">
              "{item.text}"
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-semibold text-gray-800">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
