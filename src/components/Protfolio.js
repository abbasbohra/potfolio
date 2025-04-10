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
    description:
      "A cross-platform mobile application built with React Native, enabling users to browse, shop, and manage their purchases seamlessly.",
    image: CartIcon,
    link: "https://github.com/your-repo",
    navigation: "/project/e-commerce",
  },
  {
    id: 2,
    title: "Hotel Booking Platform",
    description:
      "A modern web application designed for users to search, book, and manage hotel reservations with an intuitive and responsive interface.",
    image: BuildingIcon,
    link: "https://github.com/your-repo",
    navigation: "/project/hotel-booking",
  },
  {
    id: 3,
    title: "Jain Supplier",
    description:
      "A web-based platform for suppliers to manage inventory, process orders, and track deliveries efficiently.",
    image: ProjectIcon,
    link: "https://your-website.com",
    navigation: "/project/jain-supplier",
  },
  {
    id: 4, // Fixed duplicate ID
    title: "Royal Motors",
    description:
      "A staff-oriented mobile app for tracking sales, managing daily operations, and maintaining detailed login/logout reports.",
    image: ProjectIcon,
    link: "https://your-website.com",
    navigation: "/project/royal-motors",
  },
  {
    id: 5, // Fixed duplicate ID and typo in title
    title: "Mehta Insurance",
    description:
      "A comprehensive app for users to apply for car and health insurance, file claims, track statuses, and submit verification documents.",
    image: ProjectIcon,
    link: "https://your-website.com",
    navigation: "/project/mehta-insurance", // Fixed typo in navigation
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
