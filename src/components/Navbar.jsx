import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-md"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src={logo}
                alt="R9 Global Rise"
                className="h-10 w-10 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-700">
            <li>
              <Link to="/" className="hover:text-gray-900 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-gray-900 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-900 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-900 transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <button className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Login
              </button>
            </Link>
            <button className="rounded-md bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-700 transition-colors">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-8 h-8 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute left-0 top-3.5 w-8 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute left-0 top-3.5 w-8 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute left-0 top-3.5 w-8 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
              }`}
            ></span>
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
              onClick={toggleMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu Sidebar */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 sm:w-72 bg-white shadow-2xl z-50 md:hidden"
            >
          <div className="flex flex-col h-full p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button
                className="relative w-8 h-8 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <span className="absolute left-0 top-3.5 w-8 h-0.5 bg-gray-800 rotate-45"></span>
                <span className="absolute left-0 top-3.5 w-8 h-0.5 bg-gray-800 -rotate-45"></span>
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col gap-6 text-lg font-medium text-gray-800 mb-8">
              {["Home", "Services", "About Us", "Contact Us", "Blog"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                      className="block py-2 hover:text-gray-900 transition-colors"
                      onClick={toggleMenu}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Footer Buttons */}
            <div className="mt-auto flex flex-col gap-4 pt-8 border-t border-gray-200">
              <Link to="/login">
                <button className="w-full rounded-md border border-gray-300 px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  Login
                </button>
              </Link>
              <Link to="/login">
                <button className="w-full rounded-md bg-[#ED1F24] px-4 py-3 text-base font-semibold text-white hover:bg-rose-600 transition-colors">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Prevent body scrolling when menu is open */}
      <style>
        {`
          body {
            overflow: ${isMenuOpen ? "hidden" : "auto"};
          }
        `}
      </style>
    </>
  );
};

export default memo(Navbar);
