// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <p className="footer-text">
      Designed by <strong>Abbas Bohra</strong> | &copy;{" "}
      {new Date().getFullYear()} All rights reserved.
    </p>
  </footer>
);

export default Footer;
