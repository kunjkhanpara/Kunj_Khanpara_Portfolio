import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          My name is <strong className="highlight">Kunj Khanpara</strong>. I am a final-year <strong className="highlight">B.Tech Computer Engineering</strong> student 
          from <strong className="highlight">Marwadi University</strong>, Rajkot, Gujarat. I am from <strong className="highlight">Porbandar</strong> and have a strong 
          interest in <strong className="highlight">web development</strong>. I enjoy building efficient and user-friendly applications using 
          technologies like <strong className="highlight">HTML</strong>, <strong className="highlight">CSS</strong>, <strong className="highlight">JavaScript</strong>, and <strong className="highlight">ReactJS</strong>.
        </p>
        <p>
          My primary goal is to become a skilled web developer and work on projects that solve real-world problems. I aim to grow my knowledge 
          and enhance my skills by contributing to innovative and challenging projects.
        </p>
        <p>
          For more details or to connect with me, please visit the <Link to="/contact" className="link">Contact Page</Link>.
        </p>
      </div>
    </div>
  );
}

export default About;
