import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="logo-section">
          <img src={logo} alt="logo" />
          <p className="description">
            Cookpal is a recipe website with a wide variety of delicious
            recipes, easy-to-use search function. Join our community and let's
            cook together!
          </p>
        </div>
        <div className="company-menu">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>
        <div className="resources-menu">
          <h3>Resources</h3>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="subscribe-section">
          <img src={logo} alt="logo" />
          <p>Subscribe to our newsletter and get the latest recipes!</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </footer>
      <div className="social-media"></div>
    </>
  );
};

export default Footer;
