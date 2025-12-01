import React from "react";

const HowItWorks = () => {
  const workSteps = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: "📦",
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: "💵",
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: "🏢",
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: "🏭",
    },
  ];

  return (
    <div className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-[#004d4d] mb-10">
          How it Works
        </h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workSteps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{step.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#004d4d] mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
