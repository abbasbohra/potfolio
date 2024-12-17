// src/components/Contact.js
import React from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { ReactComponent as ContactIcon } from "../../src/images/undraw_personal_email_re_4lx7.svg";
import "./Contact.css";

const Contact = () => (
  <div className="contact-page">
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-text">
            I’m open to new opportunities, collaborations, or just a friendly
            chat! Reach out via the channels below:
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+91 8890972919</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:abbasbohra139@gmail.com" className="contact-link">
                abbasbohra139@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <FaLinkedin className="contact-icon" />
              <a
                href="https://www.linkedin.com/in/abbasbohra50"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                linkedin.com/in/abbasbohra50
              </a>
            </div>
            <div className="contact-item">
              <FaGithub className="contact-icon" />
              <a
                href="https://github.com/abbasbohra"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                github.com/abbasbohra
              </a>
            </div>
          </div>
        </div>

        {/* Right Section (Image with animation) */}
        <div className="contact-image">
          <ContactIcon className="contact-svg" />
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
