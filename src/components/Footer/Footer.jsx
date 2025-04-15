import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container" id="footer">
      <hr />
      <div className="footer">
        <div className="blur footer-blur"></div>
        <div className="social-links">
          <img src="src\assets\github.png" alt="" />
          <img src="src\assets\instagram.png" alt="" />
          <img src="src\assets\linkedin.png" alt="" />
        </div>

        <div className="logo-f">
          <img src="src\assets\logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
