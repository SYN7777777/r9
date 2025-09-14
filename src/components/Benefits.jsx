import React from "react";
import group14 from "../assets/benefits/Group 14.svg";
import group15 from "../assets/benefits/Group 15.svg";
import group17 from "../assets/benefits/Group 17.svg";
import cor1 from "../assets/Frame/cor 1.png";
import cor2 from "../assets/Frame/cor2.png";
import cor3 from "../assets/Frame/cor 3.png";
import cor4 from "../assets/Frame/cor 4.png";
import cor5 from "../assets/Frame/cor5.png";

const Benefits = () => {
  const logos = [cor1, cor2, cor3, cor4, cor5];
  return (
    <div>
      <section className="relative py-12 sm:py-18 bg-white overflow-hidden w-full max-w-[1440px] mx-auto">
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-8">
          {/* ===== Hero Section ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-6 items-center mb-10 md:mb-7">
            <div>
              <h2 className="font-outfit font-bold text-[67px] leading-[80px] text-gray-900 ml-0 md:ml-[68px]">
                Enjoy Our
                <br />
                Excellent Service
              </h2>
            </div>

            <div>
              <p className="font-outfit font-normal text-[16px] leading-[24px] text-gray-600 ml-0 md:ml-[98px] mt-4 md:mt-0">
                gravida sed gravida risus sollicitudin. Sed dolor sapien Donec
                tincidunt lobortis, ex tincidunt volutpat non.
              </p>
            </div>
          </div>

          {/* ===== Cards Section ===== */}
          <div className="relative mb-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
              {/* Card 1 */}
              <div className="relative">
                <img
                  src={group14}
                  alt="Card 1"
                  className="w-[388px] h-[464px] object-contain"
                />
                {/* Navigation buttons */}
                <div className="absolute bottom-6 left-30/20 transform -translate-x-1/2 flex gap-3">
                  <button
                    aria-label="prev"
                    className="w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135.27deg, #ED1F24 -8.06%, #000000 112.41%)",
                    }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    aria-label="next"
                    className="w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135.27deg, #ED1F24 -8.06%, #000000 112.41%)",
                    }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <img
                src={group15}
                alt="Card 2"
                className="w-[388px] h-[464px] object-contain"
              />

              {/* Card 3 */}
              <img
                src={group17}
                alt="Card 3"
                className="w-[388px] h-[464px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Bottom Highlight Strip with properly sized moving logos ===== */}
      {/* ===== Bottom Highlight Strip with properly sized moving logos ===== */}
      <div className="relative w-full max-w-[1450px] h-[145px] overflow-hidden bg-rose-50 rounded-lg py-[33px] mx-auto">
        <div className="absolute flex items-center h-[79px] animate-marquee whitespace-nowrap gap-[70px]">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="inline-flex justify-center items-center w-[200px] h-[73px]"
            >
              <img
                src={logo}
                alt={`logo-${i}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* CSS for marquee animation */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          @media (max-width: 768px) {
            .animate-marquee {
              animation: marquee 20s linear infinite;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Benefits;
