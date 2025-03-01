import React, { useRef } from "react";
import Footer from "../../components/Clients/Clients";
import video1 from "../../videos/services/mediabenotman-video1.mp4";
import video2 from "../../videos/services/mediabenotman-video2.mp4";
import video3 from "../../videos/services/mediabenotman-video3.mp4";
import video4 from "../../videos/services/mediabenotman-video4.mp4";
import video5 from "../../videos/services/mediabenotman-video5.mp4";
import video6 from "../../videos/services/mediabenotman-video6.mp4";
import slider from "../../images/services/mediabenotman-img1.webp";
import slider2 from "../../images/services/mediabenotman-img2.webp";
import slider3 from "../../images/services/mediabenotman-img3.webp";
import slider4 from "../../images/services/mediabenotman-img4.webp";
import slider5 from "../../images/services/mediabenotman-img5.webp";
import slider6 from "../../images/services/mediabenotman-img6.webp";
import { IoLogoCodepen } from "react-icons/io";
import { RiSeoLine } from "react-icons/ri";
import { FaBullhorn, FaHandshake } from "react-icons/fa6";
import { MdOutlineOndemandVideo } from "react-icons/md";

import { AiOutlineDatabase } from "react-icons/ai";
import Clients from "../../components/Clients/Clients";

const ServicesData = [
  {
    id: 1,
    logo: <FaBullhorn />,
    title: "Ads Management",
    description:
      "High-converting paid ads on Facebook, Instagram, TikTok & Google Performance-driven campaigns with guaranteed lead generation 24/7 ad monitoring & optimization for maximum ROI",
  },

  {
    id: 2,
    title: "Lead Generation",
    logo: <FaHandshake />,
    description:
      "Targeted strategies to attract high-quality leads Automated funnels to convert leads into paying customers Proven results for industries like automotive, e-commerce & services",
  },

  {
    id: 3,
    title: "Community Management & Social Media Growth",
    logo: <IoLogoCodepen />,
    description:
      "Organic follower growth (I gram, TikTok, Facebook) Daily engagement, comments & messages handling 8+ daily stories, 3+ reels per week for brand awareness",
  },

  {
    id: 4,
    title: "High-Quality Video Production",
    logo: <MdOutlineOndemandVideo />,
    description:
      "Professional video ads torytelling content Full in-house studio with expert production team Reels, product showcases & corporate branding videos",
  },

  {
    id: 5,
    title: "CRM & System Development",
    logo: <AiOutlineDatabase />,
    description:
      "Custom CRM & omation solutions Odoo & Laravel-based systems for business optimization Lead tracking, sales funnel automation & customer management",
  },

  {
    id: 6,
    title: "Website Development & Digital Transformation",
    logo: <RiSeoLine />,
    description:
      "Custom websites optimize r lead generation E-commerce, landing pages & business websites SEO-optimized structures for better online ranking",
  },
];

const InstaReels = [
  { id: 1, video: video4 },
  { id: 2, video: video5 },
  { id: 3, video: video6 },
];

const ClientImages = [
  { id: 1, image: slider },
  { id: 2, image: slider2 },
  { id: 3, image: slider3 },
  { id: 4, image: slider4 },
  { id: 5, image: slider5 },
  { id: 6, image: slider6 },
];

const InstaVideos = [
  { id: 1, video: video1 },
  { id: 2, video: video2 },
  { id: 3, video: video3 },
];

const Services = () => {
  return (
    <section className="flex flex-col items-center py-16">
      {/* Insta Section */}
      <div className="text-center mb-8 mt-20">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="navtxt text-6xl font-bold text-blue-950 uppercase cursor-pointer pb-20 mt-40 relative after:content-[''] after:block after:w-65 after:h-1 after:bg-blue-900 after:mt-2 after:mx-auto">
            Instagram
          </h1>
        </a>
      </div>
      {/* Videos Section */}
      <div className="flex justify-between p-8 bg-gradient-to-r rounded-2xl  space-x-6">
        {InstaVideos.map((videoItem) => (
          <div
            key={videoItem.id}
            className="flex-1 hover:bg-blue-300 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <video
              width="100%"
              height="auto"
              src={videoItem.video}
              loop
              onClick={(e) => {
                if (e.target.paused) {
                  e.target.play();
                } else {
                  e.target.pause();
                }
              }}
            />
          </div>
        ))}
      </div>
      <div className="text-center mb-2 mt-20">
        <h1 className="navtxt text-6xl font-bold text-blue-950 uppercase cursor-pointer mb-20 mt-40 relative after:content-[''] after:block after:w-40 after:h-1 after:bg-blue-900 after:mt-2 after:mx-auto">
          Clients
        </h1>
      </div>
      <Clients />
      <div>
        <h1 className="navtxt text-6xl font-bold text-blue-950 uppercase pb-20 cursor-pointer mt-40 relative after:content-[''] after:block after:w-50 after:h-1 after:bg-blue-900 after:mt-2 after:mx-auto">
          Our Team
        </h1>
      </div>
      {/* Videos Section  2*/}
      <div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-6 xl:gap-16 md:gap-10 sm:gap-12">
        {InstaReels.map((video, index) => (
          <video
            key={index}
            src={video.video}
            className="w-full h-150 sm:w-120 sm:h-full md:w-65 md:h-120 max-w-md lg:h-190 lg:w-80 xl:w-160 rounded-3xl object-cover hover:scale-105 hover:shadow-2xl duration-600"
            loop
            onClick={(e) => {
              if (e.target.paused) {
                e.target.play();
              } else {
                e.target.pause();
              }
            }}
          ></video>
        ))}
      </div>
      <div className="">
        <div className="container pb-14 pt-16">
          <h1 className="navtxt text-center text-6xl font-bold text-blue-950 uppercase cursor-pointer mt-40 pb-50 relative after:content-[''] after:block after:w-65 after:h-1 after:bg-blue-900 after:mt-2 after:mx-auto">
            Services We Provide
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {ServicesData.map((service) => (
              <div className="bg-blue-100 rounded-3xl flex flex-col items-center justify-center  py-7 hover:bg-blue-200 hover:scale-110 duration-300 hover:shadow-2xl">
                <div className="text-5xl pb-5">{service.logo}</div>
                <h1 className="navtxt text-2xl font-semibold text-center px-3 ">
                  {service.title}
                </h1>
                <p className="navtxt p-6 text-center text-gray-700">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
