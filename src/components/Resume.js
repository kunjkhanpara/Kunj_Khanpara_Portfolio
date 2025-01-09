import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <a
        href="https://drive.usercontent.google.com/u/0/uc?id=1w-kCHk8eM7D0R-skdD4pUwTlI68LVyaR&export=download"
        target="_blank"
        rel="noopener noreferrer"
        className="download-button"
      >
        Download Resume
      </a>
      <div className="image-container">
        <img src={require("./4.jpg")} alt="Resume Preview" className="resume-image" />
      </div>
    </div>
  );
}

export default Resume;
