import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from "../images/cart-shopping-solid.svg";
import { ReactComponent as BuildingIcon } from "../images/building-regular.svg";
import { ReactComponent as ProjectIcon } from "../images/cart-shopping-solid.svg";
import "./CssFile/Protfolio.css";

const projects = [
  {
    id: 1,
    title: "E-Commerce App",
    description: "A cross-platform app built with React Native.",
    image: CartIcon,
    link: "https://github.com/your-repo",
    navigation: "/project/e-commerce",
  },
  {
    id: 2,
    title: "Hotel Booking Platform",
    description: "A modern web application for hotel reservations.",
    image: BuildingIcon,
    link: "https://github.com/your-repo",
    navigation: "/project/hotel-booking",
  },
  {
    id: 3,
    title: "Jain Supplier",
    description: "A portfolio showcasing my skills and projects.",
    image: ProjectIcon,
    link: "https://your-website.com",
    navigation: "/project/jain-supplier",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="portfolio-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            {/* Render SVG Component */}
            <project.image className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {/* Add Link to Detail Page */}
            <Link to={project.navigation} className="project-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
