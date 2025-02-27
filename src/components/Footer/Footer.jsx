import React from "react";
import logo from "../../images/footer/mediabenotman-logo.webp";

const Footer = () => {
  return (
    <footer>
      <div className="container flex justify-between item-center">
        {/* logo section */}
        <div className="w-150 h-auto">
          <img src={logo} alt="media" />
        </div>
        {/* social media section */}
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
