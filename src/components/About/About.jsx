import React from "react";
import slider from "../../images/About/mediabenotman-slider (1).webp";
import progress from "../../images/About/progress.webp";

const About = () => {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] items-center">
      {/* Hero images */}
      <div className="flex justify-center py-14 md:flex-row md:w-150 h-150">
        <img src={slider} alt="slider" />
      </div>
      {/* Brand info */}
      <div className=" flex flex-col justify-center py-14 md:py-0 relative z-10 pl-8">
        <div className="space-y-6 lg:max-w-[510px]">
          <h1 className="font-bold text-blue-900 dark:text-white text-lg">
            About us
          </h1>
          <h1 className="poppins text-5xl font-extrabold uppercase text-gray-800 leading-tight md:leading-snug">
            Who is Media BENOTMAN
          </h1>
          <p className="poppins text-lg text-gray-500 leading-relaxed">
            WITH EXPERIANCE MORE THAN 15 YEARS AND MORE THAN 48 TEAM MEMBRE WE
            ARE THE FIRST COMPANY WORLD WIDE GARANTIE SELLS AND HUGE BRANDING
            FOR YOUR COMPANY WE PROVIDE STRATEGIE MARKETING / PACK VIDEOS HIGHT
            QUALITY / DESIGN AND GRAPHIQUE /ADS MANAGER ALSO CRM AND PLATEFORM
            FRO YOUR PROJECT AND PROVIDE HIGHT SERVICE
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
