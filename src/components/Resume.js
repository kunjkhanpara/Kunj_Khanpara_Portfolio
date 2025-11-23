import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="image-container">
        <img 
          src={require("./Kunj-Khanpara-Resume_page-0001.jpg")} 
          alt="Resume" 
          className="zoomable-image" 
        />
      </div>

      <a
        href="https://drive.google.com/file/d/1vD4ulI-nD2S8H3pBEVtnT1UWSd8oq0Qs/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="download-btn"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
