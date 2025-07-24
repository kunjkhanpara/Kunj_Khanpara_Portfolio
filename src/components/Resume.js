import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="image-container">
        <img src={require("./25.jpg")} alt="Resume" className="zoomable-image" />
      </div>
      <a
        href="https://drive.google.com/file/d/1O15M_6qmNJJyxph8eCvwJyDR_D-i4fqY/view?usp=sharing"
        className="download-btn"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
