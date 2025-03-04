import React, { useState } from "react";

const Adsmanage = () => {
  return (
      <div className="w-full pt-30 text-center p-10">
        <h1
          className={`text-xs sm:text-s md:text-lg lg:text-xl font-extrabold text-white  bg-blue-800 py-3 px-3 rounded-2xl inline-block `}
        >
          Ads Management Service
        </h1>
        <p className="text-xs sm:text-base md:text-lg text-black font-bold py-2 sm:pt-5">
          At Media Benotman, we provide high-performance Ads Management to help
          businesses scale, generate leads, and drive consistent sales. Our team
          of experts ensures optimized ad campaigns across multiple platforms,
          delivering real results with measurable ROI.
        </p>
        <p className="text-xs sm:text-base md:text-lg text-black font-bold py-2 sm:pt-1">
          📌 What We Offer:
          <br />
          ✅ Full Ads Management (Meta, TikTok, Google, YouTube) WITH AD
          ACCOUNTS
          <br />✅ Winning Ad Strategy tailored to your business
          <br />✅ Lead Generation & Conversion Optimization
          <br />✅ Audience Targeting & Retargeting
          <br />✅ A/B Testing for Maximum Performance
          <br />✅ Daily Monitoring & Performance Reports
          <br />✅ Ad Creatives 12 POSTS PER MONTH for Higher Engagement
          <br />
          💰 Pricing & Results Guarantee
          <br />
          🎯 Guaranteed sales/lead volume or we continue free until the target
          is reached!
          <br />
          📊 We have successfully managed ad campaigns for brands like Hyundai,
          Volvo, and more!
          <br />
          🚀 Ready to boost your sales? Let’s scale your business with winning
          ads!
        </p>
        <div className="w-full flex flex-col items-center gap-2">
        <h1
          className={`text-xs sm:text-xs md:text-s lg:text-lg font-extrabold text-white  bg-blue-800  px-8 rounded-2xl mt-5`}
          >
          <a href="">
            💵 Starting from 3800 MAD/month
            <br />
            (excluding ad budget)
          </a>
        </h1>
        <h1
          className={`text-xs sm:text-xs md:text-s lg:text-lg font-extrabold text-white  bg-blue-800  px-2 rounded-2xl mt-1`}
          >
          <a href="">
            💵 3 MONTH 3420 MAD/month
            <br />
            TOTAL 10260 MAD (excluding ad budget)
          </a>
        </h1>
        <h1
          className={`text-xs sm:text-xs md:text-s lg:text-lg font-extrabold text-white  bg-blue-800  px-7 rounded-2xl mt-1`}
          >
          <a href="">
          💵 1 YEAR 3040 MAD/month 
          <br />
            TOTAL 36480 (excluding ad budget)
          </a>
        </h1>
        </div>
      </div>
  );
};

export default Adsmanage;
