import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="image-container">
            <img
              src={require("./6.jpg")}
              alt="Profile"
              className="profile-image"
            />
          </div>

          <div className="text-content">
            <h1 className="intro-text">
              Hi, I’m <span className="name">Kunj Khanpara</span>
            </h1>

            <h2 className="profession-text">
              <span className="role-text">MERN Stack Developer</span>
            </h2>

            <p className="description-text">
              I’m a B.Tech Computer Engineering graduate with strong expertise
              in modern web development. I specialize in building clean,
              scalable, and user-friendly applications using React.js, Node.js,
              and the MERN Stack. I enjoy solving real-world problems and
              creating smooth, interactive digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
