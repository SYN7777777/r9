import React from "react";
import indianwoman from "../assets/woman.png";

const Ourvision = () => {
  return (
    <div className="bg-white py-8 sm:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[570.5px]">
              <img
                src={indianwoman}
                alt="Indian woman"
                className="w-[570.5px] h-[546px] rounded-[33px] shadow-lg object-contain"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2  flex flex-col gap-6 sm:gap-8">
            <div>
              <h1 className="font-outfit font-bold text-3xl sm:text-4xl md:text-[64px] leading-snug sm:leading-[55.02px] text-gray-800 mb-3">
                Our Vision
              </h1>

              <p className="font-outfit font-normal text-[16px] leading-[32px] text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Per
                turismf lorem purus justo, ultricies. Sedlid hutin odio
                elementum urna placerret lacus, vulputate. Non malesuada viverra
                eri ultricies crea. Tincidunt tempor, blandit augue ac feugiat.
                Prossent erau tempusullamcorper quisque in. Magna fermentum,
                lecus, fermentum erau.
              </p>
            </div>

            <div>
              <h1 className="font-outfit font-bold text-4xl sm:text-5xl md:text-[64px] leading-snug sm:leading-[55.02px] text-gray-800 mb-3">
                Our Mission
              </h1>
              <p className="font-outfit font-normal text-[16px] leading-[32px] text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Per
                turismf lorem purus justo, ultricies. Sedlid hutin odio
                elementum urna placerret lacus, vulputate. Non malesuada viverra
                eri ultricies crea. Tincidunt tempor, blandit augue ac feugiat.
                Prossent erau tempusullamcorper quisque in. Magna fermentum,
                lecus, fermentum erau.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourvision;
