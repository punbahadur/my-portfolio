import "./AboutMe.css";
import React, {useEffect} from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function AboutMe(props) {
  // scrolling and fading  effects
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
    // fadeInScreen from Animations.js
  };
  //subscribe to the observables currentScreenFadeIn from && implemented in ScrollService.js
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  //display static info in screen in About me section
  const SCREEN_CONSTANTS = {
    description:
      "Full Stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Bacground in Computer Science and Mathematics, ready to dive in to industrial world. ",
    highlights: {
      bullets: [
        "Full Stack web development",
        "Interactive Front-end design",
        "React JS",
        "Redux for State Management",
        "Rest APIs knowledge",
        "Database Management",
      ],
      heading: "Here are a few Highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span> {value} </span>
      </div>
    ));
  };

  //UI
  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        {" "}
        {/* pass the value and render */}{" "}
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        {/* display data in UI */}
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {" "}
              {SCREEN_CONSTANTS.description}{" "}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {/* highlights section rendering */}
              {renderHighlight()}
            </div>

            <div className="about-me-options">
              <button className="btn primary-btn"> Hire Me </button>{" "}
              <a href="Resume_CHHETRI.pdf" download="Pun Chhetri.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
