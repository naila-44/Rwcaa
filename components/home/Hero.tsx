import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl mx-auto text-center py-16 md:py-24 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D4077] leading-tight">
          Whole-Body Healing
          <span className="block">Rooted in Connection</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#1D4077]/80 leading-relaxed max-w-3xl mx-auto">
          At Restorative Wellness Center, we focus on identifying and treating nerve
          interference, joint dysfunction, and the deeper factors that may be keeping
          your body from healing as it should.
        </p>
      </div>
    </section>
  );
};

export default Hero;
