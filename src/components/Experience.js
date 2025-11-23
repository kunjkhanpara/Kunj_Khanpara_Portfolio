import React from "react";
import "./Experience.css";

function Experience() {
  const experienceData = [
    {
      role: "MERN Stack Developer Intern",
      company: "Linde Engineering India Pvt. Ltd.",
      duration: "April 2025 - June 2025",
      details: [
        "Migrated legacy Node.js codebase to the latest stable version.",
        "Updated deprecated npm packages to fix security vulnerabilities.",
        "Refactored backend modules to improve readability and maintainability.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Prodigy Infotech",
      duration: "April 2024 - May 2024",
      details: [
        "Built dynamic web applications with API integrations.",
        "Developed a real-time weather application using ReactJS and OpenWeatherMap API.",
      ],
    },
  ];

  return (
    <div className="experience-page">
      <h1 className="experience-title">Experience</h1>

      <div className="experience-container">
        {experienceData.map((exp, index) => (
          <div className="experience-card" key={index}>
            <p className="experience-role">{exp.role}</p>
            <h2 className="experience-company">{exp.company}</h2>
            <p className="experience-duration">{exp.duration}</p>

            <ul className="experience-details">
              {exp.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
