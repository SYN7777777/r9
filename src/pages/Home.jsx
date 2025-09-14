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
        {/* Bitcoin image - Right side */}
        <img
          src={bitcoin}
          alt="Bitcoin"
          className="absolute z-10 w-auto max-h-64 top-1/4 right-4 sm:top-1/3 sm:right-6 md:top-96 md:right-20 lg:top-[604px] lg:left-[1190px]"
        />
        {/* Avalanche image - Left side */}
        <img
          src={avalanche}
          alt="Avalanche"
          className="absolute z-20 w-auto max-h-64 top-1/2 left-0 md:top-[1280px] md:left-0 lg:top-[1280px] lg:left-0"
        />
        {/* USD image - Right side */}
        <img
          src={usd}
          alt="Bitcoin"
          className="absolute z-10 w-auto max-h-64 top-[70%] right-4 sm:right-6 md:top-[3625px] md:left-20 lg:top-[3625px] lg:left-[1160px]"
        />
        {/* Cosmos image - Left side */}
        <img
          src={cosmos}
          alt="Avalanche"
          className="absolute z-20 w-auto max-h-64 top-[80%] left-0 md:top-[5300px] md:left-0 lg:top-[5300px] lg:left-0"
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
