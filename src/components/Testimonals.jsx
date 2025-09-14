import React from "react";

const testimonials = [
  {
    name: "Melba King",
    role: "Consultant",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Odio viverra tincidunt eu urna at sodales. Cras id nibh sapien non, elit. Vitae Morbi ut donec nisl placerat vehicula nec.",
  },
  {
    name: "Cora Murphy",
    role: "Architect",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Odio viverra tincidunt eu urna at sodales. Cras id nibh sapien non, elit. Vitae Morbi ut donec nisl placerat vehicula nec.",
  },
  {
    name: "Sheryl Boyer",
    role: "Engineer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Odio viverra tincidunt eu urna at sodales. Cras id nibh sapien non, elit. Vitae Morbi ut donec nisl placerat vehicula nec.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 px-6 sm:px-16 md:px-16">
      {/* Top Heading */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <p className="text-sm tracking-widest uppercase text-gray-500">
            Testimonials
          </p>
          <h2 className="text-3xl mt-2 font-bold text-gray-900">
            Hear from Our Clients
          </h2>
        </div>
        <a
          href="#"
          className="text-red-500 font-medium  hover:text-red-600 transition"
        >
          See All Testimonials
        </a>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-lg p-8 h-[288px] w-[364] border border-gray-100"
          >
            {/* Profile */}
            <div className="flex items-center shadow-sm p-6 gap-3 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex text-yellow-400 mb-1">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path d="M12 .587l3.668 7.431 8.213 1.19-5.94 5.787 1.403 8.182L12 18.896l-7.344 3.861 1.403-8.182-5.94-5.787 8.213-1.19z" />
                      </svg>
                    ))}
                </div>
                <h3 className="font-semibold text-gray-800">
                  {t.name}, <span className="font-normal">{t.role}</span>
                </h3>
              </div>
            </div>
            {/* Testimonial text */}
            <p className="text-gray-600 text-sm leading-relaxed mt-12">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
