import React, { memo } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-white border-t border-red-100"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-10 flex flex-col gap-10">
        {/* ===== Top Section ===== */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col lg:flex-row justify-between gap-10"
        >
          {/* About & Support */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:flex sm:gap-20 gap-10"
          >
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-red-600 font-semibold mb-3 sm:mb-4">About</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <motion.li
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="hover:text-gray-800">Trendings</a>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="hover:text-gray-800">About Us</a>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="hover:text-gray-800">Features</a>
                </motion.li>
              </ul>
            </motion.div>
            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-red-600 font-semibold mb-3 sm:mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <motion.li
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="hover:text-gray-800">Support Center</a>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="hover:text-gray-800">Contact Us</a>
                </motion.li>
                <motion.li
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="hover:text-gray-800">FAQs</a>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex sm:items-start justify-center gap-4 text-red-600 text-lg"
          >
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="p-2 rounded-full border border-red-200 hover:bg-red-600 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="p-2 rounded-full border border-red-200 hover:bg-red-600 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="p-2 rounded-full border border-red-200 hover:bg-red-600 hover:text-white transition"
              aria-label="Close"
            >
              <FaTimes />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ===== Bottom Section ===== */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 border-t border-red-100 pt-6"
        >
          {/* Logo */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.1 }}
            src={logo}
            alt="Logo"
            className="w-[50px] sm:w-[61px] h-auto object-contain"
          />

          {/* Copyright */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-sm text-gray-500 text-center order-3 lg:order-none"
          >
            © R9 Global Rise All Rights Reserved
          </motion.p>

          {/* Terms / Privacy / Security */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex gap-6 text-sm text-gray-500"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#" 
              className="hover:text-gray-800"
            >
              Terms
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#" 
              className="hover:text-gray-800"
            >
              Privacy
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#" 
              className="hover:text-gray-800"
            >
              Security
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default memo(Footer);
