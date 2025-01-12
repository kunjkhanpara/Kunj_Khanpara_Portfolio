import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [role, setRole] = useState("Web Developer");
  const [nameColor, setNameColor] = useState("#f1f1f1");

  useEffect(() => {
    const interval = setInterval(() => {
      setRole((prevRole) =>
        prevRole === "Web Developer" ? "Software Developer" : "Web Developer"
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const nameInterval = setInterval(() => {
      setNameColor((prevColor) => {
        if (prevColor === "#f1f1f1") return "#3f51b5";
        if (prevColor === "#3f51b5") return "#f39c12";
        return "#f1f1f1";
      });
    }, 5000);

    return () => clearInterval(nameInterval);
  }, []);

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
              Hi, I’m <span className="name" style={{ color: nameColor }}>Kunj Khanpara</span>
            </h1>
            <h2 className="profession-text">
              <span className="role-text">{role}</span>
            </h2>
            <p className="description-text">
              I am passionate about creating interactive and user-friendly web applications. My goal is to create digital experiences that are engaging and easy to use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
