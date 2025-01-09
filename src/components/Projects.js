import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="maintenance-message">
        <p>Page is Under Maintenance</p>
        <div className="loading-spinner"></div>
      </div>
      {/* <div className="project-list">
        <ProjectCard
          title="Weather Application"
          description="Built using React and OpenWeatherMap API."
          link="https://github.com/kunjkhanpara/Weather-Application-Using-API-Key"
        />
        <ProjectCard
          title="Digital Resume Builder"
          description="A resume builder app using React and Node.js."
          link="https://github.com/kunjkhanpara/Digital-Resume-Builder"
        />
      </div> */}
    </div>
  );
}

export default Projects;
