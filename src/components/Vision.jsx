import React, { memo } from "react";
import { motion } from "framer-motion";
import icon1 from "../assets/vision/icon1.png";
import icon2 from "../assets/vision/icon2.png";
import icon3 from "../assets/vision/icon3.png";
import Laptop from "../assets/vision/laptop.png";

const Vision = () => {
  return (
    <div className="bg-white  px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 font-outfit py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 xl:gap-24"
        >
          {/* Left Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-start"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-extrabold text-gray-900 
             text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[67px] 
             leading-[40px] sm:leading-[48px] md:leading-[56px] lg:leading-[72px] xl:leading-[80px] 
             tracking-tight sm:tracking-normal"
            >
              We Value Data for <br className="hidden sm:block" /> Informed
              Investing
            </motion.h1>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-12 md:gap-16 mt-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.p 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl md:text-5xl xl:text-[56px] font-bold text-gray-900"
                >
                  12+
                </motion.p>
                <p className="text-gray-700 text-base md:text-lg xl:text-xl mt-2">
                  Years Experience
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <motion.p 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="text-4xl md:text-5xl xl:text-[56px] font-bold text-gray-900"
                >
                  200+
                </motion.p>
                <p className="text-gray-700 text-base md:text-lg xl:text-xl mt-2">
                  Clients
                </p>
              </motion.div>
            </motion.div>

            {/* Button with arrow */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-6 py-3 text-white font-semibold rounded-md shadow-md transition duration-300 w-fit flex items-center gap-2 hover:bg-red-600"
              style={{ backgroundColor: "rgba(237, 31, 36, 1)" }}
            >
              About Us
              <motion.svg
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </motion.svg>
            </motion.button>
          </motion.div>

          {/* Right Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-end"
          >
            {/* Description Text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6 md:mb-8 w-full max-w-lg text-center lg:text-left"
            >
              At R9 Global Rise AG, we prioritize data for smarter investments.
              Our approach relies on thorough analysis of market trends,
              economic indicators, and company performance.
            </motion.p>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              src={Laptop}
              alt="Laptop with investment graph"
              className="w-full max-w-md xl:max-w-lg drop-shadow-xl"
            />
          </motion.div>
        </motion.div>

        {/* Bottom Info Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20"
        >
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 md:p-8 rounded-xl hover:shadow-lg transition duration-300"
            style={{ backgroundColor: "rgba(255, 243, 243, 1)" }}
          >
            <motion.img
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              src={icon1}
              alt="Funding & Investment"
              className="mx-auto mb-5 w-14 h-14"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
              Funding & Investment
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-center md:text-left">
              At R9 Global Rise AG we excel funding & investing, guiding
              strategic decisions.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 md:p-8 rounded-xl hover:shadow-lg transition duration-300"
            style={{ backgroundColor: "rgba(255, 243, 243, 1)" }}
          >
            <motion.img
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              src={icon2}
              alt="Capital Transparency"
              className="mx-auto mb-5 w-14 h-14"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
              Capital Transparency
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-center md:text-left">
              R9 Global Rise AG prioritizes capital transparency. Our commitment
              ensures clarity.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 md:p-8 rounded-xl hover:shadow-lg transition duration-300"
            style={{ backgroundColor: "rgba(255, 243, 243, 1)" }}
          >
            <motion.img
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              src={icon3}
              alt="Secure Investment Plan"
              className="mx-auto mb-5 w-14 h-14"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
              Secure Investment Plan
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-center md:text-left">
              Our Secure Investment Plan at R9 Global Rise AG ensures stability
              and growth.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(Vision);
