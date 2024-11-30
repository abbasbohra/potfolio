import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Protfolio.css";

const projects = [
  {
    title: "E-Commerce App",
    description: "A cross-platform app built with React Native.",
    image: require("../images/mobile.svg"), // Example SVG
    link: "https://github.com/your-repo",
  },
  {
    title: "Hotel Booking Platform",
    description: "A modern web application for hotel reservations.",
    image: "/images/project2.svg", // Example SVG
    link: "https://github.com/your-repo",
  },
  {
    title: "Jain Supplier",
    description: "A personal portfolio showcasing my skills and projects.",
    image: "/images/project3.svg", // Example SVG
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
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
