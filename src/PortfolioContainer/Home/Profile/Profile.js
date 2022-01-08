import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          {" "}
          <div className="colz-icon">
            <div className="colz">
              <a href="https://www.facebook.com/poojan.chhetri.779/">
                <i className="fa fa-facebook-square"> </i>{" "}
              </a>{" "}
              <a href="https://www.google.com/">
                <i className="fa fa-google-plus-square"> </i>{" "}
              </a>{" "}
              <a href="https://www.instagram.com/poo__jan/">
                <i className="fa fa-instagram"> </i>{" "}
              </a>{" "}
              <a href="https://www.youtube.com/watch?v=7uJGjbkp0-U">
                <i className="fa fa-youtube-square"> </i>{" "}
              </a>{" "}
              <a href="#">
                <i className="fa fa-twitter"> </i>{" "}
              </a>{" "}
            </div>
          </div>{" "}
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I am <span className="highlighted-text"> Pun </span>{" "}
            </span>{" "}
          </div>{" "}
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Dev 💯",
                    1000,
                    "Cross Platform Dev 🧠",
                    1000,
                    "React JS Dev 📱",
                    1000,
                  ]}
                />{" "}
              </h1>{" "}
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.{" "}
              </span>{" "}
            </span>{" "}
          </div>{" "}
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>{" "}
            <a href="Resume_CHHETRI.pdf" download="Pun Chhetri.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>{" "}
        </div>{" "}
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>{" "}
    </div>
  );
}
