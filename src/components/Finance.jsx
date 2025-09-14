import React from "react";
import ATM from "../assets/finance/atm.png";
import investment from "../assets/finance/investment.png";
import loan from "../assets/finance/loan.png";
import payment from "../assets/finance/payment.png";
import saving from "../assets/finance/saving.png";
import tracking from "../assets/finance/Tracking.png";

const Finance = () => {
  return (
    <section className="w-full bg-white py-8 md:py-16 px-4 md:px-16 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left side ATM image with card activity */}
        <div className="relative order-2 lg:order-1">
          <img src={ATM} alt="ATM" className=" w-full max-w-md mx-auto" />
        </div>

        {/* Right side text */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
            Your Path to Financial Success is <br className="hidden md:block" />{" "}
            In Your hand
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0">
            Ut quam sit non lobortis, dui. Morbi quis sollicitudin, scelerisque
            Donec ex vitae Nam non. ipsum sapien Vestibulum tortor.
          </p>
          <button className="border border-black text-black px-6 py-3 rounded-md font-medium hover:bg-gray-800 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mt-12 md:mt-16 text-center">
        {/* Saving */}
        <div className="h-auto sm:h-[273px] w-full sm:w-[193px] py-6 sm:py-10 mx-auto">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full border border-gray-800">
            <img
              src={saving}
              alt="Saving"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
          <h4 className="font-semibold mb-2">Saving</h4>
          <p className="text-sm text-gray-500 px-2 sm:px-0">
            Build your future with effective savings strategies
          </p>
        </div>

        {/* Payments */}
        <div className="h-auto sm:h-[273px] w-full sm:w-[193px] py-6 sm:py-10 mx-auto">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full border border-gray-800">
            <img
              src={payment}
              alt="Payments"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
          <h4 className="font-semibold mb-2">Payments</h4>
          <p className="text-sm text-gray-500 px-2 sm:px-0">
            Simplify payments with secure internet banking solutions
          </p>
        </div>

        {/* Investments */}
        <div className="h-auto sm:h-[273px] w-full sm:w-[193px] py-6 sm:py-10 mx-auto">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full border border-gray-800">
            <img
              src={investment}
              alt="Investments"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
          <h4 className="font-semibold mb-2">Investments</h4>
          <p className="text-sm text-gray-500 px-2 sm:px-0">
            Invest online for maximum returns with internet banking
          </p>
        </div>

        {/* Loan */}
        <div className="h-auto sm:h-[273px] w-full sm:w-[193px] py-6 sm:py-10 mx-auto">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full border border-gray-800">
            <img src={loan} alt="Loan" className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <h4 className="font-semibold mb-2">Loan</h4>
          <p className="text-sm text-gray-500 px-2 sm:px-0">
            Secure hassle-free loans with internet banking convenience
          </p>
        </div>

        {/* Tracking */}
        <div className="h-auto sm:h-[273px] w-full sm:w-[193px] py-6 sm:py-10 mx-auto">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full border border-gray-800">
            <img
              src={tracking}
              alt="Tracking"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
          <h4 className="font-semibold mb-2">Tracking</h4>
          <p className="text-sm text-gray-500 px-2 sm:px-0">
            Easily track finances with the convenience of online banking
          </p>
        </div>
      </div>
    </section>
  );
};

export default Finance;
