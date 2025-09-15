import React, { memo } from "react";
import { motion } from "framer-motion";

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
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-10 px-4 sm:px-8 md:px-16"
    >
      {/* Top Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 md:gap-0"
      >
        <div>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm tracking-widest uppercase text-gray-500"
          >
            Testimonials
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl sm:text-3xl mt-2 font-bold text-gray-900"
          >
            Hear from Our Clients
          </motion.h2>
        </div>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          href="#"
          className="text-red-500 font-medium hover:text-red-600 transition"
        >
          See All Testimonials
        </motion.a>
      </motion.div>

      {/* Cards */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 flex flex-col"
          >
            {/* Profile */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                  className="flex text-yellow-400 mb-1"
                >
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1.2 + index * 0.2 + i * 0.1 }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path d="M12 .587l3.668 7.431 8.213 1.19-5.94 5.787 1.403 8.182L12 18.896l-7.344 3.861 1.403-8.182-5.94-5.787 8.213-1.19z" />
                      </motion.svg>
                    ))}
                </motion.div>
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                  {t.name}, <span className="font-normal">{t.role}</span>
                </h3>
              </div>
            </motion.div>

            {/* Testimonial text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
              className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2 sm:mt-4 flex-1"
            >
              {t.text}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default memo(Testimonials);
