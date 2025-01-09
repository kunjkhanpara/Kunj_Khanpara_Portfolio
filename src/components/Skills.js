import React from "react";
import "./Skills.css";

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MySQL"];
  return (
    <div className="skills">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
