import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          My name is <strong className="highlight">Kunj Khanpara</strong>. I am a <strong className="highlight">B.Tech Computer Engineering graduate</strong> from <strong className="highlight">Marwadi University</strong>, Rajkot, Gujarat. 
          I have a strong foundation in <strong className="highlight">web development</strong> and specialize in technologies such as <strong className="highlight">HTML</strong>, <strong className="highlight">CSS</strong>, <strong className="highlight">JavaScript</strong>, <strong className="highlight">React.js</strong>, and the <strong className="highlight">MERN stack</strong>. I am passionate about building clean, responsive applications and solving real-world problems through technology.
        </p>
        <p>
          I enjoy solving real-world problems through technology and strive to make impactful contributions by continuously learning and improving my skills. My goal is to work on innovative projects that challenge me and contribute to user-centric solutions.
        </p>
        <p>
          For more details or to connect with me, please visit the <Link to="/contact" className="link">Contact Page</Link>.
        </p>
      </div>
    </div>
  );
}

export default About;
