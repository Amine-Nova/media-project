import React from "react";
import logo from "../../images/footer/mediabenotman-logo.webp";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-5">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div className="w-75 h-auto">
          <img src={logo} alt="media" />
        </div>
        {/* social media section */}
        <div className="text-2xl flex items-center gap-4 mt-6 text-blue-950">
          <FaInstagram />
          <FaFacebook />
          <FaWhatsapp />

        </div>
      </div>
    </footer>
  );
};

export default Footer;
