import React, { memo } from "react";
import { motion } from "framer-motion";
import human from "../assets/Bannerhuman.svg";
import floating from "../assets/floating icon.png";
import bgLanding from "../assets/bg-landing.png";

// Optimized animation variants - moved outside component to prevent recreation
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const floatingAnimation = {
  y: [0, -10, 0],
  rotate: [0, 5, -5, 0],
  transition: { 
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const Landing = () => {
  return (
    <section
      className="relative bg-cover py-5 md:px-16 pb-16 md:h-[700px] bg-center rounded-2xl bg-no-repeat"
      style={{ backgroundImage: `url(${bgLanding})` }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-6 md:gap-12 px-4 pt-20 sm:pt-24 md:pt-32 md:pb-16 md:grid-cols-2 md:px-12">
          {/* ===== Left Section ===== */}
          <motion.div 
            {...slideInLeft}
            className="max-w-xl text-center md:text-left order-2 md:order-1"
          >
            {/* Tagline */}
            <motion.p 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="text-xs sm:text-sm font-semibold text-rose-600"
            >
              R9 Global Rise
            </motion.p>

            {/* Headline */}
            <motion.h1 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.4 }}
              className="relative font-extrabold text-3xl sm:text-3xl md:text-5xl lg:text-[52px] leading-snug mt-3"
            >
              All Your Trade Finance{" "}
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="relative inline-block"
              >
                Requirements
                {/* Underline */}
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute left-0 bottom-0 w-full h-[6px] sm:h-[8px] bg-rose-500/90 rounded-full origin-left"
                ></motion.span>
              </motion.span>{" "}
              in Single Place
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.6 }}
              className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0"
            >
              Experience the future of payments: fast, secure, and tailored for
              the next generation's convenience and trust.
            </motion.p>
          </motion.div>

          {/* ===== Right Section ===== */}
          <motion.div 
            {...slideInRight}
            transition={{ ...slideInRight.transition, delay: 0.3 }}
            className="relative flex justify-center order-1 md:order-2"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              src={human}
              alt="Happy user using phone"
              className="mx-auto w-[70%] max-w-[280px] h-auto sm:max-w-[380px] md:max-w-none md:w-[90%] lg:w-[593px] md:h-[590px]"
            />

            {/* Floating Icon */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.5, 
                type: "spring",
                stiffness: 200,
                damping: 10
              }}
              className="pointer-events-none absolute top-1/4 right-[10%] sm:top-1/3 sm:right-[15%] md:right-[5%] md:top-1/4 lg:right-[15%] lg:top-1/3"
            >
              <motion.img
                animate={floatingAnimation}
                src={floating}
                alt="Floating badge"
                className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 drop-shadow-[0_6px_14px_rgba(0,0,0,0.15)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Landing);
