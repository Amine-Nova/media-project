import React, { useState } from "react";
import fleche from "../../assets/control/fleche.png";
import logo from "../../assets/control/mediabenotman-logo.webp";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navtxt flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } h-screen  bg-blue-300 relative duration-500`}
      >
        <img
          src={fleche}
          alt=""
          className={`absolute cursor-pointer rounded-full -right-3 top-50 w-7 border-2 border-blue-950 duration-1000 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center pt-25">
          <img
            src={logo}
            alt=""
            className={`cursor-pointer duration-500 ${!open && "pt-8"}`}
          />
        </div>
        <div className="top-0">
          <h1
            className={`text-black text-center origin-left py-2 font-bold text-2xl duration-500 bg-transparent hover:shadow-2xl hover:bg-blue-800 cursor-pointer ${
              !open && "text-[0px]"
            }`}
          >
            <Link to="/dashboard" className="block py-3">
              Dashboard
            </Link>
          </h1>
          <h1
            className={`text-black text-center origin-left py-2  font-bold text-2xl duration-500  bg-transparent  hover:shadow-2xl hover:bg-blue-800 cursor-pointer ${
              !open && " text-[0px]"
            }`}
          >
            <Link to="/dashboard" className="block py-3">
              Lead Generation
            </Link>
          </h1>
          <h1
            className={`text-black text-center origin-left py-2  font-bold text-2xl duration-500  bg-transparent  hover:shadow-2xl hover:bg-blue-800 cursor-pointer ${
              !open && " text-[0px]"
            }`}
          >
            <Link to="/dashboard" className="block py-3">
              Ads Management
            </Link>
          </h1>
          <h1
            className={`text-black text-center origin-left py-2  font-bold text-2xl duration-500  bg-transparent  hover:shadow-2xl hover:bg-blue-800 cursor-pointer ${
              !open && " text-[0px]"
            }`}
          >
            <Link to="/dashboard" className="block py-3">
                Video Services
            </Link>
          </h1>
          <h1
            className={`text-black text-center origin-left py-2  font-bold text-2xl duration-500  bg-transparent hover:shadow-2xl hover:bg-blue-800 cursor-pointer ${
              !open && " text-[0px]"
            }`}
          >
            <Link to="/dashboard" className="block ">
            Community Management
            </Link>
          </h1>
          <h1
            className={`text-black text-center origin-left py-2 font-bold text-2xl duration-500  bg-transparent hover:shadow-2xl hover:bg-blue-800 cursor-pointer ${
              !open && " text-[0px]"
            }`}
          >
            <Link to="/dashboard" className="block py-3">
            Support
            </Link>
          </h1>
        </div>

      </div>
      <div className="p-7 pt-40 text-2xl font-semibold flex-1 h-screen">
        <h1></h1>
      </div>
    </div>
  );
};

export default Sidebar;
