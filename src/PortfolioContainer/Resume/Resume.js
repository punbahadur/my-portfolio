import "./Resume.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import React, {useState} from "react";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  //implement fade in effect and smooth scroll
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
    // fadeInScreen from Animations.js
  };
  //subscribe to the observables currentScreenFadeIn from && implemented in ScrollService.js
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{}props.subHeading? props.subHeading : ''</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    {label: "Education", logoSrc: "education.svg"},
    {label: "Work History", logoSrc: "work-history.svg"},
    {label: "Programming Skills", logoSrc: "programming-skills.svg"},
    {label: "Projects", logoSrc: "projects.svg"},
    {label: "Interests", logoSrc: "interests.svg"},
  ];
  const programmingSkillDetails = [
    {skill: "HTML", ratingPercentage: 90},
    {skill: "React JS", ratingPercentage: 85},
    {skill: "Javascript", ratingPercentage: 85},
    {skill: "CSS", ratingPercentage: 85},
    {skill: "Express JS", ratingPercentage: 85},
    {skill: "Mongo Db", ratingPercentage: 80},
    {skill: "Java", ratingPercentage: 80},
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: {fromDate: "2020", toDate: "2021"},
      description:
        "A personal portfolio website to showcase all my details and projects in one place",
      subHeading: "Technologies Used: React JS, Bootstrap, RxJS,.Nodejs",
    },
    {
      title: "Ecommerce Website",
      duration: {fromDate: "2019", toDate: "2021"},
      description:
        "Online ecommerce website for showcasing and selling products online with payment system integration: Paypal",
      subHeading:
        "Technologies Used: React JS, Mongo DB, Express JS, Redux, Node JS",
    },
    {
      title: "Auction House",
      duration: {fromDate: "2020", toDate: "2020"},
      description:
        "Created a project of multiple auction houses selling items where multiple agenst bid through a centralized bank",
      subHeading: "Technologies Used: Java, JavaFX",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of New Mexico, NM, USA"}
        subHeading={"Bachelor in Computer Science"}
        fromDate={"2019"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Wallace Community College, AL, USA"}
        subHeading={"Associate in Computer Information Systems"}
        fromDate={"2016"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Manimukunda H.S.S, Butwal, NEPAL"}
        subHeading={"Higher Secondary Education"}
        fromDate={"2013"}
        toDate={"2015"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Slingshot, LLC"}
        subHeading={"FRONT END DEVELOPER INTERN"}
        fromDate={"June 2021"}
        toDate={"Dec. 2021"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Worked in a client portal developement project, fixing website errors
          and client issues
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          Created websites using HTML, CSS, JavaScript, and implemented
          enhancements that improved web functionality and responsiveness using
          React.
        </span>
        <br />
        <span className="resume-description-text">
          Enhanced user experience and maintained websites, using scripting
          languages and content management system WordPress.
        </span>
        <br />
        <span className="resume-description-text">
          Maintained an organized workflow using project management tool like
          GitHub, monitored website performance and rectified front-end related
          issues.
        </span>
      </div>
      ,
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{width: skill.ratingPercentage + "%"}}
                className="active-percentage"
              ></div>
            </div>
          </div>
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="projects">
        {projectDetails.map((projectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Volunteering"
          description="Apart from being a tech enthusiast, I also love to give back to the community by serving during my free time"
        />
        <ResumeHeading
          heading="Music"
          description="I love to listen to pop and some country songs besides my national folk music. Music helps me relax and motivates me! "
        />
        <ResumeHeading
          heading="Soccer"
          description="I love playing soccer although I am not best at it. I discovered my interest in soccer when I was 18 and been constantly playing after that. I have won two Gorkhali League while I was at UNM"
        />
      </div>
    </div>,
  ];

  //define the function for carousal
  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: {transform: "translateY(" + index * offsetHeight * -1 + "px)"},
    };

    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  //icons on bullets of resume left
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="Please reload for connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  //to display in UI
  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume -bullets">
            <div className="bullet-container">
              <div className="bullet-icons">
                <div className="bullets">{getBullets()}</div>
              </div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
