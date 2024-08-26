import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={assets.logo} alt="Company Logo" />
        </div>
        <div className="footer-nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com">
            <img src={assets.facebook_icon} alt="Facebook" />
          </a>
          <a href="https://twitter.com">
            <img src={assets.twitter_icon} alt="Twitter" />
          </a>
          <a href="https://linkedin.com">
            <img src={assets.linkedin_icon} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
