import React from "react";
import bg from "../assets/bg.png";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src={bg}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute -top-[256px] left-[900px] w-[756px] h-[456px] rounded-[100%] bg-[#101C5CA3] blur-[90px]"></div>
      <div className="absolute -top-[297px] left-[360px] w-[688px] h-[461px] rounded-[100%] bg-[#101C5CA3] blur-[90px]"></div>
      <div className="absolute top-1/2  max-w-full font-normal transform  -translate-y-1/2 z-50 text-white">
        <div className="px-[279px] ">
          <div className="mb-20 w-[942px]">
            <h2 className="text-6xl mb-4   ">
              Empowering Lives Through Innovative
              <span className="font-semibold"> AI</span> Technologies.
            </h2>
            <p className="mb-6 text-xl">
              Finding new horizons for visionaries to acclerate their innovation
              and progress.
            </p>
            <div className="space-x-4">
              <button className="bg-[#6A35FF] px-11 text-lg py-3 rounded-[12px] border-none outline-none ">
                Explore Our Services
              </button>
              <button className="border border-[#6881FF] px-8 py-3 rounded-xl">
                Learn More
              </button>
            </div>
          </div>
          <div className="text-2xl w-full">
            <p className="bg-gradient-to-r from-transparent via-white to-black text-transparent bg-clip-text">
              From Ideas to Software Solutions{" "}
              <span className="text-yellow-500">💡✨</span> From Ideas to
              Software Solutions <span className="text-yellow-500">🌟✨</span>{" "}
              From Ideas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
