import React, { memo } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/Blogs/img1.png";
import img2 from "../assets/Blogs/img2.png";
import img3 from "../assets/Blogs/img3.png";
import img4 from "../assets/Blogs/img4.png";
import danger from "../assets/Blogs/danger.png";

const blogs = [
  {
    category: "Investment",
    title: "Financial Industry Regulatory Authority (FINRA)",
    excerpt:
      "The Financial Industry Regulatory Authority (or FINRA) is a non-governmental organization that...",
    image: img2,
    link: "#",
    featured: true,
  },
  {
    category: "Best Practices",
    title: "Dividend vs Share Buyback/Repurchase",
    image: img1,
    link: "#",
    featured: false,
  },
  {
    category: "Capital Market",
    title: "Markets in Financial Instruments Directive (MiFID)",
    image: img3,
    link: "#",
    featured: false,
  },
  {
    category: "Analysis",
    title: "Infinite Banking – Becoming Your Own Banker",
    image: img4,
    link: "#",
    featured: false,
  },
];

const Blogs = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white py-12 px-6 md:px-16"
    >
      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-10"
      >
        <motion.p 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#ED1F24] uppercase font-bold mb-2"
        >
          Blogs
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-[#3C3C3C] max-w-3xl mx-auto"
        >
          Important Concepts and Topics on Finance and Financial Analysis.
        </motion.h2>
      </motion.div>

      {/* Featured blog */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col lg:flex-row mb-10 gap-6"
      >
        {blogs
          .filter((blog) => blog.featured)
          .map((blog, index) => (
            <React.Fragment key={index}>
              {/* Left side: flexible text */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="flex-1 bg-red-50 p-6 rounded-md flex flex-col justify-center"
              >
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-red-500 uppercase font-semibold text-sm mb-2"
                >
                  {blog.category}
                </motion.p>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="font-[Outfit] font-medium text-[22px] md:text-[29px] leading-[32px] md:leading-[36px] tracking-[-0.02em] text-gray-800 mb-2"
                >
                  {blog.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="font-[Outfit] font-light text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] tracking-normal text-gray-600 mb-4"
                >
                  {blog.excerpt}
                </motion.p>

                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ x: 5 }}
                  href={blog.link}
                  className="text-red-500 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More →
                </motion.a>
              </motion.div>

              {/* Right side: responsive image */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="w-full lg:w-[536px] h-[200px] md:h-[285px]"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </motion.div>
            </React.Fragment>
          ))}
      </motion.div>

      {/* Other 3 blogs */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {blogs
          .filter((blog) => !blog.featured)
          .map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-red-50 h-auto rounded-md flex flex-col justify-between"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                className="p-6"
              >
                <motion.p 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                  className="uppercase text-red-500 font-semibold text-sm mb-2"
                >
                  {blog.category}
                </motion.p>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                  className="font-[Outfit] font-medium text-[20px] md:text-[24px] lg:text-[29px] leading-[28px] md:leading-[32px] lg:leading-[36px] tracking-[-0.02em] text-gray-800 mb-4"
                >
                  {blog.title}
                </motion.h3>
              </motion.div>
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                whileHover={{ scale: 1.1 }}
                src={blog.image}
                alt={blog.title}
                className="w-full h-[180px] md:h-[206px] object-cover rounded-b-md"
              />
            </motion.div>
          ))}
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ scale: 1.02 }}
        className="w-full max-w-[1260px] mt-14 h-auto min-h-[312px] bg-[#ED1F24E6] flex flex-col items-center justify-start
  pt-10 px-6 md:px-16 rounded-[16px] shadow-[2px_10px_24px_0px_rgba(0,0,0,0.18)]
  mx-auto text-white opacity-100"
      >
        {/* Warning Icon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex justify-center mb-3"
        >
          <motion.img
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            src={danger}
            alt="danger"
            className="w-8 h-8 md:w-auto md:h-auto"
          />
        </motion.div>

        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center font-outfit font-medium text-[22px] md:text-[29px] leading-[32px] md:leading-[36px] tracking-[-0.02em] mb-4"
        >
          Disclaimer
        </motion.h2>

        {/* Content */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="font-outfit font-medium text-[14px] md:text-[18px] leading-[160%] md:leading-[135%] text-center w-full max-w-[1163px] mx-auto"
        >
          The information provided on this website by R9 Global Rise AG is for
          general informational and educational purposes only. While we strive
          to keep the content accurate and up to date, we make no
          representations or warranties of any kind, express or implied, about
          the completeness, accuracy, reliability, suitability, or availability
          of the information, products, services, or related graphics contained
          on this site. Any reliance you place on such information is strictly
          at your own risk.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default memo(Blogs);
