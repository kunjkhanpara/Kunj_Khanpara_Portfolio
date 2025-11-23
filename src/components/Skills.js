import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

function Skills() {
  return (
    <div className="skills">
      <div className="skills-header">
        <h2>My Skills</h2>
        <p>
          I work with modern web technologies to build clean, responsive and 
          user-friendly applications. Below are the core skills I use regularly 
          in my projects.
        </p>
      </div>

      <div className="skills-icons">
        <div className="icon-container">
          <FaHtml5 className="icon" />
          <span className="icon-title">HTML</span>
        </div>

        <div className="icon-container">
          <FaCss3Alt className="icon" />
          <span className="icon-title">CSS</span>
        </div>

        <div className="icon-container">
          <FaJs className="icon" />
          <span className="icon-title">JavaScript</span>
        </div>

        <div className="icon-container">
          <FaReact className="icon" />
          <span className="icon-title">React.js</span>
        </div>

        <div className="icon-container">
          <FaNodeJs className="icon" />
          <span className="icon-title">Node.js</span>
        </div>

        <div className="icon-container">
          <FaDatabase className="icon" />
          <span className="icon-title">MongoDB</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
