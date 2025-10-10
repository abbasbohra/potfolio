import React from "react";
import "./CssFile/Services.css";

const services = [
  {
    title: "Website Development",
    description:
      "Responsive, fast, and SEO-friendly websites using React and modern tooling.",
    points: [
      "Single-page apps and multi-page sites",
      "Component-driven UI with reusable patterns",
      "Accessibility and performance best practices",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android apps with React Native and robust architecture.",
    points: [
      "Clean navigation and state management (Redux)",
      "OTA updates and CI-ready builds",
      "Native modules and device integrations",
    ],
  },
  {
    title: "SEO & Performance",
    description:
      "Improve discoverability and Core Web Vitals with solid technical SEO.",
    points: [
      "Meta tags, schema, sitemap, robots",
      "Image optimization and code splitting",
      "Lighthouse audits and fixes",
    ],
  },
  {
    title: "Backend & APIs",
    description:
      "Secure REST integrations and lightweight backend services where needed.",
    points: [
      "API design and integration",
      "Auth flows and data validation",
      "Cloud functions and Firebase backend",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-hero">
        <h1 className="services-title">Services</h1>
        <p className="services-subtitle">
          I help teams ship reliable web and mobile products with clean code and
          thoughtful UX.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-points">
              {service.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
