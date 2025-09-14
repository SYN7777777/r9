import human from "../assets/Bannerhuman.svg";
import floating from "../assets/floating icon.png";
import bgLanding from "../assets/bg-landing.png";

const Landing = () => {
  return (
    <section
      className="relative bg-cover py-5 md:px-16 pb-16 md:h-[700px] bg-center rounded-2xl bg-no-repeat"
      style={{ backgroundImage: `url(${bgLanding})` }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-6 md:gap-12 px-4 pt-20 sm:pt-24 md:pt-32 md:pb-16 md:grid-cols-2 md:px-12">
          {/* ===== Left Section ===== */}
          <div className="max-w-xl text-center md:text-left order-2 md:order-1">
            {/* Tagline */}
            <p className="text-xs sm:text-sm font-semibold text-rose-600">
              R9 Global Rise
            </p>

            {/* Headline */}
            <h1 className="relative font-extrabold text-3xl sm:text-3xl md:text-5xl lg:text-[52px] leading-snug mt-3">
              All Your Trade Finance{" "}
              <span className="relative inline-block">
                Requirements
                {/* Underline */}
                <span className="absolute left-0 bottom-0 w-full h-[6px] sm:h-[8px] bg-rose-500/90 rounded-full"></span>
              </span>{" "}
              in Single Place
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              Experience the future of payments: fast, secure, and tailored for
              the next generation’s convenience and trust.
            </p>
          </div>

          {/* ===== Right Section ===== */}
          <div className="relative  flex justify-center order-1 md:order-2">
            <img
              src={human}
              alt="Happy user using phone"
              className="mx-auto w-[70%] max-w-[280px] h-auto sm:max-w-[380px] md:max-w-none md:w-[90%] lg:w-[593px] md:h-[590px]"
            />

            {/* Floating Icon */}
            <div className="pointer-events-none absolute top-1/4 right-[10%] sm:top-1/3 sm:right-[15%] md:right-[5%] md:top-1/4 lg:right-[15%] lg:top-1/3">
              <img
                src={floating}
                alt="Floating badge"
                className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 drop-shadow-[0_6px_14px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
