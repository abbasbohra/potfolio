import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { ReactComponent as ContactIcon } from "../../src/images/undraw_personal_email_re_4lx7.svg";
import "./CssFile/Contact.css";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="contact-page">
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <h2 className="contact-title">Contact Me</h2>
            <p className="contact-text">
              I’m open to new opportunities, collaborations, or just a friendly
              chat! Reach out via the channels below or send an enquiry:
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 8890972919</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a
                  href="mailto:abbasbohra139@gmail.com"
                  className="contact-link"
                >
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
            {/* Enquiry Button */}
            <button className="enquiry-button" onClick={openModal}>
              Send an Enquiry
            </button>
          </div>

          {/* Right Section (Image with animation) */}
          <div className="contact-image">
            <ContactIcon className="contact-svg" />
          </div>
        </div>

        {/* Modal for Google Form */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-button" onClick={closeModal}>
                ×
              </button>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdqp2WikPsZqVNyeRjaQG7jRmkHqzZihCPyJkddX0vN7GThOQ/viewform?embedded=true"
                width="100%"
                height="500"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Enquiry Form"
                className="contact-iframe"
              >
                Loading…
              </iframe>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact;
