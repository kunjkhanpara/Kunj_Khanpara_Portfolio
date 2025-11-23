import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h1>About Me</h1>

        <p>
          My name is <strong className="highlight">Kunj Khanpara</strong>. I am a 
          <strong className="highlight"> B.Tech Computer Engineering graduate</strong> from 
          <strong className="highlight"> Marwadi University</strong>, Rajkot. I have a strong
          interest in modern web development and specialize in creating clean, fast, and
          user-friendly applications.
        </p>

        <p>
          I work mainly with <strong className="highlight">HTML</strong>, <strong className="highlight">CSS</strong>, 
          <strong className="highlight"> JavaScript</strong>, <strong className="highlight">React.js</strong>, 
          <strong className="highlight"> Node.js</strong>, and the 
          <strong className="highlight"> MERN Stack</strong>. I enjoy building responsive UIs, solving
          real-world problems, and writing code that is readable, maintainable, and scalable.
        </p>

        <p>
          I focus on continuous learning and improving my skills through hands-on projects.
          My goal is to work on meaningful, user-centric applications where I can contribute
          to both frontend and backend development.
        </p>

        <p>
          If you’d like to reach out or collaborate, please visit the{" "}
          <Link to="/contact" className="link">Contact Page</Link>.
        </p>
      </div>
    </div>
  );
}

export default About;
