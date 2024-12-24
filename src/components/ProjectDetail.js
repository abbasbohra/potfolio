import React from "react";
import { useParams } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "E-Commerce App",
    description: "A cross-platform app built with React Native.",
    details: "Detailed information about the E-Commerce App.",
  },
  {
    id: 2,
    title: "Hotel Booking Platform",
    description: "A modern web application for hotel reservations.",
    details: "Detailed information about the Hotel Booking Platform.",
  },
  {
    id: 3,
    title: "Jain Supplier",
    description: "A portfolio showcasing my skills and projects.",
    details: "Detailed information about the Jain Supplier project.",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.details}</p>
    </div>
  );
};

export default ProjectDetail;
