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
    image: CartIcon, // Imported as React Component
    link: "https://github.com/your-repo",
  },
  {
    title: "Hotel Booking Platform",
    description: "A modern web application for hotel reservations.",
    image: BuildingIcon, // Imported as React Component
    link: "https://github.com/your-repo",
  },
  {
    title: "Jain Supplier",
    description: "A personal portfolio showcasing my skills and projects.",
    image: ProjectIcon, // Imported as React Component
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
            <project.image className="project-image" />
            {/* Use as a React Component */}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {/* <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project <FaExternalLinkAlt />
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
