import React from "react";
import "./Contact.css";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p className="contact-description">
        You can connect with me through the platforms below. Feel free to reach out anytime!
      </p>
      <div className="contact-links">
        <a
          href="mailto:kunjpatel4647@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaEnvelope className="contact-icon" />
          <span> kunjpatel4647@gmail.com</span>
        </a>
        <a
          href="https://github.com/kunjkhanpara"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaGithub className="contact-icon" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.instagram.com/kunj_khanpara_111/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaInstagram className="contact-icon" />
          <span>Instagram</span>
        </a>
        <a
          href="https://www.linkedin.com/in/kunj-khanpara/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
