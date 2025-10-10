import React from "react";
import "./CssFile/Resume.css";

const Resume = () => {
  return (
    <div id="resume" className="resume-container">
      <div className="header">
        <h1>ABBAS BOHRA</h1>
        <p>React Native Developer</p>
        <div className="meta">
          <span>Chhoti Sadri, Rajasthan</span>
          <span>•</span>
          <a href="mailto:abbasbohra319@gmail.com">abbasbohra319@gmail.com</a>
          <span>•</span>
          <a href="tel:+919890729219">+91 98907 29219</a>
        </div>
        <div className="header-actions">
          <a className="btn btn-primary" href="#contact">
            Contact
          </a>
          <a
            className="btn"
            href="https://linkedin.com/in/abbasbohra50"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn"
            href="https://github.com/abbasbohra"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="content">
        <div className="left-column">
          <div className="section">
            <h2>Core Skills</h2>
            <div className="tags">
              <span className="tag">React Native</span>
              <span className="tag">React</span>
              <span className="tag">Redux</span>
              <span className="tag">TypeScript</span>
              <span className="tag">JavaScript</span>
              <span className="tag">Firebase</span>
              <span className="tag">REST APIs</span>
              <span className="tag">OTA Updates</span>
            </div>
          </div>

          <div className="section">
            <h2>Education</h2>
            <p>
              <strong>MLSU Udaipur</strong>
            </p>
            <p>Bachelor of Commerce (2021 – 2024)</p>
          </div>

          <div className="section">
            <h2>Languages</h2>
            <ul>
              <li>English</li>
              <li>Hindi</li>
              <li>Gujarati</li>
            </ul>
          </div>
        </div>

        <div className="right-column">
          <div className="section">
            <h2>Profile</h2>
            <p>
              React Native developer focused on building performant,
              maintainable mobile apps and modern web interfaces. I care about
              clean architecture, consistent UI patterns, and measurable
              outcomes.
            </p>
          </div>

          <div className="section">
            <h2>Experience</h2>
            <div className="experience">
              <div className="exp-header">
                <h3>PHP Poets Pvt Ltd</h3>
                <span className="exp-meta">
                  Junior React Native Developer • Aug 2023 – Present
                </span>
              </div>
              <ul>
                <li>
                  Delivered cross‑platform features with React Native and Redux,
                  reducing duplicate code and improving release cadence.
                </li>
                <li>
                  Integrated REST APIs and improved error handling, decreasing
                  crash reports and support tickets.
                </li>
                <li>
                  Optimized rendering and bundle size using memoization and
                  code‑splitting, improving app responsiveness.
                </li>
                <li>
                  Collaborated with designers to implement consistent theming
                  and accessible UI components.
                </li>
              </ul>
            </div>

            <div className="experience">
              <div className="exp-header">
                <h3>Websenor</h3>
                <span className="exp-meta">
                  React Native Intern • Jan 2023 – Jul 2023
                </span>
              </div>
              <ul>
                <li>
                  Contributed to feature development and bug fixes in React
                  Native apps.
                </li>
                <li>
                  Implemented API integrations and addressed performance
                  bottlenecks.
                </li>
                <li>
                  Strengthened fundamentals in Redux, debugging, and testing
                  flows.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
