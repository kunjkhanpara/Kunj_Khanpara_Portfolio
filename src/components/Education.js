import React from "react";
import "./Education.css";

function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Engineering",
      institution: "Marwadi University, Rajkot, Gujarat",
      duration: "July 2021 - May 2025",
      details: "CGPA: 6.5",
    },
    {
      degree: "12th Science",
      institution: "S.S. Divine School, Ahmedabad, Gujarat",
      duration: "May 2021",
      details: "Percentage: 76%",
    },
    {
      degree: "10th",
      institution: "Shree Saraswati Science School, Porbandar, Gujarat",
      duration: "March 2019",
      details: "Percentage: 82%",
    },
  ];

  return (
    <div className="education-page">
      <h1 className="education-title">Education</h1>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <p className="education-degree">{edu.degree}</p>
            <h2 className="education-institution">{edu.institution}</h2>
            <p className="education-duration">{edu.duration}</p>
            <p className="education-details">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
