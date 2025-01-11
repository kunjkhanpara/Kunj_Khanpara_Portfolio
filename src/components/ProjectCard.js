import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, points, githubLink, liveLink, onClickLiveLink }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
      {liveLink && (
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="live-link"
          onClick={onClickLiveLink}
        >
          Try Live Website
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
