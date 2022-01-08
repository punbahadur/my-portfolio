import React from "react";
import "./ScreenHeading.css";

//passing value through props
export default function ScreenHeading(props) {
  return (
    <div className="heading-container">
      <div className="screen-heading">
        <span> {props.title} </span>
      </div>
      {props.subHeading ? (
        <div className="screen-sub-heading">
          <span>{props.subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}

      {/* reusable component :blob */}

      <div className="heading-separator">
        <div className="separator-line">
          <div className="separator-blob">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
