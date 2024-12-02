import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div id="resume" className="resume-container">
      {/* Header Section */}
      <div className="header">
        <h1>ABBAS BOHRA</h1>
        <p>React Native Developer</p>
      </div>

      {/* Main Content Section */}
      <div className="content">
        {/* Left Column */}
        <div className="left-column">
          {/* Contact */}
          <div className="section">
            <h2>Contact</h2>
            <p>📞 +919890729219</p>
            <p>✉️ abbasbohra319@gmail.com</p>
            <p>📍 Chhoti Sadri, Rajasthan, 312604</p>
          </div>

          {/* Education */}
          <div className="section">
            <h2>Education</h2>
            <p>2021 - 2024</p>
            <p>MSU Udaipur</p>
            <p>Bachelor of Commerce</p>
          </div>

          {/* Skills */}
          <div className="section">
            <h2>Skills</h2>
            <ul>
              <li>React Native</li>
              <li>Redux</li>
              <li>JavaScript</li>
              <li>Firebase Cloud Platform</li>
              <li>React Hooks</li>
              <li>React Web</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="section">
            <h2>Languages</h2>
            <ul>
              <li>English</li>
              <li>Hindi</li>
              <li>Gujarati</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          {/* Profile Summary */}
          <div className="section">
            <h2>Profile Summary</h2>
            <p>
              A highly skilled and experienced React Native Developer.
              Experience designing and developing mobile applications for iOS
              and Android platforms. Strong experience in the development of
              custom mobile applications with advanced features using React
              Native, Redux, and other relevant technologies. Ability to work
              independently and collaborate with cross-functional teams to
              deliver quality products.
            </p>
          </div>

          {/* Work Experience */}
          <div className="section">
            <h2>Work Experience</h2>
            <div className="experience">
              <h3>PHP Poets Pvt Ltd</h3>
              <p>Junior React Native Developer</p>
              <p>AUG 2023 - Present</p>
              <ul>
                <li>
                  Designed and developed mobile and web applications using React
                  Native, Redux, and related technologies.
                </li>
                <li>
                  Collaborated with designers and backend teams to deliver
                  seamless, high-quality user experiences.
                </li>
                <li>
                  Integrated RESTful APIs for efficient communication between
                  frontend and backend systems.
                </li>
                <li>
                  Conducted comprehensive testing and debugging to optimize
                  application performance and ensure reliability.
                </li>
                <li>
                  Documented project workflows and source code to support team
                  collaboration and maintenance.
                </li>
              </ul>
            </div>
            <div className="experience">
              <h3>Websenor</h3>
              <p>React Native Intern</p>
              <p>JAN 2023 - JUL 2023</p>
              <ul>
                <li>
                  Assisted in developing and maintaining mobile applications
                  using React Native.
                </li>
                <li>
                  Supported the integration of RESTful APIs for data retrieval
                  and seamless app functionality.
                </li>
                <li>
                  Collaborated with senior developers on debugging and resolving
                  app performance issues.
                </li>
                <li>
                  Gained hands-on experience in state management using Redux and
                  basic frontend coding.
                </li>
                <li>
                  Created and maintained documentation for the features
                  developed during the internship.
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
