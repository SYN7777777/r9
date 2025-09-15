import React, { memo } from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Benefits from "../components/Benefits";
import Ourvision from "../components/Ourvision";
import Vision from "../components/Vision";
import Finance from "../components/Finance";
import Testimonials from "../components/Testimonals";
import Blogs from "../components/Blogs";
import { Contact } from "../components/Contact";
import Footer from "../components/Footer";
import LazyImage from "../components/LazyImage";
import bitcoin from "../assets/Bitcoinyellow.png";
import avalanche from "../assets/Avalanche.png";
import cosmos from "../assets/cosmos.png";
import usd from "../assets/usd.png";

const Home = () => {
  return (
    <div className="bg-white font-outfit text-gray-900 overflow-hidden relative min-h-screen">
      <Navbar />
      <div className="sm:px-4 relative">
        <Landing />
        {/* Bitcoin image - Right side - Hidden on mobile */}
        <LazyImage
          src={bitcoin}
          alt="Bitcoin"
          className="hidden md:block absolute z-10 w-auto max-h-64 top-1/4 right-4 sm:top-1/3 sm:right-6 md:top-96 md:right-20 lg:top-[604px] lg:left-[1190px]"
        />
        {/* Avalanche image - Left side - Hidden on mobile */}
        <LazyImage
          src={avalanche}
          alt="Avalanche"
          className="hidden md:block absolute z-20 w-auto max-h-64 top-1/2 left-0 md:top-[1280px] md:left-0 lg:top-[1280px] lg:left-0"
        />
        {/* USD image - Right side - Hidden on mobile */}
        <LazyImage
          src={usd}
          alt="USD"
          className="hidden md:block absolute z-10 w-auto max-h-64 top-[70%] right-4 sm:right-6 md:top-[3625px] md:left-20 lg:top-[3625px] lg:left-[1160px]"
        />
        {/* Cosmos image - Left side - Hidden on mobile */}
        <LazyImage
          src={cosmos}
          alt="Cosmos"
          className="hidden md:block absolute z-20 w-auto max-h-64 top-[80%] left-0 md:top-[5300px] md:left-0 lg:top-[5300px] lg:left-0"
        />
      </div>
      <Benefits />
      <Ourvision />
      <Vision />
      <Finance />
      <Testimonials />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
