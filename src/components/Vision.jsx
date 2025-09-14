import React from "react";
import icon1 from "../assets/vision/icon1.png";
import icon2 from "../assets/vision/icon2.png";
import icon3 from "../assets/vision/icon3.png";
import Laptop from "../assets/vision/laptop.png";

const Vision = () => {
  return (
    <div className="bg-white px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 font-outfit py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 xl:gap-24">
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-[67px] font-extrabold text-gray-900 leading-[48px] sm:leading-[50px] md:leading-[72px] xl:leading-[80px]">
              We Value Data for <br className="hidden sm:block" /> Informed
              Investing
            </h1>

            {/* Stats */}
            <div className="flex gap-12 md:gap-16 mt-10">
              <div>
                <p className="text-4xl md:text-5xl xl:text-[56px] font-bold text-gray-900">
                  12+
                </p>
                <p className="text-gray-700 text-base md:text-lg xl:text-xl mt-2">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl xl:text-[56px] font-bold text-gray-900">
                  200+
                </p>
                <p className="text-gray-700 text-base md:text-lg xl:text-xl mt-2">
                  Clients
                </p>
              </div>
            </div>

            {/* Button with arrow */}
            <button
              className="mt-10 px-6 py-3 text-white font-semibold rounded-md shadow-md transition duration-300 w-fit flex items-center gap-2 hover:bg-red-600"
              style={{ backgroundColor: "rgba(237, 31, 36, 1)" }}
            >
              About Us
              <svg
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
              </svg>
            </button>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end">
            {/* Description Text */}
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6 md:mb-8 w-full max-w-lg text-center lg:text-left">
              At R9 Global Rise AG, we prioritize data for smarter investments.
              Our approach relies on thorough analysis of market trends,
              economic indicators, and company performance.
            </p>
            <img
              src={Laptop}
              alt="Laptop with investment graph"
              className="w-full max-w-md xl:max-w-lg drop-shadow-xl"
            />
          </div>
        </div>

        {/* Bottom Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20">
          {/* Card 1 */}
          <div
            className="p-6 md:p-8 rounded-xl hover:shadow-lg transition duration-300"
            style={{ backgroundColor: "rgba(255, 243, 243, 1)" }}
          >
            <img
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
          </div>

          {/* Card 2 */}
          <div
            className="p-6 md:p-8 rounded-xl hover:shadow-lg transition duration-300"
            style={{ backgroundColor: "rgba(255, 243, 243, 1)" }}
          >
            <img
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
          </div>

          {/* Card 3 */}
          <div
            className="p-6 md:p-8 rounded-xl hover:shadow-lg transition duration-300"
            style={{ backgroundColor: "rgba(255, 243, 243, 1)" }}
          >
            <img
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
