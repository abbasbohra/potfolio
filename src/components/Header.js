import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Header.css";

const Header = () => (
  <header className="header-container">
    <div className="header-content">
      <h1 className="header-title">Abbas Bohra</h1>
      <nav className="header-nav">
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#portfolio" className="nav-link">
          Portfolio
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>
      <div className="social-icons">
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
