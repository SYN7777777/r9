import React from "react";
import { FiPhone } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

import img1 from "../assets/contact/img1.png"; // Switzerland
import img2 from "../assets/contact/img2.png"; // UAE
import img3 from "../assets/contact/img3.png"; // India
import img4 from "../assets/contact/img4.png"; // HQ Marshall Islands

export const Contact = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-8 lg:px-12 max-w-[1290px] mx-auto">
      {/* HQ + Form Layout */}
      <div className="flex flex-col lg:flex-row justify-between mb-20 gap-10">
        {/* Left Column */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <button className="bg-[rgba(255,228,228,1)] text-[rgba(88,88,91,1)] text-xs sm:text-sm font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl self-start">
            GET STARTED
          </button>

          <h2 className="text-lg sm:text-xl font-semibold">
            Head Quarters: Contact Info
          </h2>

          <div className="relative mx-auto sm:mx-auto">
            <img
              src={img4}
              alt="HQ - Marshall Islands"
              className=" sm:w-[236px] sm:h-[240px]  h-auto rounded-xl object-cover"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="bg-red-500 p-3 rounded-md flex items-center justify-center">
              <FiPhone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Phone Number</h3>
              <p className="text-gray-600 text-sm sm:text-lg">111111111111</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="bg-red-600 p-3 rounded-md flex items-center justify-center">
              <FaMapMarkerAlt className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Physical Address</h3>
              <p className="text-gray-600 text-sm sm:text-lg">
                B Majuro Nominees Ltd, P. O. Box 1405,
                <br />
                Majuro, Marshall Islands
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-[rgba(255,228,228,1)] rounded-[10px] flex flex-col gap-5 p-6 sm:p-8 lg:p-10 w-full lg:w-[520px]">
          <div>
            <label className="block text-[rgba(60,60,60,1)] mb-2 text-sm sm:text-base">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 py-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:border-pink-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 text-sm sm:text-base">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:border-pink-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2 text-sm sm:text-base">
              Your Message
            </label>
            <textarea
              rows="4"
              placeholder="Enter Your Message"
              className="w-full px-4 py-3 border bg-white border-gray-300 rounded-md focus:outline-none focus:border-pink-300 resize-none"
            />
          </div>
          <button className="w-full sm:w-[163px] h-[50px] sm:h-[57px] bg-[rgba(60,60,60,1)] text-white rounded-md font-semibold hover:bg-gray-800 transition">
            Send Message
          </button>
        </div>
      </div>

      {/* Branches Info Section */}
      <div className="mx-auto w-full max-w-[920px]">
        <h2 className="text-lg sm:text-xl font-semibold text-center mb-10">
          Branches: Contact Info
        </h2>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Switzerland */}
          <div className="flex  flex-col items-center gap-3">
            <img
              src={img1}
              alt="Switzerland"
              className="w-full h-[330px] sm:h-[236px] object-cover rounded-md"
            />
            <div className="flex items-center gap-2 mt-2">
              <div className="bg-red-500 p-2 rounded-md">
                <FiPhone className="w-4 h-4 text-white" />
              </div>
              <p className="font-semibold text-sm sm:text-base">Phone Number</p>
            </div>
            <p className="text-gray-600 text-sm sm:text-lg">+41779031105</p>
          </div>

          {/* UAE */}
          <div className="flex flex-col items-center gap-3">
            <img
              src={img2}
              alt="UAE"
              className="w-full h-[330px] sm:h-[236px] object-cover rounded-md"
            />
            <div className="flex items-center gap-2 mt-2">
              <div className="bg-red-500 p-2 rounded-md">
                <FiPhone className="w-4 h-4 text-white" />
              </div>
              <p className="font-semibold text-sm sm:text-base">Phone Number</p>
            </div>
            <p className="text-gray-600 text-sm sm:text-lg">+41779031105</p>
          </div>

          {/* India */}
          <div className="flex flex-col items-center gap-3">
            <img
              src={img3}
              alt="India"
              className="w-full h-[330px] sm:h-[236px] object-cover rounded-md"
            />
            <div className="flex items-center gap-2 mt-2">
              <div className="bg-red-500 p-2 rounded-md">
                <FiPhone className="w-4 h-4 text-white" />
              </div>
              <p className="font-semibold text-sm sm:text-base">Phone Number</p>
            </div>
            <p className="text-gray-600 text-sm sm:text-lg">+971701036671</p>
          </div>
        </div>
      </div>
    </div>
  );
};
