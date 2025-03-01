import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-blue-700 text-white py-5">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-7">
        <h1 className="navtxt lg:text-3xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-black">Free</span> until you're ready to launch
        </h1>
        <div className="flex gap-4 md:w-3/5 justify-end">
          <button
            className="navtxt bg-white text-blue-700 hover:bg-blue-400 hover:text-white duration-300 px-5 py-2.5 rounded-xl font-semibold md:w-auto"
            onClick={() => navigate("/signup")}
          >
            Sign-up
          </button>
          <button
            className="navtxt bg-white text-blue-700 hover:bg-blue-400 hover:text-white duration-300 px-5 py-2.5 rounded-xl font-semibold md:text-center"
            onClick={() => navigate("/signin")}
          >
            Sign-in
          </button>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
