import React from "react";
import slider from "../../images/About/mediabenotman-slider (1).webp";

const About = () => {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] items-center">
      {/* Hero images */}
      <div className="flex justify-center py-14 md:flex-row md:w-150 h-150">
        <img src={slider} alt="slider" />
      </div>
      {/* Brand info */}
      <div className=" flex flex-col justify-center py-14 md:py-0 relative z-10 pl-8">
        <div className="space-y-1 lg:max-w-[510px]">
          <h1 className="font-bold text-blue-900 dark:text-white text-3xl">
            About us
          </h1>
          <h1 className="poppins text-5xl font-extrabold uppercase text-gray-800 leading-tight md:leading-snug">
          Media Benotman Your key to success!
          </h1>
          <p className="poppins text-lg text-gray-500 leading-relaxed uppercase">
          Guaranteed results, innovative strategies, and unlimited client acquisition – Let’s grow together!

          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
