import React, { memo } from "react";
import { motion } from "framer-motion";
import ATM from "../assets/finance/atm.png";
import investment from "../assets/finance/investment.png";
import loan from "../assets/finance/loan.png";
import payment from "../assets/finance/payment.png";
import saving from "../assets/finance/saving.png";
import tracking from "../assets/finance/Tracking.png";

const Finance = () => {
  return (
    <section className="w-full bg-white py-8 md:py-16 px-4 md:px-16 lg:px-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
      >
        {/* Left side ATM image with card activity */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-2 lg:order-1"
        >
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={ATM} 
            alt="ATM" 
            className="w-full max-w-md mx-auto" 
          />
        </motion.div>

        {/* Right side text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-1 lg:order-2 text-center lg:text-left"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4"
          >
            Your Path to Financial Success is <br className="hidden md:block" />{" "}
            In Your hand
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0"
          >
            Ut quam sit non lobortis, dui. Morbi quis sollicitudin, scelerisque
            Donec ex vitae Nam non. ipsum sapien Vestibulum tortor.
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="border border-black text-black px-6 py-3 rounded-md font-medium hover:bg-gray-800 hover:text-white transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom Features */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mt-12 md:mt-16 text-center"
      >
        {/* Saving */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="h-auto sm:h-[273px] w-full sm:w-[193px] py-6 sm:py-10 mx-auto"
        >
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full border border-gray-800"
          >
            <img
              src={saving}
              alt="Saving"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </motion.div>
          <h4 className="font-semibold mb-2">Saving</h4>
          <p className="text-sm text-gray-500 px-2 sm:px-0">
            Build your future with effective savings strategies
          </p>
        </motion.div>

        {/* Payments */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="h-auto sm:h-[273px] w-full sm:w-[193px] py-6 sm:py-10 mx-auto"
        >
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full border border-gray-800"
          >
            <img
              src={payment}
              alt="Payments"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </motion.div>
          <h4 className="font-semibold mb-2">Payments</h4>
          <p className="text-sm text-gray-500 px-2 sm:px-0">
            Simplify payments with secure internet banking solutions
          </p>
        </motion.div>

        {/* Investments */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="h-auto sm:h-[273px] w-full sm:w-[193px] py-6 sm:py-10 mx-auto"
        >
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full border border-gray-800"
          >
            <img
              src={investment}
              alt="Investments"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </motion.div>
          <h4 className="font-semibold mb-2">Investments</h4>
          <p className="text-sm text-gray-500 px-2 sm:px-0">
            Invest online for maximum returns with internet banking
          </p>
        </motion.div>

        {/* Loan */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.4 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="h-auto sm:h-[273px] w-full sm:w-[193px] py-6 sm:py-10 mx-auto"
        >
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full border border-gray-800"
          >
            <img src={loan} alt="Loan" className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>
          <h4 className="font-semibold mb-2">Loan</h4>
          <p className="text-sm text-gray-500 px-2 sm:px-0">
            Secure hassle-free loans with internet banking convenience
          </p>
        </motion.div>

        {/* Tracking */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.6 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="h-auto sm:h-[273px] w-full sm:w-[193px] py-6 sm:py-10 mx-auto"
        >
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full border border-gray-800"
          >
            <img
              src={tracking}
              alt="Tracking"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </motion.div>
          <h4 className="font-semibold mb-2">Tracking</h4>
          <p className="text-sm text-gray-500 px-2 sm:px-0">
            Easily track finances with the convenience of online banking
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default memo(Finance);
