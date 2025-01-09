import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="image-container">
        <img src={require("./4.jpg")} alt="Resume" className="zoomable-image" />
      </div>
      <a
        href="https://drive.usercontent.google.com/u/0/uc?id=1w-kCHk8eM7D0R-skdD4pUwTlI68LVyaR&export=download"
        className="download-btn"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
