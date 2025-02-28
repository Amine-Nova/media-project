import React from "react";
import slider from "../../images/hero/mediabenotman-slider.webp";

const Hero = () => {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] items-center pt-25">
      {/* Brand info */}
      <div className=" flex flex-col justify-center py-14 md:py-0 relative z-10 pl-8">
        <div className="lg:max-w-[510px]">
        <h1 className="font-bold text-blue-900 dark:text-white text-2xl">
            MEDIA BEN OTMAN SARL
          </h1>
          <h1 className="poppins text-5xl font-extrabold text-gray-800 leading-tight md:leading-snug">
          Your Growth Partner in Digital Marketing & CRM
          </h1>
          <p className="poppins text-lg text-gray-500 leading-relaxed uppercase">
          At Media Benotman, we drive high-converting leads, powerful branding, and digital transformation. Our expert team specializes in ads management, community growth, and high-quality video production from our state-of-the-art studio. We also develop custom CRM and system solutions to automate and scale your business.
          </p>
          {/* button section */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <button
              href="#signup"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-6 border border-blue-500 hover:border-transparent rounded-full shadow-[0px_10px_25px_-5px_#89c6ff] hover:!scale-110 duration-300"
            >
              Sign-up
            </button>
          </div>
        </div>
      </div>
      {/* Hero images */}
      <div className="flex justify-center py-14 md:flex-row md:w-150 h-150">
        <img src={slider} alt="slider" />
      </div>
    </section>
  );
};

export default Hero;
