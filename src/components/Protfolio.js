import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ReactComponent as CartIcon } from "../images/cart-shopping-solid.svg";
import { ReactComponent as BuildingIcon } from "../images/building-regular.svg";
import { ReactComponent as ProjectIcon } from "../images/cart-shopping-solid.svg";
import "./Protfolio.css";

const projects = [
  {
    title: "E-Commerce App",
    description: "A cross-platform app built with React Native.",
    image: CartIcon,
    link: "https://github.com/your-repo",
  },
  {
    title: "Hotel Booking Platform",
    description: "A modern web application for hotel reservations.",
    image: BuildingIcon,
    link: "https://github.com/your-repo",
  },
  {
    title: "Jain Supplier",
    description: "A portfolio showcasing my skills and projects.",
    image: ProjectIcon,
    link: "https://your-website.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="portfolio-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* Render SVG Component */}
            <project.image className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
