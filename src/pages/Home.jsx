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

const Home = () => {
  return (
    <div className="bg-white font-outfit text-gray-900 overflow-hidden">
      <Navbar />
      <div className="sm:px-4">
        <Landing />
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
