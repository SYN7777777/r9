import React, { memo } from "react";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

import img1 from "../assets/contact/img1.png"; // Switzerland
import img2 from "../assets/contact/img2.png"; // UAE
import img3 from "../assets/contact/img3.png"; // India
import img4 from "../assets/contact/img4.png"; // HQ Marshall Islands

export const Contact = memo(() => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white py-16 px-4 sm:px-8 lg:px-12 max-w-[1290px] mx-auto"
    >
      {/* HQ + Form Layout */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col lg:flex-row justify-between mb-20 gap-10"
      >
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-6 w-full lg:w-1/2"
        >
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[rgba(255,228,228,1)] text-[rgba(88,88,91,1)] text-xs sm:text-sm font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl self-start"
          >
            GET STARTED
          </motion.button>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg sm:text-xl font-semibold"
          >
            Head Quarters: Contact Info
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            className="relative mx-auto sm:mx-auto"
          >
            <img
              src={img4}
              alt="HQ - Marshall Islands"
              className=" sm:w-[236px] sm:h-[240px]  h-auto rounded-xl object-cover"
            />
          </motion.div>

          {/* Phone */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center space-x-4"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="bg-red-500 p-3 rounded-md flex items-center justify-center"
            >
              <FiPhone className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h3 className="font-medium text-gray-800">Phone Number</h3>
              <p className="text-gray-600 text-sm sm:text-lg">111111111111</p>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex items-start space-x-4"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="bg-red-600 p-3 rounded-md flex items-center justify-center"
            >
              <FaMapMarkerAlt className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h3 className="font-medium text-gray-800">Physical Address</h3>
              <p className="text-gray-600 text-sm sm:text-lg">
                B Majuro Nominees Ltd, P. O. Box 1405,
                <br />
                Majuro, Marshall Islands
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="bg-[rgba(255,228,228,1)] rounded-[10px] flex flex-col gap-5 p-6 sm:p-8 lg:p-10 w-full lg:w-[520px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <label className="block text-[rgba(60,60,60,1)] mb-2 text-sm sm:text-base">
              Your Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 py-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:border-pink-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <label className="block text-gray-700 mb-2 text-sm sm:text-base">
              Your Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:border-pink-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <label className="block text-gray-700 mb-2 text-sm sm:text-base">
              Your Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              rows="4"
              placeholder="Enter Your Message"
              className="w-full px-4 py-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:border-pink-300 resize-none"
            />
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-[163px] h-[50px] sm:h-[57px] bg-[rgba(60,60,60,1)] text-white rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Send Message
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Branches Info Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mx-auto w-full max-w-[920px]"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg sm:text-xl font-semibold text-center mb-10"
        >
          Branches: Contact Info
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center"
        >
          {/* Switzerland */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex  flex-col items-center gap-3"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              src={img1}
              alt="Switzerland"
              className="w-full h-[330px] sm:h-[236px] object-cover rounded-md"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center gap-2 mt-2"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="bg-red-500 p-2 rounded-md"
              >
                <FiPhone className="w-4 h-4 text-white" />
              </motion.div>
              <p className="font-semibold text-sm sm:text-base">Phone Number</p>
            </motion.div>
            <p className="text-gray-600 text-sm sm:text-lg">+41779031105</p>
          </motion.div>

          {/* UAE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center gap-3"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              src={img2}
              alt="UAE"
              className="w-full h-[330px] sm:h-[236px] object-cover rounded-md"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex items-center gap-2 mt-2"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="bg-red-500 p-2 rounded-md"
              >
                <FiPhone className="w-4 h-4 text-white" />
              </motion.div>
              <p className="font-semibold text-sm sm:text-base">Phone Number</p>
            </motion.div>
            <p className="text-gray-600 text-sm sm:text-lg">+41779031105</p>
          </motion.div>

          {/* India */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center gap-3"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              src={img3}
              alt="India"
              className="w-full h-[330px] sm:h-[236px] object-cover rounded-md"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex items-center gap-2 mt-2"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="bg-red-500 p-2 rounded-md"
              >
                <FiPhone className="w-4 h-4 text-white" />
              </motion.div>
              <p className="font-semibold text-sm sm:text-base">Phone Number</p>
            </motion.div>
            <p className="text-gray-600 text-sm sm:text-lg">+971701036671</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
});
