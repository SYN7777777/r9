import { FaFacebookF, FaLinkedinIn, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-red-100">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-10 flex flex-col gap-10">
        {/* ===== Top Section ===== */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* About & Support */}
          <div className="grid grid-cols-2 sm:flex sm:gap-20 gap-10">
            {/* About */}
            <div>
              <h3 className="text-red-600 font-semibold mb-3 sm:mb-4">About</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-gray-800">Trendings</a></li>
                <li><a href="#" className="hover:text-gray-800">About Us</a></li>
                <li><a href="#" className="hover:text-gray-800">Features</a></li>
              </ul>
            </div>
            {/* Support */}
            <div>
              <h3 className="text-red-600 font-semibold mb-3 sm:mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-gray-800">Support Center</a></li>
                <li><a href="#" className="hover:text-gray-800">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-800">FAQs</a></li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex sm:items-start justify-center gap-4 text-red-600 text-lg">
            <a
              href="#"
              className="p-2 rounded-full border border-red-200 hover:bg-red-600 hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-red-200 hover:bg-red-600 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-red-200 hover:bg-red-600 hover:text-white transition"
              aria-label="Close"
            >
              <FaTimes />
            </a>
          </div>
        </div>

        {/* ===== Bottom Section ===== */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 border-t border-red-100 pt-6">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-[50px] sm:w-[61px] h-auto object-contain"
          />

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center order-3 lg:order-none">
            © R9 Global Rise All Rights Reserved
          </p>

          {/* Terms / Privacy / Security */}
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-800">Terms</a>
            <a href="#" className="hover:text-gray-800">Privacy</a>
            <a href="#" className="hover:text-gray-800">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
