import React from "react";

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      icon: "🚚",
      highlighted: false,
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      icon: "🌍",
      highlighted: true,
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      icon: "📦",
      highlighted: false,
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: "💵",
      highlighted: false,
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
      icon: "🏢",
      highlighted: false,
    },
    {
      id: 6,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      icon: "↩️",
      highlighted: false,
    },
  ];

  return (
    <div className="py-12 lg:py-16 bg-[#004d4d] rounded-3xl mx-4 lg:mx-8 my-8">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-200 text-sm lg:text-base max-w-3xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Grid of Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl p-8 transition-all hover:scale-105 ${
                service.highlighted ? "bg-[#c8ff00]" : "bg-white"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 ${
                  service.highlighted ? "bg-white" : "bg-gray-100"
                }`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-bold mb-4 ${
                  service.highlighted ? "text-[#004d4d]" : "text-[#004d4d]"
                }`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed ${
                  service.highlighted ? "text-[#004d4d]" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
