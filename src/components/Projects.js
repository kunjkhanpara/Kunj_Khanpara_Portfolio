import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <ProjectCard
          title="Instagram Unfollower Tracker"
          points={[
            "Analyze Instagram followers and following data",
            "Identify non-followers and pending requests",
            "Developed for efficient data processing"
          ]}
          githubLink="https://github.com/kunjkhanpara/Instagram_Unfollower_Tracker"
          liveLink="https://kunjkhanpara.github.io/Instagram_Unfollower_Tracker/"
        />
        <ProjectCard
          title="Digital Resume Builder"
          points={[
            "Create resumes with 3 customizable templates",
            "Real-time preview for seamless editing",
            "Download resumes as PDF instantly"
          ]}
          githubLink="https://github.com/kunjkhanpara/digital_resume_builder"
          liveLink="#"
        />
                <ProjectCard
          title="Tic-Tac-Toe-Game"
          points={[
            "Classic tic-tac-toe game for two players",
            "Highlights the winner or declares a tie",
            "Built with HTML, CSS, and JavaScript."
          ]}
          githubLink="https://github.com/kunjkhanpara/Tic-Tac-Toe-Game"
          liveLink="https://kunjkhanpara.github.io/Tic-Tac-Toe-Game/"
        />
                <ProjectCard
          title="Weather-Application-Using-API-Key"
          points={[
            "Weather app providing real-time weather updates",
            "Displays temperature, humidity, and wind speed for cities",
            "Built with HTML, CSS, JavaScript, and WeatherStack API"
          ]}
          githubLink="https://github.com/kunjkhanpara/Weather-Application-Using-API-Key"
          liveLink="https://kunjkhanpara.github.io/Weather-Application-Using-API-Key/"
        />
                <ProjectCard
          title="Shopping-Cart"
          points={[
            "Add, edit, or remove items in the cart.",
            "Supports custom items with dynamic pricing",
            "View total price instantly"
          ]}
          githubLink="https://github.com/kunjkhanpara/Shopping-Cart"
          liveLink="https://kunjkhanpara.github.io/Shopping-Cart/"
        />
      </div>
    </div>
  );
}

export default Projects;
