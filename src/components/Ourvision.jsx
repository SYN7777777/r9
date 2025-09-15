import React, { memo } from "react";
import { motion } from "framer-motion";
import indianwoman from "../assets/woman.png";

const Ourvision = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="  bg-white py-8 sm:py-16 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          {/* Image Section - Updated spacing and sizing */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-[500px] flex justify-center md:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[450px]"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                src={indianwoman}
                alt="Indian woman"
                className="w-full h-auto rounded-lg shadow-lg object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Text Section - Kept the same width but improved alignment */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full md:w-[607px] min-h-[300px] md:h-[432px] flex flex-col  gap-6 sm:gap-[30px] opacity-100"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 font-outfit"
              >
                Our Vision
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-sm sm:text-base text-gray-600 leading-relaxed font-outfit max-w-full md:max-w-[607px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Per
                turismf lorem purus justo, ultricies. Sedlid hutin odio
                elementum urna placerret lacus, vulputate. Non malesuada viverra
                eri ultricies crea. Tincidunt tempor, blandit augue ac feugiat.
                Prossent erau tempusullamcorper quisque in. Magna fermentum,
                lecus, fermentum erau.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 font-outfit"
              >
                Our Mission
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-sm sm:text-base text-gray-600 leading-relaxed font-outfit max-w-full md:max-w-[607px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Per
                turismf lorem purus justo, ultricies. Sedlid hutin odio
                elementum urna placerret lacus, vulputate. Non malesuada viverra
                eri ultricies crea. Tincidunt tempor, blandit augue ac feugiat.
                Prossent erau tempusullamcorper quisque in. Magna fermentum,
                lecus, fermentum erau.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default memo(Ourvision);
