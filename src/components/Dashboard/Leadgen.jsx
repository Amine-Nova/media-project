import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Morelead from "./Morelead";

const Leadgen = () => {
  return (
    <div>
      <div className="w-full text-center pt-30 md:px-10">
        <h1
          className={`text-xs sm:text-s md:text-lg  lg:text-xl font-extrabold text-white  bg-blue-800 py-3 md:px-10 rounded-2xl inline-block `}
        >
          Check Your Compain
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-auto">
          <div className="items-center p-5">
            <h1
              className={`text-xs sm:text-s md:text-lg lg:text-sm font-extrabold text-white  bg-blue-800 py-3 md:px-20 rounded-2xl xl:text-base`}
            >
              LEAD GENERATION E-COMMERCE - COD
            </h1>
            <div className="text-xs md:text-base font-bold mt-5 bg-white border-8 border-blue-700 rounded-xl text-left lg:h-full ">
              <p className="m-1 md:m-5 space-y-5">
                <span className="block mb-2">
                  - Ads Management (Facebook, Google, TikTok, LinkedIn)
                </span>
                <span className="block mb-2">
                  - Creatives Design Videos & Landing Page Creation
                  (High-converting pages)
                </span>
                <span className="block mb-2">
                  - Lead Verification & Pre-Qualification (We call and confirm
                  interest)
                </span>
                <span className="block mb-2">
                  - Leads are delivered within 5-7 days
                </span>
                <span className="block mb-2">
                  - 120 dh per lead inclue budget ads services / confirmation
                </span>
                <span className="block mb-2">- miniment order 30 leads</span>
                <span className="block mb-2">
                  - for products under 500 dh selling price
                </span>
              </p>
            </div>
          </div>
          <div className="items-center p-5">
            <h1
              className={`text-xs sm:text-s md:text-lg lg:text-sm font-extrabold text-white  bg-blue-800 py-3 md:px-10 rounded-2xl xl:text-base`}
            >
              LEAD GENERATION BUSINESS{" "}
            </h1>
            <div className="text-xs md:text-base font-bold mt-5 bg-white border-8 border-blue-700 rounded-xl text-left  lg:h-full">
              <p className="m-1 md:m-5 space-y-5">
                <span className="block mb-2">
                  - Ads Management (Facebook, Google, TikTok, LinkedIn)
                </span>
                <span className="block mb-2">
                  - Creatives Design Videos & Landing Page Creation
                  (High-converting pages)
                </span>
                <span className="block mb-2">
                  - Lead Verification & Pre-Qualification (We call and confirm
                  interest)
                </span>
                <span className="block mb-2">
                  - Leads are delivered within 5-7 days
                </span>
                <span className="block mb-2">
                  - 200 dh per lead inclue budget ads services / confirmation
                </span>
                <span className="block mb-2">- miniment order 30 leads</span>
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-30 p-x-4 sm:p-5 xl:px-10 py-20 text-center">
          <div>
            <h1
              className={`text-xs sm:text-s md:text-s lg:text-sm font-extrabold bg-white  text-black border-blue-900 py-3 lg:mt-15 border-4 rounded-2xl xl:text-sm`}
            >
              ORDER E-COMMERCE
            </h1>
          </div>
          <div>
            <h1
              className={`text-xs sm:text-s md:text-s lg:text-sm font-extrabold bg-white  text-black border-blue-900 py-3 lg:mt-15 border-4 rounded-2xl xl:text-sm`}
            >
              
            <Link to="/dashboard/leadgen/moreinfo">MORE INFOS</Link>
            </h1>
          </div>
          
          <div>
            <h1
              className={`text-xs sm:text-s md:text-s lg:text-sm font-extrabold bg-white  text-black border-blue-900 py-3 lg:mt-15 border-4 rounded-2xl xl:text-sm`}
            >
              ORDER BUISNESS
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadgen;
