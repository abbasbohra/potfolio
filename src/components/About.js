import React from "react";
import { ReactComponent as DeveloperIcon } from "../../src/images/undraw_undraw_analytics_mobile_drjl_-1-_5133.svg";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-content">
          <h1 className="animated-name">
            Hi, I'm <span className="highlight">Abbas Bohra</span>
          </h1>
          <p className="animated-role">A React Native Developer</p>
        </div>
        <div className="about-image">
          <DeveloperIcon className="developer-icon" />
        </div>
      </div>
    </section>
  );
};

export default About;
