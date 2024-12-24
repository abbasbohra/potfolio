import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./CssFile/Header.css";

const Header = () => (
  <header className="header-container">
    <div className="header-content">
      <h1 className="header-title">Abbas Bohra</h1>
      <nav className="header-nav">
        {/* Use Link for navigation */}
        <Link to="/About" className="nav-link">
          About
        </Link>
        <Link to="/portfolio" className="nav-link">
          Portfolio
        </Link>
        <Link to="/resume" className="nav-link">
          Resume
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
      <div className="social-icons">
        <a
          href="https://github.com/abbasbohra"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/abbasbohra50"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
