import React from "react";
import { NavLink } from "react-router-dom"; // Changed from Link to NavLink
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./CssFile/Header.css";

const Header = () => (
  <header className="header-container" data-role="app-header">
    <div className="header-content">
      <h1 className="header-title">Abbas Bohra</h1>
      <nav className="header-nav">
        {/* Use NavLink for navigation with active class */}
        <NavLink
          to="/About"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Services
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Resume
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Contact
        </NavLink>
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
      <button
        className="theme-toggle"
        aria-label="Toggle theme"
        onClick={() => {
          const root = document.documentElement;
          const isDark = root.getAttribute("data-theme") === "dark";
          root.setAttribute("data-theme", isDark ? "light" : "dark");
          try {
            localStorage.setItem("theme", isDark ? "light" : "dark");
          } catch {}
        }}
      >
        Theme
      </button>
    </div>
  </header>
);

export default Header;
